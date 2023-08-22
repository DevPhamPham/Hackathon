const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./models/User");
const Event = require("./models/Event");
const CharityOrganization = require("./models/CharityOrganization");

const app = express();
app.use(bodyParser.json());

// Kết nối tới cơ sở dữ liệu MongoDB
mongoose.connect("mongodb://localhost:27017/charity-app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Tạo người dùng mới
app.post("/users", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Lấy danh sách người dùng
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Tạo sự kiện mới
app.post("/events", async (req, res) => {
  try {
    const newEvent = await Event.create(req.body);
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Lấy danh sách sự kiện
app.get("/events", async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Tạo tổ chức từ thiện mới
app.post("/charity-organizations", async (req, res) => {
  try {
    const newCharityOrg = await CharityOrganization.create(req.body);
    res.status(201).json(newCharityOrg);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Lấy danh sách tổ chức từ thiện
app.get("/charity-organizations", async (req, res) => {
  try {
    const charityOrgs = await CharityOrganization.find();
    res.status(200).json(charityOrgs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ...

// Chạy server tại cổng 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
