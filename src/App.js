import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import { ProductList } from "./pages/ProductList";

function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/product-list" element={<ProductList />} />
			</Routes>
		</Layout>
	);
}

export default App;
