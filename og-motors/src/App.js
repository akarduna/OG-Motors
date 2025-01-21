import logo from './logo.svg';
import Car from './Assets/Car.jfif'
import './App.css';
import { Box, Grid2 } from '@mui/material';
import Header from './Components/Header';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Box 
          sx={{
            backgroundImage:`url(${Car})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "1012px",
            width: "100%"
            
          }}>
            <Header></Header>
        </Box>
      </header>
    </div>
  );
}

export default App;
