const express = require('express');
const app = express();
const port = 3000;

app.get('/api/v1/clinic/hello', (req, res) => {
  res.json({ message: 'MyFlora Oral Clinic API is running!' });
});

app.listen(port, () => {
  console.log(`🚀 MyFlora Oral API running on port ${port}`);
});
