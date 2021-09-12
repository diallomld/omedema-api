import { useState } from "react";
import { getTeamById } from "../services/teamService";





function TeamDetails(props){
    const [team, setTeam] = useState([])


    const getById = async () => {
    
        try {
          const { data } = await getTeamById(props.id)
          setTeam(data)

          console.log(data)
         
        } catch (error) {
          console.error(error);
        }
      };

      return(
        <div className="card" key={team.id}>
        <div class="card-body">
          <h5 class="card-title">{team.name}</h5>
          <p class="card-text">Team lead {team.id}</p>
        </div>
      </div>
      )
}

export default TeamDetails