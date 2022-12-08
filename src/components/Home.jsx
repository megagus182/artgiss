import ban1 from "../images/ban1.jpg";
import ban2 from "../images/ban2.jpg";
import ban3 from "../images/ban3.jpg";
import ban4 from "../images/ban4.jpg";
import perfil from "../images/perfil.jpg";
import {
  Paper,
  Box,
  Typography,
  ImageList,
  ImageListItem,
  Button,
} from "@mui/material/";
import amarte from "../images/amarte.jpg";
import cats from "../images/cats.jpg";
import lola from "../images/lola.jpg";
import sweetGame from "../images/sweetgame.jpg";
import magic from "../images/Magic.jpg";
import yana from "../images/yana.jpg";
import lilit from "../images/lilit.jpg";
import noodles from "../images/noodles.jpg";
import comida from "../images/comida.jpg";
import "./Home.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";
import { Link } from "react-router-dom";

export default function Home() {
  const theme = createTheme({
    status: {
      danger: "#e53e3e",
    },
    palette: {
      primary: {
        main: "#0971f1",
        darker: "#053e85",
      },
      rosita: {
        main: "#9575cd",
        contrastText: "#fff",
      },
    },
  });
  // Imagenes del Banner
  const itemBanner = [
    {
      img: ban1,
      title: "Luar 💀🌌🌑💖",
    },
    {
      img: ban2,
      title: "Color Love 💖🏳️‍🌈 💻🖊",
    },
    {
      img: ban3,
      title: "Pacman Day 💚💙💜🟡💻🖊",
    },
    {
      img: ban4,
      title: "AmistadXSiempre 💻🖍💀",
    },
  ];

  //Imagenes de Galeria Home
  const itemData = [
    {
      img: amarte,
      title: "Amarte es arte",
    },
    {
      img: cats,
      title: "Un mismo corazón",
    },
    {
      img: lola,
      title: "lola",
    },
    {
      img: sweetGame,
      title: "Sweet Game",
    },
    {
      img: magic,
      title: "Magic",
      cols: 2,
    },
    {
      img: yana,
      title: "Yana",
    },
    {
      img: lilit,
      title: "Lilit",
    },
    {
      img: noodles,
      title: "Noodles",
    },
    {
      img: comida,
      title: "Desayuno Inteligente",
    },
  ];
  return (
    <div className="hommie" style={{paddingBottom:"1px"}} >
     
      {/* CAROUSEL */}
      <Box className="boxBanner" marginBottom={"30px"}>
        <Paper height={400} className="paperBan" elevation={3}>
          <Carousel className="carusel" indicators={false} animation={"slide"}>
            {itemBanner.map((item) => (
              <Link to={`/detail/${item.id}`} key={item.id}>
                <Item key={item.id} item={item.img} title={item.title} />
              </Link>
            ))}
          </Carousel>
        </Paper>
      </Box>
      {/* CAROUSEL */}
      {/* Sobre Mi Home */}
      <Paper
        sx={{
          backgroundColor: "#a2d8ff",
          margin: "30px",
          borderRadius: "20px",
        }}
        elevation={5}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            height: "400px",
          }}
        >
          {/* Descripcion Sobre Mi */}
          <Box
            width={"50%"}
            padding={"10px"}
            display={"flex"}
            flexDirection={"column"}
            textAlign={"center"}
            justifyContent={"space-between"}
          >
            <Typography
              variant="h2"
              className="nombreGiss"
              fontWeight="bolder"
              color="#648dff"
            >
              Claudia Gissel
            </Typography>
            <Typography variant="h4">🖌️🎨</Typography>
            <Typography variant="h6">
              Disfruto mucho crear ilustraciones
            </Typography>
            <Typography variant="h6">
              basadas en el arte surrealista.
            </Typography>
            <Typography variant="h6">
              Dame un lapiz, pluma o tableta e
            </Typography>
            <Typography variant="h6">ilustrare tus ideas</Typography>
            <br></br>
            <Typography variant="h6">
              Mi principal meta como diseñadora es
            </Typography>
            <Typography variant="h6">
              transmitir mensajes creativos e ideas unicas
            </Typography>
            <Typography variant="h6">
              mezclando diferentes colores, figuras, tecnicas
            </Typography>
            <Typography variant="h6">y materiales</Typography>
          </Box>
          {/* Imagen Perfil */}
          <Box
            width={"50%"}
            display={"flex"}
            justifyContent={"flex-end"}
            alignItems={"flex-end"}
          >
            <img
              width={"auto"}
              height={"400px"}
              className="imgPerfil"
              src={perfil}
              alt="..."
            />
          </Box>
        </Box>
      </Paper>
      {/* Galeria Home */}
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
          Un poco de mi galeria
        </Typography>
        <ImageList sx={{ margin: 3 }} variant="quilted" cols={3} gap={13}>
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
                    {item.title} <Link to={`/galeria`}>mas ..</Link>
                  </div>
                </div>
              </div>
            </ImageListItem>
          ))}
        </ImageList>
        {/* Boton para ver mas */}
        <ThemeProvider theme={theme}>
          <Link to={`/galeria`}>
            <Button variant="contained" color="rosita">
              Ver mas. . .
            </Button>
          </Link>
        </ThemeProvider>
      </Paper>
    </div>
  );
}
