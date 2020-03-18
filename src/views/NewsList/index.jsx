import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Placeholder from '../../components/Placeholder/index';
import NewsItem from './newsItem';
import { instance as axios } from '../../request';

export default function NewsList() {
	const [newsList, setNewsList] = useState([]);
	const [placeholderNum, setPlaceholderNum] = useState(4);
	const history = useHistory();

	useEffect(() => {
		const unit = parseFloat(document.documentElement.style.fontSize);
		const newsItemHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--news-item-height'));
		const newsItemPadding = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--news-item-padding-top'));
		const navBarHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-bar-height'));
		const bodyHeight = parseInt(document.documentElement.clientHeight);
		const showNum = (bodyHeight - (navBarHeight * unit)) / (newsItemHeight + 2 * newsItemPadding) / unit;
		setPlaceholderNum(Math.ceil(showNum));
	}, []);

	useEffect(() => {
		axios.get('/newsList').then(res => {
			console.log(res);
			setNewsList(res);
		})
	}, []);

	const goNewsDetail = function (id) {
		history.push(`/detail/${id}`);
	}

	const renderList = [];

	if (newsList.length) {
		newsList.forEach(item => {
			renderList.push(<NewsItem key={item.id} {...item} clickHandler={goNewsDetail}/>);
		})
	}else{
		for (let i = 0; i < placeholderNum; i++) {
			renderList.push(<Placeholder key={i} />)
		}
	}

	return (
		<div style={{'paddingTop': 'var(--nav-bar-height)'}}>
			{renderList}
		</div>
	)
}