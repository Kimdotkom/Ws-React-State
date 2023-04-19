import React, { Component } from 'react'

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Karim chebbi",
        bio: "GomyCode Instructor",
        imgSrc:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        profession: "Web Developer",
      },
      count:0
    };
  }


  componentDidMount(){
    setInterval(()=>{
        this.setState(prevState=>({
            count: prevState.count+0.5
        }))
      },1000)
}

  render() {
    return (
      <div>
        <h1>{this.state.person.fullName}</h1>
        <h3>{this.state.person.profession}</h3>
        <h2>{this.state.count} Sec...</h2>
      </div>
    )
  }
}
