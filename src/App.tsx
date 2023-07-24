import "./App.css";
import { Provider } from "react-redux";
import Manager from "./pages/admin/productManager/manager";
import ThemeProvider from "./store/themecontext";
import store from "./store/themecontext";
function App() {
	return (
		<Provider store={store}>
			<Manager />
		</Provider>
	);
}

export default App;
