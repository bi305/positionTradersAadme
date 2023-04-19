import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Modal,
  TextField,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Head from "next/head";
import { useCart } from "api";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Cart = () => {
  const { cartData } = useCart();
  const sum = cartData?.reduce((total, item) => total + +item.subscription, 0);
  const [isCopied, setIsCopied] = React.useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };
  const [open, setOpen] = React.useState(false);
  const [image, setImage] = React.useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    createPreviewUrl(e.target.files[0]);
  };

  const handleSubmit = () => {
    setOpen(false);
    mutate();
  };

  const handleClose = () => {
    setOpen(false);
    setImage(null);
  };
  const [previewUrl, setPreviewUrl] = React.useState(null);

  const createPreviewUrl = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

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
            {cartData?.map((item, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    mb: 2,
                    backgroundColor: " rgba(230, 189, 255, 0.37);",
                    borderRadius: "35px",
                    boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);",
                    border: "1px solid rgba(255, 255, 255, 0.26);",

                    px: 1,
                    py: 1,
                  }}
                >
                  <Typography
                    component="h2"
                    sx={{
                      fontWeight: "700",
                      fontSize: { xs: "20px", md: "40px" },
                      textAlign: "center",
                    }}
                  >
                    {item.name} {item.subscription_type}
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
                    billed ${item.subscription}/{item.subscription_type}
                  </Typography>
                </Box>
              );
            })}

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
                Total : ${sum}
              </Typography>
              {/* <Button
								
							>
								Pay
							</Button> */}
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
                onClick={() => setOpen(true)}
              >
                Pay
              </Button>
              <Dialog
                sx={{
                  "& .MuiDialog-paper": {
                    bgcolor: "#E6BDFF",
                    borderRadius: "35px",
                    p: 2,
                  },
                }}
                open={open}
                onClose={handleClose}
              >
                <>
                  <Box sx={{ pt: 3, pl: 1, pr: 1, borderRadius: "35px" }}>
                    {previewUrl && (
                      <Box
                        sx={{
                          borderRadius: "35px",
                          width: "100%",
                        }}
                        component="img"
                        src={previewUrl}
                        alt="Preview"
                      />
                    )}
                  </Box>
                  <TextField
                    type="file"
                    onChange={handleImageChange}
                    variant="outlined"
                    fullWidth
                  />
                  <Button
                    onClick={handleSubmit}
                    variant="contained"
                    sx={{
                      backgroundColor: "#000000;",
                      color: "#fff",
                      borderRadius: "20px",
                      width: "auto",
                    }}
                    // disabled={!image || isLoading || isSuccess}
                  >
                    {/* {isLoading ? "Uploading..." : "Upload"} */}
                    Upload
                  </Button>
                </>
                {/* {isError && <div>Error: {error.message}</div>}
									{isSuccess && <div>Image uploaded successfully</div>} */}
              </Dialog>
            </Box>
            <Grid item md={8} xs={12}>
              <Box display="flex" sx={{ mt: { md: 8 } }}>
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
                <CopyToClipboard
                  onCopy={handleCopy}
                  text={"bc1qsf8u0f7404thpwzskqcz2nstg6yjefrfrwdan5"}
                >
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
                    {isCopied ? "Copied!" : "Copy"}
                  </Button>
                </CopyToClipboard>
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

export default Cart;
