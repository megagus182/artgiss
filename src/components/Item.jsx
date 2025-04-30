import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import "./Item.css";
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Item({ item, title }) {
  const celular = useMediaQuery('(min-width:450px)');
  return (
    <Box>
    {celular ?
      <Paper className="paperBanner" sx={{ backgroundColor: '#f8f8f8', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> {/* Centramos el contenido */}
      <Typography className="nameBanner" fontFamily={"Montserrat"} fontWeight="bold" sx={{ fontSize:"2.5rem", color: '#333', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>{title}</Typography> {/* Fuente Montserrat, color oscuro y sombra para legibilidad */}

        <img
          className="imagenBanner"
          width="100%"
          height={"auto"}
          style={{ maxHeight: '400px', objectFit: 'cover', borderRadius: '10px', opacity: 0.8 }} 
          src={item}
          alt={title} 
        />

      </Paper>
    :
    <Paper className="paperBannerCel" sx={{ backgroundColor: '#f8f8f8', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> {/* Centramos el contenido */}
    <Typography className="nameBannerCel" fontFamily={"Montserrat"} fontWeight="bold" fontSize="1.8rem" sx={{ color: '#333', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>{title}</Typography> {/* Fuente Montserrat, color oscuro y sombra para legibilidad */}

      <img
        className="imagenBannerCel"
        width="100%"
        height="149px"
        style={{ objectFit: 'cover', borderRadius: '10px', opacity: 0.8 }} 
        src={item}
        alt={title} 
      />

  </Paper>
  }
  </Box>
  );
}