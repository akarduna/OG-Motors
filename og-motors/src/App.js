import logo from './logo.svg';
import Car from './Assets/Car.jfif'
import './App.css';
import { Box, Grid2, Typography } from '@mui/material';
import Header from './Components/Header';
import Future from './Components/Future';
import Mission from './Components/Mission';
import OurTeam from './Components/OurTeam';


function App() {
  return (
    <div className="App">
      <body className='App-header'>
        <Box 
          sx={{
            backgroundImage:`url(${Car})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%, auto",
            width:"100%"
          }}
            height="100vh">
            <Header></Header>
            <Future/>
        </Box>
        <Mission></Mission>
        <br></br>
        <OurTeam></OurTeam>
      </body>
    </div>
  );
}

export default App;
