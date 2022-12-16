const express = require('express');
const apiRoutes = require('./Develop/routes/apiRoutes');
const htmlRoutes = require('./Develop/routes/htmlRoutes');
const PORT = process.env.PORT || 3002;
const app = express();



// Middleware for parsing JSON and urlencoded form data
app.use(express.static('develop/public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use('/api', apiRoutes);
app.use('/', htmlRoutes);





app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT} 🚀`)
});
