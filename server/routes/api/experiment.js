const express = require('express');
const router = express.Router();

// Load Experiment model
const Experiment = require('../../models/Experiment');

router.post('/', (req, res) => {

  var experimentType = 0;

  Experiment.find({}).sort({_id:-1}).limit(1).exec((err, docs) => { 
                                                                    if(docs.length<1){
                                                                      experimentType = 0;
                                                                    }
                                                                    else{
                                                                      experimentType = docs[0].experiment_type+1;
                                                                      if(experimentType>3){
                                                                        experimentType = 0;
                                                                      }
                                                                    }

                                                                    const newExperiment = new Experiment({
                                                                                                name: req.body.name,
                                                                                                gender: req.body.gender,
                                                                                                age: req.body.age,
                                                                                                occupation: req.body.occupation,
                                                                                                experiment_type: experimentType
                                                                                              });  

                                                                    newExperiment.save()
                                                                                  .then((savedExperiment) => {res.json(savedExperiment)})
                                                                                  .catch(err => res.status(400).json({ err }))
                                                                  })
});

router.post('/updateWords', (req, res) => {
  Experiment.updateOne({_id: req.body.id}, {$set: {words_listed: req.body.words}})
      .catch(err => {console.log(err); res.status(400).json({ err })});
})

router.post('/updateGame', (req, res) => {
  Experiment.updateOne({_id: req.body.id}, {$set: {game_chosen: req.body.game_chosen}})
      .catch(err => res.status(400).json({ err }));
})

router.post('/getEt', (req, res) => {
  console.log(req.body)
  Experiment.findOne({_id: req.body.id}).then((doc) => {res.json(doc)})
      .catch(err => res.status(400).json({ err }));
})

module.exports = router;