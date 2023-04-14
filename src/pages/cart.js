import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import Head from "next/head";

const cart = () => {
	return (
		<>
			<Head>
				<title>Position Traders Academe</title>
			</Head>
			<Container maxWidth={false} disableGutters pt={0} mt={0}>
				<Grid Container>
					<Grid
						item
						md={12}
						sx={{
							height: "1400px",
							width: "100%",
							backgroundImage: "url('/assets/cartBanner.png')",
							backgroundRepeat: "no-repeat",
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					>
						{/* <h1>hello</h1> */}
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default cart;
