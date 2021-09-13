import { Link } from "react-router-dom";
import "./Listteams.css";
import team from "../../assets/team.jpg";
import { SendOutlined } from "@ant-design/icons";
function TeamComponent({ teams, pagesVisited, teamsPerPage, searchTeamByName }) {
    const displayTeams = teams
        .filter(value => {
            if (searchTeamByName === "")
                return value
            else if (value.name.toLowerCase().includes(searchTeamByName.toLowerCase()))
                return value

            return null
        })
        .slice(pagesVisited, pagesVisited + teamsPerPage)
        .map((data, index) => {
            return (
                <>
                    <div className="card" style={{ borderRadius: 10 + 'px',width:60+'%', marginLeft:20+'%'}} key={index}>
                        <div className="card-body" style={{ fontSize: 30, fontFamily: 'serif' }}>
                            <img className="rounded-circle" width='150' src={team} alt={data.name} />
                            <b>  Team Name :</b> {data.name}<br />
                            <Link className="btn btn-primary btn-block" style={{ fontFamily: 'sans-serif', fontSize: 20, marginLeft: 161 + 'px', marginTop: -116 + 'px' }} to={'/teams/' + data.id} ><SendOutlined /> Consulter</Link>
                        </div>
                    </div><br />
                </>
            )
        });
    return (
        <>
            <p className="text-center">{displayTeams.length} Result(s)</p>
            {displayTeams}
        </>
    )
}
export default TeamComponent