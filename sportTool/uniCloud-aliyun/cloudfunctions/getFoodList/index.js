'use strict';
const db = uniCloud.database()
const collection = db.collection('food-database')
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	const res = await collection.get()
	//返回数据给客户端
	return {
		code: 0,
		data: res.data
	}
};
