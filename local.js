const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to local run');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/health', (req, res) => {
  res.status(200).send('Health of the l;ocal server is good');
});