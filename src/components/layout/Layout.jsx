import Announcement from "../announcement/Announcement";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Layout = (props) => {
	return (
		<div>
			<Announcement />
			<Navbar />
			<main>{props.children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
