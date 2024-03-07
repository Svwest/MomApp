const mongoose = require('mongoose');
const clientUri= "mongodb://localhost:27017/momDB"
mongoose
  .connect(clientUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  
  
  })
  .then(() => {
    console.log('our db is connected');
  })
  .catch(err => console.log(err.message));