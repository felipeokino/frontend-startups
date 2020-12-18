import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './Pages/Landing';
import Startups from './Pages/Startups';


export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route component={Startups} path="/startups" />
      </Switch>
    </Router>
  )
}


export default Routes