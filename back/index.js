const express = require("express");
const cors = require('cors');
const morgan = require("morgan");
const helmet = require('helmet');  
require('dotenv').config();
require("./core/connection/connection");

const app = express();

 
app.use(helmet());
app.use(cors());

app.use(express.json());  
app.use(morgan("dev"));
app.use("/", require("./router/router"));

app.listen(process.env.SERVER_PORT, () => {
    console.log(`server running.`);
});