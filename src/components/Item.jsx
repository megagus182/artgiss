import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import "./Item.css";
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Item({ item, title }) {
  const celular = useMediaQuery('(min-width:450px)');
  return (
    <Box>
    {celular ? 
      <Paper className="paperBanner">
      <Typography className="nameBanner" fontFamily={"happy"}>{title}</Typography>

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
  <Typography className="nameBannerCel" fontFamily={"happy"} fontSize="3rem">{title}</Typography>

    <img
      className="imagenBannerCel"
      width="100%"
      height="149px"
      src={item}
      alt="notFound"
    />

</Paper>
}
</Box>
  );
}
