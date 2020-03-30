import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useHistory } from "react-router-dom";
import Placeholder from '../../components/Placeholder/index';
import NewsItem from './newsItem';
import { instance as axios } from '../../request';
import useScrollLoadMore from '../../hooks/scrollLoadMore';
import useLazyLoad from '../../hooks/lazyLoadImage';
import { remainNewsNumToLoad } from '../../config';
import { wrapperAwait } from '../../utils';
import Loading from '../../components/Loading/loading';

export default function NewsList() {
	const [newsList, setNewsList] = useState([]);
	const [placeholderNum, setPlaceholderNum] = useState(4);
	const [loadingNewsList, setLoadingNewsList] = useState(false);
	const [newsBoxHeight, setNewsBoxHeight] = useState(0);
	const history = useHistory();

	const cb = useCallback(async () => {
		if (loadingNewsList) return;
		setLoadingNewsList(true);
		const [err, res] = await wrapperAwait(axios.get('/newsList'));
		setLoadingNewsList(false);
		if (err) return;
		setNewsList(pre => [...pre, ...res]);
	}, [loadingNewsList]);

	useScrollLoadMore(cb, newsBoxHeight * remainNewsNumToLoad);

	const imgDoms = useRef(null);

	useEffect(() => {
		imgDoms.current = [];
	}, []);

	useEffect(() => {
		const styleDom = window.getComputedStyle(document.documentElement || document.body);
		const unit = parseFloat(styleDom.fontSize);
		const newsItemHeight = parseInt(styleDom.getPropertyValue('--news-item-height'));
		const newsItemPadding = parseInt(styleDom.getPropertyValue('--news-item-padding-top'));
		const navBarHeight = parseInt(styleDom.getPropertyValue('--nav-bar-height'));
		const bodyHeight = parseInt(document.scrollingElement.clientHeight);
		const showNum = (bodyHeight - (navBarHeight * unit)) / (newsItemHeight + 2 * newsItemPadding) / unit;
		setPlaceholderNum(Math.ceil(showNum));
		setNewsBoxHeight((newsItemHeight + 2 * newsItemPadding) * unit);
	}, []);


	const pushDomRef = useCallback(node => {
		imgDoms.current.push(node);
	}, []);

	useLazyLoad(imgDoms.current);

	
	const goNewsDetail = function (id) {
		history.push(`/detail/${id}`);
	}

	const renderList = [];

	if (newsList.length) {
		newsList.forEach(item => {
			renderList.push(<NewsItem key={item.id} {...item} clickHandler={goNewsDetail} pushDomRef={pushDomRef}/>);
		})
	}else{
		for (let i = 0; i < placeholderNum; i++) {
			renderList.push(<Placeholder key={i} />)
		}
	}

	return (
		<div style={{ 'paddingTop': 'var(--nav-bar-height)' }}>
			{renderList}
			{ !!newsList.length && loadingNewsList && (<Loading key="loading"></Loading>) }
		</div>
	)
}