import { useEffect, useRef, useCallback } from 'react';
import { throttle } from '../utils';

export default function useLazyLoad() {
	const domsArr = useRef(null);

	const judgeLoadImg = useCallback(throttle(function (e) {
		if (!domsArr.current || !domsArr.current.length) return;
		for (let i = domsArr.current.length - 1; i >= 0; i--) {
			const imgDom = domsArr.current[i];
			if (imgDom.getAttribute('data-load')) break;
			const { top } = imgDom.getBoundingClientRect();
			if (top < document.scrollingElement.clientHeight * 2) {
				imgDom.setAttribute('data-load', 'loaded');
				imgDom.src = imgDom.getAttribute('data-src');
			}
		}
	}, 100), []);

	const pushImgDom = useCallback(dom => {
		if (!dom) return;
		domsArr.current.push(dom);
		judgeLoadImg();
	}, [judgeLoadImg]);
	
	useEffect(() => {
		domsArr.current = [];
	}, []);

	useEffect(() => {
		console.log('rebind');
		window.addEventListener('scroll', judgeLoadImg, {
			passive: true,
		})
		return () => {
			domsArr.current = [];
			window.removeEventListener('scroll', judgeLoadImg);
		};
	}, [judgeLoadImg]);

	return pushImgDom;
}