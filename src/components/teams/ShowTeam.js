
function ShowTeam({team,teamLead}) {
    return(
        <div className="card rounded-3" key={team.id} style={{width:60+'%', marginLeft:20+'%',borderRadius: 10 + 'px'}}>
        <div className="card-body">
          <img className="rounded-circle" height="100px" alt="Avatar" width="100px" src={teamLead.avatarUrl? teamLead.avatarUrl :'http://placehold.it/100X100'} />
          <p style={{fontSize:30, marginLeft:106+'px',marginTop:-92+'px'}}><b>Team Lead :</b> {teamLead.displayName? teamLead.displayName :"non defini"}</p>
          <h5 className="card-text" style={{fontSize:30,marginLeft:106+'px',marginTop:-29+'px'}}><b>Team Name :</b> {team.name}</h5>
        </div>
      </div>
    )
}
export default ShowTeam