const express = require('express');
const path = require('path');
const fs = require('fs');
const uuid = require('../helpers/uuid');
//const apiRoutes = require('./Develop/routes/apiRoutes');
//const htmlRoutes = require('./Develop/routes/htmlRoutes');
const PORT = process.env.PORT || 3002;
const app = express();


// Middleware for parsing JSON and urlencoded form data
app.use(express.static('develop/public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);

app.get("/", (req, res) => {
  //res.status(200).send(db);
  let output = db;
  res.json(output);
});





app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT} 🚀`)
});
