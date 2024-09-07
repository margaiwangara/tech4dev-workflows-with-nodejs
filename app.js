const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.json({
    message: 'Hello World!',
  });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`App running on port: ${PORT}`));
