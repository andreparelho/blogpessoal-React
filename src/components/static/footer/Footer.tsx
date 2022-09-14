import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Box, Grid } from '@mui/material';
import './Footer.css';

function Footer() {
    return (
        <>
            <div className='footer' >
                <Grid container direction="row" justifyContent="center" alignItems="center">

                    <Grid alignItems="center" item xs={12}>
                        <Box display="flex" alignItems="center" justifyContent="center">

                            <a href="https://www.facebook.com/generationbrasil" target="_blank" rel="noopener noreferrer">
                                <FacebookIcon style={{ fontSize: 30, color: "white" }} />
                            </a>
                            <a href="https://www.instagram.com/generationbrasil/" target="_blank" rel="noopener noreferrer">
                                <InstagramIcon style={{ fontSize: 30, color: "white" }} />
                            </a>
                            <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon style={{ fontSize: 30, color: "white" }} />
                            </a>

                        </Box>

                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Footer;