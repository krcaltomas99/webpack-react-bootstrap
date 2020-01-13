import React from 'react';
import {HomePage} from "./pages/Home/HomePage";
import Navbar from "./components/Navbar";
import TopicsPage from "./pages/TopicsPage";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

export const App = () => {
	return (
		<Router>
			<Navbar/>

			<div className='container'>
				<Switch>
					<Route path="/topics">
						<TopicsPage/>
					</Route>
					<Route exact path="/">
						<HomePage/>
					</Route>
				</Switch>
			</div>
		</Router>
	)
}