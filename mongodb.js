// CRUD

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

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

    // db.collection('users').insertOne(
    //   {
    //     name: 'Jeran',
    //     age: 25,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert user.')
    //     }

    //     console.log(result)
    //   }
    // )

    //   db.collection('users').insertMany(
    //     [
    //       {
    //         name: 'Madeline',
    //         age: 26,
    //       },
    //       {
    //         name: 'Merlin',
    //         age: 2,
    //       },
    //     ],
    //     (error, result) => {
    //       if (error) {
    //         return console.log('Unable to insert users.')
    //       }

    //       console.log(result)
    //     }
    //   )

    db.collection('tasks').insertMany(
      [
        { description: 'Do the dishes', completed: true },
        { description: 'Walk the dog', completed: true },
        { description: 'Make dinner', completed: false },
      ],
      (error, result) => {
        if (error) {
          return console.log('Unable to insert documents.')
        }

        console.log(result)
      }
    )
  }
)
