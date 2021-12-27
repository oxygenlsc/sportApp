'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const {userName , age} = event
	console.log('event : ', event)
	
	//返回数据给客户端
	return {
		code:'0',
		data:{
			userName,
			age
		}
	}
};
