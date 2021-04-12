require('dotenv').config();
const express = require('express'),
      ctrlAdmin = require('./controllers/admin'),
      ctrlCake = require('./controllers/cake');
const session = require('express-session');
const massive = require('massive');

const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env;

const app = express();

app.use(express.json());

massive({
  connectionString: CONNECTION_STRING,
  ssl: {rejectUnauthorized: false}
}).then(db => {
  app.set('db', db)
  console.log('db connected!')
})

app.use(
  session({
    resave: true,
    saveUninitialized: false,
    secret: SESSION_SECRET,
    cookies: {maxAge: 1000 * 60 * 60 * 60}
  })
)

// Admin Endpoints
app.get('/api/auth/admin', ctrlAdmin.getAdmin);
app.post('/api/auth/admin-login', ctrlAdmin.login);
app.post('/api/auth/logout', ctrlAdmin.logout);


// Cake Endpoints
const cakeUrl = '/api/cakes'
app.get(cakeUrl, ctrlCake.getCakes);
app.post(`${cakeUrl}/add`, ctrlCake.addCake);
app.put(`${cakeUrl}/:id/:quantity`, ctrlCake.updateCake);
app.delete(`${cakeUrl}/:id`, ctrlCake.delete);


// ! Checkout Endpoints?
app.post('/api/addOrder', ctrlCake.addOrder)