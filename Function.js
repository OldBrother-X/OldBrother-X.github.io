//计算已有和预计的金额
function displayDate(){

	var YIYOU_REN=document.getElementById('YIYOU_REN');
	var YIYOU_RI=document.getElementById('YIYOU_RI');
	var YUJI_REN=document.getElementById('YUJI_REN');
	var YUJI_RI=document.getElementById('YUJI_RI');
	var BILI=document.getElementById('BILI');
	//window.alert(i.value);	
	var GONG_REN=Number(YIYOU_REN.value)+Number(YUJI_REN.value);
	var GONG_RI=Number(YIYOU_RI.value)+Number(YUJI_RI.value);
	var RI_TO_REN=GONG_RI/100.0*BILI.value;
	YUJI_GONG=RI_TO_REN+GONG_REN;

	YIYOU_GONG=Number(YIYOU_REN.value)+Number(YIYOU_RI.value)/100.0*BILI.value;
	
	document.getElementById("demo").innerHTML=String("预计计算结果: "+YUJI_GONG);
	document.getElementById("demo2").innerHTML=String("已有计算结果: "+YIYOU_GONG);
}