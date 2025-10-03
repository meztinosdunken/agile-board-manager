const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB has been connected...'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  res.status(200).send('API is running...');
});

// Health check endpoint
app.get('/health', (req, res) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  res.status(200).json({ status: 'UP' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});