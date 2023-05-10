import { Box, Grid, Typography } from "@mui/material"
import { Navbar } from "../../layouts/Navbar/Navbar"
import {
    title,
    landingBGImage,
    titleContainer,
    mainSubtitle,
    mainDescriptiveText,
    mainDescriptiveBox,
    gridTextContainer,
    footerContainer
} from "./muiStyles"

export const LandingPage = () => {
    return (
        <Grid container>
            <Grid sx={landingBGImage}>
                <Navbar />
                <Grid container sx={titleContainer}>
                    <Typography sx={title}>Company Landing Page</Typography>
                    <Typography sx={mainSubtitle}>Login to get acces to our company dashboard</Typography>
                    <Box sx={gridTextContainer}>
                        <Box sx={mainDescriptiveBox}>
                            <Typography variant="h2" color="rgb(26, 115, 232)">300+</Typography>
                            <Typography variant="body1">Data Explanatory Charts</Typography>
                            <Typography sx={mainDescriptiveText} variant="body1">With company data to easily understand the workflow</Typography>
                        </Box>
                        <Box sx={mainDescriptiveBox}>
                            <Typography variant="h2" color="rgb(26, 115, 232)">100+</Typography>
                            <Typography variant="body1">Research Papers</Typography>
                            <Typography sx={mainDescriptiveText} variant="body1">With research results on our cutting-edge work</Typography>
                        </Box>
                        <Box sx={mainDescriptiveBox}>
                            <Typography variant="h2" color="rgb(26, 115, 232)">10+</Typography>
                            <Typography variant="body1">Academic Awards</Typography>
                            <Typography sx={mainDescriptiveText} variant="body1">In recognition of the dedication and effort of our team</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Grid container sx={footerContainer}>
                <Grid item sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    width: "100%"
                }}>
                    <Typography color="rgb(26, 115, 232)" sx={{ cursor: "pointer", width: "fit-content" }}>About Us</Typography>
                    <Typography color="rgb(26, 115, 232)" sx={{ cursor: "pointer", width: "fit-content" }}>Terms & Conditions</Typography>
                    <Typography color="rgb(26, 115, 232)" sx={{ cursor: "pointer" }}>Contact Us</Typography>
                    <Typography color="rgb(26, 115, 232)" sx={{ cursor: "pointer" }}>Privacy Policy</Typography>
                </Grid>
                <Typography variant="subtitle2">All rights reserved. For illustrative purposes only.</Typography>
            </Grid>
        </Grid>
    )
}