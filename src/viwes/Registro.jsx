import React from 'react';
import '../style/Registro.css';
import Ham from '../img/ham.jpg';

class New extends React.Component{
    handleClick = e => {
        console.log('Button was clicked');
      };
    
      handleSubmit = e => {
        e.preventDefault();
        console.log('Form was submitted');
        console.log(this.state);
      };
    render(){
        return <div className="Home">
        <div className="Header">
          </div>
          <div className="section-Name">
  <img
  className="Avatar"
   src={Ham} 
   alt="log" />
   <h1>
   Burger Queen
   </h1>
  </div>
        <div className="section-Title">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
            
            />
          </div>
    
          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
            
            />
          </div>
          
          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
        
        </div>
        </div>;
    }
  }
export default New;



