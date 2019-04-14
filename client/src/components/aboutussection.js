import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class Aboutus extends Component {
  
  constructor(props) {
      super(props)
      this.state = { aboutusId:props.match.params.id, flag:"Add About Us"}
      this.state.aboutus = { misson:"", vision:"", clubname:"", achievement_Desc:"", achievement_Pic:""}
      if (this.state.aboutusId !== "0"){
        console.log(this.state.aboutusId)
        axios.get("http://localhost:5000/MUN/signin/MUNadmins/aboutus/"+this.state.aboutusId)
        .then((res) => {this.setState({ aboutus:res.data, flag:"Update About Us"})})
      }
      this.setMisson = this.setMisson.bind(this)
      this.setVision = this.setVision.bind(this)
      this.setClubname = this.setClubname.bind(this)
      this.setAchievement_Desc = this.setAchievement_Desc.bind(this)
      this.setAchievement_Pic = this.setAchievement_Pic.bind(this)
      this.submit = this.submit.bind(this)
  }

  setMisson(event) {
    this.setState({ aboutus:{misson: event.target.value, vision:this.state.aboutus.vision,
       clubname:this.state.aboutus.clubname, achievement_Desc:this.state.aboutus.achievement_Desc, achievement_Pic:this.state.aboutus.achievement_Pic} })
  }
  
  setVision(event) {
    this.setState({ aboutus:{vision: event.target.value, misson:this.state.aboutus.misson,
      clubname:this.state.aboutus.clubname, achievement_Desc:this.state.aboutus.achievement_Desc, achievement_Pic:this.state.aboutus.achievement_Pic} })
  }

  setClubname(event) {
    this.setState({ aboutus:{clubname: event.target.value, misson:this.state.aboutus.misson, vision:this.state.aboutus.vision,
      achievement_Desc:this.state.aboutus.achievement_Desc, achievement_Pic:this.state.aboutus.achievement_Pic} })
  }
  
  setAchievement_Desc(event) {
    this.setState({ aboutus:{achievement_Desc: event.target.value, misson:this.state.aboutus.misson, vision:this.state.aboutus.vision,
      clubname:this.state.aboutus.clubname, achievement_Pic:this.state.aboutus.achievement_Pic} })
  }

  setAchievement_Pic(event) {
    this.setState({ aboutus:{achievement_Pic: event.target.value, misson:this.state.aboutus.misson, vision:this.state.aboutus.vision,
      clubname:this.state.aboutus.clubname, achievement_Desc:this.state.aboutus.achievement_Desc} })
  }
  
  submit(event) {
    event.preventDefault()
    if (this.state.aboutusId !== "0"){
      axios.put("http://localhost:5000/MUN/signin/MUNadmins/aboutus/"+this.state.aboutusId, {misson:this.state.aboutus.misson,
      vision:this.state.aboutus.vision,
      clubname:this.state.aboutus.clubname,
      achievement_Desc:this.state.aboutus.achievement_Desc,
      achievement_Pic:this.state.aboutus.achievement_Pic}).then((res) => {alert("Updated: "+res.data._id)})  
    }
    else {
      axios.post("http://localhost:5000/MUN/signin/MUNadmins/aboutus/", {misson:this.state.aboutus.misson,
      vision:this.state.aboutus.vision,
      clubname:this.state.aboutus.clubname,
      achievement_Desc:this.state.aboutus.achievement_Desc,
      achievement_Pic:this.state.aboutus.achievement_Pic}).then((res) => {alert("Added: "+res.data._id)})  
    }
  }

  render() {
    return (
      <div className="Aboutus">
        <div><Link to="/">back</Link></div>
        <form onSubmit={this.submit}>
         Mission: <input type="text" onChange={this.setMisson} value={this.state.aboutus.misson}/>
         Vision: <input type="text" onChange={this.setVision} value={this.state.aboutus.vision}/>
         Club Name: <input type="text" onChange={this.setClubname} value={this.state.aboutus.clubname}/>
         Achievement Desc: <input type="text" onChange={this.setAchievement_Desc} value={this.state.aboutus.achievement_Desc}/>
         Achievement Pic: <input type="text" onChange={this.setAchievement_Pic} value={this.state.aboutus.achievement_Pic}/>
         <input type="submit" value={this.state.flag} />
        </form>
      </div>
    )
  }
}

export default Aboutus;