function cb (json) {
            location.href=json.url;
                }
function DlAlphaVersion(){
var script = document.createElement('script'); 
            script.type = 'text/javascript'; 
            script.charset = 'utf-8'; 
            script.src = 'http://dldir1.qq.com/weixin/android/weixin_android_alpha_config.json?t=' + ~new Date; 
            document.head.appendChild(script);
}
function DlReleaseVersion(){
try{
location.href="http://weixin.qq.com/cgi-bin/download302?check=false&uin=&stype=&fr=&lang=zh_CN&url=android16";
}catch(e){
	alert(e.message);
}
}
