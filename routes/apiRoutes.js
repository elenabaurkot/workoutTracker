const db = require("../models");

module.exports = function(app) {
  app.get("/api/workouts", function(req, res) {
    db.Workout.find({}).then(function(dbWorkouts) {
      res.json(dbWorkouts);
    });
  });

  app.put("/api/workouts/:id", function(req, res) {
    db.Workout.updateOne({ _id: req.params.id }, { rating: req.body.rating }).then(function(dbWorkout) {
      res.json(dbWorkout);
    });
  });

  // router.post
  // either req, res or body, res 
  app.post("/api/workouts", ({ body }, res) => {
    Workout.insertMany(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  // app.get("/api/workouts/range", function(req, res) {
  //   db.Workout.find({}).then(function(dbWorkouts) {
  //     res.json(dbWorkouts);
  //   });
  // });

};
