import React from "react";
import { Layout } from "@/Layout";
import { Container, Grid, Typography, Box } from "@mui/material";
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
                sx={{ fontWeight: "900" }}
              >
                <Typography component="h2" variant="h2" color="inherit">
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
                  height: "700px",
                }}
              >
                <Box component="ul">
                  <Box component="li">
                    <Typography sx={{ fontSize: "26px", fontWeight: "400" }}>
                      WEBINAR OF MARKET <br /> UPDATES
                    </Typography>
                  </Box>
                  <Box component="li">
                    <Typography sx={{ fontSize: "26px", fontWeight: "400" }}>
                      SIGNALS ALERT ROOM
                    </Typography>
                  </Box>
                  <Box component="li">
                    <Typography sx={{ fontSize: "26px", fontWeight: "400" }}>
                      CAHTROOM
                    </Typography>
                  </Box>
                  <Box component="li">
                    <Typography sx={{ fontSize: "26px", fontWeight: "400" }}>
                      24/7 HELP
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                md={12}
                sx={{ display: "flex", justifyContent: "center", mt: 10 }}
              >
                <Box  sx={{width:"200px" }}>
                  <button>hello</button>
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
