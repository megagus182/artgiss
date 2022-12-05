import { Paper, Typography, ImageList, ImageListItem } from "@mui/material";
import meraki from "../images/meraki.jpg";
import cats from "../images/cats.jpg";
import cute from "../images/cuteflower.jpg";
import sweetGame from "../images/sweetgame.jpg";
import lovemusic from "../images/lovemusic.jpg";
import yana from "../images/yana.jpg";
import lilit from "../images/lilit.jpg";
import tape from "../images/tape.jpg";
import comida from "../images/comida.jpg";
import 'animate.css';
import "./Galeria.css";
import { Link } from "react-router-dom";

const itemData = [
    {
      img: meraki,
      title: "meraki",
    },
    {
      img: cats,
      title: "cats",
    },
    {
      img: cute,
      title: "cuteFlower",
    },
    {
      img: sweetGame,
      title: "sweetGame",
    },
    {
      img: lovemusic,
      title: "lovemusic",
      cols: 2,
    },
    {
      img: yana,
      title: "yana",
    },
    {
      img: lilit,
      title: "lilit",
    },
    {
      img: tape,
      title: "tape",
    },
    {
      img: comida,
      title: "comidaRica",
    },
  ];

export default function Galeria(){
    return(
        <Paper
        sx={{
          backgroundColor: "#fce4ec",
          margin: "30px",
          padding: "20px",
          textAlign: "center",
          borderRadius: "20px",
        }}
        elevation={5}
      >
        <Typography variant="h2" color={"#9575cd"}>
          Mis obras
        </Typography>
        <ImageList sx={{ margin: 3 }} variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <div class="wrapper">
              <img
              className="imgHome"
                style={{
                  borderRadius: 10,
                  border: "solid",
                  borderWidth: "thin",
                }}
                src={`${item.img}?w=161&fit=crop&auto=format`}
                srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
               <div class="overlay">
                  <div class="content">
                    {item.title} 
                  </div>
                </div>
                </div>
            </ImageListItem>
          ))}
        </ImageList>
      </Paper>
    )
}