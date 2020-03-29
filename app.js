const express = require('express')
const bodyParser = require('body-parser')
const db = require('./db.js')

const app = express()
const port = 3000

db.connect()

app.use(bodyParser.json())

app.get('/proposals', async (req, res) => {
  let proposals = await db.fetchProposals()
  res.send(proposals)
})

app.post('/proposals', async (req, res) => {
  await db.createProposal(req.body)
  res.send({ ok: true })
})

app.put('/proposals/:id', async (req, res) => {
  await db.updateProposal(req.params.id, req.body)
  res.send({ ok: true })
})

app.delete('/proposals/:id', async (req, res) => {
  await db.deleteProposal(req.params.id)
  res.send({ ok: true })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))