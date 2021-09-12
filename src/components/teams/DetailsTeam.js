import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getTeamById } from "../../services/teamService"
import { getUserById } from "../../services/userService"


function DetailsTeam(){
  
    const [team, setTeam] = useState([])
    const [teamLead, setTeamLead] = useState([])
  
    let {id} = useParams()

    const getById = async (idp) => {

      try {
        const response = await getTeamById(idp)
        setTeam(response.data)
        
      } catch (error) {
        console.error(error);
      }
    };
    const getTeamLead = async (idp) => {
      try {
          const response = await getTeamById(idp)

          setTeamLead(response.data)
        
        } catch (error) {
          console.error(error);
        }
    };

    useEffect(() => {
      getById(id)
      getTeamLead(team.teamLeadId)
      //console.log('teamlead ' +JSON.stringify(teamLead))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
      return(
          <>
            <div className="card" key={team.id}>
                <div className="card-body">
                  <h5 className="card-title">Team Name : {team.name}</h5>
                  <img className="rounded-circle" height="100px" alt="Avatar" width="100px" src={'http://placehold.it/150X150'}/>
                  <b>Team Lead :</b> {team.teamLeadId?team.teamLeadId: "non defini"}
                </div>
            </div>
            <hr data-content="List of members" className="hr-text"/>
          </>
          )
}

export default DetailsTeam