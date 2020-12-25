const express = require('express')
const path = require('path')
const routes = require('./routes')

const FeedbackServices = require('./services/FeedbackService')
const SpeakerServices = require('./services/SpeakerService')

const feedbackService = new FeedbackServices('./data/speakers.json')
const speakerService = new SpeakerServices('./data/speakers.json')

const app = express()

const port = 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'))

app.use(express.static(path.join(__dirname, './static')))
app.use('/', routes({
    feedbackService,
    speakerService
}))

app.listen(port, () => {
    console.log(`Express server listening on ${port}`)
})