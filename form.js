
import React from "react";
class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {  //this.state is usually react object used to contain data or information about component 
      fields: {},   
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);   //triggered by input element and triggers the changing of this state  
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  

  }

  submituserRegistrationForm(e) {
    console.log(this.validateForm());
    
    e.preventDefault();
    if (this.validateForm()) {
        console.log(this.state);
         let fields = {};
         fields["username"] = "";
         fields["emailid"] = "";
         fields["mobileno"] = "";
         fields["password"] = "";
        this.setState({fields:fields});
        console.log(this.state);
        alert("Your Form has been submitted successfully.");
    }

  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;

      errors["username"] = "Please Fill the column";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["emailid"]) {
      formIsValid = false;
      
      errors["emailid"] = "Invalid Email";
    }

    if (typeof fields["emailid"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+))|("[\w-\s]+")([\w-]+(?:\.[\w-]+)))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "Invalid email";
      }
    }

    

    if (!fields["password"]) {
      formIsValid = false;

      errors["password"] = "Please Fill the password";

    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^.(?=.{8,})(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[@#$%&]).$/)) {
        formIsValid = false;
        errors["password"] = "Password is weak";
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
    
  }

render() {
  return (
    <center>
  <div id="main-registration-container">
   <div id="register">
    <b>
   <h1> Dynamic Form </h1>
   </b>
   <div className="form">
    
      <form method="post"  name="User Registration Form"  onSubmit= {this.submituserRegistrationForm} >
      <label>Enter your username </label><br></br>
      <input type="text" name="username" placeholder="your Username" datatestid="username"
       value={this.state.fields.username} onChange={this.handleChange} />
      <div className="errorMsg">{this.state.errors.username}</div>
      <br></br><label>Enter your email </label><br></br>
      <input type="email" name="emailid" placeholder="Your Email" value={this.state.fields.emailid} onChange={this.handleChange}  />
      <div className="errorMsg">{this.state.errors.emailid}</div>
      <br></br><label>Enter your password </label><br></br>
      <input type="password" name="password" placeholder="your Password" value={this.state.fields.password} onChange={this.handleChange} />
      <div className="errorMsg">{this.state.errors.password}</div>
      <br></br><input type="submit" className="button"  value="SUBMIT"/>
      </form>
      </div>
  </div>
</div>
</center>

    );
}


}

export default RegisterForm