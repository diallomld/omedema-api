
import { useEffect, useState } from "react";
import { getAllTeams } from "../../services/team/teamService";
import ReactPaginate from "react-paginate";
import logo from "../../assets/search-solid.svg";
import TeamComponent from "./Team.component";
import Search from "../common/Search";


function ListTeams() {


  const [teams, setTeams] = useState([])
  const [pageNumber, setPageNumber] = useState(0);
  const [searchTeamByName, setSearchTeamByName] = useState("");

  const teamsPerPage = 15;
  const pagesVisited = pageNumber * teamsPerPage;

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
  const handleChange = (e) => {
    setSearchTeamByName(e.target.value)
  }
  useEffect(() => {
    getAll()
  }, [])
  return (
    <div>
      <Search logo={logo} onchange={handleChange} />
      <TeamComponent teams={teams} pagesVisited={pagesVisited} teamsPerPage={teamsPerPage} searchTeamByName={searchTeamByName} />
      <br />
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