const express = require('express');
//const router = require('./Develop/routes/apiRoutes');
//const path = require('path');
const apiRoutes = require('./Develop/routes/apiRoutes');
const htmlRoutes = require('./Develop/routes/htmlRoutes');
const PORT = process.env.PORT || 3001;
const app = express();



// Middleware for parsing JSON and urlencoded form data
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//app.use('/api', apiRoutes);
//app.use('/', htmlRoutes);

// // GET Route for homepage
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '/public/index.html'));
// });
//     // GET Route for feedback page
// app.get('/notes', (req, res) => {
//   res.sendFile(path.join(__dirname, '/public/notes.html'));
// });

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '/public/index.html'));
// });
//require(apiRoutes);
//require(htmlRoutes);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT} 🚀`)
});