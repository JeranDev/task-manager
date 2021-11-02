// CRUD

const { MongoClient, ObjectId } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    // db.collection('users').findOne(
    //   { _id: new ObjectId('61808ec133ef644aa80b05b4') },
    //   (error, user) => {
    //     if (error) {
    //       return console.log('Unable to fetch user.')
    //     }

    //     console.log(user)
    //   }
    // )

    // db.collection('users')
    //   .find({})
    //   .count((error, count) => {
    //     console.log(count)
    //   })

    db.collection('tasks').findOne(
      { _id: new ObjectId('618090bff1b953ded8254601') },
      (error, task) => {
        console.log(task)
      }
    )

    db.collection('tasks')
      .find({ completed: false })
      .toArray((error, tasks) => {
        console.log(tasks)
      })
  }
)
