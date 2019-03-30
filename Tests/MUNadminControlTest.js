const fetch = require('node-fetch')
const AbstractTests = require('../AbstractTests')
const committiees = require('../models/committieeController') //require your model
const ObjectId = require('mongoose');

class CATest extends AbstractTests {
  constructor (PORT, ROUTE) {
    super(PORT, ROUTE)
    this.sharedState = {
      name:null,
      head_Id: null
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


  postRequestMUNadmin() {
    const CAbody = {
      name: "Security Council",
      head_Id: 11 
    }
 

    test(`post ${this.base_url}/committiee`, async () => {
      const response = await fetch(`${this.base_url}/committiee`, {
        method: 'POST',
        body: JSON.stringify(CAbody),
        headers: { 'Content-Type': 'application/json' }
      })
      console.log("response stastus: "+ response.status)
      const jsonResponse = await response.json()

      expect(Object.keys(jsonResponse)).toEqual(['msg','data'])
      expect(response.status).toEqual(200)
      
      const eRequest = await committiees.findOne(CAbody).exec()
      expect(eRequest.name).toEqual(CAbody.name)
      expect(eRequest.head_Id).toEqual(CAbody.head_Id)
      this.sharedState.name =  eRequest.name
      this.sharedState.head_Id =  eRequest.head_Id

    })
  }
  postRequestMUNadminFailed () {
    const requestBody = {
      name: "Security Council",
      head_Id: 11,
      
    }
 

    test(`post ${this.base_url}`, async () => {
      const response = await fetch(`${this.base_url}/committiee`, {
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


  getRequestMUNadmin() {
  
    test(`get ${this.base_url}`, async () => {
      const response = await fetch(`${this.base_url}/allCommittiees`, {
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

  putRequestMUNadmin () {
    const CAbody = {
      name: "Security Council",
      head_Id:20 
    }
 

    test(`put ${this.base_url}`, async () => {
      const response = await fetch(`${this.base_url}/committiee/'Security Council'${this.sharedState.id}`, {
        method: 'PUT',
        body: JSON.stringify(CAbody),
        headers: { 'Content-Type': 'application/json' }
      })
      console.log("response stastus: "+ response.status)
      const jsonResponse = await response.json()
      console.log(jsonResponse)
      expect(Object.keys(jsonResponse)).toEqual(['msg'])
      expect(response.status).toEqual(200)
      const eRequest = await committiees.findOne(CAbody).exec()
      expect(eRequest.name).toEqual(CAbody.name)
      expect(eRequest.head_Id).toEqual(CAbody.name)
      this.sharedState.name =  eRequest.name
      this.sharedState.head_Id =  eRequest.head_Id
      
    })
  }
  putRequestMUNadminFailed () {
    const CAbody = {
      name: "12",
      head_Id:"ed"
    }
 

    test(`put ${this.base_url}`, async () => {
      const response = await fetch(`${this.base_url}/committiee/'Security Council'`, {
        method: 'PUT',
        body: JSON.stringify(CAbody),
        headers: { 'Content-Type': 'application/json' }
      })
      console.log("response stastus: "+ response.status)
      const jsonResponse = await response.json()
      console.log(jsonResponse)
      expect(Object.keys(jsonResponse)).toEqual(['error'])
      expect(response.status).toEqual(400)
      const eRequest = await committiees.findOne(CAbody).exec()
      expect(eRequest.name).toEqual(CAbody.name)
      expect(eRequest.head_Id).toEqual(CAbody.yearsOfExperience)
      this.sharedState.name =  eRequest.name
      this.sharedState.head_Id =  eRequest.head_Id
      
    })
  }

  deleteRequestMUNadmin() {
    test(`delete ${this.base_url}`, async () => {
      const response = await fetch(`${this.base_url}/committiee/'Security Council'${this.sharedState.id}`, {
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
  getByIdMUNadmin(){
    
    test(`get ${this.base_url}`, async () => {
      const response = await fetch(`${this.base_url}/allCommittiees/'Security Council'${this.sharedState.id}`, {
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
}
module.exports = CATest
