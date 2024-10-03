/* HM_Loader.js
*  HierMenus Version 6
*  Copyright 2004 Jupitermedia Corporation
*/

HM_UserAgent = navigator.userAgent;
      HM_DOM = (document.getElementById) ? true : false;
      HM_NS4 = (document.layers) ? true : false;
       HM_IE = (document.all) ? true : false;
      HM_IE4 = HM_IE && !HM_DOM;
      HM_Mac = (navigator.appVersion.indexOf("Mac") != -1);
     HM_IE4M = HM_IE4 && HM_Mac;

HM_IsSafari = ((HM_DOM)&&
               (parseInt(navigator.productSub)>=20020000)&&
               (navigator.vendor.indexOf("Apple Computer")!=-1));
if(HM_IsSafari) {
	HM_BrowserPattern = /Safari\/(\d+)/;
	HM_Matches = HM_UserAgent.match(HM_BrowserPattern);
	if (HM_Matches&&HM_Matches[1]) HM_BrowserVersion = (HM_Matches[1]-0);
	else HM_BrowserVersion = 0;
}

HM_Opera = (window.opera) ? true : false;
if(HM_IsSafari||HM_Opera) {
	HM_IE=HM_NS4=HM_IE4=HM_IE4M=false;
	if(HM_IsSafari) HM_Mac=true;
}
HM_IE5M = (HM_IE&&HM_Mac&&HM_DOM);

if(HM_Opera) {
    HM_BrowserPattern = /Opera(\/| )(\d+.*)/;
    HM_VersionSupported = 7;
}

HM_Konqueror = (HM_UserAgent.indexOf("Konqueror")!=-1);
if(HM_Konqueror) {
    HM_BrowserPattern = /(Konqueror\/)(\d+.*)/;
    HM_VersionSupported = 3.2;
}

if(HM_Opera || HM_Konqueror) {
    if (HM_UserAgent.match) {
       HM_Matches = HM_UserAgent.match(HM_BrowserPattern);
       if (HM_Matches&&HM_Matches[2]) {
          HM_BrowserVersion = parseFloat(HM_Matches[2]);
       } else HM_BrowserVersion = 0;
       HM_IsMenu = (HM_BrowserVersion >= HM_VersionSupported);
    } else {
       HM_BrowserVersion = 0;
       HM_IsMenu = false;
    }
} else {
    HM_BrowserVersion = 0;
    HM_IsMenu = !HM_IE4M && !HM_IE5M && (HM_DOM || HM_NS4 || HM_IE4 );
}

if(window.event + "" == "undefined") event = null;
// function HM_f_PopUp(){return false};
// function HM_f_PopDown(){return false};
popUp = HM_f_PopUp;
popDown = HM_f_PopDown;

// Configuration block. The following 6 variables should be configured 
// to match your default preferences. You can then override the settings
// on a page by page basis by providing values for the variables in any
// JavaScript segment that is loaded BEFORE this one. These variables 
// are the ONLY variables you should alter in this file. 

if(typeof(window.HM_ScriptDir)=="undefined")
	HM_ScriptDir = "/_hm/scripts/v602/";
if(typeof(window.HM_ImageDir)=="undefined")
	HM_ImageDir = "/_hm/images/";
if(typeof(window.HM_ConfigDir)=="undefined")
	HM_ConfigDir = "/_hm/configs/";
if(typeof(window.HM_ConfigFiles)=="undefined")
	HM_ConfigFiles = "hmcentral.js";
if(typeof(window.HM_ConfigType)=="undefined")
	HM_ConfigType = "default";
if(typeof(window.HM_FramesEnabled)!="boolean")
	HM_FramesEnabled = false;

// Custom functions. We recommend that you delete any of these
// that you have no use for, to reduce the overall download times
// of the scripts. (Be sure to save yourself a copy, in case 
// you decide you want to use them in the future!)

// The following function is included to illustrate the JS 
// expression handling of the MenuX and MenuY parameters. 
// It returns a centered horizontal position for the menu. 

