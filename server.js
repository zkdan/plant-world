//starter file
// > require finds a package from the node_modules folder
const express = require('express');

const app = express();

const port = process.env.PORT || 8080;

const mongoose = require('mongoose');

const router = express.Router();

const Plant = require('./models/plant.js');
const Employee = require('./models/employee.js');

// should this be that 
const dbURL = process.env.MONGODB_URI || 'mongodb://localhost/plants';

mongoose.connect(dbURL);

router.route('/plants')
  .get((req,res) => {
    Plant.find({}, (err,docs) =>{
      if(err !== null){
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
router.route('/trees')
  .get((req, res) => {
    res.json({ 'message': 'This is trees!' });
  });

router.route('/low-light')
  .get((req, res) => {
    res.json({ 'message': 'This is lowLight!' });
  });


router.route('/employees')
  .get((req, res)=>{
    Employee.find({}, (err, docs) =>{
      if (err!== null){
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