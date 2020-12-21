const mongoose = require("mongoose");
//setting up mongo collection
const workoutSchema = new mongoose.Schema(
    {
        day: {
          type: Date,
          default: Date.now
        },
        exercises: [
          {
            type: {
              type: String,
              trim: true,
              required: "Please enter an excercise type."
            },
            name: {
              type: String,
              trim: true,
              required: "Enter an exercise name"
            },
            duration: {
              type: Number,
              required: "How long, in minutes, was the excercise"
            },
            weight: {
              type: Number
            },
            reps: {
              type: Number
            },
            sets: {
              type: Number
            },
            distance: {
              type: Number
            }
          }
        ]
      },
      {
        toJSON: {
          virtuals: true
        }
      }
    );

//returning total duration of workout minutes
workoutSchema.virtual("totalDuration").get(function(){
    return this.exercises.reduce((total, exercise) => {
        return total+exercise.duration
    },0)
})

//creating model and exporting
const workout = mongoose.model("workout", workoutSchema)

module.exports = workout
