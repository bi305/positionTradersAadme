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
				pt: 30,
				pb: 10,
			}}
		>
			<Grid container maxWidth="xl">
				<Grid item xs={12} sm={6} md={3} my={2}>
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
				<Grid item xs={12} sm={6} md={3} my={2}>
					<Box>
						<Typography component="h4" variant="h6">
							About
						</Typography>
						<Typography component="p">Press & Media</Typography>
					</Box>
				</Grid>
				<Grid item xs={12} sm={6} md={3} my={2}>
					<Box>
						<Typography component="h4" variant="h6">
							Help
						</Typography>
						<Typography component="p">Contact support</Typography>
					</Box>
				</Grid>
				<Grid item xs={12} sm={6} md={3} my={2}>
					<Box>
						<Typography component="h4" variant="h6">
							Legal, Privacy and Security
						</Typography>
						<Typography component="p">Information Security Policy</Typography>
						<Typography component="p">Privacy policy</Typography>
						<Typography component="p">Cookie Policy</Typography>
						<Typography component="p">Acceptable use policy</Typography>
						<Typography component="p">Terms of service</Typography>
						<Typography component="p">Data processing addendum</Typography>
						<Typography component="p">Service Level Agreement</Typography>
						<Typography component="p">Subprocessors list</Typography>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Footer;
