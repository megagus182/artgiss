import { Box, Paper, Typography } from "@mui/material";
import perfil from "../images/perfil.jpg";
import useMediaQuery from '@mui/material/useMediaQuery';

export default function SobreMi() {
    const celular = useMediaQuery('(min-width:450px)');

    const colorPrimario = "#a78bfa"; 

    return (
        <div className="hommie" style={{ padding: "1px" }}>
            {celular ?
                <Paper
                    sx={{
                        backgroundColor: "#f8f8f8",
                        maxWidth: "960px",
                        margin: "30px auto",
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
                            gap: "30px",
                        }}
                    >
                        {/* Imagen Perfil */}
                        <Box
                            width={"40%"}
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                        >
                            <img
                                className="imgPerfil"
                                src={perfil}
                                alt="Imagen de perfil de Claudia Gissel"
                                style={{
                                    maxWidth: "80%",
                                    height: "auto",
                                    borderRadius: "10px",
                                }}
                            />
                        </Box>

                        {/* Descripción Sobre Mí */}
                        <Box
                            width={"50%"}
                            display={"flex"}
                            flexDirection={"column"}
                            textAlign={"left"}
                            justifyContent={"space-between"}
                        >
                            <Typography
                                variant="h2"
                                className="nombreGiss"
                                fontWeight="bold"
                                color={colorPrimario} 
                                fontFamily={"Sora"} 
                                marginBottom={2}
                            >
                                Claudia Gissel
                            </Typography>
                            <Box sx={{ borderBottom: `3px solid ${colorPrimario}`, width: '80px', marginBottom: 3 }} />
                            <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.7, marginBottom: 2, fontSize: '1.1rem', fontFamily: 'DM Sans' }}>
                                Me encanta crear ilustraciones que te lleven a otro mundo, ¿sabes? El <strong>arte surrealista</strong> me permite explorar esas ideas que a veces solo ves en sueños, y me fascina darles vida con mis dibujos y colores.
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.7, marginBottom: 2, fontSize: '1.1rem', fontFamily: 'DM Sans' }}>
                                Desde que tengo memoria, el arte ha sido mi forma de entender y expresar el universo que me rodea. Mis ilustraciones son una ventana a mi imaginación, donde lo inesperado y lo onírico se entrelazan para contar historias visuales únicas.
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.7, marginBottom: 2, fontSize: '1.1rem', fontFamily: 'DM Sans' }}>
                                Mi proceso creativo es una mezcla de inspiración en la naturaleza, mis propias reflexiones y una profunda fascinación por el subconsciente. Cada obra es una invitación a detenerse, a sentir y a encontrar una nueva perspectiva de la realidad.
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.7, marginBottom: 2, fontSize: '1.1rem', fontFamily: 'DM Sans' }}>
                                Además de la ilustración, el diseño gráfico es otra de mis grandes pasiones. Disfruto trabajando en proyectos que requieren una comunicación visual efectiva y creativa, ya sea branding, diseño editorial o interfaces de usuario.
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
                :
                <Paper
                    sx={{
                        backgroundColor: "#f8f8f8",
                        margin: "20px",
                        borderRadius: "15px",
                        padding: "20px",
                        textAlign: "center",
                    }}
                    elevation={3}
                >
                    <img
                        src={perfil}
                        alt="Perfil de Claudia"
                        style={{
                            width: "150px",
                            height: "150px",
                            objectFit: "cover",
                            borderRadius: "50%",
                            marginBottom: "20px",
                        }}
                    />
                    <Typography
                        variant="h3"
                        className="nombreGiss"
                        fontWeight="bold"
                        color={colorPrimario} 
                        fontFamily={"Sora"} 
                        marginBottom={1}
                    >
                        Claudia Gissel
                    </Typography>
                    <Box sx={{ borderBottom: `2px solid ${colorPrimario}`, width: '60px', margin: '0 auto 20px auto' }} />
                    <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.6, marginBottom: 1.5, fontFamily: 'DM Sans' }}>
                        Me encanta crear ilustraciones surrealistas y disfruto el diseño gráfico.
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.6, marginBottom: 1.5, fontFamily: 'DM Sans' }}>
                        Desde pequeña, el arte ha sido mi forma de expresarme y explorar mi imaginación.
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.6, marginBottom: 1.5, fontFamily: 'DM Sans' }}>
                        Mi objetivo es transmitir mensajes creativos y únicos a través de mi trabajo.
                    </Typography>
                </Paper>
            }
        </div>
    );
}