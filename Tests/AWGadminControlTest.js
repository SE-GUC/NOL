const fetch = require('node-fetch')
const AbstractTests = require('../AbstractTests')
const AWG_AboutUs = require('../models/AWG_AboutUsController') //require your model
const faqs=require('../models/FAQcontroller')
const ObjectId = require('mongoose');

class CATest extends AbstractTests {
  constructor (PORT, ROUTE) {
    super(PORT, ROUTE)
    this.sharedState = {
        description:null,
        mission: null,
        vision:null,
        question:null,  //CHECKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
        answer:null
    }
  }

  run() {
    super.run()
    try {
      return new Promise((resolve, reject) => {
        describe('Making sure A routes work', () => {
        this.postRequest()
        //this.postRequestFailed()
        //this.getRequest()
        // this.putRequest()
         //this.putRequestFailed()
         // this.deleteRequest()
         this.getById();
          // add all methods

        })
        resolve()
      })
    } catch (err) {}
  }


  postRequest() {
    const CAbody = {
        description:"AWG_AboutUs",
        mission:"AWG Mission",
        vision:"AWG Visison" 
    }
 

    test(`post ${this.base_url}`, async () => {
      const response = await fetch(`${this.base_url}`, {
        method: 'POST',
        body: JSON.stringify(CAbody),
        headers: { 'Content-Type': 'application/json' }
      })
      console.log("response stastus: "+ response.status)
      const jsonResponse = await response.json()

      expect(Object.keys(jsonResponse)).toEqual(['msg','data'])
      expect(response.status).toEqual(200)
      
      const eRequest = await AWG_AboutUs.findOne(CAbody).exec()
      expect(eRequest.description).toEqual(CAbody.description)
      expect(eRequest.mission).toEqual(CAbody.mission)
      expect(eRequest.vision).toEqual(CAbody.vision)
      this.sharedState.description=  eRequest.description
      this.sharedState.mission =  eRequest.mission
      this.sharedState.vision =  eRequest.vision

    })
  }
  postRequest () {
    const requestBody = {
      description: "1236",
      mission:"AWG mission",
      vision:"AWG vision"
      
    }
 

    test(`post ${this.base_url}`, async () => {
      const response = await fetch(`${this.base_url}`, {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: { 'Content-Type': 'application/json' }
      })
      console.log("response stastus: "+ response.status)
      const jsonResponse = await response.json()
      console.log(jsonResponse)

      expect(Object.keys(jsonResponse)).toEqual(['error'])
      expect(response.status).toEqual(400)
    })
  }


  getRequest() {
  
    test(`get ${this.base_url}`, async () => {
      const response = await fetch(`${this.base_url}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      })
      console.log("response stastus: "+ response.status)
      const jsonResponse = await response.json()
      console.log(jsonResponse)

      expect(Object.keys(jsonResponse)).toEqual(['data'])
      expect(response.status).toEqual(200)
    })
  }

  putRequest () {
    const CAbody = {
      description: "AWG description updated",
      mission:"AWG mission updated",
      vision:"AWG vision updated" 
    }
 

    test(`put ${this.base_url}`, async () => {
      const response = await fetch(`${this.base_url}/${this.sharedState.id}`, {
        method: 'PUT',
        body: JSON.stringify(CAbody),
        headers: { 'Content-Type': 'application/json' }
      })
      console.log("response stastus: "+ response.status)
      const jsonResponse = await response.json()
      console.log(jsonResponse)
      expect(Object.keys(jsonResponse)).toEqual(['msg'])
      expect(response.status).toEqual(200)
      const eRequest = await AWG_AboutUs.findOne(CAbody).exec()
      expect(eRequest.description).toEqual(CAbody.description)
      expect(eRequest.mission).toEqual(CAbody.mission)
      expect(eRequest.vision).toEqual(CAbody.vision)
      this.sharedState.description =  eRequest.description
      this.sharedState.mission=  eRequest.mission
      this.sharedState.vision=  eRequest.vision
    })
  }
  putRequestFailed () {
    const CAbody = {
      description: "12",
      mission:"AWG mission updated",
      vision:"AWG vision updated"
    }
 

    test(`put ${this.base_url}`, async () => {
      const response = await fetch(`${this.base_url}`, {
        method: 'PUT',
        body: JSON.stringify(CAbody),
        headers: { 'Content-Type': 'application/json' }
      })
      console.log("response stastus: "+ response.status)
      const jsonResponse = await response.json()
      console.log(jsonResponse)
      expect(Object.keys(jsonResponse)).toEqual(['error'])
      expect(response.status).toEqual(400)
      const eRequest = await AWG_AboutUs.findOne(CAbody).exec()
      expect(eRequest.description).toEqual(CAbody.description)
      expect(eRequest.mission).toEqual(CAbody.mission)
      expect(eRequest.vision).toEqual(CAbody.vision)
      this.sharedState.description =  eRequest.description
      this.sharedState.mission =  eRequest.mission
      this.sharedState.vision =  eRequest.vision
    })
  }

  deleteRequest() {
    test(`delete ${this.base_url}`, async () => {
      const response = await fetch(`${this.base_url}/${this.sharedState.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      })
      console.log("response stastus: "+ response.status)
      const jsonResponse = await response.json()
      console.log(jsonResponse)
      expect(Object.keys(jsonResponse)).toEqual(['msg','data'])
      expect(response.status).toEqual(200)
    })
  }
  getById(){
    test(`get ${this.base_url}`, async () => {
      const response = await fetch(`${this.base_url}/${this.sharedState.id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      })
      console.log("response stastus: "+ response.status)
      const jsonResponse = await response.json()
      console.log(jsonResponse)

      expect(Object.keys(jsonResponse)).toEqual(['data'])
      expect(response.status).toEqual(200)
    })
  }
  putRequestFAQs () {
    const CAbody = {
        question:"how can i reacH MUN president?",
        answer:"You can contact him on his email which you can find on the website" 
    }
 

    test(`put ${this.base_url}`, async () => {
      const response = await fetch(`${this.base_url}/${this.sharedState.id}`, {
        method: 'PUT',
        body: JSON.stringify(CAbody),
        headers: { 'Content-Type': 'application/json' }
      })
      console.log("response stastus: "+ response.status)
      const jsonResponse = await response.json()
      console.log(jsonResponse)
      expect(Object.keys(jsonResponse)).toEqual(['msg'])
      expect(response.status).toEqual(200)
      const eRequest = await faqs.findOne(CAbody).exec()
      expect(eRequest.question).toEqual(CAbody.question)
      expect(eRequest.answer).toEqual(CAbody.answer)
      this.sharedState.question=  eRequest.question
      this.sharedState.answer=  eRequest.answer
    })
  }
  putRequestFAQFailed () {
    const CAbody = {
      question:"1222",
      answer:"..........."
    }
 

    test(`put ${this.base_url}`, async () => {
      const response = await fetch(`${this.base_url}`, {
        method: 'PUT',
        body: JSON.stringify(CAbody),
        headers: { 'Content-Type': 'application/json' }
      })
      console.log("response stastus: "+ response.status)
      const jsonResponse = await response.json()
      console.log(jsonResponse)
      expect(Object.keys(jsonResponse)).toEqual(['error'])
      expect(response.status).toEqual(400)
      const eRequest = await faqs.findOne(CAbody).exec()
      expect(eRequest.question).toEqual(CAbody.question)
      expect(eRequest.answer).toEqual(CAbody.answer)
      this.sharedState.question =  eRequest.question
      this.sharedState.answer =  eRequest.answer
    })
  }

}
module.exports = CATest
