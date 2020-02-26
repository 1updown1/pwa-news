import React from 'react';
import Style from './navbar.module.css';


export default function NavbarList({ list, select, changeSelect}) {
	return (
		<nav className={Style.wrapper}>
			<ul className={Style.navWrapper}>
				{
					list.map(item => {
						return (
							<li 
								className={`${Style.navItem} ${select ===  item.id ? Style.highlight : ''}`} 
								key={item.id}
								onClick={() => { changeSelect(item) }}>
									{item.text}
							</li>
						)
					})
				}
			</ul>
		</nav>
	)
}