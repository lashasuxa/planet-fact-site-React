import { useState,useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { Box, Button, Typography, Link } from '@mui/material';
import data from '../../data.json';

function PlanetSection() {
    const { planetName } = useParams();
    const navigate = useNavigate();
  
    useEffect(() => {
      if (!planetName) {
        navigate("/mercury");
      }
    }, [planetName, navigate]);
  
    const planet = data.find(p => p.name.toLowerCase() === planetName.toLowerCase());
  
    const [selectedSection, setSelectedSection] = useState("overview");
  
    const renderContent = () => {
      if (selectedSection === "overview") {
        return (
          <>
            <Typography variant="body1" style={{ fontSize: 14 }} sx={{ width: '350px' }}>
              {planet.overview.content}
            </Typography>
            <Typography variant="body2" style={{ fontSize: 14 }} sx={{ opacity: 0.5, marginTop: 3 }}>
    Source: <Link href={planet.overview.source} target="_blank" sx={{ color: 'white', opacity: 0.75 }}>Wikipedia</Link>{" "}
    <img src="/icon-source.svg" alt="" />
    </Typography>
          </>
        );
      } else if (selectedSection === "structure") {
        return (
          <>
            <Typography variant="body1" style={{ fontSize: 14 }} sx={{ width: '350px' }}>
              {planet.structure.content}
            </Typography>
            <Typography variant="body2" style={{ fontSize: 14 }}sx={{ opacity: 0.5, marginTop: 3 }}>
             Source: <Link href={planet.structure.source} target="_blank" sx={{ color: 'white',opacity:0.75 }}>Wikipedia</Link>{" "}
            <img src="/icon-source.svg" alt="" />
            </Typography>
          </>
        );
      } else if (selectedSection === "geology") {
        return (
          <>
            <Typography variant="body1" style={{ fontSize: 14 }} sx={{ width: '350px' }}>
              {planet.geology.content}
            </Typography>
            <Typography variant="body2" style={{ fontSize: 14 }}sx={{ opacity: 0.5, marginTop: 3 }}>
             Source: <Link href={planet.geology.source} target="_blank" sx={{ color: 'white',opacity:0.75 }}>Wikipedia</Link>{" "}
            <img src="/icon-source.svg" alt="" />
            </Typography>
          </>
        );
      }
    };
    const renderImage = () => {
      if (selectedSection === "overview") {
        return [planet.images.planet];
      } else if (selectedSection === "structure") {
        return [planet.images.internal];
      } else if (selectedSection === "geology") {
        return [planet.images.planet, planet.images.geology];
      }
    };
  
    return (
      <Box display="flex" flexDirection="column">
                <Box display="flex" flexDirection="row" alignItems="center">
                  <Box flex={1} textAlign="center" position="relative" height="100%">
                  <Box display="flex" flexDirection="column" alignItems="center" height="100%">
                      {renderImage().map((imgSrc, index) => (
                        <img
                          key={index}
                          src={imgSrc}
                          alt={`Planet ${planet.name} - ${index === 0 ? 'Overview' : 'Geology'}`}
                          style={
                            index === 1 && selectedSection === "geology"
                              ? { marginTop: -106, width: 158, height: 165 }
                              : {}
                              }
                              />
                            ))}
                  </Box>
  
                </Box>
          <Box flex={1} ml={4} style={{ marginTop: 100 ,width:350}}>
            <Box mb={2}>
              <Typography variant="h1" style={{ fontSize: 80 }}>
                {planet.name.toUpperCase()}
              </Typography>
            </Box>
            <Box mb={2}>{renderContent()}</Box>
            <Box display="flex" flexDirection="column" style={{ marginTop: 39 }}>
                <Button
                  variant="outlined"
                  style={{
                    marginBottom: 16,
                    width: 350,
                    height: 48,
                    borderColor: 'white',
                    backgroundColor: selectedSection === "overview" ? '#419EBB' : 'transparent',
                    letterSpacing: '2.57143px',
                    textAlign: 'start',
                    justifyContent: 'flex-start',
                    paddingLeft: 24,
                  }}
                  onClick={() => setSelectedSection("overview")}
                  sx={{
                    '&:hover': {
                      backgroundColor: "#D8D8D8",
                      opacity: 0.2,
                    },
                  }}
                >
                  <span style={{ color: 'white', opacity: 0.5, fontSize: 12, marginRight: 24 }}>01</span>
                  <span style={{ color: 'white', fontSize: 12 }}> OVERVIEW</span>
                </Button>
                <Button
                  variant="outlined"
                  style={{
                    marginBottom: 16,
                    width: 350,
                    height: 48,
                    borderColor: 'white',
                    backgroundColor: selectedSection === "structure" ? '#419EBB' : 'transparent',
                    letterSpacing: '2.57143px',
                    textAlign: 'start',
                    justifyContent: 'flex-start',
                    paddingLeft: 24,
                  }}
                  onClick={() => setSelectedSection("structure")}
                  sx={{
                    '&:hover': {
                      backgroundColor: "#D8D8D8",
                      opacity: 0.2,
                    },
                  }}
                >
                  <span style={{ color: 'white', opacity: 0.5, fontSize: 12, marginRight: 24 }}>02</span>
                  <span style={{ color: 'white', fontSize: 12 }}> INTERNAL STRUCTURE</span>
                </Button>
                <Button
                  variant="outlined"
                  style={{
                    marginBottom: 16,
                    width: 350,
                    height: 48,
                    borderColor: 'white',
                    backgroundColor: selectedSection === "geology" ? '#419EBB' : 'transparent',
                    letterSpacing: '2.57143px',
                    textAlign: 'start',
                    justifyContent: 'flex-start',
                    paddingLeft: 24,
                  }}
                  onClick={() => setSelectedSection("geology")}
                  sx={{
                    '&:hover': {
                      backgroundColor: "#D8D8D8",
                      opacity: 0.2,
                    },
                  }}
                >
                  <span style={{ color: 'white', opacity: 0.5, fontSize: 12, marginRight: 24 }}>03</span>
                  <span style={{ color: 'white', fontSize: 12 }}> SURFACE GEOLOGY</span>
                </Button>
              </Box>
  
          </Box>
        </Box>
    
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  marginTop="30px"
                >
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    flexDirection="row"
                    >
                    <Box
                      width="255px"
                      height="128px"
                      border="1px solid white"
                      bgcolor="transparent"
                      borderRadius="4px"
                      style={{ margin: 15, paddingLeft: 23, paddingTop: 20 }}
                      >
                      <Typography variant="h3"  style={{
                        letterSpacing: 1,
                        textTransform: "uppercase",
                        opacity: 0.5,
                        fontSize: 11,
                      }}>Rotation Time</Typography>
                      <Typography variant="body1"  style={{
                        fontSize: 40,
                        letterSpacing: -1.5,
                        textTransform: "uppercase",
                        color: "white",
                      }}>{planet.rotation}</Typography>
                    </Box>
                      <Box
                        width="255px"
                        height="128px"
                        border="1px solid white"
                        bgcolor="transparent"
                        borderRadius="4px"
                        style={{ margin: 15, paddingLeft: 23, paddingTop: 20 }}
                        >
                        <Typography variant="h3"  style={{
                          letterSpacing: 1,
                          textTransform: "uppercase",
                          opacity: 0.5,
                          fontSize: 11,
                        }}>Revolution Time</Typography>
                        <Typography variant="body1"  style={{
                          fontSize: 40,
                          letterSpacing: -1.5,
                          textTransform: "uppercase",
                          color: "white",
                        }}>{planet.revolution}</Typography>
                      </Box>
                        <Box
                          width="255px"
                          height="128px"
                          border="1px solid white"
                          bgcolor="transparent"
                          borderRadius="4px"
                          style={{ margin: 15, paddingLeft: 23, paddingTop: 20 }}
                          >
                          <Typography variant="h3"  style={{
                            letterSpacing: 1,
                            textTransform: "uppercase",
                            opacity: 0.5,
                            fontSize: 11,
                          }}>Radius</Typography>
                          <Typography variant="body1"  style={{
                            fontSize: 40,
                            letterSpacing: -1.5,
                            textTransform: "uppercase",
                            color: "white",
                          }}>{planet.radius}</Typography>
                        </Box>
                          <Box
                            width="255px"
                            height="128px"
                            border="1px solid white"
                            bgcolor="transparent"
                            borderRadius="4px"
                            style={{ margin: 15, paddingLeft: 23, paddingTop: 20 }}
                            >
                            <Typography variant="h3"  style={{
                              letterSpacing: 1,
                              textTransform: "uppercase",
                              opacity: 0.5,
                              fontSize: 11,
                            }}>Average temp.</Typography>
                            <Typography variant="body1"  style={{
                              fontSize: 40,
                              letterSpacing: -1.5,
                              textTransform: "uppercase",
                              color: "white",
                            }}>{planet.temperature}</Typography>
                          </Box>
  
                    
                  </Box>
            </Box>
        </Box>
    
    );
    
  }
  
export default PlanetSection;