function HW(kx){var b=0;var c=Hms[kx];var d=HM_DOM?parseInt(c.mh.style.width)+((Hjt||Hju)?0:c.sz+c.sx):HM_IE4?c.mh.style.pixelWidth:c.mh.clip.width;
var gh=HM_IE?(HM_DOM?Hh.clientWidth:Hg.document.body.clientWidth):(Hg.document.body&&Hg.document.body.clientWidth)?Hg.document.body.clientWidth:Hg.innerWidth;return Math.max(parseInt((gh-d)/2),b);}

HM_f_CenterMenu=HW;

// The following three functions can be used in combination to 
// produce "sliding" menus; menus that slide in and out to their
// desired locations. The "SetSlide" and "KillSlide" functions 
// are the required interface functions for HierMenus, and the 
// SlideMoveTo function does the actual work. To activate these
// routines on a menu, you would add (as an example)
// "ScrollEnabled:1,setTrans:HM_f_SetSlide,killTrans:HM_f_KillSlide,SlideInFrom:'left'" 
// to the menu definitions, in addition to the SlideIn/SlideOutInterval, 
// and SlideIn/SlideOutPercent variables (all of which will assume 
// defaults if not set). Note that for these particular transitions
// to work, ScrollEnabled must be true on the menu.

Hvq=(HM_DOM&&((navigator.productSub&&(navigator.productSub<20021130))||((/^Netscape/.test(navigator.vendor))&&(navigator.vendorSub==7.02))||(navigator.vendor=="Camino"&&(navigator.vendorSub<=.7))));
function HM_f_SetSlide(on){this.HYD();if(Hvq||(on&&!this.vm)||(!on&&!this.vn)){this.HYF(on);return;}else{var ve=(on?this.vm:this.vn);var vb=(on?this.vk:this.vl);if(!vb)vb=(HM_Opera)?20:10;var vj=(on?this.vo:this.vp);if(!vj)vj=20;
}if(HM_Opera){if(this.mh.nl)this.HXh(null,1);}else{if(this.nl)this.HXh(null,1);}this.mh.uy={va:0,vf:0,vg:0,vc:"cs",vd:"width",vh:"left",vs:(HM_Opera)?parseInt(this.mh.cs.style.left):parseInt(this.cs.style.left),vr:vb};var uy=this.mh.uy;
this.mh.vi=(on?1:2);if((ve=="top")||(ve=="bottom")){uy.vd="height";uy.vh="top";uy.vs=(HM_Opera)?parseInt(this.mh.cs.style.top):parseInt(this.cs.style.top);uy.vf=parseInt(this.mh.style.height);}else uy.vf=parseInt(this.mh.style.width);
if((ve=="right")||(ve=="bottom"))uy.vc="mh";vj=vj/100;uy.vg=Math.round((uy.vf)*vj);if(uy.vc=="mh"){if(uy.vh=="left")uy.va=(on)?this.xPos:this.xPos+uy.vf;else uy.va=(on)?this.yPos:this.yPos+uy.vf;}else uy.va=(on)?uy.vs:uy.vf*(-1);
if(on){this.mh.style[uy.vd]="0px";var jp=(uy.vc=="mh")?this.mh:(HM_Opera)?this.mh.cs:this.cs;jp.style[uy.vh]=((uy.vc=="mh")?uy.va+uy.vf:uy.vs-uy.vf)+"px";}else uy.vg*=(-1);HM_f_SlideMoveTo(this.ne);}
function HM_f_SlideMoveTo(eg){if(Hax||!HWU())return;var uz=Hms[eg];if(!uz.mh.vi)return;var uy=uz.mh.uy;var jp=(uy.vc=="mh")?uz.mh:(HM_Opera)?uz.mh.cs:uz.cs;var oldPos=parseInt(jp.style[uy.vh]);var newPos=(oldPos+(uy.vg*(uy.vc=="mh"?(-1):1)));
if((Math.abs(newPos-uy.va))<Math.abs(uy.vg))newPos=uy.va;if(newPos==uy.va)uz.HYD();else{var oldDim=parseInt(uz.mh.style[uy.vd]);uz.HYF(0);uz.mh.style[uy.vd]=(oldDim+uy.vg)+"px";jp.style[uy.vh]=newPos+"px";uz.HYF(1);Hg.clearTimeout(uz.mh.sp);
uz.mh.sp=null;var en="HM_f_SlideMoveTo('"+uz.ne+"')";if(HM_Opera)uz.mh.sp=Hg.setTimeout(en,uy.vr);else uz.mh.sp=setTimeout(en,uy.vr);}}
function HM_f_KillSlide(){if(!this.mh||!this.mh.vi)return;if(HM_Opera)Hg.clearTimeout(this.mh.sp);else clearTimeout(this.mh.sp);this.mh.sp=null;this.HYF(0);var uy=this.mh.uy;this.mh.style[uy.vd]=uy.vf+"px";
if(uy.vc=="mh")this.mh.style[uy.vh]=uy.va+"px";else{if(HM_Opera)this.mh.cs.style[uy.vh]=uy.vs+"px";else this.cs.style[uy.vh]=uy.vs+"px";}this.HYF(this.mh.vi==1);this.mh.vi=0;}

