import { BrowserRouter as Router, Route } from 'react-router-dom'
import GreetingPage from './components/GreetingPage/GreetingPage'
import MainPage from './components/MainPage/MainPage'
import Wrapper from './components/Wrapper/Wrapper'


function App() {
  
  return (
    <Router>
      <Wrapper>
        <Route path="/" exact component={GreetingPage}/>
        <Route path="/game" component={MainPage}/>
      </Wrapper>
    </Router>

  )
}

export default App;
