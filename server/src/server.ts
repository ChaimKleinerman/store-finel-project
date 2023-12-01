import cors from "cors";
import morgan from "morgan";
import express from "express";
import cookieParser from "cookie-parser";
import { errorHandler, notFound } from "./middlewares/errorsMiddleware.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productsRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import pg from "pg";
const { Pool } = pg;
import { config } from "dotenv";
import ordersRouter from "./routes/ordersRouets.js";
import bannerRoutes from "./routes/bannerRouetes.js";
import bodyParser  from "body-parser";
config();

const app = express();

// APP CONFIGS
app.use(
    cors({
        origin: "https://my-private-store.vercel.app",
    })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json())
app.use("/api/users", userRoutes);
app.use("/api/users", cartRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", ordersRouter);
app.use("/api/banner", bannerRoutes);
app.use("/api", categoryRoutes);

app.use(errorHandler);

// app.post('/api/payment/check', (req, res) => {
//   const debitCardDetails = req.body;
//   setTimeout(() => {
//     console.log(debitCardDetails);
//     if (true) {
//       res.status(200).json({ message: 'Credit card details are valid' });
//     } else {
//       res.status(400).json({ message: 'Invalid credit card details' });
//     }
//   }, 3000);
// });

// // Order.
// app.post('/api/payment/order', (req, res) => {
//   const order = req.body;
//   setTimeout(() => {
//     console.log(order);
//     if (true) {
//       res.status(200).json({ message: 'The order has been placed !', orderID: order.paymentPayPal?.orderID ? order.paymentPayPal?.orderID : "876df86sfsYGUG8979" });
//     } else {
//       res.status(400).json({ message: 'An error occurred in the ordering process !!!' });
//     }
//   }, 3000);
// });

const port = 5000;

export const connectionString = process.env.CONNECTION_STRING;
app.listen(port, async () => {
    const pool = new Pool({ connectionString: connectionString });
    const res = await pool.connect();
    res.release();
    console.log(`Database connection test completed successfully`);
    console.log(`\nServer is running at port ${port}...`);
});
