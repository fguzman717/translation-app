import express from "express";
import "dotenv/config";
import OpenAI from "openai";

// Set up Express Server
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Initialize AI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const response = await openai.chat.completions.create({
  model: process.env.AI_MODEL,
  messages: [{ role: "user", content: "Explain JavaScript closures simply" }],
});

console.log(response.choices[0].message.content);
