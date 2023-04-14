import React from "react";
import { Layout } from "@/Layout";
import { Container, Grid, Typography, Box ,Button} from "@mui/material";
import Head from "next/head";

const courses = () => {
  return (
    <>
      <Head>
        <title>Position Traders Academe</title>
      </Head>

      <Layout footer={false}>
        <Container maxWidth={false} disableGutters>
          <Grid container sx={{ mt: 8, color: "#ffffff" }}>
            <Grid
              item
              md={12}
              sx={{
                height: "1200px",
                width: "100%",
                backgroundImage: "url('/assets/mainbanner.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Box
                display="flex"
                justifyContent="center"
               
              >
                <Typography component="h2" variant="h2" color="inherit"  sx={{ fontWeight: "600" ,py:"65px"}}>
                  Crypto Currency
                </Typography>
              </Box>
              <Grid
                item
                md={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "end",
                  height: "600px",
                }}
              >
                <Box component="ul">
                  <Box component="li">
                    <Typography sx={{ fontSize: "28px", fontWeight: "400" }}>
                      WEBINAR OF MARKET <br /> UPDATES
                    </Typography>
                  </Box>
                  <Box component="li">
                    <Typography sx={{ fontSize: "28px", fontWeight: "400" }}>
                      SIGNALS ALERT ROOM
                    </Typography>
                  </Box>
                  <Box component="li">
                    <Typography sx={{ fontSize: "28px", fontWeight: "400" }}>
                      CAHTROOM
                    </Typography>
                  </Box>
                  <Box component="li">
                    <Typography sx={{ fontSize: "28px", fontWeight: "400" }}>
                      24/7 HELP
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                md={12}
                sx={{ display: "flex", justifyContent: "center", mt: 22 }}
              >
                <Box sx={{}} >
                  <Button 
				  sx={{backgroundImage:"linear-gradient(180deg, rgba(251, 156, 247, 0.19) 9.67%, #FF00C7 100%) !important"
				,width:"300px"
				,borderRadius:"35px"
				,color:"#fff"
				,fontSize:"20px"
				,px:"16px"
				}}>
					$400 Lifetime
					</Button>
                </Box>
				<Box sx={{}} >
                  <Button 
				  sx={{backgroundImage:"linear-gradient(180deg, rgba(251, 156, 247, 0.19) 9.67%, #FF00C7 100%) !important"
				,width:"300px"
				,borderRadius:"35px"
				,color:"#fff"
				,fontSize:"20px"
				,px:"16px"
				,ml:"20px"
				}}>
					$200/Monthly
					</Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <Container>
          <Box
            display="flex"
            justifyContent="center"
            textAlign="center"
            py={10}
          >
            <Typography component="h4" variant="h4">
              Powering{" "}
              <Typography component="span" variant="h4" color="#662EFF">
                {" "}
                Best Trading Academy{" "}
              </Typography>
              for
              <br />
              Millions of Users Worldwide
            </Typography>
          </Box>
        </Container>
        <Container maxWidth={false} disableGutters>
          <Grid Container sx={{ mt: 8 }}>
            <Grid
              item
              md={12}
              sx={{
                height: "1000px",
                width: "100%",
                backgroundImage: "url('/assets/secondbanner.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h1>hello</h1>
            </Grid>
          </Grid>
        </Container>
        <Container>
          <Box
            display="flex"
            justifyContent="center"
            textAlign="center"
            py={10}
          >
            <Typography component="h4" variant="h4" color="#662EFF">
              Learn{" "}
              <Typography component="span" variant="h4" color="black">
                {" "}
                Achieve{" "}
              </Typography>{" "}
              Succeed
            </Typography>
          </Box>
        </Container>

        <Container maxWidth={false} disableGutters>
          <Grid Container sx={{ mt: 8 }}>
            <Grid
              item
              md={12}
              sx={{
                height: "1500px",
                width: "100%",
                backgroundImage: "url('/assets/thirdbanner.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h1>hello</h1>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </>
  );
};

export default courses;
