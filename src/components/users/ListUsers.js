import './ListUsers.css'

import location from "../../assets/search-location-solid.svg";

function ListUsers({ users, searchUserByName }) {

  const displayTeams = users
    .filter(value => {
      if (searchUserByName === "")
        return value
      else if (value.displayName.toLowerCase().includes(searchUserByName.toLowerCase()))
        return value

      return null
    })
    .map(data => {
      return (
        <>
        <div class="card rounded-3" style={{width:60+'%', marginLeft:20+'%',borderRadius: 10 + 'px'}}>
          <div class="card-body">
            <li class="list-group-item">

              <img src={data.avatarUrl} class="rounded-circle" style={{ width: 150 + 'px', height: 150 + 'px' }} alt={data.displayName} />
              <b>  Display Name:</b> {data.displayName}
            </li>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>firstName: </b>{data.firstName}</li>
            <li class="list-group-item"><b>lastName: </b>{data.lastName}</li>
            <li class="list-group-item"><img src={location} width="50" color={'blue'} alt="location"/> {data.location}</li>
          </ul>
        </div><br/>
        </>
      )
    })
  return (
      <>
      <p className="text-center">{displayTeams.length} Result(s)</p>
      { displayTeams }
      </>
    )
}

export default ListUsers