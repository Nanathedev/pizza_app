 // ************IMPORT ALL DEPENDENCIES AND CREATE APP ************/
const express = require('express');
require('./db')
const orderRouter = require('./routers/orderRoutes');
const authentication = require('./controllers/user');
const userRouter = require('./routers/users');
const app = express();

app.use(express.json({type: 'application/json'}));


app.use('/api/orders', authentication.authenticateUser, orderRouter)

app.use('/api/users', userRouter)

module.exports = app;
Footer
© 2022 GitHub, Inc.