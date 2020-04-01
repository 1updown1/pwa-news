import { useEffect } from 'react';

export default function useScrollLoadMore(cb, loadMorePixle) {

	useEffect(() => {
		const fn = e => {
			const moveHeight = document.scrollingElement.scrollTop + document.scrollingElement.clientHeight;
			const bodyHeight = document.scrollingElement.offsetHeight;
			if (bodyHeight - moveHeight < loadMorePixle){
				cb();
			}
		}
		window.addEventListener('scroll', fn, {
			passive: true
		})
		return () => {
			window.removeEventListener('scroll', fn);
		};
	}, [cb, loadMorePixle]);

}