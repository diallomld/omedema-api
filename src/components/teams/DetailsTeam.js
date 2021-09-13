import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getTeamById } from "../../services/team/teamService"
import { getUserById } from "../../services/users/userService"
import Search from "../common/Search"
import ListUsers from "../users/ListUsers"
import ShowTeam from "./ShowTeam"
import logo from "../../assets/search-solid.svg";


function DetailsTeam() {

  const [team, setTeam] = useState([])
  const [teamLead, setTeamLead] = useState([])
  const [users, setUsers] = useState([])
  const [usersOfTeam, setUsersOfTeam] = useState([])
  const [searchUserByName, setSearchUserByName] = useState("");
  //const element = "371d2ee8-cdf4-48cf-9ddb-04798b79ad9e"

  let { id } = useParams()



  const getById = () => {
        getTeamById(id).then(response =>{

        setTeam(response.data)
        getTeamMembers(response.data.teamMemberIds)
        console.log('getById ')
        getTeamLead(response.data.teamLeadId)
      })
      .catch (error => {
        console.error(error);
      }) 
    
  };
  const getTeamLead = (idp) => {
    
      getUserById(idp).then(response =>{

        setTeamLead(response.data)
        console.log("getTeamLead")
      })
      .catch(err => {
        console.log(err)
      })
  };
  const getTeamMembers = (userList) => {
    var array = [];
    userList.forEach(id => {
      
      getUserById(id).then(response => {
        array.push(response.data)
        console.log("getTeamMembers")
      })
        .catch(err => {
          console.log(err)
        })
    });
    setUsersOfTeam(array)

  };

  const handleChange = (e) => {
    setSearchUserByName(e.target.value)
  }

  useEffect(() => {
    getById()
    console.log("fonction un")
    //getTeamLead(team.teamLeadId)
    console.log("fonction deux")
    //getTeamMembers(users)
    console.log("fonction trois")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <ShowTeam team={team} teamLead={teamLead}/>
      <br/>
      <hr data-content="List of members" className="hr-text" />
      <br/>
      <Search logo={logo} onchange={handleChange} />
      <ListUsers users={usersOfTeam} searchUserByName={searchUserByName} />
    </>
  )
}

export default DetailsTeam