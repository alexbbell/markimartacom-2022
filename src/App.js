import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Navigation from './Components/Navigation'
import Leftcolumn from './Components/Leftcolumn'

const linksArray = ["Products", "Services", "Overview", "Contact us"];

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation links={linksArray} />
      <Leftcolumn></Leftcolumn>
    </div>
  );
}

export default App;
