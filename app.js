const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const app = express();
const port = 3001;
const routes = require('./api/routes/routes');
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/as-9-info610', { useNewUrlParser: true, useUnifiedTopology: true });




app.use(express.json());


app.use((error, req, res, next) => {
  if (error instanceof SyntaxError) {
    return res.status(400).json({ error: 'Invalid JSON given' });
  }
  next();
});
app.use(routes);

app.use(cors("*"));

app.get('/', cors(),(req, res)=>{res.send('Hello from the homepage');});





app.listen(port, () => {
  const localurl = `http://localhost:${port}`;
  console.log(`Server is definately running on port ${localurl}`);
});
