import { Box, Paper, Typography } from "@mui/material";
import perfil from "../images/perfil.jpg";
import useMediaQuery from '@mui/material/useMediaQuery';


export default function SobreMi(){

  const celular = useMediaQuery('(min-width:450px)');
    return(
        <div className="hommie" style={{ padding: "1px" }}>
         {celular ?
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
            height: "100%",
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
              display={"contents"}
              height={"100%"}
              className="imgPerfil"
              src={perfil}
              alt="..."
            />
          </Box>
        </Box>
        </Paper>
          :
          <Paper
        sx={{
          backgroundColor: "#a2d8ff",
          margin: "10px",
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
            height: "100%",
            flexDirection: "column-reverse"
          }}
        >
          <Box
          width={"100%"}
          padding={"10px"}
          display={"flex"}
          flexDirection={"column"}
          textAlign={"center"}
          justifyContent={"space-between"}
        >
           <Typography
            variant="h4"
            className="nombreGiss"
            fontWeight="bolder"
            color="#648dff"
          >
            Claudia Gissel 🖌️🎨
          </Typography>
          <Typography variant="h6">
            Disfruto mucho crear ilustraciones basadas en el arte surrealista. Dame un lapiz, pluma o tableta e ilustrare tus ideas
          </Typography>
          <br></br>
          <Typography variant="h6">
            Mi principal meta como diseñadora es transmitir mensajes creativos e ideas unicas mezclando diferentes colores, figuras, tecnicas y materiales
          </Typography>
        </Box> 
          {/* Imagen Perfil */}
          <Box
            width={"100%"}
            display={"flex"}
            justifyContent={"flex-end"}
            alignItems={"flex-end"}
          >
            <img
              display={"contents"}
              width={"100%"}
              className="imgPerfilCel"
              src={perfil}
              alt="..."
            />
          </Box>
        </Box>
      </Paper>
           }
        </div>
    )
}