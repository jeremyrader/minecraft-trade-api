const dbService = require('./db.js')

dbService.connect().then(async () => {
  //await dbService.deleteProposal(new mongodb.ObjectID('5e7fef2ee7cb1b72bc22da00'))
  dbService.fetchProposals().then(proposals => console.log(proposals))
})