import React, {Component} from 'react'
import '../componentStyles/NewUserStyles.scss'

class NewUser extends Component{

    constructor(props) {
        super(props);
        this.state = {pswdBtnText: 'show', pswdConfBtnText: 'show'};
        this.user = {
            Id: 0,
            Title: '',
            FirstName: '',
            LastName: '',
            Email: '',
            Role: 'User',
            Password: '',
            ConfirmPassword: ''
        };
    }

    handleTitleChange = (e) => {
        this.user.Title = e.target.value;
    };
    handleFirstNameChange = (e) => {
        this.user.FirstName = e.target.value;
    };
    handleLastNameChange = (e) => {
        this.user.LastName = e.target.value;
    };
    handleRoleChange = (e) => {
        this.user.Role = e.target.value;
    };
    handleEmailChange = (e) => {
        this.user.Email = e.target.value;
    };
    handlePasswordChange = (e) => {
        this.user.Password = e.target.value;
    };
    handleConfirmPasswordChange = (e) => {
        this.user.ConfirmPassword = e.target.value;
    };

    createUser = () => {
        fetch('http://localhost:4000/users', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.user)
        }).then(function(response) {
            return response.json();
        });
    }

    showPassword = (id) => {
        var x = document.getElementById(id);
        if(x){
            if (x.type === "password") {
               x.type = "text";
               switch (id){
                   case "pswd":
                       this.setState({pswdBtnText: 'hide'});
                       break;
                   case "pswdConf":
                       this.setState({pswdConfBtnText: 'hide'});
                       break;
               }
            } else {
               x.type = "password";
                switch (id){
                    case "pswd":
                        this.setState({pswdBtnText: 'show'});
                        break;
                    case "pswdConf":
                        this.setState({pswdConfBtnText: 'show'});
                        break;
                }
            }
        }

    }

    render() {
        return(
            <form className="login-form">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="text-uppercase">Title</label>
                    <input type="text" className="form-control" placeholder="Enter title please..." onChange={this.handleTitleChange}/>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="form-group input-container">
                        <label htmlFor="exampleInputEmail1" className="text-uppercase">First Name</label>
                        <input type="text" className="form-control" placeholder="Enter first name..." onChange={this.handleFirstNameChange}/>
                    </div>
                    <div className="form-group input-container">
                        <label htmlFor="exampleInputEmail1" className="text-uppercase">Last Name</label>
                        <input type="text" className="form-control" placeholder="Enter last name..." onChange={this.handleLastNameChange}/>
                    </div>
                </div>

                <div className="d-flex justify-content-between">
                    <div className="form-group input-container">
                        <label htmlFor="exampleInputEmail1" className="text-uppercase">Role</label>
                        <select defaultValue="Choose Role" onChange={this.handleRoleChange}>
                            <option disabled>Choose Role</option>
                            <option>User</option>
                            <option>Admin</option>
                        </select>
                    </div>
                    <div className="form-group input-container">
                        <label htmlFor="exampleInputEmail1" className="text-uppercase">Email</label>
                        <input type="text" className="form-control" placeholder="Enter email..." onChange={this.handleEmailChange}/>
                    </div>
                </div>

                <div className="d-flex justify-content-between">
                    <div className="form-group input-container">
                        <label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label>
                        <div className="d-flex">
                            <input type="password" className="form-control" placeholder="Enter password..." id="pswd" onChange={this.handlePasswordChange}/>
                            <button className="btn btn-blue" onClick={() => this.showPassword("pswd")} type="button">{this.state.pswdBtnText}</button>
                        </div>
                    </div>

                    <div className="form-group input-container">
                        <label htmlFor="exampleInputPassword1" className="text-uppercase">Confirm Password</label>
                        <div className="d-flex">
                            <input type="password" className="form-control" placeholder="Confirm password..." id="pswdConf" onChange={this.handleConfirmPasswordChange}/>
                            <button className="btn btn-blue" onClick={() => this.showPassword("pswdConf")} type="button">{this.state.pswdConfBtnText}</button>
                        </div>
                    </div>
                </div>


                <div className="d-flex justify-content-center pt-3">
                    <button type="submit" className="btn btn-blue btn-add" onClick={this.createUser}>Add User</button>
                </div>
            </form>
        );
    }
}

export default NewUser