// The following variables and the GetElementXY function can 
// be used to position a menu relative to the current position 
// of another element on the page. 

HM_NS6=((navigator.product=="Gecko")||(HM_IsSafari));
if(HM_NS6||HM_Opera)HM_IE=HM_Konqueror=false;else if(HM_Konqueror)HM_IE=HM_NS6=HM_IsSafari=false;Hjr=(HM_IE&&document.compatMode)?document.compatMode=="CSS1Compat":false;
function HM_f_GetElementXY(elId,xory){var mf=document.images[elId];if(!mf)mf=document.anchors[elId];if(!mf){mf=(document.getElementById)?document.getElementById(elId):(document.all)?document.all(elId):(document.layers)?document.layers[elId]:null;
}if(!mf)return 0;if(HM_NS4){if(typeof(mf[xory])=="number")return mf[xory];else return 0;
}var qx=((navigator.productSub&&(navigator.productSub<20021130))||((/^Netscape/.test(navigator.vendor))&&(navigator.vendorSub==7.02))||(navigator.vendor=="Camino"&&(navigator.vendorSub<=.7)));
var qy=((/^Netscape/.test(navigator.vendor))&&(parseInt(navigator.vendorSub)==6));var qz=((qy)&&(navigator.vendorSub<6.1));if((HM_Konqueror)||(HM_Opera)||(HM_IsSafari))qx=qy=qz=false;var ra=((!HM_Mac)&&(HM_IE)&&(!document.getElementById));
var rb=(xory=="x")?"offsetLeft":"offsetTop";var rc=(xory=="x")?"clientLeft":"clientTop";var rd=(xory=="x")?"clientWidth":"clientHeight";var re=(xory=="x")?"marginLeft":"marginTop";var rf=(xory=="x")?"paddingLeft":"paddingTop";
var rg=(xory=="x")?"borderLeftWidth":"borderTopWidth";var rh=(mf.currentStyle)?mf.currentStyle:mf.style;if(window.getComputedStyle&&HM_Opera)rh=window.getComputedStyle(mf,null);var ri=(rh&&(rh.position=="absolute"));
var rj=(rh&&rh.position&&(rh.position!="static"));var rk=((ri&&HM_IsSafari)||(HM_Opera&&rj&&(HM_BrowserVersion>=7.2)))?false:true;var rl=mf[rb];var rm=0;if(ra){rm=rh[re];
if(!isNaN(parseInt(rm))){if((rm.indexOf("%")!=-1)&&(mf.parentElement)){var rn=mf.parentElement[rd];if(isNaN(rn))rn=0;rm=Math.round((parseInt(rm)/100)*rn);}else rm=parseInt(rm);rl+=rm;}}if(qz&&mf.tagName!="TABLE"){rm=rh[rg];
if(!/\d/.test(rm))rm=mf.getAttribute('border');rm=parseInt(rm);if(!isNaN(rm))rl-=rm;}var ro=mf.offsetParent;var rp=true;
if(HM_Opera&&ro&&(ro.tagName=="BODY")&&(HM_BrowserVersion>=7.2)){if(!/^(FORM|P|DIV|TD|TR|TABLE|DL|OL|UL)$/.test(mf.tagName))rp=false;}else if(HM_Opera&&(HM_BrowserVersion<7.2)){rp=false;}while(ro){rh=(ro.currentStyle)?ro.currentStyle:ro.style;
if(window.getComputedStyle&&HM_Opera)rh=window.getComputedStyle(ro,null);if(rh&&(rh.position=="absolute"))ri=true;if(rh&&rh.position&&(rh.position!="static"))rj=true;if(ri&&HM_IsSafari)rk=false;if(HM_Opera&&rj&&(HM_BrowserVersion>=7.2))rk=false;
if(HM_IE){if((!HM_Mac)&&(ro.tagName!="TABLE")&&(ro.tagName!=((Hjr)?"HTML":"BODY")))rl+=ro[rc];if(ra){rm=rh[re];if(!isNaN(parseInt(rm))){if((rm.indexOf("%")!=-1)&&(ro.parentElement)){var rq=ro.parentElement;var rn=rq[rd];
if(isNaN(rn))rn=0;rm=Math.round((parseInt(rm)/100)*rn);}else rm=parseInt(rm);rl+=rm;}}}else if(HM_NS6&&!HM_IsSafari){rm=rh[rg];var rr=rh.position;if(window.getComputedStyle&&!qy){rh=window.getComputedStyle(ro,null);
rm=(xory=="x")?rh.getPropertyValue('border-left-width'):rh.getPropertyValue('border-top-width');rr=rh.getPropertyValue('position');}rm=(isNaN(parseInt(rm)))?0:parseInt(rm);if(rr=="absolute")ri=true;
if(((ro.tagName=="BODY")&&(!qz))||((rr)&&(rr!="static")&&(ro.tagName!="TABLE"))){rl+=rm;}else if((ro.tagName=="TABLE")&&(qx)){if(rm==0){var rs=ro.getAttribute('frame');if(rs!=null)rl+=1;}else if(rm>0)rl+=rm;
}}if(HM_NS6&&!qz&&!HM_IsSafari&&(ro.tagName=="BODY")&&!ri)rk=false;if((ro.tagName!="BODY")||rk){rl+=ro[rb];if(HM_Opera&&(ro.tagName=="BODY")&&rp)rl+=ro[rc];}ro=ro.offsetParent;
}rh=(document.body.currentStyle)?document.body.currentStyle:document.body.style;if(HM_Konqueror&&!ri&&(HM_BrowserVersion<3.2)){rm=rh[re];if(!isNaN(parseInt(rm))){if(rm.indexOf("%")!=-1){var rn=document.documentElement.offsetWidth;if(isNaN(rn))rn=0;
rm=parseInt((parseInt(rm)/100)*rn);}else rm=parseInt(rm);}else rm=10;rl+=rm;}return rl;}

