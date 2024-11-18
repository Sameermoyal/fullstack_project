// server/index.js
const express = require('express');
const cors = require('cors');
const axios=require('axios');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample API endpoint
app.get('/api/products',async (req, res) => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        res.json(response.data); 
      } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Failed to fetch products' });
      }


});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
