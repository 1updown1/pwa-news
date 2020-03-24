function randomColor() {
	const rgbArr = [];
	for (let i = 0; i < 3; i++) {
		rgbArr.push(parseInt(Math.random * 256));
	}
	return `rgb(${rgbArr.join(',')})`;
}

class Loading {
	paint(ctx, geom, properties) {
		console.log(ctx)
		console.log(geom)
		console.log(properties)
		const color = 'black';
		ctx.fillStyle = color;
		// 确定圆心和半径
		const x = geom.width / 2;
		const y = geom.height / 2;
		const radius = Math.min(x, y);
		// 画圆
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
		ctx.fill();

	}
}

registerPaint('loading', Loading)