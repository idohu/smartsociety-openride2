document.write('<div id="overlay">&nbsp;</div><div id="overlay_dialog"><div id="dialog_text"></div></div>');
function showOverlayDialog(h,b,d,g,j,c){if(document.getElementById){var a="<p><strong>"+h+"</strong></p><p>"+b+'</p><div id="buttons"><input type="button" value="'+d+'" class="rounded" id="dialog_btn_ok" onclick="'+g+'; hideOverlayDialog();" />';if(j!=""){a=a+'<input type="button" value="'+j+'" class="rounded" onclick="'+c+'; hideOverlayDialog();"/>'}a=a+"</div>";document.getElementById("dialog_text").innerHTML=a;hideSelects();var i=document.getElementById("content").offsetHeight+88;if(i==88){i=window.innerHeight}document.getElementById("overlay").style.height=i+"px";document.getElementById("overlay_dialog").style.top=getScrollHeight()+"px";document.getElementById("overlay").style.display="block";document.getElementById("overlay_dialog").style.display="block"}}function hideOverlayDialog(){document.getElementById("overlay").style.display="none";document.getElementById("overlay_dialog").style.display="none";showSelects()}
function hideSelects(){IE6=false

/*@cc_on || @_jscript_version < 5.7 @*/
;if(IE6){for(f=0;f<document.forms.length;f++){var elements=document.forms[f].elements;for(e=0;e<elements.length;e++){if(elements[e].type=="select-one"){elements[e].style.visibility="hidden"}}}}}function showSelects(){IE6=false
/*@cc_on || @_jscript_version < 5.7 @*/
;if(IE6){for(f=0;f<document.forms.length;f++){var elements=document.forms[f].elements;for(e=0;e<elements.length;e++){if(elements[e].type=="select-one"){elements[e].style.visibility="visible"}}}}}function TrimString(a){a=a.replace(/^\s+/g,"");return a.replace(/\s+$/g,"")}function nl2br(a){a=escape(a);if(a.indexOf("%0D%0A")>-1){re_nlchar=/%0D%0A/g}else{if(a.indexOf("%0A")>-1){re_nlchar=/%0A/g}else{if(a.indexOf("%0D")>-1){re_nlchar=/%0D/g}}}return unescape(a.replace(re_nlchar,"<br />"))}function getScrollWidth(){var a=window.pageXOffset||document.body.scrollLeft||document.documentElement.scrollLeft;return a?a:0}function getScrollHeight(){var a=window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop;return a?a:0}document.write('<div id="inprogress">&nbsp;</div><div id="inprogress_dialog"><div id="inprogress_dialog_text"></div></div>');var progressDialogTimer;function prepareProgressDialog(){clearTimeout(progressDialogTimer);progressDialogTimer=setTimeout("showProgressDialog();",50)}function showProgressDialog(){if(document.getElementById){var b=' <img id="inprogress_gif" src="../img/inprogress.gif" alt="inprogress"/> ';document.getElementById("inprogress_dialog_text").innerHTML=b;hideSelects();var a=document.getElementById("content").offsetHeight+88;if(a==88){a=window.innerHeight}document.getElementById("inprogress").style.height=a+"px";document.getElementById("inprogress_dialog").style.top=getScrollHeight()+"px";document.getElementById("inprogress").style.display="block";document.getElementById("inprogress_dialog").style.display="block"}}function hideProgressDialog(){clearTimeout(progressDialogTimer);if(document.getElementById){document.getElementById("inprogress").style.display="none";document.getElementById("inprogress_dialog").style.display="none"}showSelects()}function hideSelects(){IE6=false
/*@cc_on || @_jscript_version < 5.7 @*/
;if(IE6){for(f=0;f<document.forms.length;f++){var elements=document.forms[f].elements;for(e=0;e<elements.length;e++){if(elements[e].type=="select-one"){elements[e].style.visibility="hidden"}}}}}function showSelects(){IE6=false
/*@cc_on || @_jscript_version < 5.7 @*/
;if(IE6){for(f=0;f<document.forms.length;f++){var elements=document.forms[f].elements;for(e=0;e<elements.length;e++){if(elements[e].type=="select-one"){elements[e].style.visibility="visible"}}}}}function TrimString(a){a=a.replace(/^\s+/g,"");return a.replace(/\s+$/g,"")}function nl2br(a){a=escape(a);if(a.indexOf("%0D%0A")>-1){re_nlchar=/%0D%0A/g}else{if(a.indexOf("%0A")>-1){re_nlchar=/%0A/g}else{if(a.indexOf("%0D")>-1){re_nlchar=/%0D/g}}}return unescape(a.replace(re_nlchar,"<br />"))}function getScrollWidth(){var a=window.pageXOffset||document.body.scrollLeft||document.documentElement.scrollLeft;return a?a:0}function getScrollHeight(){var a=window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop;return a?a:0};