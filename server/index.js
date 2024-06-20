const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const kpiRoutes = require("./routes/kpi");
const productRoutes = require("./routes/product");
const transactionRoutes = require("./routes/transaction");

const KPI = require("./models/KPI");
const Product = require("./models/Product");
const Transaction = require("./models/Transaction");

const { kpis, products, transactions } = require("./data/data");


/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes);
app.use("/transaction", transactionRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    app.listen(PORT, () => console.log(`Successfully connected to server port: ${PORT}`));

    /* ADD DATA ONE TIME ONLY OR AS NEEDED */
     await mongoose.connection.db.dropDatabase();
     KPI.insertMany(kpis);
     Product.insertMany(products);
     Transaction.insertMany(transactions);
  })
  .catch((error) => console.log(`${error} did not connect`));