import Mock from 'mockjs';

function resWrapper(data){
	return {
		code: 200,
		res: data,
		errMsg: '',
	}
}

Mock.setup({
	timeout: 1000
})

Mock.mock(/\/test/, 'get', {test: 'test'})

Mock.mock(/\/newsList/, 'get', () => {
	const ret = [];
	for (let index = 0; index < 10; index++) {
		ret.push({
			id: Mock.Random.id(),
			title: Mock.Random.ctitle(),
			posterImageUrl: Mock.Random.image(),
			num: Mock.Random.integer(10, 100000),
		})
	}
	return resWrapper(ret);
})

Mock.mock(/\/news\/detail/, 'get', (req) => {
	console.log(`requres url: ${req.url}`);
	let title = Mock.Random.ctitle(6,20);
	let date = Mock.Random.date();
	let content = '';
	const paragraphNum = Math.floor(Math.random() * 10 + 10);
	for (let i = 0; i < paragraphNum; i++) {
		content += '<p class="news-paragraph">'
		content += 		Mock.Random.cparagraph(10,20);
		content += '</p>'
	}
	return resWrapper({
		title,
		date,
		content,
	})
})