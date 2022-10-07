import './App.css';
import Header from './Components/Header'
import Navigation from './Components/Navigation'
import Leftcolumn from './Components/Leftcolumn'
import Mainrow from './Components/Mainrow'
import {AppBar, Button, Grid, TextField, Toolbar, IconButton, Tabs, Tab} from '@mui/material';

const linksArray = ["Products", "Services", "Overview", "Contact us"];

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation links={linksArray} />
      <Grid container spacing="2" >
        <Grid item xs={3} ms={3}>
          <Leftcolumn></Leftcolumn>
        </Grid>
        <Grid item xs={6} ms={6}>
          <Mainrow />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
