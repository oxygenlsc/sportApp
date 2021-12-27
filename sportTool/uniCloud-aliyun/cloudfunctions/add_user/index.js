'use strict';
// 获取数据库的引用
const db = uniCloud.database()
exports.main = async (event, context) => {
	// 获取某一个数据表的集合
	const collection = db.collection('user')
	const {userName,age} = event
	//添加记录的操作
	const res = await collection.add({
		userName,
		age
	})
	//返回数据给客户端
	return {
		code:0,
		msg:res
	}
};
