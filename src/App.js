import Main from './components/Main/Main';
import Container from 'react-bootstrap/Container'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/About/About';
import NoMatch from './components/NoMatch/NoMatch';


function App() {
  return (
    <div>
      <Container>
        <Router>
          <Switch>
            <Route exact path='/home'>
              <Main></Main>
            </Route>
            <Route exact path='/'>
              <Main></Main>
            </Route>
            <Route path='/About/:uid'>
              <About></About>
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
