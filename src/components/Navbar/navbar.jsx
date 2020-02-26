import React,{ useState, useEffect } from 'react';
import NavbarList from './navbarList';

export default function Navbar(){
	const [selectId, setSelectId] = useState('');
	const [list, setList] = useState([]);
	useEffect(() => {
		const navBarList = [
			{
				id: 1,
				text: '要闻'
			},
			{
				id: 2,
				text: '推荐'
			},
			{
				id: 3,
				text: '推荐'
			},
			{
				id: 4,
				text: '推荐'
			},
			{
				id: 5,
				text: '推荐'
			},
			{
				id: 6,
				text: '推荐'
			},
			{
				id: 7,
				text: '推荐'
			},
			{
				id: 8,
				text: '推荐'
			},
		];
		setList(navBarList)
		setSelectId(navBarList[0].id);
	}, []);
	
	const selectItem = item => {
		setSelectId(item.id)
	}
	return (
		<NavbarList list={list} select={selectId} changeSelect={selectItem}/>
	)
}