const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/fruits', async (req, res) => {
  try {
    const response = await axios.get('https://www.fruityvice.com/api/fruit/all');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
});

app.listen(4000, () => console.log('Proxy server running on port 4000'));