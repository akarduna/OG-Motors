import logo from './logo.svg';
import Car from './Assets/Car.jfif'
import './App.css';
import { Box, Grid2 } from '@mui/material';
import Header from './Components/Header';


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
        </Box>
      </body>
    </div>
  );
}

export default App;
