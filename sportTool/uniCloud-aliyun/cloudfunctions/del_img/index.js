'use strict';
exports.main = async (event, context) => {
	
	const res = await uniCloud.deleteFile({
		fileList:['https://vkceyugu.cdn.bspapp.com/VKCEYUGU-1a59cd0c-ce0b-430d-b969-9ceec5c122d2/d5be54a9-be49-4338-b7bc-e043c4a2dae8.jpg']
	})
	//返回数据给客户端
	return res
};
