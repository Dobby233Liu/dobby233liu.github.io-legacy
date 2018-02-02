
function cb (json) {
            location.href=json.url;
                }
function DlAlphaVersion(){try{
  $.get("http://dldir1.qq.com/weixin/android/weixin_android_alpha_config.json?t="+~new Date,function(data,status){
    if(status==success){
eval(data);
}
  });}catch(e){
alert("错误: "+e.message+" 请开一个issues");
}
}
function DlReleaseVersion(){
try{
location.href="http://weixin.qq.com/cgi-bin/download302?check=false&uin=&stype=&fr=&lang=zh_CN&url=android16";
}catch(e){
	alert(e.message);
}
}
