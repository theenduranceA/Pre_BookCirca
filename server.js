// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/bookwise', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Body parser middleware
app.use(bodyParser.json());

// API routes
const bookRoutes = require('./routes/book');
const userRoutes = require('./routes/user');

app.use('/api/books', bookRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to BookWise Hub API');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
