import React, { useState } from 'react';
import Placeholder from '../../components/Placeholder/index';

export default function NewsList() {
	const [newsList, setNewsList] = useState([]);
	return (
		<div>
			<Placeholder></Placeholder>
			<Placeholder></Placeholder>
			<Placeholder></Placeholder>
			<Placeholder></Placeholder>
		</div>
	)
}