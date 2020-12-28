import React from 'react';

export class About extends React.Component {
constructor(props){
  super(props)
  this.state={
    studentId:"",
    city:"",
    dob:"",
    gpa:""
  }
}
addItem = (event) => {
  this.setState({
    [event.target.name]:event.target.value
    
   
  })
  
}
showValues = (event) => {
  this.setState({
    studentId:"",
    city:"",
    dob:"",
    gpa:""
  })
  event.preventDefault()
  alert(`${this.state.studentId} ${this.state.city} ${this.state.dob} ${this.state.gpa}`)
  
}

  render(){
    
    return(

      <div>
        <form onSubmit={this.showValues}>
          <label>StudentID:</label><input
          type="text"
          name="studentId"
          value={this.state.studentId}
          onChange={this.addItem}
           />
          <br/>
          <br/>
          <label>City:</label><input
          type="text"
          name="city"
          value={this.state.city}
          onChange={this.addItem} />
          <br/>
          <br/>
          <label>DOB:</label><input
          type="text"
          name="dob"
          value={this.state.dob}
          onChange={this.addItem} />
          <br/>
          <br/>
          <label>G.P.A:</label><input
          type="text"
          name="gpa"
          value={this.state.gpa}
          onChange={this.addItem} />
          <br/>
          <br/>
          <input type="submit" value="Alert"/>
        </form>
        
      </div>
    )
  }
}