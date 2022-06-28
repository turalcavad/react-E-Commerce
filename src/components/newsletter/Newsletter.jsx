import { Send } from "@material-ui/icons";
import {
	Container,
	Button,
	Desc,
	Input,
	InputContainer,
	Title,
} from "./styles/newsletter";

const Newsletter = () => {
	return (
		<Container>
			<Title>Newsletter</Title>

			<Desc>Get timely udpates from your favorite products.</Desc>

			<InputContainer>
				<Input placeholder="Your Email" />
				<Button>
					<Send />
				</Button>
			</InputContainer>
		</Container>
	);
};

export default Newsletter;
