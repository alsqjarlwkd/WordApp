import './App.css';
import Header from './component/Header'
import DayList from './component/DayList'
import Days from './component/Day'
import EmptyPage from './component/EmptyPage';
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header></Header>
      <Switch>
        <Route exact path="/">
        <DayList></DayList>
        </Route>
        <Route path="/day/:day">
        <Days></Days>
        </Route>
        <Route path="/create_word">
        <CreateWord></CreateWord>
        </Route>
        <Route path="/create_day">
          <CreateDay></CreateDay>
        </Route>
        <Route>
          <EmptyPage></EmptyPage>
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
