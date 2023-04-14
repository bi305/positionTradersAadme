import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/material";

export default function FormDialog() {
	const [open, setOpen] = React.useState(false);

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
					<DialogContent>
						<Box sx={{ m: 3 }}>
							<TextField
								sx={{
									bgcolor: "#F2DDDF",
									borderRadius: "20px",
									"& .MuiOutlinedInput-notchedOutline ": { border: "0px" },
								}}
								id="name"
								label="Email Address"
								type="email"
								fullWidth
								variant="outlined"
							/>
						</Box>
						<Box sx={{ m: 3 }}>
							<TextField
								sx={{
									bgcolor: "#F2DDDF",
									borderRadius: "20px",
									"& .MuiOutlinedInput-notchedOutline ": { border: "0px" },
								}}
								id="name"
								label="Email Address"
								type="email"
								fullWidth
								variant="outlined"
							/>
						</Box>
						<Box sx={{ m: 3 }}>
							<TextField
								sx={{
									bgcolor: "#F2DDDF",
									borderRadius: "20px",
									"& .MuiOutlinedInput-notchedOutline ": { border: "0px" },
								}}
								id="name"
								label="Email Address"
								type="email"
								fullWidth
								variant="outlined"
							/>
						</Box>
						<Box sx={{ m: 3 }}>
							<TextField
								sx={{
									bgcolor: "#F2DDDF",
									borderRadius: "20px",
									"& .MuiOutlinedInput-notchedOutline ": { border: "0px" },
								}}
								id="name"
								label="Email Address"
								type="email"
								fullWidth
								variant="outlined"
							/>
						</Box>
						<Box sx={{ m: 3 }}>
							<TextField
								sx={{
									bgcolor: "#F2DDDF",
									borderRadius: "20px",
									"& .MuiOutlinedInput-notchedOutline ": { border: "0px" },
								}}
								id="name"
								label="Email Address"
								type="email"
								fullWidth
								variant="outlined"
							/>
						</Box>
					</DialogContent>
					<DialogActions sx={{ display: "flex", justifyContent: "center" }}>
						<Button
							onClick={handleClose}
							color="inherit"
							sx={{ bgcolor: "#F2DDDF" }}
						>
							Cancel
						</Button>
					</DialogActions>
				</Box>
			</Dialog>
		</div>
	);
}
