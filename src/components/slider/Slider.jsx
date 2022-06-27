import React, { useState } from "react";
import { ArrowRightOutlined } from "@material-ui/icons";
import { ArrowLeftOutlined } from "@material-ui/icons";
import {
	Container,
	Arrow,
	Wrapper,
	ImageContainer,
	Image,
	Slide,
	InfoContainer,
	Title,
	Desc,
	Button,
} from "./styles/slider";
import { sliderItems } from "../../data";

const Slider = () => {
	const [slideIndex, setSlideIndex] = useState(0);
	const handleClick = (direction) => {
		if (direction === "left") {
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
		} else {
			setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
		}
	};
	return (
		<Container>
			<Arrow direction="left" onClick={() => handleClick("left")}>
				<ArrowLeftOutlined />
			</Arrow>

			<Wrapper slideIndex={slideIndex}>
				{sliderItems.map((item) => (
					<Slide bg={item.bg} key={item.id}>
						<ImageContainer>
							<Image src={item.img} />
						</ImageContainer>
						<InfoContainer>
							<Title>{item.title}</Title>
							<Desc>{item.desc}</Desc>
							<Button>SHOW NOW</Button>
						</InfoContainer>
					</Slide>
				))}
			</Wrapper>

			<Arrow direction="right" onClick={() => handleClick("right")}>
				<ArrowRightOutlined />
			</Arrow>
		</Container>
	);
};

export default Slider;