import React, { useEffect, useState } from "react";

import DeleteUser from "./DeleteUser";

const Users = () => {
  const [apiResponse, setApiResponse] = useState([]);

  const getUsers = () => {
    fetch("/users")
      //turn my response into a JSON
      .then((res) => res.json())
      //set default for apiresponse to be an empty array
      .then((res) => setApiResponse(res));
  };

  const addUser = (newUser) => {
    fetch("/users", {
      /*Add user on server side */
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    }).then(getUsers);
  };

  const deleteUser = (userId) => {
    fetch(`/users/${userId}`, {
      method: "DELETE",
    }).then(getUsers);
  };

  useEffect(() => {
    getUsers(); // useEffect will run getUsers() every time this component loads, as opposed to just the first time it is rendered. Empty array added witll stop inifinite runs
  }, []);

  //use setstate to name field
  const [name, setName] = useState("");

  //use setstate to email field
  const [email, setEmail] = useState("");

  //use settate to user id field
  const [id, setId] = useState("");

  //add onSubmit function
  const onSubmit = (event) => {
    event.preventDefault(); // Prevent default submission so that it stops it from refreshing and sending data
    const newUser = { name, email, id };
    addUser(newUser);
  };
  //call getUsers after the onSubmit

  return (
    <>
      <section className="user-management">
        <h2>User Management</h2>

        <ul id="users-list">
          {/* display all existing Users here, iterating through users with map,  transforming each user into a <li></li> and add u as the key */}
          {apiResponse.map((users, i) => {
            return (
              <li key={i}>
                User: {users.name}, Email: {users.email}, User ID: {users.id}
              </li>
            );
          })}
          {/* {users.map((user, i) => <li key={i}>User:   {user.name}, Email: {user.email}, User ID: {user.id}</li>)}
           */}
        </ul>

        <div>
          <h3>Add User</h3>
          <form id="add-user" action="#" onSubmit={onSubmit}>
            <fieldset>
              {/* user name field */}
              <div>
                <label>Name</label>
                {/* with value property, every time the user ty[es a name in name field, the name state is updated */}
                <input
                  type="text"
                  id="add-user-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              {/* email field */}
              <div>
                <label>Email</label>
                <input
                  type="email"
                  id="add-user-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* id field */}
              <div>
                <label>User ID</label>
                <input
                  type="text"
                  id="add-user-id"
                  value={id}
                  onChange={(e) => setId(Number(e.target.value))}
                />
              </div>
            </fieldset>
            <input type="submit" value="Add" id="addUser" />
            {/* reset button not working
                  <button onClick="document.getElementById('addUser').value='Add'">Reset</button> */}
          </form>
          <DeleteUser deleteUser={deleteUser} />
        </div>
      </section>
    </>
  );
};

export default Users;
