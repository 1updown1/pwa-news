import React from 'react';

export default function NewsBody({ renderHtml }) {
	const factory = function () {
		return {__html: renderHtml}
	}
	return (
		<div dangerouslySetInnerHTML={factory()}>
		</div>
	)
}