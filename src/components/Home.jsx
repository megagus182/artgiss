import a from "../images/ban2.jpg";
import d from "../images/ban3.jpg";
import f from "../images/ban4.jpg";
import perfil from "../images/perfil.jpg";
import {
  Paper,
  Box,
  Typography,
  ImageList,
  ImageListItem,
  Button,
} from "@mui/material/";
import ang from "../images/ang.jpg";
import cats from "../images/cats.jpg";
import dieta from "../images/dieta.jpg";
import gotica from "../images/gotica.jpg";
import lovemusic from "../images/lovemusic.jpg";
import mix from "../images/mix.jpg";
import rat from "../images/rat.jpg";
import tape from "../images/tape.jpg";
import "./Home.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
        main: "#b01db3",
        contrastText: "#fff",
      },
    },
  });

  const itemData = [
    {
      img: cats,
      title: "cats",
      rows: 2,
      cols: 2,
    },
    {
      img: ang,
      title: "angel",
    },
    {
      img: dieta,
      title: "dieta",
    },
    {
      img: gotica,
      title: "gotica",
      rows: 2,
      cols: 2,
    },
    {
      img: lovemusic,
      title: "lovemusic",
      cols: 2,
    },
    {
      img: mix,
      title: "mix",
      rows: 2,
      cols: 2,
    },
    {
      img: rat,
      title: "rat",
    },
    {
      img: tape,
      title: "tape",
    },
  ];
  
  return (
    <div className="hommie">
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner" style={{ height: "400px" }}>
          <div class="carousel-item">
            <img src={a} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={f} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={d} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <Paper sx={{ backgroundColor: "#C0F7FF" }} elevation={5}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            height: "400px",
          }}
        >
          <Box
            width={"50%"}
            padding={"10px"}
            display={"flex"}
            flexDirection={"column"}
            textAlign={"center"}
            justifyContent={"center"}
          >
            <Typography variant="h2" fontWeight="bolder" color="#ed82ff">
              Claudia Gissel
            </Typography>
            <Typography variant="h3">🖌️🎨</Typography>
            <Typography variant="h6">
              Soy apasionada por el arte, me caracterizo por realizar mis
              propias illustraciones
            </Typography>
            <Typography variant="h6">con un toque lindo y bizarro</Typography>
          </Box>
          <Box
            width={"50%"}
            display={"flex"}
            justifyContent={"flex-end"}
            alignItems={"flex-end"}
          >
            <img width={"auto"} height={"400px"} src={perfil} alt="..." />
          </Box>
        </Box>
      </Paper>

      <Paper
        sx={{
          backgroundColor: "#FFB7FD",
          margin: "30px",
          padding: "20px",
          textAlign: "center",
        }}
        elevation={5}
      >
        <ImageList sx={{ margin: 3 }} variant="woven" cols={3} gap={13}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                style={{ borderRadius: 10 }}
                src={`${item.img}?w=161&fit=crop&auto=format`}
                srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <ThemeProvider theme={theme}>
          <Button variant="contained" color="rosita">
            Ver mas. . .
          </Button>
        </ThemeProvider>
      </Paper>
    </div>
  );
}
