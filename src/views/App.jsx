import React from 'react';
import { Route } from 'react-router-dom';
import NewsList from './NewsList/index';
import NewsDetail from './NewsDetail/index';
import Navbar from '../components/Navbar/navbar';

function App() {
	return (
		<div>
			<Route exact path="/">
				<Navbar></Navbar>
				<NewsList></NewsList>
			</Route>
			<Route path="/detail/:id">
				<NewsDetail></NewsDetail>
			</Route>
		</div>
	)
}

export default App;
