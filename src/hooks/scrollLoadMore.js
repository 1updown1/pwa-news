import { useState ,useEffect } from 'react';

export default function useScrollLoadMore(cb, loadMorePixle) {
	const [isFirstMount, setisFirstMount] = useState(false);
	useEffect(() => {
		const fn = e => {
			const moveHeight = document.scrollingElement.scrollTop + document.scrollingElement.clientHeight;
			const bodyHeight = document.scrollingElement.offsetHeight;
			if (bodyHeight - moveHeight < loadMorePixle){
				cb();
			}
		}
		if (!isFirstMount){
			cb();
			setisFirstMount(true);
		}
		window.addEventListener('scroll', fn, {
			passive: true
		})
		return () => {
			window.removeEventListener('scroll', fn);
		};
	}, [cb, loadMorePixle, isFirstMount]);

}