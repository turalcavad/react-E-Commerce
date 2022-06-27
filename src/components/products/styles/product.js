import styled from "styled-components";

export const Info = styled.div`
	opacity: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.2);
	z-index: 3;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.5s ease;
`;
export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
	margin: 5px;
	min-width: 300px;
	height: 350px;
	background-color: #f5fbfd;
	position: relative;
	cursor: pointer;
	transition: all 0.5s ease;
	&:hover ${Info} {
		opacity: 1;
	}
`;

export const Image = styled.img`
	height: 75%;
	z-index: 2;
`;

export const Icon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px;
	cursor: pointer;
	transition: all 0.5s ease;
	&:hover {
		background-color: #e9f5f5;
		transform: scale(1.1);
	}
`;
