const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const app = require();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post('/contact', (res, req) => {
    const { email, message } = req.body;
})
app.listen(1000, () => {
    console.log("server connectes");
})