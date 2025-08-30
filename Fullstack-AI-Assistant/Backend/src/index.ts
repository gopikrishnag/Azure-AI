import cors from "cors";
import "dotenv/config";
import express from "express";
// import { createAgent } from "./agents/createAgent";
// import { AgentPlatform, AIAgent } from "./agents/types";
// import { apiKey, serverClient } from "./serverClient";

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.json({
    message: "AI Writing Assistant Server is running",
    // apiKey: apiKey,
    // activeAgents: aiAgentCache.size,
  });
});


// Start the Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});