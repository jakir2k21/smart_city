const path = require("path");
const express = require("express");
const app = express();
require("./configs/env.config");
const cors = require('cors');
const bodyParser = require("body-parser");

// API PATH
const rootPath = require("./api/routes/root");
global.appRoot = path.resolve(__dirname);

//middleware
require("./configs/db.config");
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(cors({origin: true}));

// // console.log({paths});

app.use(rootPath);


app.listen(8000, () => {
    console.log("Node server started at http://localhost:" + (process.env.PORT || 8000));
});