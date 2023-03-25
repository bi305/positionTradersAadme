import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Container, Box, Typography, Grid, Button } from "@mui/material";
import Slider from "react-slick";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerPadding: "100px",
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
					sx={{ bgcolor: "#1B0D33", display: "flex", justifyContent: "center",p:10 }}
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
						<Grid item md={12}>
							<Box>
								<Slider {...settings} arrows={false}>
									<Box>
										<Box
											sx={{
												bgcolor: "purple",
												padding: "100px",
												margin: "15px",
												height: "300px",
											}}
										>
											<h3>1</h3>
										</Box>
									</Box>
									<Box>
										<Box
											sx={{
												bgcolor: "purple",
												padding: "100px",
												margin: "15px",
												height: "300px",
											}}
										>
											<h3>2</h3>
										</Box>
									</Box>
									<Box>
										<Box
											sx={{
												bgcolor: "purple",
												padding: "100px",
												margin: "15px",
												height: "300px",
											}}
										>
											<h3>3</h3>
										</Box>
									</Box>
									<Box>
										<Box
											sx={{
												bgcolor: "purple",
												padding: "100px",
												margin: "15px",
												height: "300px",
											}}
										>
											<h3>4</h3>
										</Box>
									</Box>
								</Slider>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</main>
		</>
	);
}
