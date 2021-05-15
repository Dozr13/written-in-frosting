require('dotenv').config();
const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose')

const {SERVER_PORT, MONGODB_URI} = process.env

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(MONGODB_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connection established successfully');
});

app.get('/ping', (req, res) => {
  res.send('pong')
});

const cakesRouter = require('./routes/cakes');

app.use('/cakes', cakesRouter);

app.listen(SERVER_PORT, () => console.log(`Server listening on port: ${SERVER_PORT}`));











// require('dotenv').config();
// const express = require('express');
// const session = require('express-session');
// const cors = require('cors');
// const MongoClient = require('mongodb').MongoClient;
// const mongoose = require('mongoose');
// const axios = require('axios');

// const {MONGODB_URI, SERVER_PORT, SESSION_SECRET} = process.env;

// const app = express();
// app.use(cors())
// app.use(express.json());


// mongoose.connect(MONGODB_URI, {
//   useCreateIndex: true,
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });
// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log('MongoDB connection established successfully');
// });


// const client = new MongoClient(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
// // client.connect(err => {
// //   const collection = client.db("test").collection("devices");
// //   // perform actions on the collection object
// //   client.close();
// // });

// axios.get('s3').then(res => {
//   client.connect(function(err, db) {
//     if(err) throw err;
//     let dbo = db.db('cakes')
//     res.data.forEach(img => {
//       dbo.insertOne(img, (err, res) => {
//         if(err) throw err
//         console.log('success ', img.name)
//       })
//     })
//     db.close()
//   })
// })


// // client.connect((err, db) => {
//   //   if(err) throw err
// //   let obj = [
// //     {img: '', alt: ''},
// //     {img: '', alt: ''},
// //     {img: '', alt: ''},
// //     {img: '', alt: ''},
// //     {img: '', alt: ''},
// //     {img: '', alt: ''},
// //     {img: '', alt: ''},
// //     {img: '', alt: ''},
// //     {img: '', alt: ''},
// //   ]
  
// // })



// app.use(
//   session({
//     resave: true,
//     saveUninitialized: false,
//     secret: SESSION_SECRET,
//     cookies: {maxAge: 1000 * 60 * 60 * 60}
//   })
// )

// // Admin Endpoints
// // app.get('/api/auth/admin', ctrlAdmin.getAdmin);
// // app.post('/api/auth/admin-login', ctrlAdmin.login);
// // app.post('/api/auth/logout', ctrlAdmin.logout);


// // // Cake Endpoints
// // const cakeUrl = '/api/cakes'
// // app.get(cakeUrl, ctrlCake.getCakes);
// // app.post(`${cakeUrl}/add`, ctrlCake.addCake);
// // app.put(`${cakeUrl}/:id/:quantity`, ctrlCake.updateCake);
// // app.delete(`${cakeUrl}/:id`, ctrlCake.delete);


// // // ! Checkout Endpoints?
// // app.post('/api/addOrder', ctrlCake.addOrder)


// app.listen(SERVER_PORT, _ => {
//   console.log(`Server listening on port: ${SERVER_PORT}`)
// })