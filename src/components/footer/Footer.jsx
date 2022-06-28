import {
	Facebook,
	Instagram,
	Pinterest,
	Twitter,
	Room,
	Phone,
	MailOutline,
} from "@material-ui/icons";
import {
	Center,
	Container,
	Left,
	Right,
	Logo,
	Desc,
	SocialContainer,
	SocialIcon,
	ListItem,
	Title,
	List,
	ContactItem,
	Payment,
} from "./styles/footer";

const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo>LAMA.</Logo>
				<Desc>
					There are many variations of passages of Lorem Ipsum available, but
					the majority have suffered alteration in some form, by injected
					humour, or randomised words which don’t look even slightly believable.
				</Desc>

				<SocialContainer>
					<SocialIcon
						href="https://www.facebook.com/turalcavadn"
						color="3B5999"
						target="blank"
					>
						<Facebook />
					</SocialIcon>

					<SocialIcon
						color="E4405F"
						href="https://www.instagram.com/turalcavad"
						target="blank"
					>
						<Instagram />
					</SocialIcon>

					<SocialIcon
						color="55ACEE"
						href="https://www.twitter.com/turalcavadn"
						target="blank"
					>
						<Twitter />
					</SocialIcon>

					<SocialIcon color="E60023">
						<Pinterest />
					</SocialIcon>
				</SocialContainer>
			</Left>

			<Center>
				<Title>Useful Links</Title>

				<List>
					<ListItem>Home</ListItem>
					<ListItem>Cart</ListItem>
					<ListItem>Man Fashion</ListItem>
					<ListItem>Woman Fashion</ListItem>
					<ListItem>Accessories</ListItem>
					<ListItem>My Account</ListItem>
					<ListItem>Order Tracking</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Terms</ListItem>
				</List>
			</Center>

			<Right>
				<Title>Contact</Title>
				<ContactItem>
					<Room style={{ marginRight: "10px" }} /> 622 Dixie Path , South
					Tobinchester 98336
				</ContactItem>
				<ContactItem>
					<Phone style={{ marginRight: "10px" }} /> +1 234 56 78
				</ContactItem>
				<ContactItem>
					<MailOutline style={{ marginRight: "10px" }} /> turaltj@code.edu.az
				</ContactItem>
				<Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
			</Right>
		</Container>
	);
};

export default Footer;
