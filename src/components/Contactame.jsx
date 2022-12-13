import {
  Box,
  Tooltip,
  Button,
  Alert,
  Typography,
  AlertTitle,
  FormLabel,
  Input,
  FormGroup,
  FormHelperText,
  TextField,
  Paper
} from "@mui/material/";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import face from "../images/face.png";
import tik from "../images/tik.png";
import insta from "../images/insta.png";
import call from "../images/llamame.png";
import "./Home.css";
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Contactame() {
  const [input, setInput] = useState("");
  const handleInputChange = (e) => setInput(e.target.value);
  const [inputName, setInputName] = useState("");
  const handleInputNameChange = (e) => setInputName(e.target.value);
  const [inputMessage, setInputMessage] = useState("");
  const handleInputMessageChange = (e) => setInputMessage(e.target.value);
  const isEmailError = input === "";
  const isNameError = inputName === "";
  const isMessageError = inputMessage === "";
  const form = useRef();
  const celular = useMediaQuery('(min-width:450px)');

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_kgwu2uc",
        "template_i0822lk",
        form.current,
        "UoL2za3bsCOGDob5k"
      )
      .then((res) => {
        <Alert severity="success">
          <AlertTitle>Mensaje Enviado</AlertTitle>Gracias por contactarme!!
        </Alert>;
      });
  }

  return (
    <Box>
    {celular ?
    <Box className="hommie" marginTop={0} padding="20px">
      
      <Paper sx={{margin:"20px", padding:"20px", backgroundColor: "rgb(252 228 236 / 50%)",marginTop:0}} elevation={5}>
      <Box display={"flex"} alignItems="center" textAlign={"center"} justifyContent={"center"}>
        <Box>
        <Typography textAlign={"center"} variant="h3">
            ¿Necesitas una Ilustración
          </Typography>
          <Typography textAlign={"center"} variant="h3" paddingTop={"30px"}>
            Diseño o logotipo?
          </Typography>
          <Typography textAlign={"center"} variant="h3" paddingTop={"30px"}>
            ¡Trabajemos juntos!
          </Typography>
        </Box>
        <Box display={"contents"}>
          <img src={call} width="30%" alt="llamame" />
        </Box>
      </Box>
      </Paper>
      <Paper sx={{margin:"20px", backgroundColor: "rgb(162 216 255 / 50%)"}} elevation={5}>
      <Typography textAlign={"center"} variant="h2" fontFamily="romantic" paddingTop={"30px"}>
        Contactame!
      </Typography>
      <Box width={"100%"} heigh={"100vh"} display={"flex"} jus className="Home">
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          width={"50%"}
          marginLeft={"20px"}
          textAlign={"center"}
          className="leftSideFromHome"
        >
          {/* ICONOS */}
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
          >
            <Box>
              <Tooltip label="Go to my Facebook" aria-label="A tooltip">
                <a href="https://www.facebook.com/Art.giss">
                  <img
                    height={"fit-content"}
                    width={"20%"}
                    src={face}
                    alt="github"
                  />
                </a>
              </Tooltip>
            </Box>
            <Box>
              <Tooltip label="Go to my Instagram" aria-label="A tooltip">
                <a href="https://www.instagram.com/art.giss.x3/">
                  <img
                    height={"fit-content"}
                    width={"20%"}
                    src={insta}
                    alt="linkedin"
                  />
                </a>
              </Tooltip>
            </Box>
            <Box>
              <Tooltip label="Go to my TikTok" aria-label="A tooltip">
                <a href="https://www.tiktok.com/@gissx3">
                  <img
                    height={"fit-content"}
                    width={"20%"}
                    src={tik}
                    alt="cv"
                  />
                </a>
              </Tooltip>
            </Box>
          </Box>
        </Box>
        {/* FORMULARIO */}
        <Box
          width={"50%"}
          marginTop={"50px"}
          marginBottom={"50px"}
          marginRight={"30px"}
          className="rightSideFromHome"
        >
          <Box>
            <form ref={form} onSubmit={sendEmail}>
              <FormGroup>
                <FormLabel>Nombre</FormLabel>
                <Input
                  type="text"
                  placeholder="Name"
                  name="from_name"
                  value={inputName}
                  onChange={handleInputNameChange}
                />
                {!isNameError ? (
                  <FormHelperText>Ingresa tu nombre</FormHelperText>
                ) : (
                  <FormHelperText>Nombre es requerido</FormHelperText>
                )}
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  placeholder="email"
                  name="email"
                  value={input}
                  onChange={handleInputChange}
                />
                {!isEmailError ? (
                  <FormHelperText>
                    Ingresa el email donde quieres recibir mi respuesta
                  </FormHelperText>
                ) : (
                  <FormHelperText>Email es requerido</FormHelperText>
                )}
                <FormLabel>Mensaje</FormLabel>
                <TextField
                  type="text"
                  height={"20"}
                  name="message"
                  placeholder="Message"
                  value={inputMessage}
                  onChange={handleInputMessageChange}
                />
                {!isMessageError ? (
                  <FormHelperText>
                    Escribe un mensaje para contactarme
                  </FormHelperText>
                ) : (
                  <FormHelperText>Mensaje es requerido.</FormHelperText>
                )}
                <br></br>
                {!isEmailError && !isNameError && !isMessageError ? (
                  <Button variant="contained" type="submit">
                    Enviar
                  </Button>
                ) : null}
              </FormGroup>
            </form>
          </Box>
        </Box>
      </Box>
      </Paper> 
      </Box>
      : 
      <Box className="hommie"  padding="5px">
      <Paper sx={{margin:"10px", backgroundColor: "rgb(252 228 236 / 50%)"}} elevation={10}>
      <Box display={"flex"} className="hommie" flexDirection={"column"} alignItems="center" textAlign={"center"} justifyContent={"center"}>
        <Box>
        <Typography textAlign={"center"}  paddingTop={"10px"} variant="h5">
            ¿Necesitas una Ilustración Diseño o logotipo?
          </Typography>
          <Typography textAlign={"center"} variant="h5" paddingTop={"10px"}>
            ¡Trabajemos juntos!
          </Typography>
        </Box>
      </Box>
      <Box className="hommie" margin={0}>
      <Typography
        textAlign={"center"}
        variant="h3"
        paddingTop={"10px"}
        fontFamily="romantic"
      >
        Contactame!
      </Typography>
      <Box width={"100%"} display={"flex"} flexDirection={"column-reverse"} className="Home">
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          width={"100%"}
          textAlign={"center"}
          className="leftSideFromHome"
        >
          {/* ICONOS */}
          <Typography
        textAlign={"center"}
        variant="h4"
        paddingTop={"10px"}
        fontFamily="romantic"
      >
        Sigueme en mis redes sociales!
      </Typography>
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
          >
            
            <Box margin={"10px"}>
              <Tooltip label="Go to my Facebook" aria-label="A tooltip">
                <a href="https://www.facebook.com/Art.giss">
                  <img
                    height={"fit-content"}
                    width={"50%"}
                    src={face}
                    alt="github"
                  />
                </a>
              </Tooltip>
              
            </Box>
            <Box>
              <Tooltip label="Go to my Instagram" aria-label="A tooltip">
                <a href="https://www.instagram.com/art.giss.x3/">
                  <img
                    height={"fit-content"}
                    width={"50%"}
                    src={insta}
                    alt="linkedin"
                  />
                </a>
              </Tooltip>
              
            </Box>
            <Box>
              <Tooltip label="Go to my TikTok" aria-label="A tooltip">
                <a
                  href="https://www.tiktok.com/@gissx3"
                >
                  <img
                    height={"fit-content"}
                    width={"50%"}
                    src={tik}
                    alt="cv"
                  />
                </a>
              </Tooltip>
              
            </Box>
          </Box>
        </Box>
        {/* FORMULARIO */}
        <Box>
          <Box>
            <form ref={form} onSubmit={sendEmail}>
              <FormGroup style={{margin:"15px"}} >
                <FormLabel>Nombre</FormLabel>
                <Input
                  type="text"
                  placeholder="Name"
                  name="from_name"
                  value={inputName}
                  onChange={handleInputNameChange}
                />
                {!isNameError ? (
                  <FormHelperText>Ingresa tu nombre</FormHelperText>
                ) : (
                  <FormHelperText>Nombre es requerido</FormHelperText>
                )}
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  placeholder="email"
                  name="email"
                  value={input}
                  onChange={handleInputChange}
                />
                {!isEmailError ? (
                  <FormHelperText>
                    Ingresa el email donde quieres recibir mi respuesta
                  </FormHelperText>
                ) : (
                  <FormHelperText>Email es requerido</FormHelperText>
                )}
                <FormLabel>Mensaje</FormLabel>
                <TextField
                  type="text"
                  height={"20"}
                  name="message"
                  placeholder="Message"
                  value={inputMessage}
                  onChange={handleInputMessageChange}
                />
                {!isMessageError ? (
                  <FormHelperText>
                    Escribe un mensaje para contactarme
                  </FormHelperText>
                ) : (
                  <FormHelperText>Mensaje es requerido.</FormHelperText>
                )}
                <br></br>
                {!isEmailError && !isNameError && !isMessageError ? (
                  <Button variant="contained" type="submit">Enviar</Button>
                ) : null}
              </FormGroup >
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
    </Paper>
      </Box>
      }
        
    </Box>
  );
}
