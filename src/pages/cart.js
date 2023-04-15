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
        <Grid container spacing={3} sx={{ p: 10 }}>
          <Grid item md={9} sx={{}}>
            <Box
              sx={{
                backgroundColor: " rgba(230, 189, 255, 0.37);",
                borderRadius: "35px",
                textAlign: "center",
                px: "10px",
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
                sx={{ display: "flex", justifyContent: "end" }}
              >
                billed $200/month
              </Typography>
            </Box>
            <hr sx={{ height: "5px" }} />
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
                  py: "10px",
                  borderRadius: "35px",
                  border: "1px solid rgba(255, 255, 255, 0.26);",
                }}
              >
                Pay
              </Button>
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                componet="h3"
                variant="h3"
                sx={{
                  backgroundColor: " rgba(230, 189, 255, 0.37);",
                  color: "white",
                  fontWeight: "700",
                  px: "20px",
                  py: "10px",
                  mt: 29,
                  borderRadius: "35px",
                  textAlign: "center",
                  border: " 1px solid rgba(255, 255, 255, 0.26);",
                }}
              >
                bc1qsf8u0f7404thpwzskqcz2nstg6yjefrfrwdan5
              </Typography>
              <Button
                sx={{
                  backgroundColor: "rgba(230, 189, 255, 0.37);",
                  color: "white",
                  fontSize: "32px",
                  fontWeight: "600",
                  px: "40px",
                  py: "10px",
                  mt: 29,
                  borderRadius: "35px",
                  border: "1px solid rgba(255, 255, 255, 0.26);",
                }}
              >
                copy
              </Button>
            </Box>
            <Grid item md={2}></Grid>
          </Grid>
          <Grid item md={4}>
            <Box component="img" src="assets/WalletQr.png" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default cart;
