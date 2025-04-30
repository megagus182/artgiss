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
  Paper,
  IconButton,
  SvgIcon,
} from "@mui/material/";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./Home.css";
import useMediaQuery from '@mui/material/useMediaQuery';
import { ReactComponent as TikTokSVG } from '../images/tiktok.svg';
import { ReactComponent as WhatsAppSVG } from '../images/whatsapp.svg';

function TikTokIcon(props) {
  return <SvgIcon component={TikTokSVG} viewBox="0 0 25 25" {...props} />;
}

function WhatsAppIcon(props) {
  return <SvgIcon component={WhatsAppSVG} viewBox="0 0 24 24" {...props} />;
}

export default function Contactame() {
  const form = useRef();
  const celular = useMediaQuery('(min-width:450px)');
  const [showAlert, setShowAlert] = useState(null);

  // Estados para los valores de los campos
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Estados para controlar si el usuario ha interactuado con los campos
  const [touchedName, setTouchedName] = useState(false);
  const [touchedEmail, setTouchedEmail] = useState(false);
  const [touchedMessage, setTouchedMessage] = useState(false);

  // Estados para los errores de validación
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const validateName = (value) => {
      if (!touchedName) return "";
      if (value.length < 10) {
          return "El nombre debe tener al menos 10 caracteres.";
      }
      return "";
  };

  const validateEmail = (value) => {
      if (!touchedEmail) return "";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return "Por favor, introduce un correo electrónico válido.";
      }
      return "";
  };

  const validateMessage = (value) => {
      if (!touchedMessage) return "";
      if (value.length < 20) {
          return "El mensaje debe tener al menos 20 caracteres.";
      }
      return "";
  };

  const handleNameChange = (e) => {
      setName(e.target.value);
      setNameError(validateName(e.target.value));
  };

  const handleEmailChange = (e) => {
      setEmail(e.target.value);
      setEmailError(validateEmail(e.target.value));
  };

  const handleMessageChange = (e) => {
      setMessage(e.target.value);
      setMessageError(validateMessage(e.target.value));
  };

  const handleBlur = (field) => {
      switch (field) {
          case "name":
              setTouchedName(true);
              setNameError(validateName(name));
              break;
          case "email":
              setTouchedEmail(true);
              setEmailError(validateEmail(email));
              break;
          case "message":
              setTouchedMessage(true);
              setMessageError(validateMessage(message));
              break;
          default:
              break;
      }
  };

  function sendEmail(e) {
      e.preventDefault();
      setTouchedName(true);
      setTouchedEmail(true);
      setTouchedMessage(true);
      setNameError(validateName(name));
      setEmailError(validateEmail(email));
      setMessageError(validateMessage(message));

      if (!nameError && !emailError && !messageError && name && email && message) {
          emailjs
          .sendForm("service_kgwu2uc", "template_i0822lk", form.current, "xSRbX8a-Xu0ZzjQ5h")
              .then((res) => {
                  setShowAlert({ severity: "success", message: "¡Mensaje Enviado! Gracias por contactarme!!" });
                  setName("");
                  setEmail("");
                  setMessage("");
                  setTouchedName(false);
                  setTouchedEmail(false);
                  setTouchedMessage(false);
              })
              .catch((err) => {
                  setShowAlert({ severity: "error", message: "Hubo un error al enviar el mensaje. Por favor, intenta de nuevo." });
              });
      } else if (!name || !email || !message) {
          setShowAlert({ severity: "warning", message: "Por favor, completa todos los campos requeridos." });
      } else {
          setShowAlert(null);
      }
  }

  return (
      <Box mt={0} padding={celular ? "30px" : "15px"} display="flex" flexDirection="column" alignItems="center">
          {showAlert && (
              <Alert severity={showAlert.severity} onClose={() => setShowAlert(null)} sx={{ mb: 2, maxWidth: "600px", width: "100%" }}>
                  <AlertTitle>{showAlert.severity === "success" ? "Éxito" : showAlert.severity === "warning" ? "Advertencia" : "Error"}</AlertTitle>
                  {showAlert.message}
              </Alert>
          )}
          <Paper sx={{ padding: "30px", backgroundColor: "#fff", borderRadius: "15px", maxWidth: "600px", width: "100%", mb: 3 }} elevation={5}>
              <Typography textAlign="center" variant="h3" fontFamily="Sora" color="#a78bfa" mb={2}>
                  ¡Contáctame!
              </Typography>
              <Typography textAlign="center" variant="body1" color="#555" mb={3}>
                  ¿Tienes alguna pregunta o te gustaría discutir un proyecto? ¡No dudes en ponerte en contacto!
              </Typography>

              <form ref={form} onSubmit={sendEmail}>
                  <FormGroup>
                      <FormLabel htmlFor="name">Nombre (mínimo 10 caracteres)</FormLabel>
                      <Input
                          type="text"
                          placeholder="Tu nombre"
                          name="from_name"
                          value={name}
                          onChange={handleNameChange}
                          onBlur={() => handleBlur("name")}
                          id="name"
                          error={!!nameError}
                          aria-describedby="name-error-text"
                          sx={{ mb: 2 }}
                      />
                      {nameError && <FormHelperText error id="name-error-text">{nameError}</FormHelperText>}

                      <FormLabel htmlFor="email">Email</FormLabel>
                      <Input
                          type="email"
                          placeholder="Tu email"
                          name="email"
                          value={email}
                          onChange={handleEmailChange}
                          onBlur={() => handleBlur("email")}
                          id="email"
                          error={!!emailError}
                          aria-describedby="email-error-text"
                          sx={{ mb: 2 }}
                      />
                      {emailError && <FormHelperText error id="email-error-text">{emailError}</FormHelperText>}

                      <FormLabel htmlFor="message">Mensaje (mínimo 20 caracteres)</FormLabel>
                      <TextField
                          multiline
                          rows={4}
                          placeholder="Escribe tu mensaje aquí"
                          name="message"
                          value={message}
                          onChange={handleMessageChange}
                          onBlur={() => handleBlur("message")}
                          id="message"
                          error={!!messageError}
                          aria-describedby="message-error-text"
                          sx={{ mb: 3, width: '100%' }}
                      />
                      {messageError && <FormHelperText error id="message-error-text">{messageError}</FormHelperText>}

                      <Button
                          variant="contained"
                          type="submit"
                          disabled={!!nameError || !!emailError || !!messageError || !name || !email || !message}
                          color="primary"
                          sx={{ mt: 2 }}
                      >
                          Enviar Mensaje
                      </Button>
                  </FormGroup>
              </form>
          </Paper>

          <Paper sx={{ padding: "20px", backgroundColor: "#f8f8f8", borderRadius: "15px", maxWidth: "600px", width: "100%", textAlign: "center" }} elevation={3}>
              <Typography variant="h6" fontFamily="Sora" color="#555" mb={2}>
                  ¡También puedes encontrarme en mis redes sociales y por WhatsApp!
              </Typography>
              <Box display="flex" justifyContent="center" alignItems="center">
                  <Tooltip title="Ir a mi Facebook">
                      <IconButton color="primary" href="https://www.facebook.com/Art.giss" target="_blank" sx={{ mr: 2 }}>
                          <FacebookIcon sx={{ fontSize: 30 }} />
                      </IconButton>
                  </Tooltip>
                  <Tooltip title="Ir a mi Instagram">
                      <IconButton color="primary" href="https://www.instagram.com/art.giss.x3/" target="_blank" sx={{ mr: 2 }}>
                          <InstagramIcon sx={{ fontSize: 30 }} />
                      </IconButton>
                  </Tooltip>
                  <Tooltip title="Ir a mi TikTok">
                      <IconButton color="primary" href="https://www.tiktok.com/@gissx3" target="_blank" sx={{ mr: 2 }}>
                          <TikTokIcon sx={{ fontSize: 30 }} />
                      </IconButton>
                  </Tooltip>
                  <Tooltip title="Contáctame por WhatsApp">
                      <IconButton color="primary" href="https://wa.me/tunumerodetelefono" target="_blank">
                          <WhatsAppIcon sx={{ fontSize: 30 }} />
                      </IconButton>
                  </Tooltip>
              </Box>
          </Paper>
      </Box>
  );
}