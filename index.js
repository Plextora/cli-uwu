#!/usr/bin/env node

const readline = require("readline"); // Import readline library
// Library GitHub: https://github.com/zuzak/owo

const uwuify = require('@zuzak/owo') // Import owo.js library

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
}); // Initialize readline

rl.question("Type in the text you want to UwU: ", function (uwuInput) {
    const uwu_text = uwuify.translate(uwuInput)
    console.log("") // empty spaces
    console.log("")
    console.log(`Here's your uwuified text: ${uwu_text}`)
    rl.close();
  });