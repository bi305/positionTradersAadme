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
					<Grid Container sx={{ mt: 8 }}>
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
