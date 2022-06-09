import React, { Component, useState } from "react";

import User from "./User";
import classes from "./Users.module.css";

const DUMMY_USERS = [
  { id: "u1", name: "İlhas" },
  { id: "u2", name: "Şökki" },
];
class Users extends Component{
    constructor(){
        super();
        this.state ={
            showUsers:true,
            more: "TEST",
        }
    };

    toggleUsersHandler(){
        this.setState((curState)=>{
            return {showUsers: !curState.showUsers};
        });
    }
    render() {
        const usersList = (
          <ul>
            {DUMMY_USERS.map((user) => (
              <User key={user.id} name={user.name} />
            ))}
          </ul>
        );
    
        return (
          <div className={classes.users}>
            <button onClick={this.toggleUsersHandler.bind(this)}>
              {this.state.showUsers ? 'Hide' : 'Show'} Users
            </button>
            {this.state.showUsers && usersList}
          </div>
        );
      }
    }
export default Users;

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(false);

//   const toggleUsersHandle = () => {
//     setShowUsers((curState) => !curState);
//   };
//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );
