import { Grid2, Typography } from "@mui/material";
import { Box, height } from "@mui/system";

export default function Mission(){
    return (
        <Box
            sx={{
                width:"100%",
                backgroundColor:"#1A2022"
            }}
            height="100vh"
        >
        <Box
            sx={{
                width:"90%",
                backgroundColor:"#CCCFD0"
            }}
        >
            <Grid2 container justifySelf="flex-end" spacing={12} columns={12} width="88.888888%" >
                <Grid2 offset={1} size={12}>
                    <Typography color="#2D3436" variant="h2">
                        Our Mission
                    </Typography>
                </Grid2>
            </Grid2>
        </Box>
        <Box sx={{height:"30%"}}></Box>
        <Box
            sx={{
                width:"90%",
                justifySelf:"flex-end",
                backgroundColor:"#CCCFD0",
                paddingTop:"2%",
                paddingBottom:"2%"
            }}
        >
            <Grid2 container justifySelf="flex-start" spacing={12} columns={12} width="88.888888%" >
                <Grid2 offset={1} size={12}>
                    <Typography color="#2D3436" variant="body5">
                        At OG Motors, we are committed to delivering a safe, luxurious, and unforgettable driving experience. Our mission is to redefine travel by offering state-of-the-art Tesla vehicles paired with exceptional hospitality. We prioritize your comfort and peace of mind, ensuring every journey blends innovation, elegance, and thoughtful care. Explore the future of driving with confidence and style-
                        <br></br>your experience begins here
                    </Typography>
                </Grid2>
            </Grid2>
           
            </Box>
        </Box>
    );
}