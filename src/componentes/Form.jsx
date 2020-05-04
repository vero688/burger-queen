import React from 'react';
import '../style/Form.css';



class Form extends React.Component{
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
  </div>
        <div className="section-Title">
           <p>
          New Waiter
        </p>
        </div>
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
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
           
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
          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
            />
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
          </form>
        </div>;
        
    }
}
export default Form;