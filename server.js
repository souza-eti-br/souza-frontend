const path = require("path");
const express = require("express");
const app = express();
const port = 4200;

app.use("/", express.static(path.resolve(__dirname, "web")));

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});