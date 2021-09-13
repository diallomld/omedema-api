import "../teams/Listteams.css";
function Search(props) {

    return (
        <div className="d-flex justify-content-center">
            <div className="search">
                <input type="text" className="search-input" placeholder="Search..."
                    onChange={props.onchange}
                />
                <button className="search-icon"> <img src={props.logo} width="30" alt="search" /> </button>
            </div>
        </div>
    )
}

export default Search