const express = require('express')
const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json());
const userRouter = require('./routes/connection')
const cors =  require('cors');
const compression = require('compression');

app.use(cors({}))
app.use(compression());
app.use('/user', userRouter)

app.listen(3000, () => console.log('Express server is runnig at port no : 3000'));