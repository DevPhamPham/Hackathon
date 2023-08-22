const passport = require("passport");
const User = require("../models/User");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const LocalStrategy = require("passport-local").Strategy;
require("dotenv").config();

class AuthController {
  constructor() {
    this.init();
  }
  init() {
    passport.use(
      new LocalStrategy(
        { usernameField: "email" },
        (email, password, done) => {
          User.findOne({ email: email }, (err, user) => {
            if (err) return done(err);
            if (!user) return done(null, false);
            user.comparePassword(password, (err, isMatch) => {
              if (err) return done(err);
              if (isMatch) return done(null, user);
              return done(null, false);
            });
          });
        }
      )
    );
    
    passport.use(
      new GoogleStrategy(
        {
          clientID: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          callbackURL: "http://localhost:8080/auth/google/callback",
        },
        function (accessToken, refreshToken, profile, done) {
          User.findOne({ email: profile.emails[0].value }, (err, user) => {
            if (err) return done(err);
            if (user) return done(null, user);
            const newUser = new User({
              email: profile.emails[0].value,
              fullName: profile.displayName, // Thêm trường name với giá trị displayName trong đối tượng profile
              password: profile.id,
            });
            newUser.save((err) => {
              if (err) return done(err);
              return done(null, newUser);
            });
          });
        }
      )
    );

    passport.use(
      new FacebookStrategy(
        {
          clientID: process.env.FACEBOOK_APP_ID,
          clientSecret: process.env.FACEBOOK_APP_SECRET,
          callbackURL: "/auth/facebook/callback",
          profileFields: ["id", "email", "name"],
        },
        function (accessToken, refreshToken, profile, done) {
          User.findOne({ email: profile.emails[0].value }, (err, user) => {
            if (err) return done(err);
            if (user) return done(null, user);
            const newUser = new User({
              email: profile.emails[0].value,
              password: profile.id,
              fullName: profile.name.givenName + ' ' + profile.name.familyName,
            });
            newUser.save((err) => {
              if (err) return done(err);
              return done(null, newUser);
            });
          });
        }
      )
    );

    passport.serializeUser((user, done) => {
      done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
      User.findById(id, (err, user) => {
        done(err, user);
      });
    });
  }

  async postSignup(req, res) {
    const user = new User({
        fullName: req.body.fullName,
        email: req.body.email,
        password: req.body.password,
    });
    
    const existingUser = await User.findOne({ email: req.body.email });
    
    if (existingUser) {
        // Email đã tồn tại
        return res.status(400).json({ code: 1, message: "Email đã được sử dụng" });
    } else {
        // Email chưa tồn tại
        try {
            await user.save();
            res.status(200).json({ code: 0, message: "Đăng ký thành công" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ code: 1, message: "Lỗi không thể đăng ký" });
        }
    }
  }

  postLogin(req, res, next) {
    passport
      .authenticate("local", (err, user, info) => {
        // console.log(user)
        // console.log(info)
        if (err) {
          return next(err);
        }
        if (!user) {
          return res.status(400).json({ code: 1, message: "Đăng nhập không thành công" })
        }
        req.logIn(user, (err) => {
          if (err) {
            return next(err);
          }
          return res.status(200).json({ code: 0, message: "Đăng nhập thành công" })
        });
      })(req, res, next);
  }

  logout(req, res, next) {
    req.logout(() => {
      return res.status(200).json({code: 1, message: "Đăng xuất thành công" })
    })(req,res, next);
  }

  authGoogle(req, res, next) {
    passport.authenticate("google", { scope: ["profile", "email"] })(req, res, next);
  }
  authGoogleCallback(req, res, next) {
    passport.authenticate("google", {
      successRedirect: "/",
      failureRedirect: "/login",
    })(req, res, next);
  }

  authFacebook(req, res, next) {
    passport.authenticate("facebook", { scope: ["email"] })(req, res, next);
  }
  authFacebookCallback(req, res, next) {
    passport.authenticate("facebook", {
      successRedirect: "/",
      failureRedirect: "/login",
    })(req, res, next);
  }

}

module.exports = new AuthController();
