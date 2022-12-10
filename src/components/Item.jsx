import React from "react";
import { Box, Paper } from "@mui/material";
import "./Item.css";
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Item({ item, title }) {
  const celular = useMediaQuery('(min-width:450px)');
  return (
    <Box>
    {celular ? 
      <Paper className="paperBanner">
      <p className="nameBanner">{title}</p>

        <img
          className="imagenBanner"
          width="100%"
          height={"auto"}
          src={item}
          alt="notFound"
        />

    </Paper>
  :
  <Paper className="paperBannerCel">
  <p className="nameBannerCel">{title}</p>

    <img
      className="imagenBannerCel"
      width="100%"
      height={"auto"}
      src={item}
      alt="notFound"
    />

</Paper>
}
</Box>
  );
}
