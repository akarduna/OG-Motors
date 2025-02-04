import { Box, Grid2, Typography} from '@mui/material';
import "./Grid.css";

export default function Header(){
    return (
    <Box className="GridStyle">
        <Box display="flex" height="2.5vh" width="100%">
        </Box>
        <Grid2 container justifySelf="center" spacing={12} columns={12} width="80%" >
          <Grid2 size="auto" offset={1}>
            <Typography marginBottom={0} variant='h1' gutterBottom>
              OG MOTORS
            </Typography>
          </Grid2>
          <Grid2 offset="auto" size="auto" alignContent="flex-end">
            <Typography variant='h4' gutterBottom>
              Mission
            </Typography>
          </Grid2>
          <Grid2 size="auto" alignContent="flex-end">
            <Typography variant='h4' gutterBottom>
              Team
            </Typography>
          </Grid2>
          <Grid2 size="auto" alignContent="flex-end">
            <Typography variant='h4' gutterBottom>
              Fleet
            </Typography>
          </Grid2>
          <Grid2 size="auto" alignContent="flex-end">
            <Typography variant='h4' gutterBottom>
              Book
            </Typography>
          </Grid2>
        </Grid2> 
        <Box display="flex" height="2.5vh" width="100%">
        </Box>             
    </Box>
    );
}