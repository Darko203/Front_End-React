import React from 'react';

export class Contact extends React.Component {
constructor(props){
  super(props)
  this.state={
    fName:"",
    lName:"",
    address:"",
    disabled:true
  }
}
addItem = (event) => {
  this.setState({
    [event.target.name]:event.target.value

  })
}
onChange = () => {
  this.setState({
    disabled:this.state.disabled === true? false : true
  })
}
  render(){
    console.log(this.state)
    return(
      <div>
        <label>F.Name:</label><input
        type="text"
        name="fName"
        value={this.state.fName}
        onChange={this.addItem}
        disabled={this.state.disabled}
        />
        <br/>
        <br/>
        <label>L.Name:</label><input
        type="text"
        name="lName"
        value={this.state.lName}
        onChange={this.addItem}
        disabled={this.state.disabled}
        />
        <br/>
        <br/>
        <label>Address:</label><input
        type="text"
        name="address"
        value={this.state.address}
        onChange={this.addItem}
        disabled={this.state.disabled}
        />
        <br/>
        <br/>
        <button onClick={this.onChange}>
          {this.state.disabled === true ? "Enable" : "Disable"}
        </button>
      </div>
    )
  }
}