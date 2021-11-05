const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {})

const User = mongoose.model('User', {
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
})

// const me = new User({
//   name: 'Jeran',
//   age: 25,
// })

// me.save()
//   .then(() => console.log(me))
//   .catch(error => console.log(error))

const Task = mongoose.model('Task', {
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
})

const task = new Task({
  description: 'Set up Mongoose',
  completed: true,
})

task
  .save()
  .then(console.log(task))
  .catch(error => console.log(error))
