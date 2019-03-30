const fetch = require('node-fetch')
const AbstractTests = require('../AbstractTests')
const {AWG_AboutUs} = require('../models/AWG_AboutUsController')//require your model
const ObjectId = require('mongoose');

class CATest extends AbstractTests {
  constructor (PORT, ROUTE) {
    super(PORT, ROUTE)
    this.sharedState = {
    description:null,
    mission: null,
    vision:null
    }
  }

  run() {
    super.run()
    try {
      return new Promise((resolve, reject) => {
        describe('Making sure A routes work', () => {
        this.getRequest()
        
         //this.getById();
         this.postRequest();
          // add all methods

        })
        resolve()
      })
    } catch (err) {}
  }



  getRequest() {
  
    test(`get ${this.base_url}/AWG_AboutUs/`, async () => {
      const response = await fetch(`${this.base_url}/AWG_AboutUs/`, {
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


  getById(){
    
    test(`get ${this.base_url}/${this.sharedState.id}`, async () => {
      const response = await fetch(`${this.base_url}/AWG_AboutUs/${this.sharedState.id}`, {
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

postRequest () {
  const requestBody = {
    description:"1235",
    mission:"AWG_AboutUs mission",
    vision:"AWG_AboutUs vision"
    
  }


  test(`post ${this.base_url}/AWG_AboutUs/`, async () => {
    const response = await fetch(`${this.base_url}/AWG_AboutUs/`, {
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
putRequest () {
  const CAbody = {
    description:"1234",
    mission:"mission",
    vision:"15478"
  }


  test(`put ${this.base_url}/AWG_AboutUs/${this.sharedState.id}`, async () => {
    const response = await fetch(`${this.base_url}/AWG_AboutUs/${this.sharedState.id}`, {
      method: 'PUT',
      body: JSON.stringify(CAbody),
      headers: { 'Content-Type': 'application/json' }
    })
    console.log("response stastus: "+ response.status)
    const jsonResponse = await response.json()
    console.log(jsonResponse)
    expect(Object.keys(jsonResponse)).toEqual(['error'])
    expect(response.status).toEqual(400)
    const eRequest = await AWG_AboutUs.find(CAbody).exec()
    expect(eRequest.description).toEqual(CAbody.description)
    expect(eRequest.mission).toEqual(CAbody.mission)
    expect(eRequest.vision).toEqual(CAbody.vision)
    this.sharedState.description=  eRequest.description
    this.sharedState.mission =  eRequest.mission
    this.sharedState.vision =  eRequest.vision
  })
}
deleteRequest () {
  test(`delete ${this.base_url}`, async () => {
    const response = await fetch(`${this.base_url}/5c79260b4328ab820437d835c23`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
    console.log("response stastus: "+ response.status)
    const jsonResponse = await response.json()
    console.log(jsonResponse)
    expect(Object.keys(jsonResponse)).toEqual(['error'])
    expect(response.status).toEqual(404)
    
    
  })
}


}
module.exports = CATest
