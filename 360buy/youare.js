var CONF = {
		title : '京东FUNNY大电影', //页面标题
		bg : '//m.360buyimg.com/babel/jfs/t16912/265/469660417/41823/8e2cd63e/5a7ea6aeN5049f726.jpg', //背景图片地址（可将图片放在img文件夹中并引用，例如：./img/1.png）
		defShares : [
			{
				img : '//m.360buyimg.com/babel/jfs/t18052/106/457519354/5868/9cb0c775/5a7ea6aeN8b658f2d.png', //分享图片地址（可将图片放在img文件夹中并引用，例如：./img/1.png）
				url : 'https://h5.m.jd.com/dev/2WeXzHFLPWnGGrzTm8wtJa5FS3Gs/index.html', //分享页地址
				title : '你的小可爱已上线！', //分享给好友的标题
				desc : '京东狗年贺岁大片《FUNNY STORY：FUNNY与Flash》暖心来袭', //分享给好友的描述
				timeline : '京东狗年贺岁大片《FUNNY STORY：FUNNY与Flash》暖心来袭！' //分享到朋友圈的标题
			}
		], //默认分享配置（若页面中不存在分享功能，可不设置）
		track : {
			prefix : 'Babel_dev_adv_', //埋点前缀
			params : {
				share : '',
				jumpDef : '00111639_0065058748_00958807_1',
				jumpJd : '00111639_0065058748_00958807_1',
				jumpWx : '00111639_0065058748_00958807_1',
				jumpM : '00111639_0065058748_00958807_1',
				play : '00111639_0065058749_00958807_1',
				pause : '{time}', //“pause”埋点中“{time}”表示暂停时视频的时间（单位：秒）
				end : ''
			} //埋点参数
		}, //埋点配置
		containers : [
			{
				bg : '//m.360buyimg.com/babel/jfs/t18619/281/469688144/55537/39d5b1c2/5a7ea6aeN69da5689.png', //容器背景图片地址（未设置时为“透明”）（可将图片放在img文件夹中并引用，例如：./img/1.png）
				w : 750, //容器宽度（单位：px）
				h : 361, //容器高度（单位：px）
				x : 0, //容器左上角横坐标（单位：px）
				y : 130 //容器左上角纵坐标（单位：px）
			},{
				w : 750, //容器宽度（单位：px）
				h : 422, //容器高度（单位：px）
				x : 0, //容器左上角横坐标（单位：px）
				y : 420, //容器左上角纵坐标（单位：px）
				btns : [
					{
						w : 750, //按钮宽度（单位：px）
						h : 422, //按钮高度（单位：px）
						type : 'play', //按钮类型（可选值为：share、jump、play）

						//当type为“play”时需要设置参数poster和srcs：
						poster : '//m.360buyimg.com/babel/jfs/t17326/116/482668125/25977/17010c82/5a7ea6aeN58f90b38.jpg', //视频封面（可将图片放在img文件夹中并引用，例如：./img/1.png）
						srcs : [
							{
								type : 'mp4',
								src : '//github.com/Dobby233Liu/dobby233liu.github.io/raw/master/360buy/youare(www.albinoblacksheep.com).mp4'
							},{
								type : 'ogg',
								src : '//github.com/Dobby233Liu/dobby233liu.github.io/raw/master/360buy/youare(www.albinoblacksheep.com).mp4'
							}
						] //视频源集合
					}
				]
			},{
				w : 750, //容器宽度（单位：px）
				h : 119, //容器高度（单位：px）
				x : 0, //容器左上角横坐标（单位：px）
				y : 960, //容器左上角纵坐标（单位：px）
				btnSpacing : 40, //按钮间隔（单位：px）
				btns : [
					{
						bg : '//m.360buyimg.com/babel/jfs/t18253/178/468549861/6891/c0d42c76/5a7ea6aeNb2dc46da.png', //按钮背景图片地址（未设置时为“透明”）（可将图片放在img文件夹中并引用，例如：./img/1.png）
						w : 270, //按钮宽度（单位：px）
						h : 96, //按钮高度（单位：px）
						type : 'share' //按钮类型（可选值为：share、jump、play）
					},{
						bg : '//m.360buyimg.com/babel/jfs/t18388/137/474714296/6960/308f41b2/5a7ea6aeNe522ff2f.png', //按钮背景图片地址（未设置时为“透明”）（可将图片放在img文件夹中并引用，例如：./img/1.png）
						w : 270, //按钮宽度（单位：px）
						h : 96, //按钮高度（单位：px）
						type : 'jump', //按钮类型（可选值为：share、jump、play）

						//当type为“jump”时需要设置参数urls：
						urls: {
							def : 'https://baidu.com', //默认跳转地址
						
						}
					}
				] //按钮集合（未设置时表示“无按钮”）
			}
		] //容器集合
	};
