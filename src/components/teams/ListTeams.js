
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllTeams } from "../../services/teamService";
import ReactPaginate from "react-paginate";
import "./Listteams.css";
import logo from "../../assets/search-solid.svg";


function ListTeams(){

      const [teams, setTeams] = useState([])
      const [pageNumber, setPageNumber] = useState(0);
      const [searchTeamByName, setSearchTeamByName] = useState("");

      const teamsPerPage = 10;
      const pagesVisited = pageNumber * teamsPerPage;

      const displayTeams = teams
        .slice(pagesVisited, pagesVisited + teamsPerPage)
        .filter(value => {
          if (searchTeamByName=== "") 
            return value
          else if(value.name.toLowerCase().includes(searchTeamByName.toLowerCase()))
            return value
          
          return null
        })
        .map((data,index) => {
          return (
            <>
            <div className="card" style={{borderRadius:10+'px'}} key={index}>
            <div className="card-body">
              <h5 className="card-title">Team Name : {data.name}</h5>
              <Link className="btn btn-primary" to={'/teams/'+data.id} >Consulter</Link>
            </div>
          </div><br/>
          </>
        )
        });

      const pageCount = Math.ceil(teams.length / teamsPerPage);

      const changePage = ({ selected }) => {
        setPageNumber(selected);
      };

      const getAll = async () => {
  
        try {
          const response = await getAllTeams()
          setTeams(response.data)
         
        } catch (error) {
          console.error(error);
        }
      };
      useEffect(() => {
        getAll()
      })
      return(
        <div>
          <div className="d-flex justify-content-center">
              <div className="search"> 
                <input type="text" className="search-input" placeholder="Search..." name="searchTeamByName"
                onChange={e=>setSearchTeamByName(e.target.value)}
                />
                  <button className="search-icon"> <img src={logo} width="30" alt="search"/> </button> 
              </div>
          </div>
        {displayTeams}
        <br/>
          <ReactPaginate
            previousLabel="Precedent"
            nextLabel="Suivant"
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName="paginationBttns"
            previousLinkClassName="previousBttn"
            nextLinkClassName="nextBttn"
            disabledClassName="paginationDisabled"
            activeClassName="paginationActive"
          />
        </div>
      )
}

export default ListTeams