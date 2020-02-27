import React, { useState, useEffect } from 'react';
import Placeholder from '../../components/Placeholder/index';

export default function NewsList() {
	const [newsList, setNewsList] = useState([]);
	const [placeholderNum, setPlaceholderNum] = useState(4);

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
		const mockList = [
			{
				id: 1,
				title: '标题标题标题标题标题标题标题标题标题',
				posterImageUrl: ''
			},
			{
				id: 2,
				title: '标题标题标题标题标题标题标题标题标题',
				posterImageUrl: ''
			}
		]
		setTimeout(() => {
			setNewsList(mockList);
		}, 1000);
	}, []);

	if (newsList.length) {
		return (
			<div>newsList</div>
		)
	}else{
		const placeholderList = [];
		for (let i = 0; i < placeholderNum; i++) {
			placeholderList.push(<Placeholder key={i} />)
		}
		return (
			<div>
				{ placeholderList }
			</div>
		)
	}
}