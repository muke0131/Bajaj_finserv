require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;
const router=require("./router/routers");
const cors=require("cors");
app.use(cors());

app.use(bodyParser.json());
app.use("/api",router)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
