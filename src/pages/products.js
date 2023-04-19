import React from "react";
import { Layout } from "@/Layout";
import { Container, Grid, Typography, Box, Button } from "@mui/material";
import Head from "next/head";
import { useCart, useProducts } from "api";

const Courses = () => {
	const { isLoading, isError, data: products, error } = useProducts();
	const { fetchProducts, deleteProduct, addProduct } = useCart();

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
						height: { md: "1060px", xs: "1000px", ms: "1000px" },
						width: "100%",
						backgroundImage: "url('/assets/mainbanner.png')",
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover",
						backgroundPosition: "center",
						// py: "0px",
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
										textShadow: " 0px 0px 25px #C117A6",
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
								height: { md: "650px", xs: "500px" },
							}}
						>
							<Typography
								component="ul"
								variant="ul"
								sx={{
									color: "#FFFFFF",
									fontSize: "30px",
									fontWeight: "400",
									textShadow: " 0px 0px 25px #C117A6",
								}}
							>
								<Typography component="li" variant="li">
									{" "}
									WEBINAR OF MARKET <br /> UPDATES
								</Typography>
								<Typography component="li" variant="li">
									SIGNALS ALERT ROOM
								</Typography>
								<Typography component="li" variant="li">
									CHATROOM
								</Typography>
								<Typography component="li" variant="li">
									24/7 HELP
								</Typography>
							</Typography>
						</Grid>

						<Grid
							item
							md={12}
							sx={{
								display: "flex",
								justifyContent: "center",
								// mt: { md: 30, xs: 15 },
								// ml: { xs: 7 },
							}}
						>
							<Grid
								container
								sx={{
									mt: { md: 26, xs: 20 },
									//   ml: { xs: 7 },
								}}
							>
								<Grid
									item
									md={6}
									xs={12}
									sx={{ display: "flex", justifyContent: "end" }}
								>
									<Button
										onClick={() => {
											addProduct({
												id: products?.data[1]?.id,
												name: products?.data[1]?.name,
												subscription: products?.data[1]?.lifetime,
												subscription_type: "lifetime",
											});
										}}
										sx={{
											backgroundImage:
												"linear-gradient(180deg, rgba(251, 156, 247, 0.19) 9.67%, #FF00C7 100%) !important",
											mr: 5,
											borderRadius: "35px",
											color: "#fff",
											fontSize: "16px",
											px: "112px",
											//   py: "10px",
										}}
									>
										$ {products?.data[1]?.lifetime} Lifetime
									</Button>
								</Grid>
								<Grid item md={6} xs={12}>
									<Button
										onClick={() => {
											addProduct({
												id: products?.data[1]?.id,
												name: products?.data[1]?.name,
												subscription: products?.data[1]?.monthly,
												subscription_type: "monthly",
											});
										}}
										sx={{
											backgroundImage:
												"linear-gradient(180deg, rgba(251, 156, 247, 0.19) 9.67%, #FF00C7 100%) !important",
											borderRadius: "35px",
											color: "#fff",
											fontSize: "16px",
											px: "110px",
											//   py: "10px",
											//   mt: { xs: "5px" },
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
							height: { xs: "1500px", sm: "2000px", md: "1070px" },
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
									sx={{
										color: "#FFFFFF",
										mt: 6,
										fontSize: "30px",
										fontWeight: "500",
										textShadow: " 0px 0px 25px #C117A6",
									}}
								>
									<Typography component="li" variant="li">
										{" "}
										WEBINAR OF MARKET <br /> UPDATES
									</Typography>
									<Typography component="li" variant="li">
										SIGNALS ALERT ROOM
									</Typography>
									<Typography component="li" variant="li">
										CHATROOM
									</Typography>
									<Typography component="li" variant="li">
										24/7 HELP
									</Typography>
								</Typography>
							</Box>
						</Grid>
						<Grid item md={12}>
							<Grid container sx={{ pl: 15 }}>
								<Grid item xs={12} sm={6} md={1.5}>
									<Button
										onClick={() => {
											addProduct({
												id: products?.data[0]?.id,
												name: products?.data[0]?.name,
												subscription: products?.data[0]?.lifetime,
												subscription_type: "lifetime",
											});
										}}
										sx={{
											backgroundColor: "rgba(206, 85, 237, 0.57)",
											borderRadius: "35px",
											color: "#fff",
											fontSize: "16px",
											px: "50px",
										}}
									>
										${products?.data[0]?.lifetime} Lifetime
									</Button>
								</Grid>
								<Grid item xs={12} sm={6} md={1.5}>
									<Button
										onClick={() => {
											addProduct({
												id: products?.data[0]?.id,
												name: products?.data[0]?.name,
												subscription: products?.data[0]?.monthly,
												subscription_type: "monthly",
											});
										}}
										sx={{
											backgroundColor: "rgba(206, 85, 237, 0.57)",
											borderRadius: "35px",
											color: "#fff",
											fontSize: "16px",
											px: "50px",
										}}
									>
										${products?.data[0]?.monthly} monthly
									</Button>
								</Grid>
								{/* <Grid item xs={12} sm={6} md={2}>
									<Button
										sx={{
											backgroundColor: "rgba(206, 85, 237, 0.57)",
											borderRadius: "35px",
											color: "#fff",
											fontSize: "16px",
											px: "50px",
										}}
									>
										$100 course
									</Button>
								</Grid> */}
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
						<Grid item md={7}>
							<Box
								display="flex"
								justifyContent="center"
								alignItems="center"
								sx={{
									backgroundColor: "rgba(238, 166, 231, 0.43)",
									color: "#fff",
									width: { md: "403px", xs: "300px" },
									height: "400px",
									borderRadius: "45px",
									ml: { md: 30, sm: 20, xs: 5 },
								}}
							>
								<Typography
									component="ul"
									variant="ul"
									sx={{
										fontSize: "30px",
										fontWeight: "500",
										textShadow: " 0px 0px 25px #C117A6;",
									}}
								>
									<Typography component="li" variant="li">
										{" "}
										WEBINAR OF MARKET <br /> UPDATES
									</Typography>
									<Typography component="li" variant="li">
										SIGNALS ALERT ROOM
									</Typography>
									<Typography component="li" variant="li">
										CHATROOM
									</Typography>
									<Typography component="li" variant="li">
										24/7 HELP
									</Typography>
								</Typography>
							</Box>
						</Grid>
						<Grid item md={5} xs={12}>
							<Grid container sx={{ mt: { md: 27 } }}>
								<Grid item md={4}>
									<Button
										onClick={() => {
											addProduct({
												id: products?.data[2]?.id,
												name: products?.data[2]?.name,
												subscription: products?.data[2]?.lifetime,
												subscription_type: "lifetime",
											});
										}}
										sx={{
											backgroundColor: "rgba(96, 44, 109, 0.87) ",
											borderRadius: "35px",
											color: "#fff",
											px: "60px",
											fontSize: "16px",
										}}
									>
										${products?.data[2]?.lifetime} Lifetime
									</Button>
								</Grid>
								<Grid item md={4}>
									<Button
										onClick={() => {
											addProduct({
												id: products?.data[2]?.id,
												name: products?.data[2]?.name,
												subscription: products?.data[2]?.monthly,
												subscription_type: "monthly",
											});
										}}
										sx={{
											backgroundColor: "rgba(96, 44, 109, 0.87) ",
											borderRadius: "35px",
											color: "#fff",
											px: "60px",
											fontSize: "16px",
										}}
									>
										${products?.data[2]?.monthly} monthly
									</Button>
								</Grid>
								<Grid
									item
									md={12}
									sm={12}
									xs={12}
									sx={{
										ml: { md: 14 },
										mt: "100px",
									}}
								>
									<Typography
										component="h1"
										variant="h1"
										sx={{
											color: "#fff",
											fontSize: "96px",
											fontWeight: "700",
											textShadow: " 0px 0px 25px rgba(255, 255, 255, 0.67)",
										}}
									>
										STOCK <br /> TRADING
									</Typography>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</Layout>
		</>
	);
};

export default Courses;
