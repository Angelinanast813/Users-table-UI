import React, {Component} from 'react'
import '../componentStyles/UsersTableStyles.scss'

class UsersTable extends Component{

    constructor(props) {
        super(props);
        this.state = {users: []};
    }

    async componentDidMount() {
        try {
          await this.getUsers();
        } catch(err) {}
    }

    async getUsers() {
        const response = await fetch('http://localhost:4000/users');
        const usersArr = await response.json();
        this.setState({users: usersArr});
    }

    render() {
        this.res = this.state.users.map(function(item) {
            return <tr key={item.id}>
                <td className="text-blue">{item.id}</td>
                <td>{item.title}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.role}</td>
                <td className="text-blue">{item.email}</td>
            </tr>;
        });

              return(
                  <table width="100%" className="mt-4">
                      <tbody>
                      <tr>
                          <th>User Id</th>
                          <th>Title</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Role</th>
                          <th>Email</th>
                      </tr>
                      {this.res}
                      </tbody>
                  </table>
              );
      }
}

export default UsersTable
