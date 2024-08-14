import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Home from "./Home";
import ProductsView from "./component/student/ProductsView";
import NavBar from "./component/common/NavBar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import AddProduct from "./component/student/AddProduct";
import EditProduct from "./component/student/EditProduct";
import ProductInformation from "./component/student/ProductInformation";
import ProductsView from "./component/product/ProductsView";
import ProductInformation from "./component/product/ProductInformation";

function App() {
	return (
		<main className="container mt-5">
			<Router>
				<NavBar />
				<Routes>
					<Route
						exact
						path="/"
						element={<Home />}></Route>
					<Route
						exact
						path="/view-students"
						element={<ProductsView />}></Route>
					<Route
						exact
						path="/add-students"
						element={<AddProduct />}></Route>
					<Route
						exact
						path="/edit-student/:id"
						element={<EditProduct />}></Route>
					<Route
						exact
						path="/student-profile/:id"
						element={<ProductInformation/>}></Route>
				</Routes>
			</Router>
		</main>
	);
}

export default App;
