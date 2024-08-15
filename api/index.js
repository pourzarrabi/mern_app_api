import express from "express";
import { connectDB } from "./config/db.js";
import productsRoutes from "./routes/product.route.js";

const app = express();

connectDB();

app.use(express.json());
app.use("/api/products", productsRoutes);

export default app;
