const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

const BASE_URL = 'https://www.fruityvice.com/api/fruit';

app.get('/api/fruits', async (req, res) => {
  try {
    const response = await axios.get(BASE_URL + '/all');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
});

app.get('/api/family/:family', async (req, res) => {
    const { family } = req.params;
    console.log(family)
    try {
      const response = await axios.get(BASE_URL + `/family/${family}`);
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching data' });
    }
});

app.get('/api/genus/:genus', async (req, res) => {
    const { genus } = req.params;
    try {
      const response = await axios.get(BASE_URL + `/genus/${genus}`);
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching data' });
    }
});

app.get('/api/order/:order', async (req, res) => {
    const { order } = req.params;
    try {
      const response = await axios.get(BASE_URL + `/order/${order}`);
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching data' });
    }
});
  

app.listen(4000, () => console.log('Proxy server running on port 4000'));