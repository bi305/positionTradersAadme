import * as React from "react";

import {
	Box,
	Button,
	InputAdornment,
	TextField,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
} from "@mui/material";
import { Mail, KeyOutlined } from "@mui/icons-material";
import { useLogin } from "api";

export default function SigninDialog() {
	const loginMutation = useLogin();
	const [open, setOpen] = React.useState(false);
	const [formValues, setFormValues] = React.useState({
		email: "",
		password: "",
	});

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button
				variant="outlined"
				onClick={handleClickOpen}
				sx={{ borderRadius: "20px", mx: 1 }}
			>
				Sign In
			</Button>
			<Dialog
				open={open}
				maxWidth="sm"
				fullWidth
				onClose={handleClose}
				sx={{ "& .MuiDialog-paper": { borderRadius: "60px" } }}
			>
				<Box
					sx={{
						background: "radial-gradient(circle, #CC00FF, #FDA905)",
						textAlign: "center",
						color: "white",
					}}
				>
					<DialogTitle>Subscribe</DialogTitle>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							loginMutation.mutate(formValues);
						}}
					>
						<DialogContent>
							<Box sx={{ mb: 1 }}>
								<TextField
									onChange={(e) => {
										setFormValues({ ...formValues, email: e.target.value });
									}}
									value={formValues.email}
									InputProps={{
										autoComplete: "off",
										placeholder: "xyz@gmail.com",
										startAdornment: (
											<InputAdornment position="start">
												<Mail />
											</InputAdornment>
										),
									}}
									sx={{
										"& .MuiOutlinedInput-input": {
											padding: "5px !important",
										},
										bgcolor: "#F2DDDF",
										borderRadius: "20px",
										"& .MuiOutlinedInput-notchedOutline ": { border: "0px" },
									}}
									id="email"
									type="email"
									fullWidth
									variant="outlined"
								/>
							</Box>
							<Box sx={{ mb: 1 }}>
								<TextField
									onChange={(e) => {
										setFormValues({ ...formValues, password: e.target.value });
									}}
									value={formValues.password}
									InputProps={{
										autoComplete: "off",
										placeholder: "xxxxxxxxxxx",
										startAdornment: (
											<InputAdornment position="start">
												<KeyOutlined />
											</InputAdornment>
										),
									}}
									sx={{
										"& .MuiOutlinedInput-input": {
											padding: "5px !important",
										},
										bgcolor: "#F2DDDF",
										borderRadius: "20px",
										"& .MuiOutlinedInput-notchedOutline ": { border: "0px" },
									}}
									id="password"
									type="password"
									fullWidth
									variant="outlined"
								/>
							</Box>
						</DialogContent>
						<DialogActions sx={{ display: "flex", justifyContent: "center" }}>
							<Button
								type="submit"
								color="inherit"
								sx={{
									bgcolor: "#F2DDDF",
									color: "black",
									px: 5,
									borderRadius: "30px",
								}}
							>
								Sign Up
							</Button>
						</DialogActions>
					</form>
				</Box>
			</Dialog>
		</div>
	);
}
