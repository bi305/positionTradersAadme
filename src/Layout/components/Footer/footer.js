import { Container, Grid, Typography, Box } from "@mui/material";
import React from "react";

const Footer = () => {
	return (
		<Container
			maxWidth={false}
			sx={{
				bgcolor: "#1B0D33",
				color: "white",
				display: "flex",
				justifyContent: "center",
			}}
		>
			<Grid container maxWidth="xl">
				<Grid item md={3}>
					<Box>
						<Typography component="h4" variant="h6">
							Product
						</Typography>
						<Typography component="p">Product</Typography>
						<Typography component="p">Crypto Currency Alert Room</Typography>
						<Typography component="p">Forex Trading Alert Room</Typography>
						<Typography component="p"> Stock Trading Alert Room</Typography>
						<Typography component="p"> Trading Community Chat</Typography>
						<Typography component="p">Trading Course</Typography>
					</Box>
				</Grid>
				<Grid item md={3}>
					<Box>
						<Typography component="h4" variant="h6">
							About
						</Typography>
						<Typography component="p">Press & Media</Typography>
					</Box>
				</Grid>
				<Grid item md={3}>
					<Box>
						<Typography component="h4" variant="h6">
							Help
						</Typography>
						<Typography component="p">Contact support</Typography>
					
					</Box>
				</Grid>
				<Grid item md={3}>
					<Box>
						<Typography component="h4" variant="h6">
            Legal, Privacy and Security
						</Typography>
						<Typography component="p">Product</Typography>
						<Typography component="p">Product</Typography>
						<Typography component="p">Product</Typography>
						<Typography component="p">Product</Typography>
						<Typography component="p">Product</Typography>
						<Typography component="p">Product</Typography>
						<Typography component="p">Product</Typography>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Footer;
