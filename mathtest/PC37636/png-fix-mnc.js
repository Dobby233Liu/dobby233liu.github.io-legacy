function CodeGen()
{
bar1.showBar();
setTimeout("getCode()", 5000);
}

function getCode()
{
bar1.hideBar();
var exists = readCookie("mncgen");
if (document.cookie != "" && exists)
	{
/*	if (parseInt(readCookie("mncgen")) % 6 == 0)
	  {
	  showform();
//    alert("Limit of 10 codes per day!\r\nPlease Register for Unlimited Access.");
//	  document.getElementById("Layer-4f").style.visibility = "visible";
//	  awf_Form_.showForm();
      }
	else
	  { */
	  var code = new Array("2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","J","K","L","M","N","P","Q","R","S","T","U","V","W","X","Y","Z");
	  var RndCode = "";
	  for (i=0;i<4;i++)
		{
		var z=Math.floor(Math.random()*32);
		RndCode = RndCode + code[z];
		}
	  RndCode = RndCode + "-";
	  for (i=0;i<4;i++)
		{
		var z=Math.floor(Math.random()*32);
		RndCode = RndCode + code[z];
		}
	  RndCode = RndCode + "-";
	  for (i=0;i<4;i++)
		{
		var z=Math.floor(Math.random()*32);
		RndCode = RndCode + code[z];
		}
	  document.getElementById("Layer-12").innerHTML = RndCode;
	  createCookie('mncgen',eval(parseInt(readCookie("mncgen"))+1),1);
//	  }
	}
else
    {
    alert("Bandicoot ATE your cookies!\r\nPlease try again soon.");
    }
}


function showform()
{
if (document.getElementById("Layer-4f").style.visibility == "visible"){
	document.getElementById("Layer-4f").style.visibility = "hidden";
	} else {
	document.getElementById("Layer-4f").style.visibility = "visible";
	setTimeout("stage2()", 12000);
	}	
}

function stage2()
{
document.getElementById("Layer-4f").style.visibility = "hidden";
createCookie('mncgen',eval(parseInt(readCookie("mncgen"))+1),1);
document.getElementById("Layer-4g").style.visibility = "visible";
setTimeout("stage3()", 5000);
}

function stage3()
{
document.getElementById("Layer-4g").style.visibility = "hidden";
window.location.reload();
}
/* function showform()
{
if (document.getElementById("Layer-4f").style.visibility == "hidden")
	{
	document.getElementById("Layer-4f").style.visibility = "visible";
	}
} */

function cc()
{
createCookie('mncinit','0',1);
 /* check for a cookie */
if (document.cookie == "") 
  {
  alert("Bandicoot LOVES cookies!\r\nPlease enable browser Cookies for this site.");
  }
else
  {
  var already = readCookie("mncgen")
  if (already){}
  else
    {
    createCookie('mncgen','4',1);
    }
  }
}


function validate()
{
var em = document.reg_form.email.value;
createCookie('mncemail',em,365);
createCookie('mncdate',Date(),365);
}


/* createCookie('ppkcookie','testcookie',7) */


function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}
{
document.getElementById("Layer-4g").style.visibility = "hidden";
window.location.reload();
}
/* function showform()
{
if (document.getElementById("Layer-4f").style.visibility == "hidden")
	{
	document.getElementById("Layer-4f").style.visibility = "visible";
	}
} */

function cc()
{
createCookie('mncinit','0',1);
 /* check for a cookie */
if (document.cookie == "") 
  {
  alert("Bandicoot LOVES cookies!\r\nPlease enable browser Cookies for this site.");
  }
else
  {
  var already = readCookie("mncgen")
  if (already){}
  else
    {
    createCookie('mncgen','4',1);
    }
  }
}


function validate()
{
var em = document.reg_form.email.value;
createCookie('mncemail',em,365);
createCookie('mncdate',Date(),365);
}


/* createCookie('ppkcookie','testcookie',7) */


function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}
