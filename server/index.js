const express = require('express');
const route = require('./routes/routes.js');
const DBconnection = require('./database/db.js');
const cors = require('cors');

const app = express();

DBconnection();

app.use(cors())
app.use('/',route);


app.listen(8000,()=>console.log("server is listening on 8000"));
