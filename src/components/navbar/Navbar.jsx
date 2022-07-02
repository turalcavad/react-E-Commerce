import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@mui/material";
import React from "react";
import {
	Center,
	Container,
	Input,
	Language,
	Left,
	Logo,
	Right,
	SearchContainer,
	Wrapper,
	MenuItem,
} from "./styles/navbar";

const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SearchContainer>
						<Input />
						<Search style={{ color: "gray", fontSize: 16 }} />
					</SearchContainer>
				</Left>
				<Center>
					<Logo>LAMA.</Logo>
				</Center>
				<Right>
					<MenuItem>REGISTER</MenuItem>
					<MenuItem>SIGN IN</MenuItem>
					<MenuItem>
						<Badge badgeContent={2} color="primary">
							<ShoppingCartOutlined />
						</Badge>
					</MenuItem>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
