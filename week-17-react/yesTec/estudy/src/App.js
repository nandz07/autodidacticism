import logo from './logo.svg';
import './App.css';
import EventsChange from './components/EventsChange'
import HookesStudy from './components/HookesStudy'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Table,Accordion,Card,Navbar,Container,Nav,NavDropdown} from "react-bootstrap";
import States from './components/states'


function App() {

  const states=[
    {name:'Kerala',language:'Malayalam',population:1000},
    {name:'Tamilnadu',language:'Tamil',population:1000},
    {name:'Karnadaka',language:'Kannada',population:1000},
  ]
  return (
    <div className="App">
      <Container>
      <States states={states} />
      </Container>
    </div>
  );
}

export default App;
