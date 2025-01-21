import { Box, Grid2, Typography} from '@mui/material';

export default function Header(){
    return (
    <Box
        sx={{
          background: 'linear-gradient(180deg, #1a2022, rgba(31, 36, 38, 0.96) 10%, rgba(37, 42, 44, 0.9) 16.97%, rgba(45, 50, 51, 0.82) 27.12%, rgba(132, 132, 132, 0) 74.8%)',
          flexGrow: "1",
        }}>
        <Box display="flex" height="2.5vh">

        </Box>
        <Grid2 container spacing={2} justifyContent="flex-end">
          <Grid2 size={6} justifyContent="flex-end">
            <Box sx={{
                display:"flex",
                flexFlow: "row",
              }} justifyContent="flex-end">
              <Typography variant='h2' gutterBottom>
                OG MOTORS
              </Typography>
            </Box>
          </Grid2>
          <Grid2 size={6} flexDirection="column" flexGrow={1} >
            <Box sx={{
              display:"flex",
              flexFlow: "column",
              height: "100%"
            }} justifyContent="center">
              <Grid2 container spacing={8} justifyContent="center">
                <Grid2 size="auto">
                  <Typography variant='h6' gutterBottom>
                    Mission
                  </Typography>
                </Grid2>
                <Grid2 size="auto">
                <Typography variant='h6' gutterBottom>
                    Team
                  </Typography>
                </Grid2>
                <Grid2 size="auto">
                <Typography variant='h6' gutterBottom>
                    Fleet
                  </Typography>
                </Grid2>
                <Grid2 size="auto">
                <Typography variant='h6' gutterBottom>
                    Book
                  </Typography>
                </Grid2>
              </Grid2>              
            </Box>
          </Grid2>
        </Grid2>
      </Box>

    );
}