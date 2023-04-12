import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import {
	Container,
	Box,
	Typography,
	Grid,
	Button,
	Card,
	CardContent,
	CardMedia,
} from "@mui/material";
import Slider from "react-slick";
import { Avatar, Rating } from "@mui/material";
<<<<<<< HEAD
=======
import Image from "next/image";
import B from "../../public/assets/b.png";
>>>>>>> 40f37955155995d6162ba8d6ee66c65ffdcf0d3c

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
<<<<<<< HEAD
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
=======
>>>>>>> 40f37955155995d6162ba8d6ee66c65ffdcf0d3c
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
						<Box mt={10}>
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
							<Typography
								color="#5AECAD"
								sx={{ fontSize: { sm: "50px", lg: "100px" } }}
								fontWeight="800"
							>
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
<<<<<<< HEAD
										height: "478px",
=======
										height: "400px",
>>>>>>> 40f37955155995d6162ba8d6ee66c65ffdcf0d3c
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
<<<<<<< HEAD
												sx={{ width: 56, height: 56 }}
											/>
											<Rating name="read-only" value={5} readOnly />
										</Box>
										<Typography>
=======
												sx={{ width: 90, height: 90 }}
											/>
											<Box>
												<Rating name="read-only" value={5} readOnly />
												<Typography component="p">Joseph John</Typography>
											</Box>
										</Box>
										<Typography mt={5}>
>>>>>>> 40f37955155995d6162ba8d6ee66c65ffdcf0d3c
											Tyler’s academy is the best around literally shows how he
											trades in detail he has free webinars on there to watch
											them religiously I would suggest for the best outcome.
										</Typography>
									</Box>
								</Box>
								<Box
									sx={{
										width: "396px !important",
<<<<<<< HEAD
										height: "478px",
=======
										height: "400px",
>>>>>>> 40f37955155995d6162ba8d6ee66c65ffdcf0d3c
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
<<<<<<< HEAD
												sx={{ width: 56, height: 56 }}
											/>
											<Rating name="read-only" value={5} readOnly />
										</Box>
										<Typography>
											Tyler’s academy is the best around literally shows how he
											trades in detail he has free webinars on there to watch
											them religiously I would suggest for the best outcome.
=======
												sx={{ width: 90, height: 90 }}
											/>
											<Box>
												<Rating name="read-only" value={5} readOnly />
												<Typography component="p">Daisy</Typography>
											</Box>
										</Box>
										<Typography mt={5}>
											3 years of being in group with Tyler Espitia calling fire
											plays. You all literally not going to find another group
											that’s hitting all angles of the market. Sacrifice
											everything right now to help yourself. You don’t wanna
											wish you paid attention to Tyler.
>>>>>>> 40f37955155995d6162ba8d6ee66c65ffdcf0d3c
										</Typography>
									</Box>
								</Box>
								<Box
									sx={{
										width: "396px !important",
<<<<<<< HEAD
										height: "478px",
=======
										height: "400px",
>>>>>>> 40f37955155995d6162ba8d6ee66c65ffdcf0d3c
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
<<<<<<< HEAD
											<Rating name="read-only" value={5} readOnly />
										</Box>
										<Typography>
											Tyler’s academy is the best around literally shows how he
											trades in detail he has free webinars on there to watch
											them religiously I would suggest for the best outcome.
=======
											<Box>
												<Rating name="read-only" value={5} readOnly />
												<Typography component="p">Marcus</Typography>
											</Box>
										</Box>
										<Typography mt={5}>
											I have been with Tyler for a long time now. All I can say
											is that he is the real G. He is the only honest teacher in
											the industry. We get a chatroom which is accessed by all
											students and teachers who can help us 24/7. I am so
											blessed I got in.
>>>>>>> 40f37955155995d6162ba8d6ee66c65ffdcf0d3c
										</Typography>
									</Box>
								</Box>
							</Slider>
<<<<<<< HEAD
=======
						</Grid>
					</Grid>
				</Container>
				<Container
					maxWidth={false}
					sx={{ bgcolor: "#F8FAFF", display: "flex", justifyContent: "center" }}
				>
					<Grid container maxWidth="md" spacing={3} my={7}>
						<Grid item md={12} sm={12} xs={12} textAlign="center" my={7}>
							<Typography color="#662EFF">
								We're a Company You Can Grow With
							</Typography>
							<Typography variant="h3">Global Reach & Support</Typography>
						</Grid>
						<Grid
							item
							md={12}
							sm={12}
							xs={12}
							display="flex"
							justifyContent="center"
						>
							<Card sx={{ maxWidth: 345 }}>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										Premium support for everyone
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Never feel stuck or alone. Our team of experts is ready to
										respond - within 24 hours or less - to any questions and
										ensure you’re on the path to success.
									</Typography>
								</CardContent>
								<CardMedia
									component="img"
									image="/assets/support.png"
									alt="green iguana"
								/>
							</Card>
						</Grid>
						<Grid
							item
							md={12}
							sm={12}
							xs={12}
							display="flex"
							justifyContent="center"
						>
							<Card>
								<Grid container>
									<Grid item md={6}>
										<CardContent>
											<Typography gutterBottom variant="h5" component="div">
												Scalability, stability, and security
											</Typography>
											<Typography variant="body2" color="text.secondary">
												Academy excellence through scalable
												<br /> infrastructure, stable platform, and secure
												<br />
												operations with 24/7 customer service.
											</Typography>
										</CardContent>
									</Grid>
									<Grid item md={6}>
										<CardMedia
											component="img"
											image="/assets/3s.png"
											alt="green iguana"
										/>
									</Grid>
								</Grid>
							</Card>
						</Grid>
						<Grid
							item
							md={6}
							sm={12}
							xs={12}
							display="flex"
							justifyContent="center"
						>
							<Card sx={{ maxWidth: 450 }}>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										Faster time-to-success rate
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Set up and break into new markets
										<br /> more quickly across 190+ countries.
									</Typography>
								</CardContent>
								<CardMedia
									component="img"
									image="/assets/fast.png"
									alt="green iguana"
								/>
							</Card>
						</Grid>
						<Grid
							item
							md={6}
							sm={12}
							xs={12}
							display="flex"
							justifyContent="center"
						>
							<Card sx={{ maxWidth: 450 }}>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										Pay-as-you-go
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Select and pay for only crypto currency so you
										<br /> can focus on growing you and your business
										<br /> worry-free. It’s that simple.
									</Typography>
								</CardContent>
								<CardMedia
									component="img"
									image="/assets/pay.png"
									alt="green iguana"
								/>
							</Card>
						</Grid>
					</Grid>
				</Container>
				<Container maxWidth={false} sx={{ bgcolor: "#250F50", mt: 10 }}>
					<Grid container>
						<Grid item md={6} color="white" p={10}>
							<Typography variant="h3">Getting Started is easy</Typography>
							<Typography>
								We have generous tiers available to get you started right away.
							</Typography>{" "}
						</Grid>
						<Grid item md={6}>
							<Box display="flex" justifyContent="end">
								<Image src={B} />
							</Box>
>>>>>>> 40f37955155995d6162ba8d6ee66c65ffdcf0d3c
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
