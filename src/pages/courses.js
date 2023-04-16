import React from "react";
import { Layout } from "@/Layout";
import { Container, Grid, Typography, Box, Button } from "@mui/material";
import Head from "next/head";
import { useProducts } from "api";

const Courses = () => {
	const { isLoading, isError, data: products, error } = useProducts();
	console.log(products);
	return (
		<>
			<Head>
				<title>Position Traders Academe</title>
			</Head>

			<Layout footer={false}>
				<Container
					maxWidth={false}
					disableGutters
					sx={{
						height: { md: "1200px", xs: "1000px", ms: "1000px" },
						width: "100%",
						backgroundImage: "url('/assets/mainbanner.png')",
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				>
					<Grid container sx={{ mt: 8, color: "#ffffff" }}>
						<Grid item md={12} xs={12}>
							<Box display="flex" justifyContent="center">
								<Typography
									component="h2"
									variant="h2"
									color="inherit"
									sx={{
										fontWeight: "600",
										pt: "65px",
										textAlign: "center",
									}}
								>
									Crypto Currency
								</Typography>
							</Box>
						</Grid>
						<Grid
							item
							md={11.5}
							xs={12}
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "end",
								height: { md: "700px", xs: "500px" },
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
										CHATROOM
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
							sx={{
								display: "flex",
								justifyContent: "center",
								// mt: { md: 30, xs: 15 },
								ml: { xs: 7 },
							}}
						>
							<Grid
								container
								sx={{
									mt: { md: 20, xs: 20 },
									ml: { xs: 7 },
								}}
							>
								<Grid item md={6} xs={12}>
									<Button
										sx={{
											backgroundImage:
												"linear-gradient(180deg, rgba(251, 156, 247, 0.19) 9.67%, #FF00C7 100%) !important",
											mr: 1,
											borderRadius: "35px",
											color: "#fff",
											fontSize: "20px",
											px: "72px",
											py: "10px",
										}}
									>
										$ {products?.data[1]?.lifetime} Lifetime
									</Button>
								</Grid>
								<Grid item md={6} xs={12}>
									<Button
										sx={{
											backgroundImage:
												"linear-gradient(180deg, rgba(251, 156, 247, 0.19) 9.67%, #FF00C7 100%) !important",
											borderRadius: "35px",
											color: "#fff",
											fontSize: "20px",
											px: "70px",
											py: "10px",
											mt: { xs: "5px" },
										}}
									>
										$ {products?.data[1]?.monthly} monthly
									</Button>
								</Grid>
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
					<Grid
						container
						sx={{
							mt: 8,
							height: { xs: "1500px", sm: "2000px", md: "1500px" },
							width: "100%",
							backgroundImage: "url('/assets/secondbanner.png')",
							backgroundRepeat: "no-repeat",
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					>
						<Grid item xs={12} sm={12} md={12}>
							<Box sx={{ pl: { xs: 2.5, sm: 7.5, md: 15 }, pt: 25 }}>
								<Typography
									component="h1"
									variant="h1"
									sx={{ color: "#FFFFFF", fontWeight: "500" }}
								>
									Forex <br /> Trading
								</Typography>
								<Typography
									component="p"
									variant="p"
									sx={{ color: "#FFFFFF", mt: 8, fontSize: "32px" }}
								>
									The best forex signals in the industry with the best course
									<br /> with over 10 million downloads
								</Typography>
								<Typography
									component="ul"
									variant="ul"
									sx={{ color: "#FFFFFF", mt: 6 }}
								>
									<Typography
										component="li"
										variant="li"
										sx={{ fontize: "24px", fontWeight: "500" }}
									>
										{" "}
										WEBINAR OF MARKET <br /> UPDATES
									</Typography>
									<Typography
										component="li"
										variant="li"
										sx={{ fontize: "24px", fontWeight: "500" }}
									>
										SIGNALS ALERT ROOM
									</Typography>
									<Typography
										component="li"
										variant="li"
										sx={{ fontize: "24px", fontWeight: "500" }}
									>
										CHATROOM
									</Typography>
									<Typography
										component="li"
										variant="li"
										sx={{ fontize: "24px", fontWeight: "500" }}
									>
										24/7 HELP
									</Typography>
								</Typography>
							</Box>
						</Grid>
						<Grid item md={12}>
							<Grid container sx={{ pl: 15 }}>
								<Grid item xs={12} sm={6} md={2}>
									<Button
										sx={{
											backgroundImage:
												"linear-gradient(180deg, rgba(251, 156, 247, 0.19) 9.67%, #FF00C7 100%) !important",

											borderRadius: "35px",
											color: "#fff",
											fontSize: "20px",
											px: { xs: "15px", sm: "35px", md: "70px" },
											py: "10px",
											mr: 1,
										}}
									>
										$400 Lifetime
									</Button>
								</Grid>
								<Grid item xs={12} sm={6} md={2}>
									<Button
										sx={{
											backgroundImage:
												"linear-gradient(180deg, rgba(251, 156, 247, 0.19) 9.67%, #FF00C7 100%) !important",

											borderRadius: "35px",
											color: "#fff",
											fontSize: "20px",
											px: { xs: "15px", sm: "35px", md: "70px" },
											py: "10px",
											my: { xs: "10px" },
											mr: 1,
										}}
									>
										$400 Lifetime
									</Button>
								</Grid>
								<Grid item xs={12} sm={6} md={2}>
									<Button
										sx={{
											backgroundImage:
												"linear-gradient(180deg, rgba(251, 156, 247, 0.19) 9.67%, #FF00C7 100%) !important",

											borderRadius: "35px",
											color: "#fff",
											fontSize: "20px",
											px: { xs: "15px", sm: "35px", md: "70px" },
											py: "10px",
											my: { xs: "10px" },
										}}
									>
										$400 Lifetime
									</Button>
								</Grid>
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

				<Container
					maxWidth={false}
					disableGutters
					sx={{
						height: { xs: "1500px", sm: "1500px", md: "1000px" },
						width: "100%",
						backgroundImage: "url('/assets/thirdbanner.png')",
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				>
					<Grid container sx={{ mt: 8, pt: { md: 30, ms: 20, xs: 40 } }}>
						<Grid item md={6}>
							<Box
								display="flex"
								justifyContent="center"
								alignItems="center"
								sx={{
									backgroundColor: "rgba(238, 166, 231, 0.43)",
									color: "#fff",
									width: { md: "403px", xs: "300px" },
									height: "402px",
									borderRadius: "45px",
									ml: { md: 30, sm: 20, xs: 5 },
								}}
							>
								<Box component="ul">
									<Box component="li">
										<Typography
											sx={{
												fontSize: "28px",
												fontWeight: "400",
											}}
										>
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
											CHATROOM
										</Typography>
									</Box>
									<Box component="li">
										<Typography
											sx={{
												fontSize: "28px",
												fontWeight: "400",
												color: "#fff",
											}}
										>
											24/7 HELP
										</Typography>
									</Box>
								</Box>
							</Box>
						</Grid>
						<Grid item md={6} xs={12}>
							<Grid container>
								<Grid item md={4}>
									<Button
										sx={{
											backgroundImage:
												"linear-gradient(180deg, rgba(251, 156, 247, 0.19) 9.67%, #FF00C7 100%) !important",

											borderRadius: "35px",
											color: "#fff",
											fontSize: "20px",
											px: { xs: "15px", sm: "35px", md: "70px" },
											py: "10px",
											ml: { xs: "20px" },
											mt: { xs: "10px" },
											mr: 1,
										}}
									>
										$400 Lifetime
									</Button>
								</Grid>
								<Grid item md={4}>
									<Button
										sx={{
											backgroundImage:
												"linear-gradient(180deg, rgba(251, 156, 247, 0.19) 9.67%, #FF00C7 100%) !important",
											borderRadius: "35px",
											color: "#fff",
											fontSize: "20px",
											px: { xs: "15px", sm: "35px", md: "70px" },
											py: "10px",
											mt: { xs: "10px" },
											mr: 1,
										}}
									>
										$200/Mothly
									</Button>
								</Grid>
								<Grid
									item
									md={12}
									sm={12}
									xs={12}
									sx={{
										//   ml: { md: "20px", xs: 20 },
										mt: "40px",
										textAlign: "center",
									}}
								>
									<Typography
										component="h1"
										variant="h1"
										sx={{
											color: "#fff",
											fontSize: "90px",
											fontWeight: "700",
											// mt: "22px",
										}}
									>
										STOCK <br /> TRADING
									</Typography>
								</Grid>
							</Grid>
							<Box
								display="flex"
								justifyContent="center"
								alignItems="center"
								sx={{
									mt: { md: 30, sm: "50px", xs: 20 },
									//   ml: { ms: 10, xs: 20 },
								}}
							></Box>
						</Grid>
					</Grid>
				</Container>
			</Layout>
		</>
	);
};

export default Courses;
