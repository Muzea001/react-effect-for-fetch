import {useEffect,useState} from "react";
import axios from 'axios';
import UserList from "./components/UsersList";

function UsersSection() {
  const [users,setUsers] = useState([]);
  const getUsers = async () => {
    try {
      const response = await axios.get("https://boolean-uk-api-server.fly.dev/sebgro98/contact");
      const data = response.data;
      console.log(data);
      setUsers(data);
    }
    catch(error){
      console.log(error);

    }

  };

  useEffect(() => {
    getUsers();},[]);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
      <UserList userList={users}></UserList>
      </div>
    </section>
  )
}

export default UsersSection
