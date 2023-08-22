const express = require("express");
const createError = require("http-errors");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const expressSession = require('express-session')
const cookieSession = require('cookie-session')
const MemoryStore = require('session-memory-store')(expressSession)

// Connect database
const db = require("./config/db");
db.connect();
const port = 3000;

app.use(express.urlencoded({ limit: '50mb', extended: true }));// giới hạn kích thước cho phép tối đa là 50MB
// app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(
  cookieSession({
    secret: "secret",
    store: new MemoryStore(60 * 60 * 12),
    cookie: { maxAge: 60 * 60 * 1000 },
  })
);

// http logger
app.use(morgan("combined"));

// Routes Init
const route = require("./routes/index.js");
route(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("pages/errorPage/error",{layout:null});
});

app.listen(port, () =>
  console.log(`\nExample app listening at http://localhost:${port} !\n`)
);
