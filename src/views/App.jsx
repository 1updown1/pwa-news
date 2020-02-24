import React from 'react';
import { Route } from 'react-router-dom';
import NewsList from './NewsList/index';
import NewsDetail from './NewsDetail/index';

function App() {
	return (
		<div>
			<Route exact path="/">
				<NewsList></NewsList>
			</Route>
			<Route path="/detail/:id">
				<NewsDetail></NewsDetail>
			</Route>
		</div>
	)
}

export default App;
