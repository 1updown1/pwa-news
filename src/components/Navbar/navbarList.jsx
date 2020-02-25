import React from 'react';
import Style from './navbar.module.css';


export default function NavbarList(props) {
	return (
		<nav className={Style.wrapper}>
			<ul className={Style.navWrapper}>
				{
					props.list.map(item => {
						return (
							<li className={`${Style.navItem} ${Style.highlight}`} key={item.id}>{item.text}</li>
						)
					})
				}
			</ul>
		</nav>
	)
}