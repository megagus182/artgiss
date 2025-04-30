import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import { SvgIcon } from '@mui/material';
import { ReactComponent as TikTokSVG } from '../images/tiktok.svg'; 

function TikTokIcon(props) {
  return <SvgIcon component={TikTokSVG} viewBox="0 0 25 25" {...props} />;
}


export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f5f5f5',
        padding: '20px',
        textAlign: 'center'
      }}
    >
      <Typography variant="body2" color="text.secondary" marginBottom={1}>
        &copy; {new Date().getFullYear()} ArtGiss - Claudia Gissel. Todos los derechos reservados.
      </Typography>
      <Box>
        <IconButton color="primary" aria-label="Facebook" href="https://www.facebook.com/Art.giss" target="_blank" rel="noopener noreferrer">
          <FacebookIcon />
        </IconButton>
        <IconButton color="primary" aria-label="Instagram" href="https://www.instagram.com/art.giss.x3/" target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </IconButton>
        <IconButton color="primary" aria-label="TikTok" href="https://www.tiktok.com/@gissx3" target="_blank" rel="noopener noreferrer">
           <TikTokIcon /> 
        </IconButton>
        <IconButton color="primary" aria-label="TikTok" href="https://www.linkedin.com/in/claudia-sanchez-payan/" target="_blank" rel="noopener noreferrer">
          <LinkedinIcon /> 
        </IconButton>
      </Box>
      <Typography variant="body2" color="text.secondary" marginTop={1}>
        <Link to="/contactame" style={{ color: 'inherit', textDecoration: 'none' }}>
          Contacto
        </Link>
      </Typography>
    </Box>
  );
}