// The following function retrieves the current height or 
// width of a menu. Use it to position menus based on their
// bottom or right edges, among other possibilities.

function HM_f_GetMenuDimension(eg,width){var eh=Hms[eg];var mh=(eh)?eh.mh:null;if(mh){if(!HM_NS4&&((HM_Opera&&!mh.nb)||(!HM_Opera&&!eh.nb)))eh.HXq(false);
if(HM_DOM){return((width)?((Hjt||Hju)?0:(eh.sz+eh.sx))+parseInt(mh.style.width):((Hjt||Hju)?0:(eh.sw+eh.sy))+parseInt(mh.style.height));}else if(HM_IE){return((width)?mh.style.pixelWidth:mh.style.pixelHeight);
}else{return((width)?mh.clip.width:mh.clip.height);}}else return 0;}

// In many (and especially older) browsers, select boxes and other form
// elements as well as flash or java applets will cover menu elements
// when they popup. The following function can be used to hide select 
// elements (or any other elements of your choosing) when the menus 
// appear or restore them when the menus are hidden. This function works
// well in all HM supported browsers except NS4, which will only work
// if the HTML of the page is structured in a specific way. For IE5.5 and
// IE6.0, an alternate technique is presented lower in this script which
// does not require element hiding. 

function HM_f_ToggleElementList(show,elList,toggleBy){if(HM_NS4&&(toggleBy=="tag"))return true;for(var i=0;i<elList.length;i++){var ElementsToToggle=[];
switch(toggleBy){case "tag":ElementsToToggle=(HM_DOM)?Hg.document.getElementsByTagName(elList[i]):Hg.document.all.tags(elList[i]);break;
case "id":ElementsToToggle[0]=(HM_DOM)?Hg.document.getElementById(elList[i]):(HM_IE)?Hg.document.all(elList[i]):Hg.document.layers[elList[i]];break;}for(var j=0;j<ElementsToToggle.length;j++){var theElement=ElementsToToggle[j];
if(!theElement)continue;if(HM_DOM||HM_IE)theElement.style.visibility=show?"inherit":"hidden";else if(HM_NS4)theElement.visibility=show?"inherit":"hide";}}return true;}

