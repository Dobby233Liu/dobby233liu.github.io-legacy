this.isThatLang = function(langCode){
try{
if (!langCode){
alert('isThatLang err: the "langCode" is not defined');
console.log('isThatLang: lang code not defined');
// throw "lang code undefined"
return undefined;

}else{
return navigator.userLanguage = langCode;
}catch(e){
alert("isThatLang int err: " + e.message);
}}


