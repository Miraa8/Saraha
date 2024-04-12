import express from "express";
import { connectDB } from "./DB/connection.js";
import { setupRoutes } from "./src/routes.js";

const port = process.env.PORT || 3000;
const app = express();

async function startServer() {
  await connectDB();
  setupRoutes(app);
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
}

startServer();
