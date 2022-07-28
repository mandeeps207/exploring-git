const app = require('express')();

app.get('/', (req, res) => {
  res.send('Hello There!');
  res.end();
});
app.listen(5000, ()=> {
  console.log('Server is running on port 5000');
});
