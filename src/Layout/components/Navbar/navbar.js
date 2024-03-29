import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";

import MoreIcon from "@mui/icons-material/MoreVert";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import FormDialog from "@/components/SignupModal/SignupModal";
import SigninDialog from "@/components/SigninModal/SigninModal";
import { useCart, useUser } from "api";
import { ListItemIcon, Paper } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useRouter } from "next/router";
import Link from "next/link";

const drawerWidth = 240;
const navItems = [{ lable: "Alert Room", link: "/products" }];
export default function PrimarySearchAppBar(props) {
	const user = useUser();
	const { cartData, deleteProduct } = useCart();

	const [anchorEl1, setAnchorEl1] = React.useState(null);
	const open = Boolean(anchorEl1);

	const [anchorEl, setAnchorEl] = React.useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleClick = (event) => {
		setAnchorEl1(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl1(null);
	};

	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const menuId = "menu-id";
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			id={menuId}
			keepMounted
			transformOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			<MenuItem onClick={handleMenuClose}>My account</MenuItem>
		</Menu>
	);

	const mobileMenuId = "menu-mobile-id";
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem>
				<Typography sx={{ mx: 1 }}>Contact us</Typography>
			</MenuItem>
			{user?.data ? (
				<MenuItem>
					<Button sx={{ borderRadius: "20px" }} variant="contained">
						Cart
					</Button>
				</MenuItem>
			) : (
				<>
					<MenuItem>
						<Button sx={{ borderRadius: "20px" }} variant="outlined">
							Sign in
						</Button>
					</MenuItem>
					<MenuItem>
						<Button sx={{ borderRadius: "20px" }} variant="contained">
							Sign up
						</Button>
					</MenuItem>
				</>
			)}

			<MenuItem onClick={handleProfileMenuOpen}>
				<IconButton
					size="large"
					aria-label="account of current user"
					aria-controls="primary-search-account-menu"
					aria-haspopup="true"
					color="inherit"
				>
					<AccountCircle />
				</IconButton>
				{/* <p>Profile</p> */}
			</MenuItem>
		</Menu>
	);

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
			<Typography variant="h6" sx={{ my: 2 }}>
				MUI
			</Typography>
			<Divider />
			<List>
				{navItems.map((item) => (
					<ListItem key={item} disablePadding>
						<ListItemButton sx={{ textAlign: "center" }}>
							<ListItemText
								primary={item.lable}
								onClick={() => {
									"#review";
								}}
							/>
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);
	const router = useRouter();
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="fixed" sx={{ backgroundColor: "#26224D" }}>
				<Toolbar>
					<Box
						component="img"
						src="/assets/logo.png"
						sx={{
							display: { xs: "none", md: "flex" },
							mr: 1,
							width: "50px",
						}}
					/>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { xs: "flex", md: "none" } }}
					>
						<MenuIcon />
					</IconButton>
					<Box sx={{ flexGrow: 1 }} />
					<Box sx={{ display: { xs: "none", md: "flex" } }}>
						{navItems.map((item) => (
							<Button key={item} sx={{ color: "#fff" }}>
								<Link href={item.link} style={{ color: "white !important" }}>
									{item.lable}
								</Link>
							</Button>
						))}
					</Box>
					<Box sx={{ flexGrow: 1 }} />
					<Box
						sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
					>
						<IconButton
							sx={{ mx: 1 }}
							size="large"
							edge="end"
							aria-label="account of current user"
							aria-controls={menuId}
							aria-haspopup="true"
							onClick={handleProfileMenuOpen}
							color="inherit"
						>
							<AccountCircle />
						</IconButton>
						<Divider
							orientation="vertical"
							variant="middle"
							flexItem
							color="#656D78"
						/>
						<Typography sx={{ mx: 1 }}>
							<Box
								sx={{ color: "inherit" }}
								component="a"
								href="mailto:positiontradersmanagement@gmail.com"
							>
								Contact us
							</Box>
						</Typography>

						{user.data ? (
							<>
								<Badge badgeContent={cartData.length}>
									<Button
										id="basic-button"
										aria-controls={open ? "basic-menu" : undefined}
										aria-expanded={open ? "true" : undefined}
										onClick={handleClick}
									>
										Cart
									</Button>
									<Menu
										id="basic-menu"
										anchorEl={anchorEl1}
										open={open}
										onClose={handleClose}
									>
										{cartData.length ? (
											<>
												{cartData?.map((item, index) => {
													return (
														<Paper
															key={index}
															sx={{ width: 220, maxWidth: "100%" }}
														>
															<MenuList>
																<MenuItem>
																	<ListItemText>{item.name}</ListItemText>
																	<ListItemIcon
																		sx={{
																			display: "flex",
																			justifyContent: "end",
																		}}
																	>
																		<Delete
																			onClick={() => deleteProduct(item.id)}
																		/>
																	</ListItemIcon>
																</MenuItem>
															</MenuList>
														</Paper>
													);
												})}
												<Button onClick={() => router.push("/cart")}>
													Pay Now
												</Button>
											</>
										) : (
											<MenuItem>Cart Is Empty</MenuItem>
										)}
									</Menu>
								</Badge>
							</>
						) : (
							<>
								<SigninDialog />
								<FormDialog />
							</>
						)}
					</Box>
					<Box sx={{ display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="show more"
							aria-controls={mobileMenuId}
							aria-haspopup="true"
							onClick={handleMobileMenuOpen}
							color="inherit"
						>
							<MoreIcon />
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>

			{/* This is Drawer on mobile screen*/}

			<Box component="nav">
				<Drawer
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", md: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
			</Box>
			{renderMobileMenu}
			{renderMenu}
		</Box>
	);
}
