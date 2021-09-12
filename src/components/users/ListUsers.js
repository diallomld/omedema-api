import { useEffect, useState } from "react";
import { getAllUsers } from "../../services/userService";





function ListUsers(props){

    const [users, setUsers] = useState([])

    const getAll = async () => {
  
      try {
        const response = await getAllUsers()
        setUsers(response.data)
       //console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() => {
      getAll()
    })

      return(
          users.map(data => {
              return (

                  <div className="card" key={data.id}>
                  <div className="card-body">
                    <h5 className="card-title">DisplayName {data.displayName}</h5>
                  </div>
                </div>
              )
          })
      )
}

export default ListUsers