// import express from 'express';
require('dotenv').config();
const express = require('express');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log(process.env.API_KEY);
    // console.log(req);

    res.json({
        data:{
            name: 'test',
            age: 20

        }
    })
    // res.send('Hello World!');
    run();

});


// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run() {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = "Write a story about a magic backpack."

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
}

console.log('hello')
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

