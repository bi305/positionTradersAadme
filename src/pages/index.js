import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Container, Box, Typography, Grid, Button } from "@mui/material";
import Slider from "react-slick";
import { Avatar, Rating } from "@mui/material";

export default function Home() {
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<>
			<Head>
				<title>Position Traders Acdme</title>
			</Head>
			<main className={styles.main}>
				<Container maxWidth={false} sx={{ bgcolor: "#1B0D33" }}>
					<Box
						textAlign="center"
						color="white"
						display="flex"
						justifyContent="center"
						py={10}
					>
						<Box>
							<Typography
								component="h1"
								variant="h2"
								fontWeight="bolder"
								mb="20px"
							>
								POSITION TRADERS ACADEMY
							</Typography>
							<Typography component="p" marginX="auto" maxWidth="600px">
								We are the best in the industry, we have the best trading
								community for you with direct contact to other millionaire
								traders and students. You get a chance to work and grow with the
								best trading community in the industry.
							</Typography>
							<Button
								variant="contained"
								sx={{
									mt: "20px",
									background:
										" linear-gradient(180deg, #988BBB 0%, rgba(102, 46, 255, 0) 100%)",
									py: "15px",
									px: "40px",
									borderRadius: "30px",
								}}
							>
								Continue
							</Button>
						</Box>
					</Box>
					<Box display="flex" justifyContent="center">
						<Box
							component="img"
							src="/assets/heroBanner.gif"
							maxWidth="100%"
							mb={15}
						/>
					</Box>
				</Container>
				<Container>
					<Box
						display="flex"
						justifyContent="center"
						textAlign="center"
						py={10}
					>
						<Typography component="h4" variant="h4">
							Powering
							<Typography component="span" variant="h4" color="#662EFF">
								Best Trading Academy
							</Typography>
							for
							<br />
							Millions of Users Worldwide
						</Typography>
					</Box>
				</Container>
				<Container
					maxWidth={false}
					sx={{
						bgcolor: "#1B0D33",
						display: "flex",
						justifyContent: "center",
						p: 10,
					}}
				>
					<Grid container maxWidth="md">
						<Grid item md={12} textAlign="center">
							<Typography color="#5AECAD" variant="h1" fontWeight="800">
								Feedback
							</Typography>
							<Typography color="#ffffff">
								Our students love position traders academy. Here is what they
								are saying!
							</Typography>
						</Grid>
						<Grid item md={12} sm={12} xs={12}>
							<Slider {...settings} arrows={false}>
								<Box
									sx={{
										width: "396px !important",
										height: "478px",
										background: "rgba(86, 86, 146, 0.36)",
										border: "1px solid #565692",
										boxShadow: "0px 0px 25px #565692",
										borderRadius: "73px",
										p: 5,
										color: "#ffffff",
									}}
								>
									<Box>
										<Box
											sx={{ display: "flex", justifyContent: "space-between" }}
										>
											<Avatar
												src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=756&q=80"
												sx={{ width: 56, height: 56 }}
											/>
											<Rating name="read-only" value={5} readOnly />
										</Box>
										<Typography>
											Tyler’s academy is the best around literally shows how he
											trades in detail he has free webinars on there to watch
											them religiously I would suggest for the best outcome.
										</Typography>
									</Box>
								</Box>
								<Box
									sx={{
										width: "396px !important",
										height: "478px",
										background: "rgba(86, 86, 146, 0.36)",
										border: "1px solid #565692",
										boxShadow: "0px 0px 25px #565692",
										borderRadius: "73px",
										p: 5,
										color: "#ffffff",
									}}
								>
									<Box>
										<Box
											sx={{ display: "flex", justifyContent: "space-between" }}
										>
											<Avatar
												src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=756&q=80"
												sx={{ width: 56, height: 56 }}
											/>
											<Rating name="read-only" value={5} readOnly />
										</Box>
										<Typography>
											Tyler’s academy is the best around literally shows how he
											trades in detail he has free webinars on there to watch
											them religiously I would suggest for the best outcome.
										</Typography>
									</Box>
								</Box>
								<Box
									sx={{
										width: "396px !important",
										height: "478px",
										background: "rgba(86, 86, 146, 0.36)",
										border: "1px solid #565692",
										boxShadow: "0px 0px 25px #565692",
										borderRadius: "73px",
										p: 5,
										color: "#ffffff",
									}}
								>
									<Box>
										<Box
											sx={{ display: "flex", justifyContent: "space-between" }}
										>
											<Avatar
												src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=756&q=80"
												sx={{ width: 56, height: 56 }}
											/>
											<Rating name="read-only" value={5} readOnly />
										</Box>
										<Typography>
											Tyler’s academy is the best around literally shows how he
											trades in detail he has free webinars on there to watch
											them religiously I would suggest for the best outcome.
										</Typography>
									</Box>
								</Box>
							</Slider>
						</Grid>
						 
					</Grid>
				</Container>
				<Container>
					<Grid item md={12} sm={12} xs={12} textAlign="center">
						<Typography >
							We're a Company You Can Grow With
						</Typography>
						<Typography variant="h2" >
							Global Reach & Support
						</Typography>
					</Grid>
				</Container>
			</main>
		</>
	);
}
