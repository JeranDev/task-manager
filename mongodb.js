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

    db.collection('users')
      .updateOne(
        {
          _id: new ObjectId('61808a54fa017170a1ade26e'),
        },
        {
          $set: {
            name: 'Mike',
          },
        }
      )
      .then(result => {
        console.log(result)
      })
      .catch(error => {
        console.log(error)
      })
  }
)
