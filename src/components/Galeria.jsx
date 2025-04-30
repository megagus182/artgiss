import {
  Paper,
  Typography,
  ImageList,
  ImageListItem,
  Box,
  Modal,
  Button,
} from "@mui/material";
import "animate.css";
import "./Galeria.css";
import { itemData } from "./imagenes";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";

export default function Galeria() {
  const celular = useMediaQuery("(min-width:450px)");
  const [openLightbox, setOpenLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpenLightbox = (item) => {
    setSelectedImage(item);
    setOpenLightbox(true);
  };

  const handleCloseLightbox = () => {
    setOpenLightbox(false);
    setSelectedImage(null);
  };

  return (
    <Box
      mt={0}
      padding={celular ? "30px" : "15px"}
      display="flex"
      justifyContent="center"
    >
      <Paper
        sx={{
          backgroundColor: "#fff",
          margin: "20px",
          padding: "20px",
          textAlign: "center",
          borderRadius: "15px",
          maxWidth: "960px",
          width: "100%",
        }}
        elevation={5}
      >
        <Typography
          variant={celular ? "h2" : "h3"}
          fontFamily={"Sora"}
          color={"#a78bfa"}
          mb={3}
        >
          Mis Obras
        </Typography>
        <ImageList
          sx={{ margin: 3 }}
          variant="masonry"
          cols={celular ? 2 : 1}
          gap={8}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              onClick={() => handleOpenLightbox(item)}
              style={{ cursor: "pointer" }}
            >
              <div className="wrapper">
                <img
                  className="imgHome"
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  style={{ borderRadius: 10 }}
                />
                <div className="overlay">
                  <div className="content">
                    <Typography
                      sx={{ fontSize: "1.5rem" }}
                      fontFamily={"DM Sans"}
                    >
                      {item.title}
                    </Typography>
                  </div>
                </div>
              </div>
            </ImageListItem>
          ))}
        </ImageList>
      </Paper>

      {selectedImage && (
        <Modal
          open={openLightbox}
          onClose={handleCloseLightbox}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              maxWidth: "95vw",
              maxHeight: "95vh",
              overflow: "auto",
              outline: "none",
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              padding: "20px",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={selectedImage.img}
              alt={selectedImage.title}
              style={{
                display: "block",
                maxWidth: "100%",
                maxHeight: "80vh",
                height: "auto",
                borderRadius: 10,
              }}
            />
            <Typography
              variant="h6"
              mt={2}
              color="#fff"
              textAlign="center"
              fontFamily="DM Sans"
            >
              {selectedImage.title}
            </Typography>
            <Button onClick={handleCloseLightbox} sx={{ mt: 2, color: "#fff" }}>
              Cerrar
            </Button>
          </Box>
        </Modal>
      )}
    </Box>
  );
}
