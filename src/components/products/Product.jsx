import { Container, Image, Info, Icon } from "./styles/product";
import {
	FavoriteBorderOutlined,
	Search,
	ShoppingCartOutlined,
} from "@material-ui/icons";

const Product = ({ item }) => {
	return (
		<Container>
			<Image src={item.img} />
			<Info>
				<Icon>
					<ShoppingCartOutlined />
				</Icon>
				<Icon>
					<Search />
				</Icon>
				<Icon>
					<FavoriteBorderOutlined />
				</Icon>
			</Info>
		</Container>
	);
};

export default Product;
