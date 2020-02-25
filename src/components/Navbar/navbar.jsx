import React from 'react';
import NavbarList from './navbarList';

export default function Navbar(){
	const list = [
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
	]
	return (
		<NavbarList list={list}/>
	)
}