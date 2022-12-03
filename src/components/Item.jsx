import React from "react";
import { Paper } from "@mui/material";
import "./Item.css";

export default function Item({ item, title }) {
  return (
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
  );
}
