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
        pt={0}
        mt={0}
        sx={{
          height: "1400px",
          width: "100%",
          backgroundImage: "url('/assets/cartBanner.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
        }}
      >
        <Grid container spacing={3} sx={{ p: 50 }}>
          <Grid item md={8} sx={{}}>
            <Box
              sx={{
                backgroundColor: " rgba(230, 189, 255, 0.37);",
                borderRadius: "35px",
                textAlign: "center",
                px: "10px",
                boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);",
                border: "1px solid rgba(255, 255, 255, 0.26);",
              }}
            >
              <Typography
                component="h2"
                variant="h2"
                sx={{ fontWeight: "700" }}
              >
                CryptoCurrency Alert Room - Monthly
              </Typography>
              <Typography
                component="p"
                variant="p"
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  fontSize: "28px",
                }}
              >
                billed $200/month
              </Typography>
            </Box>
            <hr sx={{ p: "10px" }} />
            <Grid
              item
              md={12}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography
                component="h2"
                variant="h2"
                sx={{ fontWeight: "400" }}
              >
                Total : $600
              </Typography>
              <Button
                sx={{
                  backgroundColor: "rgba(230, 189, 255, 0.37);",
                  color: "white",
                  fontSize: "32px",
                  fontWeight: "500",
                  px: "40px",
                  //   py: "10 px",
                  borderRadius: "35px",
                  boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);",
                  border: "1px solid rgba(255, 255, 255, 0.26);",
                }}
              >
                Pay
              </Button>
            </Grid>
            <Box sx={{ display: "flex" }}>
              <Typography
                componet="h3"
                variant="h3"
                sx={{
                  backgroundColor: " rgba(230, 189, 255, 0.37);",
                  color: "white",
                  fontWeight: "700",
                  px: "60px",
                  py: "8px",
                  fontSize: "32px",
                  mt: 29,
                  mr: 2,
                  borderRadius: "35px",
                  textAlign: "center",
                  boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);",
                  border: "1px solid rgba(255, 255, 255, 0.26);",
                }}
              >
                bc1qsf8u0f7404thpwzskqcz2nstg6yjefrfrwdan5
              </Typography>
              <Button
                sx={{
                  backgroundColor: "rgba(230, 189, 255, 0.37);",
                  color: "white",
                  fontSize: "19px",
                  fontWeight: "600",
                  px: "40px",
                  //   py: "0.5px",
                  mt: 29,
                  borderRadius: "30px",
                  boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);",
                  border: "1px solid rgba(255, 255, 255, 0.26);",
                }}
              >
                copy
              </Button>
            </Box>
          </Grid>
          <Grid item md={4} sx={{ textAlign: "center" }}>
            <Box component="img" src="assets/WalletQr.png" />
            <Typography component="p">scan to pay </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default cart;
