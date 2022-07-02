import styled from "styled-components";
import { mobile } from "../../../responsive";

export const Container = styled.div`
	flex: 1;
	height: 70vh;
	position: relative;
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	${mobile({ height: "50vh" })}
`;

export const Info = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Button = styled.button`
	border: none;
	padding: 10px;
	background-color: white;
	color: gray;
	cursor: pointer;
	font-weight: 600;
	transition: 0.4s;
	&:hover {
		background-color: #cccccc;
	}
`;

export const Title = styled.h1`
	color: white;
	margin-bottom: 20px;
`;
