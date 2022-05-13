require("dotenv").config({ path: "./config.env" });
const api = require("./routes/api");
const express = require("express");
const app = express();
app.use(express.json());
app.use("/", api);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
