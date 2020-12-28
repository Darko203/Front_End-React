import React from 'react';

export class Calendar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      calendar:[
        {id:1, day:1, month:"June", year:1999},
        {id:2, day:2, month:"Juli", year:2000},
        {id:3, day:3, month:"May", year:2002}
      ],
      day:"",
      month:"",
      year:""

    }
  }
  imeNaFunkcija = (event) => {
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  addItem = () => {
    if(this.state.day || this.state.month || this.state.year!== ""){
    var object ={
      id:this.state.calendar.length +1,
      day:this.state.day,
      month:this.state.month,
      year:this.state.year
    }
    this.setState({
      calendar:[...this.state.calendar,object],
      day:"",
      month:"",
      year:""
    })
  }
  }
deleteItem = (id) =>{
    this.setState({
        calendar: [
          ...this.state.calendar.filter(date => (date.id !== id))
        ]
    })
  }
  render(){
    
    return(
      <div>
        <label>Day: </label><input
        type="text"
        name="day"
        value={this.state.day}
        onChange={this.imeNaFunkcija}
        />
        <br/>
        <br/>
        <label>Month: </label><input
        type="text"
        name="month"
        value={this.state.month}
        onChange={this.imeNaFunkcija}
        />
        <br/>
        <br/>
        <label>Year: </label><input
        type="text"
        name="year"
        value={this.state.year}
        onChange={this.imeNaFunkcija}
        />
        <br/>
        <br/>
        
        <button onClick={this.addItem}>
          Add date
        </button>
        
        <br/>
        <br/>
        <table border="1">
        <thead>
          <tr>
            
            <th>day</th>
            <th>month</th>
            <th>year</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          
          {this.state.calendar.map((calenda,i)=>{
           return(
             
              <tr key={calenda.id}>
              <td>{calenda.day}</td>
              <td>{calenda.month}</td>
              <td>{calenda.year}</td>
              <td>
                <button onClick={()=>{this.deleteItem(calenda.id)}}>
                                         delete
                                     </button>
              </td>
            </tr>
           )
          })}
        </tbody>
      </table>
      </div>
    )
  }
}