import logo from './logo.svg';
import Car from './Assets/Car.jfif'
import './App.css';
import { Box, Grid2, Typography } from '@mui/material';
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
            <Box display="flex" height="30%" justifyContent="center" alignItems="flex-end">
              <Typography variant='h2' gutterBottom>
                Experience The Future
              </Typography>
            </Box>
        </Box>
      </body>
    </div>
  );
}

export default App;
