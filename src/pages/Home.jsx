import React from "react";
import Categories from "../components/categories/Categories";
import Newsletter from "../components/newsletter/Newsletter";
import Products from "../components/products/Products";
import Slider from "../components/slider/Slider";

const Home = () => {
	return (
		<div>
			<Slider />
			<Categories />
			<Products />
			<Newsletter />
		</div>
	);
};

export default Home;
