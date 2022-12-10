import { Box, Paper, Typography } from "@mui/material";
import perfil from "../images/perfil.jpg";


export default function SobreMi(){
    return(
        <div className="hommie" style={{ padding: "1px" }}>
        <Paper
        sx={{
          backgroundColor: "#a2d8ff",
          margin: "30px",
          borderRadius: "20px",
          paddingBottom: "10px"
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
            <Typography variant="h6">basadas en el arte surrealista.</Typography>
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
            <Typography variant="h6">
              y materiales.
            </Typography>
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
        {/* <Box margin={"20px"} textAlign={"center"}>
        <iframe title="algo" src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FArt.giss%2Fvideos%2F324476185117829%2F&show_text=false&width=560&t=0" width="560" height="314" style={{border:"none", overflow:"hidden"}} frameborder="0" allowfullscreen="true" allow="autoplay clipboard-write encrypted-media picture-in-picture web-share" allowFullScreen="true"></iframe>
        </Box> */}
        </Paper>
        </div>
    )
}