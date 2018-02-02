
function cb (json) {
            location.href=json.url;
                }
function DlAlphaVersion(){
 
$.ajax({
  url: "http://dldir1.qq.com/weixin/android/weixin_android_alpha_config.json?t=",
  
  success: function(result){
    
eval(result);
}});
function DlReleaseVersion(){
try{
location.href="http://weixin.qq.com/cgi-bin/download302?check=false&uin=&stype=&fr=&lang=zh_CN&url=android16";
}catch(e){
	alert(e.message);
}
}}
