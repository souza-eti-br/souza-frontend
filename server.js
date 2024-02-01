const path = require("path");
const express = require("express");
const app = express();
const port = 9000;

app.use("/", express.static(path.resolve(__dirname, "web")));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});