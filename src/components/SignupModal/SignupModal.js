import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent"; 
import DialogTitle from "@mui/material/DialogTitle";
import { Box, InputAdornment } from "@mui/material";
import { useRegister } from "api";
import { Mail, KeyOutlined } from "@mui/icons-material";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function FormDialog() {
	const registerMutation = useRegister();
	const [open, setOpen] = React.useState(false);
	const [formValues, setFormValues] = React.useState({
		email: "",
		password: "",
		telegram_id: "",
		address: "",
		phone: "",
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
				variant="contained"
				onClick={handleClickOpen}
				sx={{ borderRadius: "20px", mx: 1 }}
			>
				Sign Up
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
							registerMutation.mutate(formValues);
						}}
					>
						<DialogContent>
							<Box sx={{ mb: 1 }}>
								<TextField
									onChange={(e) => {
										setFormValues({ ...formValues, email: e.target.value });
									}}
									value={formValues.email}
									required
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
									required
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
							<Box sx={{ mb: 1 }}>
								<TextField
									onChange={(e) => {
										setFormValues({
											...formValues,
											telegram_id: e.target.value,
										});
									}}
									value={formValues.telegram_id}
									required
									InputProps={{
										autoComplete: "off",
										placeholder: "telegram id",
										startAdornment: (
											<InputAdornment position="start">
												<TelegramIcon />
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
									id="telegram_Id"
									type="text"
									fullWidth
									variant="outlined"
								/>
							</Box>
							<Box sx={{ mb: 1 }}>
								<TextField
									onChange={(e) => {
										setFormValues({ ...formValues, address: e.target.value });
									}}
									value={formValues.address}
									required
									InputProps={{
										autoComplete: "off",
										placeholder: "address",
										startAdornment: (
											<InputAdornment position="start">
												<HomeIcon />
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
									id="address"
									type="text"
									fullWidth
									variant="outlined"
								/>
							</Box>
							<Box>
								<TextField
									onChange={(e) => {
										setFormValues({ ...formValues, phone: e.target.value });
									}}
									value={formValues.phone}
									required
									InputProps={{
										autoComplete: "off",
										placeholder: "phone number",
										startAdornment: (
											<InputAdornment position="start">
												<PhoneIcon />
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
									id="phone"
									type="text"
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
