const express = require('express');
const passportConfig = require('./services/passport');


const app = express();
app.use(express.static("src"));
require('./routes/authRoutes')(app);
require('./routes/routes')(app);



const PORT = process.env.PORT || 5000;
app.listen(PORT);
