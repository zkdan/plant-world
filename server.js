const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');
const router = express.Router();
const dbURL = process.env.MONGODB_URI || 'mongodb://heroku_k899j9dg:pq1v1nfreslms6tpq8otnk7hks@ds243607.mlab.com:43607/heroku_k899j9dg';


const Plant = require('./models/plant.js');
const Employee = require('./models/employee.js');


mongoose.connect(dbURL);

router.route('/plants')
  .get((req,res) => {
    res.header('Access-Control-Allow-Origin', '*');
    Plant.find({}, (err,docs) =>{
      if(err){
        res
          .status(400)
          .send({
            error:err
          });
        return;
      }
      res
        .status(200)
        .send(docs);
    });
  });
router.route('/plants/:kind')
  .get((req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    const kind = req.params.kind;
    Plant.find({ 'type': kind  }, (err, docs) => {
      if (err) {
        res
          .status(400)
          .send({
            error: err
          });
        return;
      }
      res
        .status(200)
        .send(docs);
    });
  });

router.route('/employees')
  .get((req, res)=>{
    res.header('Access-Control-Allow-Origin', '*');
    Employee.find({}, (err, docs) =>{
      if (err){
        res
          .status(400)
          .send({
            error:err
          });
        return;
      }
      res
        .status(200)
        .send(docs);
    });
  });
app.use(express.static('public'));

app.listen(port);

app.use('/api/v1/', router);