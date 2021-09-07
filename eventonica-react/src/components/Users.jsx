import React, {useState} from 'react';

const Users = () => {
    //adding mock users 
    const marlin = { name: "Marlin", email: "marlin@gmail.com", id:"1" };
    const nemo = { name: "Nemo", email: "nemo@gmail.com", id: "2" };
    const dory = { name: "Dory", email: "dory@gmail.com" , id: "3"};

    //use setState to create uers and setUsers
    const [users, setUsers] = useState([marlin, nemo, dory])

    //use setstate to name field
    const [name, setName] = useState("");

    //use setstate to email field
    const [email, setEmail] = useState("");

    //use settate to user id field
    const [id, setId] = useState("");
  return (
   <>
     <section className="user-management">
              <h2>User Management</h2>

              <ul id="users-list">
                {/* display all existing Users here, iterating through users with map,  transforming each user into a <li></li> and add u as the key */}
                {users.map((user) => <li>User:   {user.name}, Email: {user.email}</li>)}
                
              </ul>

              <div>
                <h3>Add User</h3>
                <form id="add-user" action="#">
                  <fieldset>
                      {/* user name field */}
                  <div>
                    <label>Name</label>
                    {/* with value property, every time the user ty[es a name in name field, the name state is updated */}
                    <input type="text" id="add-user-name"
                    value={name} 
                    onChange={(e) => setName(e.target.value)}/>
                    </div>
                    {/* email field */}
                    <div><label>Email</label>
                    <input type="email" id="add-user-email"
                    value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    {/* id field */}
                    <div><label>User ID</label>
                    <input type="text" id="add-user-id"
                    value={id} onChange={(e) => setId(e.target.value)}/>
                    </div>
                    
                  </fieldset>
                
                  <input type="submit" value="Add" />
                </form>
              </div>

              <div>
                <h3>Delete User</h3>
                <form id="delete-user" action="#">
                  <fieldset>
                    <label>User ID</label>
                    <input type="text" id="delete-user-id" />
                  </fieldset>
                  <input type="submit" />
                </form>
              </div>
            </section>
   </>
  );
};

export default Users;