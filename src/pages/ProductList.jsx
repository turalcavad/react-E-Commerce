import Announcement from "../components/announcement/Announcement";
import Navbar from "../components/navbar/Navbar";
import styled from "styled-components";
import Products from "../components/products/Products";
import Newsletter from "../components/newsletter/Newsletter";
import Footer from "../components/footer/Footer";
import { mobile } from "../responsive";

const Container = styled.div``;
const Title = styled.h1`
	margin-top: 25px;
`;
const Filter = styled.div`
	margin: 20px;
	${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const FilterText = styled.span`
	font-style: 20px;
	font-weight: 600;
	margin-right: 20px;
	${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
	padding: 10px;
	margin-right: 20px;
	${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option``;

const ProductList = () => {
	return (
		<Container>
			<Announcement />
			<Navbar />

			<Title>Dresses</Title>

			<FilterContainer>
				<Filter>
					<FilterText>Filter Products</FilterText>
					<Select>
						<Option disabled selected>
							Color
						</Option>
						<Option>White</Option>
						<Option>Black</Option>
						<Option>Red</Option>
						<Option>Blue</Option>
						<Option>Yellow</Option>
						<Option>Green</Option>
					</Select>

					<Select>
						<Option disabled selected>
							Size
						</Option>
						<Option>XS</Option>
						<Option>S</Option>
						<Option>M</Option>
						<Option>L</Option>
						<Option>XL</Option>
					</Select>
				</Filter>
				<Filter>
					<FilterText>Sort Products</FilterText>
					<Select>
						<Option selected>Newest</Option>
						<Option>Price (asc)</Option>
						<Option>Price (desc)</Option>
					</Select>
				</Filter>
			</FilterContainer>

			<Products />
			<Newsletter />

			<Footer />
		</Container>
	);
};

export default ProductList;
