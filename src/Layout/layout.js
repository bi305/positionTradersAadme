import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Layout = ({ children, footer = true, navBar = true }) => {
	return (
		<>
			{navBar && <Navbar />}
			{children}
			{footer && <Footer />}
		</>
	);
};
export default Layout;
