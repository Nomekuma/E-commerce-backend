const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");

port = 5000;
dotenv.config();

// Database connection
mongoose
  .connect(process.env.MONGO_URL,{  useNewUrlParser: true,
    useUnifiedTopology: true})
  .then(() => console.log("Database Connection Successfull!"))
  .catch((err) => {
    console.log(err);
    console.log("Database Connection Fail!");
  });

// Routes
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

// Server
app.listen(process.env.PORT || port, () => {
  console.log(`Backend server is running Met_En_Couster_Astr`);
});
