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
};
