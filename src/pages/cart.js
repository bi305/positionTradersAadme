import React from "react";
import { Container, Grid, Typography, Box, Button } from "@mui/material";
import Head from "next/head";

const cart = () => {
  return (
    <>
      <Head>
        <title>Position Traders Academe</title>
      </Head>
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          height: { md: "1000px", ms: "1500px", xs: "1600px" },
          width: "100%",
          backgroundImage: "url('/assets/cartBanner.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
        }}
      >
        <Grid container>
          <Grid
            item
            md={5.5}
            ms={12}
            xs={12}
            sx={{ mt: { md: 40 }, ml: { md: 30 } }}
          >
            <Box
              sx={{
                backgroundColor: " rgba(230, 189, 255, 0.37);",
                borderRadius: "35px",
                boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);",
                border: "1px solid rgba(255, 255, 255, 0.26);",

                px: 1,
                py: 1,
              }}
            >
              {" "}
              <Typography
                component="h2"
                sx={{
                  fontWeight: "700",
                  fontSize: { xs: "20px", md: "40px" },
                  textAlign: "center",
                }}
              >
                CryptoCurrency Alert Room - Monthly
              </Typography>
              <Typography
                component="p"
                variant="p"
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  ml: "auto",
                  fontSize: "28px",
                }}
              >
                billed $200/month
              </Typography>
            </Box>
            <Box
              sx={{
                mt: { md: 4 },
              }}
            >
              <hr />
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography
                component="h2"
                variant="h2"
                sx={{ fontWeight: "400" }}
              >
                Total : $600
              </Typography>
              <Button
                sx={{
                  backgroundColor: " rgba(239, 205, 238, 0.9);",
                  color: "white",
                  fontSize: "32px",
                  fontWeight: "500",
                  px: "40px",
                  borderRadius: "35px",
                  boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);",
                  border: "1px solid #DBC2C2;",
                }}
              >
                Pay
              </Button>
            </Box>
            <Grid item md={8} xs={12}>
              <Box display="flex" sx={{ mt: { md: 8 } }}>
                {" "}
                <Typography
                  sx={{
                    //   whiteSpace: "nowrap",
                    backgroundColor: "rgba(230, 189, 255, 0.37);",
                    borderRadius: "35px",
                    boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);",
                    border: "1px solid rgba(255, 255, 255, 0.26);",
                    fontSize: { md: "32px" },
                    px: "60px",
                    mr: { md: 5 },
                    mt: { xs: 5 },
                  }}
                >
                  bc1qsf8u0f7404thpwzskqcz2nstg6yjefrfrwdan5
                </Typography>
                <Button
                  sx={{
                    backgroundColor: "rgba(230, 189, 255, 0.37);",
                    color: "#fff",
                    fontWeight: "700",
                    borderRadius: "35px",
                    fontSize: "18px",
                    boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);",
                    border: "1px solid rgba(255, 255, 255, 0.26);",
                    px: "20px",
                    mt: { xs: 5 },
                  }}
                >
                  copy
                </Button>
              </Box>
            </Grid>
          </Grid>

          <Grid
            item
            md={4}
            ms={12}
            xs={12}
            sx={{ textAlign: "center", mt: { md: 40 } }}
          >
            <Box component="img" src="assets/WalletQr.png" />
            <Typography component="p">scan to pay </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default cart;