// The following functions are intended for use with the HM_OnVisibilityToggle,
// HM_OnMove, and HM_OnMenuCreated menu triggers. For Internet Explorer version 5.5 
// and 6, they utilize an IFrame based masking method that allows menus to cover 
// drop-down select boxes, Flash movies, and other windowed elements on pages 
// that have them.

function HM_f_IEMaskMove(menuEl,xPos,yPos){if(this.rt){this.rt.style.left=xPos+"px";this.rt.style.top=yPos+"px";}}
function HM_f_IEMaskToggle(menuEl,ru){if(window.HM_IE55){if(ru){this.rt.style.left=this.mh.style.left;this.rt.style.top=this.mh.style.top;this.rt.style.width=this.mh.offsetWidth;this.rt.style.height=this.mh.offsetHeight;
}if(this.rt)this.rt.style.visibility=(ru)?"visible":"hidden";}}
function HM_f_IEMaskCreate(menuEl){if(window.HM_IE55){this.rt=Hg.document.createElement("IFRAME");this.rt.src="javascript:void(0)";this.rt.frameBorder=0;this.rt.style.position="absolute";this.rt.style.visibility="hidden";
this.rt.style.left=(HXN())?"0px":"-500px";this.rt.style.top="-2000px";this.rt.style.width="100px";this.rt.style.height="100px";this.rt.style.filter="progid:DXImageTransform.Microsoft.Alpha(opacity=0)";this.rt.allowTransparency=false;
if(this.UseInsert)Hg.document.body.insertBefore(this.rt,Hg.document.body.firstChild);else Hg.document.body.appendChild(this.rt);}}

// End custom functions

HM_IsMenu=(HM_Konqueror&&HM_FramesEnabled)?false:HM_IsMenu;
if(HM_IsMenu) {
	HM_BrowserString = HM_NS4 ? "NS4" : HM_Opera ? "OPR" : HM_DOM ? "DOM" : "IE4";
	HM_aConfigs = HM_ConfigFiles.split(',');
	HM_WriteString = '<scr'+'ipt src="' + HM_ScriptDir + 'HM_Script' + HM_BrowserString + '.js" type="text/javascript">'+"\n"+'<\/scr'+'ipt>'+"\n";
	document.write(HM_WriteString);
	for(var i=0; i<HM_aConfigs.length; i++) {
		HM_WriteString = '<scr'+'ipt src="' + HM_ConfigDir + HM_aConfigs[i] + '" type="text/javascript">'+"\n"+'<\/scr'+'ipt>'+"\n";
		if(HM_aConfigs[i]) document.write(HM_WriteString);
	}
	if(HM_ConfigType=="arrays") {
		HM_WriteString = '<scr'+'ipt src="' + HM_ScriptDir + 'HM_ConvertArrays.js" type="text/javascript">'+"\n"+'<\/scr'+'ipt>'+"\n"
		document.write(HM_WriteString);
	}
}
