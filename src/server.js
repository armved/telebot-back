const express = require('express');
const packageInfo = require('../package.json');

const app = express();

app.get('/', (req, res) => {
  res.json({ version: packageInfo.version });
});

const server = app.listen(process.env.PORT, () => {
  const { port } = server.address();

  console.log(`Web server started on port ${port}`);
});
