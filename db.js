const MongoClient = require('mongodb').MongoClient
const mongodb = require('mongodb')
 
// Connection URL
const url = 'mongodb://localhost:27017'
 
// Database Name
const dbName = 'minecraft-item-marketplace'

const dbService = {
  db: undefined,
  connect: async () => {
    let client = await MongoClient.connect(url)
    this.db = client.db(dbName)
  },
  createProposal: async (proposal) => {
    await this.db.collection('proposals').insertOne(proposal)
  },
  fetchProposals: async () => {
    return await this.db.collection('proposals').find({}).toArray()
  },
  updateProposal: async(id, proposal) => {
    await this.db.collection('proposals').updateOne({ _id: new mongodb.ObjectID(id) }, {
      $set: proposal
    })
  },
  deleteProposal: async(id) => {
    await this.db.collection('proposals').deleteOne({ _id: id })
  }
}

module.exports = dbService