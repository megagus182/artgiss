import { Paper, Typography, ImageList, ImageListItem } from "@mui/material";
import 'animate.css';
import "./Galeria.css";
import { itemData } from "./imagenes";


export default function Galeria(){
    return(
      <div className="hommie" style={{paddingBottom:"1px", paddingTop:"1px"}} >
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
        <ImageList sx={{ margin: 3 }} variant="masonry" cols={2} gap={8}>
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
       </div>
    )
}