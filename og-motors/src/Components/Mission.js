import { Grid2, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Mission(){
    return (
        <Box
            sx={{
                width:"100%",
                backgroundColor:"#1A2022"
            }}
            height="100vh"
        >
            <Grid2 container spacing={0} rowSpacing={20}>
                <Grid2 size={10}>
                    <Box
                        sx={{
                            width:"100%",
                            backgroundColor:"#CCCFD0"
                        }}
                    >
                        <Grid2 container spacing={0}>
                            <Grid2 display="flex" offset={2} textAlign="center" size="auto" justifyContent="center" alignContent="center">
                                <Typography color="#2D3436" variant="h2">
                                    Our Mission
                                </Typography>
                            </Grid2>
                        </Grid2>
                    </Box>
                </Grid2>
                <Grid2 size={10} offset={2}>
                    <Box
                        sx={{
                            backgroundColor:"#CCCFD0",
                            paddingLeft:"8%",
                            paddingRight:"20%",
                            paddingTop:"4%",
                            paddingBottom:"4%"
                        }}
                    >
                        <Typography color="#2D3436" variant="body1">
                            At OG Motors, we are committed to delivering a safe, luxurious, and unforgettable driving experience. Our mission is to redefine travel by offering state-of-the-art Tesla vehicles paired with exceptional hospitality. We prioritize your comfort and peace of mind, ensuring every journey blends innovation, elegance, and thoughtful care. Explore the future of driving with confidence and style-
                            <br></br>your experience begins here
                        </Typography>
                    </Box>
                </Grid2>
            </Grid2>
        </Box>
    );
}