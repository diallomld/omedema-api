import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import ListTeams from '../components/teams/ListTeams';
import DetailsTeam from "../components/teams/DetailsTeam";

const routes =  (

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ListTeams} />
            <Route exact path="/teams/:id" component={DetailsTeam} />
        </Switch>
    </BrowserRouter>
)

export default routes