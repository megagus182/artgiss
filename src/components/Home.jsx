import "@fontsource/sora/400.css";
import "@fontsource/sora/700.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/700.css";
import React from "react";
import perfil from "../images/perfil.jpg";
import header from "../images/header.jpg";
import {
  Paper,
  Box,
  Typography,
  ImageList,
  ImageListItem,
  Button,
} from "@mui/material";
import amarte from "../images/amarte.jpg";
import cats from "../images/cats.jpg";
import lola from "../images/lola.jpg";
import sweetGame from "../images/sweetgame.jpg";
import magic from "../images/Magic.jpg";
import yana from "../images/yana.jpg";
import "./Home.css";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Home() {
  const celular = useMediaQuery("(min-width:450px)");

  const featuredArt = [
    { img: amarte, title: "Amarte es arte" },
    { img: cats, title: "Un mismo corazón" },
    { img: lola, title: "lola" },
    { img: sweetGame, title: "Sweet Game" },
    { img: magic, title: "Magic" },
    { img: yana, title: "Yana" },
  ];

  return (
    <div className="hommie">
      {/* Encabezado */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: celular ? "400px" : "200px",
          overflow: "hidden",
          borderRadius: "8px",
          marginBottom: "30px",
        }}
      >
        <img
          src={header}
          alt="Imagen de encabezado del portafolio"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.8,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "#fff",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
          }}
        >
          <Typography variant={celular ? "h2" : "h4"} fontWeight="bold">
            Bienvenido al Portafolio de Claudia Gissel
          </Typography>
          <Typography variant={celular ? "h5" : "subtitle1"}>
            Ilustración Surrealista y Diseño Creativo
          </Typography>
        </Box>
      </Box>

      {/* Sobre mí */}
      {celular ? (
        <Paper
          sx={{
            backgroundColor: "#f8f8f8",
            maxWidth: "960px",
            margin: "0 auto 30px auto",
            borderRadius: "20px",
            padding: "40px",
          }}
          elevation={5}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={perfil}
              alt="Perfil de Claudia"
              style={{
                width: "200px",
                height: "200px",
                objectFit: "cover",
                borderRadius: "50%",
                marginRight: "30px",
              }}
            />
            <Box sx={{ maxWidth: "500px" }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Sobre mí
              </Typography>
              <Typography variant="body1" paragraph>
                Soy Claudia Gissel, ilustradora surrealista y diseñadora gráfica
                con una pasión por convertir ideas en obras visuales
                impactantes. Me especializo en ilustración digital, combinando
                creatividad con técnica.
              </Typography>
              <Link to="/sobremi" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ mt: 2, fontWeight: "bold" }}
                >
                  Ver más
                </Button>
              </Link>
            </Box>
          </Box>
        </Paper>
      ) : (
        <Paper
          sx={{
            backgroundColor: "#f8f8f8",
            margin: "10px auto 20px auto",
            borderRadius: "15px",
            padding: "20px",
            textAlign: "center",
            maxWidth: "90%",
          }}
          elevation={3}
        >
          <img
            src={perfil}
            alt="Perfil de Claudia"
            style={{
              width: "120px",
              height: "120px",
              objectFit: "cover",
              borderRadius: "50%",
              marginBottom: "15px",
            }}
          />
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Sobre mí
          </Typography>
          <Typography variant="body2" paragraph>
            Soy Claudia Gissel, ilustradora surrealista y diseñadora gráfica con
            una pasión por convertir ideas en obras visuales impactantes.
          </Typography>
          <Link to="/sobremi" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              sx={{ mt: 1, fontWeight: "bold" }}
            >
              Ver más
            </Button>
          </Link>
        </Paper>
      )}

      {/* Galería */}
      <Box sx={{ maxWidth: "960px", margin: "0 auto", padding: "20px" }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Galería Destacada
        </Typography>
        <ImageList variant="masonry" cols={celular ? 3 : 2} gap={8}>
          {featuredArt.map((item, index) => (
            <ImageListItem key={index}>
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                style={{ borderRadius: "12px" }}
              />
              <Typography
                variant="caption"
                display="block"
                textAlign="center"
                mt={1}
              >
                {item.title}
              </Typography>
            </ImageListItem>
          ))}
        </ImageList>
        <Box textAlign="center" mt={4}>
          <Link to="/galeria" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="secondary"
              sx={{ mt: 2, fontWeight: "bold" }}
            >
              Ver más obras
            </Button>
          </Link>
        </Box>
      </Box>

      {/* Contacto */}
      <Box
        sx={{
          backgroundColor: "#f0f0f0",
          padding: "40px 20px",
          marginTop: "40px",
        }}
      >
        <Typography variant="h5" textAlign="center" gutterBottom>
          ¿Te interesa colaborar?
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          maxWidth="600px"
          margin="0 auto"
          mb={3}
        >
          Ponte en contacto para proyectos personalizados, ilustraciones únicas
          o colaboraciones creativas.
        </Typography>
        <Box textAlign="center">
          <Link to="/contacto" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="secondary"
              sx={{ mt: 2, fontWeight: "bold" }}
            >
              Contactar
            </Button>
          </Link>
        </Box>
      </Box>
    </div>
  );
}
