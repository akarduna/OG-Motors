import { Grid2, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Buzz from '../Assets/Buzz.png';

export default function OurTeam(){
    return(
        <Grid2 container spacing={0} rowSpacing={4} width="100%">
            <Grid2 size={10}>
                <Grid2 container spacing={0} border={1} borderLeft={0}>
                    <Grid2 display="flex" offset={2} textAlign="center" size="auto" justifyContent="center" alignContent="center">
                        <Typography variant="h2">
                            Our Mission
                        </Typography>
                    </Grid2>
                </Grid2>
            </Grid2>
            <Grid2 offset={2} size={10}>
                <Grid2 container spacing={0} border={1} borderRight={0}>
                    <Grid2 padding={4} offset={1} display="flex" textAlign="center" size="auto" justifyContent="center" alignContent="center">
                        <Box
                            component="img"
                            src={`${Buzz}`}>
                        </Box>
                    </Grid2>
                    <Grid2 padding={4} offset={2} display="flex" textAlign="center" size="auto" justifyContent="center" alignContent="center">
                        <Typography variant="h2">
                            Edward Fine
                        </Typography>
                    </Grid2>
                </Grid2>
            </Grid2>
            <Grid2 size={10}>
                <Grid2 container spacing={0} border={1} borderLeft={0}>
                    <Grid2 display="flex" offset={2} textAlign="center" size="auto" justifyContent="center" alignContent="center">
                        <Typography variant="h2">
                            Our Mission
                        </Typography>
                    </Grid2>
                </Grid2>
            </Grid2>
            <Grid2 size={10}>
                <Grid2 container spacing={0} border={1} borderLeft={0}>
                    <Grid2 display="flex" offset={2} textAlign="center" size="auto" justifyContent="center" alignContent="center">
                        <Typography variant="h2">
                            Our Mission
                        </Typography>
                    </Grid2>
                </Grid2>
            </Grid2>
        </Grid2>
    );
}