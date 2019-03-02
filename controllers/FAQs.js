var express = require('express');
var router = express.Router()

var FAQs = [
    {
        id: 1,
        Admin_id: 4,
        User_id: 3,
        AWGadmin_ID: 3,
        question: 'Where can I create an account?',
        answer: 'In the register as a user section',
        qes_date: '26/2/2019',
        ans_date: '27/2/2019'
    },
    {
        id: 2,
        Admin_id: 2,
        User_id: 4,
        AWGadmin_ID: 3,
        question: 'When is the next event?',
        answer: 'hhjhjh',
        qes_date: '2/2/2019',
        ans_date: ''
    }
];


//Get all FAQs
router.get('/', (req, res) => {
    res.send(FAQs)
})

//Get a certain FAQ
router.get('/:id', (req, res) => {
    const FAQId = req.params.id
    var singleFAQ = FAQs.filter(function(FAQ){return FAQ.id == FAQId});
    res.send(singleFAQ)
})


//Create a FAQ
router.post('/create', (req, res) => {
    const Admin_id = req.body.Admin_id
    const User_id = req.body.User_id
    const AWGadmin_ID = req.body.AWGadmin_ID
    const qes_date = req.body.qes_date
    const ans_date = req.body.ans_date
    const question = req.body.question
    const answer = req.body.answer
    
    const FAQ = {
        id: FAQs.length + 1,
        Admin_id: Admin_id,
        User_id: User_id,
        AWGadmin_ID: AWGadmin_ID,
        qes_date: qes_date,
        ans_date: ans_date,
        question: question,
        answer: answer
        
    }
    FAQs.push(FAQ)
    res.send(FAQs)
})


//Update a question
router.put('/updateqes/:id', (req, res) => {
    const faq_id = req.params.id 
    const updatedQes = req.body.question 
    var singleFAQ = FAQs.filter(function(FAQ){return FAQ.id == faq_id});
    const index = FAQs.indexOf(singleFAQ[0])
    singleFAQ.question = updatedQes
    FAQs[index].question = updatedQes
    res.send(FAQs)
})

//Update an Answer
router.put('/updateans/:id', (req, res) => {
    const FAQId = req.params.id 
    const updatedAns = req.body.answer
    const singleFAQ = FAQs.filter(function(FAQ){return FAQ.id == FAQId});
    const index = FAQs.indexOf(singleFAQ[0])
    singleFAQ.answer = updatedAns
    FAQs[index].answer = updatedAns
    res.send(FAQs)
})

//Update an answer's date
router.put('/updateansdate/:id', (req, res) => {
    const FAQId = req.params.id 
    const updatedAnsD = req.body.ans_date
    const singleFAQ = FAQs.filter(function(FAQ){return FAQ.id == FAQId});
    const index = FAQs.indexOf(singleFAQ[0])
    singleFAQ.ans_date = updatedAnsD
    FAQs[index].ans_date = updatedAnsD
    res.send(FAQs)
})

//Update a question's date
router.put('/updateqesdate/:id', (req, res) => {
    const FAQId = req.params.id 
    const updatedQesD = req.body.qes_date
    const singleFAQ = FAQs.filter(function(FAQ){return FAQ.id == FAQId});
    const index = FAQs.indexOf(singleFAQ[0])
    singleFAQ.qes_date = updatedQesD
    FAQs[index].qes_date = updatedQesD
    res.send(FAQs)
})

//Update Mun Admin
router.put('/updateadmin/:id', (req, res) => {
    const FAQId = req.params.id 
    const updatedAdmin = req.body.Admin_id
    const singleFAQ = FAQs.filter(function(FAQ){return FAQ.id == FAQId});
    const index = FAQs.indexOf(singleFAQ[0])
    singleFAQ.Admin_id = updatedAdmin
    FAQs[index].Admin_id = updatedAdmin
    res.send(FAQs)
})

//Delete  one FAQ
router.delete('/delete', (req, res) => {
    const FAQId = req.params.id 
    const singleFAQ = FAQs.filter(function(FAQ){return FAQ.id == FAQId});
    const index = FAQs.indexOf(singleFAQ[0])
    FAQs.splice(index,1)
    res.send(FAQs)
})


module.exports = router;