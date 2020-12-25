const express = require('express')

const speakerRoute = require('./speakers')
const feedbackRoute = require('./feedback')

const router = express.Router()

module.exports = (params) => {
    router.get('/', (req, res) => {

        // if(!req.session.visitcount) req.session.visitcount = 0
        // req.session.visitcount += 1

        // console.log(`You have visited ${req.session.visitcount} times`)
       
        res.render('pages/index', {
            pageTitle: 'welcome'
        })
    })

    router.use('/speakers', speakerRoute(params))

    router.use('/feedback', feedbackRoute(params))

    return router
}