var stop=true;
var end=false;
var a,cod,entered;

var dataSet=[[22.4,14.3,14.6,13.7,14.1,9.9,14.7,20.5],
			 [8.1,9.7,10,8.7,9.4,9.1,14.0,6.9]];
var p = Math.floor(Math.random()*6);

//to prevent entering non-integer values and alphabets
$(function()
{
	$('input').on('input', function() {
		this.value = this.value.match(/\d*(\.\d*)?/)[0];
	});
});

function navNext()
{
	for(temp=0;temp<=14;temp++)
	{
		document.getElementById("canvas"+temp).style.visibility="hidden";
	}
	simsubscreennum+=1;
	document.getElementById("canvas"+simsubscreennum).style.visibility="visible";
	document.getElementById("nextButton").style.visibility="hidden";
	magic();
}

var ca;
var questions=["Which of these is used as the indicator when</br> the titration is carried out to determine</br> the amount of COD present in a sample?",
				"How is COD calculated?",
				"Potassium dichromate used to effectively </br>oxidize all organic compounds in water.",
				"The COD test is commonly used to</br> measure which of the following?",
				"COD test is widely used to determine"];
				
var options2=[["Ferroin","Methyl Orange","Starch","Phenolphthalein"],//Ferroin
			  ["Waste water is oxidised chemically using sodium in acid solutions","Waste water is oxidised chemically using dichromate in acid solutions",
			  "Waste water is oxidised chemically using bromine in acid solutions","Waste water is oxidised chemically using strontium in acid solutions"],//Waste water is oxidised chemically using dichromate in acid solutions
			  ["True","False"],//True
			  ["Amount of organic compounds in water","Amount of oxygen in water","Amount of oxygen in a chemical","Amount of oxygen used in a oxygenation process"],//amount of organic compounds in water
			  ["Degree of pollution in water bodies","Efficiency of treatment plants","Pollution loads","All of the above"]];//All of the above

function validateAnswer(qn,ans,left,top)
{
	 $("#answer").empty();
	document.getElementById("a").innerHTML="";
	document.getElementById("questDiv").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:"+left+";top:"+top+";";
	document.getElementById("q").innerHTML=questions[qn];
	el = document.createElement("option");
	el.textContent = " ";
	el.value = " ";
	answer.appendChild(el);
  
	for(j=0;j<options2[qn].length;j++)
	{
		opt = options2[qn][j];

		el = document.createElement("option");
		el.textContent = opt;
		el.value = opt;
		answer.appendChild(el);
		$("#answer").change(function()
		{
			ca=$(this).children("option:selected").val();
			if(options2[qn][ans]==ca)
			{
				document.getElementById("a").innerHTML="Correct Answer!";
			}
			else
			{
				document.getElementById("a").innerHTML="Wrong! Answer is "+options2[qn][ans];
			}
			setTimeout(function()
			{
				document.getElementById("questDiv").style.visibility="hidden";
				document.getElementById("nextButton").style.visibility="visible";
			},1500);
		});
	}
}

//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow()
{
     if (document.getElementById('arrow1').style.visibility=="hidden")
         document.getElementById('arrow1').style.visibility="visible";
     else
         document.getElementById('arrow1').style.visibility="hidden";
}

//stop blinking arrow
function myStopFunction() 
{
     clearInterval(myInt);
     document.getElementById('arrow1').style.visibility="hidden";
}

//Simulation screen actions
function magic()
{
	if(simsubscreennum==1) //display heading
	{
		$("#1-1").fadeIn(1000);
		setTimeout(function()
		{
			document.getElementById("nextButton").style.visibility="visible";
		},2000);
	}
	
	if(simsubscreennum==2) //prepare std sulphate solution
	{
		can=2;
		setTimeout(function()
		{
			fillRBRF1();
		},500);
	}
	if(simsubscreennum==3)
	{
		can=3;
		setTimeout(function()
		{
			fillRBRF1();
		},500);
	}
	if(simsubscreennum==4)
	{
		can=4;
		setTimeout(function()
		{
			fillRBRF1();
		},500);
	}
	if(simsubscreennum==5)
	{
		can=5;
		fillRBRF1();
	}
	if(simsubscreennum==6)
	{
		can=6;
		transferContentToDV();
	}
	if(simsubscreennum==7)
	{
		document.getElementById("6-55").style.visibility="hidden"
		document.getElementById("6-61").style.visibility="hidden"
		document.getElementById("6-62").style.visibility="hidden"
		document.getElementById("6-63").style.visibility="hidden"
		document.getElementById("6-64").style.visibility="hidden"
		document.getElementById("p6-2").style.visibility="hidden"
		$("#7-1").fadeIn(1000);
		setTimeout(function()
		{
			document.getElementById("nextButton").style.visibility="visible";
		},2000);
	}
	if(simsubscreennum==8)
	{
		can=8;
		transferContentToCF();
	}
	if(simsubscreennum==9)
	{
		document.getElementById("8-2a").style.visibility="hidden";
		document.getElementById("8-2b").style.visibility="hidden";
		document.getElementById("8-2c").style.visibility="hidden";
		document.getElementById("8-31").style.visibility="hidden";
		document.getElementById("8-32").style.visibility="hidden";
		document.getElementById("8-4").style.visibility="hidden";
		can=9;
		fillBurette();
	}
	if(simsubscreennum==10)
	{
		a=0;
		can=10;
		titration();
	}
	if(simsubscreennum==11)
	{
		document.getElementById("p10-1").style.visibility="hidden";
		document.getElementById("p10-3").style.visibility="hidden";
		$("#11-1").fadeIn(1000);
		setTimeout(function()
		{
			document.getElementById("nextButton").style.visibility="visible";
		},1000);
	}
	if(simsubscreennum==12)
	{
		can=12;
		fillBurette();
	}
	if(simsubscreennum==13)
	{
		a=1;
		can=13;
		titration();
	}
	if(simsubscreennum==14)
	{
		document.getElementById("p13-1").style.visibility="hidden";
		document.getElementById("p13-3").style.visibility="hidden";	
		
		document.getElementById("b20-1").innerHTML=dataSet[0][p];
		document.getElementById("b20-2").innerHTML=dataSet[0][p];
		document.getElementById("w20-1").innerHTML=dataSet[1][p];
		document.getElementById("w20-2").innerHTML=dataSet[1][p];
		cod=parseInt(((dataSet[0][p]-dataSet[1][p])*0.025*8000)/10);
		console.log(cod);
		document.getElementById("20-4").onclick=function()
		{
			document.getElementById("formula").style.visibility="visible";
		}
		document.getElementById("20-5").onclick=function()
		{
			document.getElementById("formula").style.visibility="hidden";
			if(!document.getElementById("input").value || document.getElementById("input").value==" ")
			{
				alert("Enter the value to proceed ");
			}
			else
			{
				entered = document.getElementById("input").value;
				console.log(entered);
				if(Math.round(entered) == Math.round(cod))
				{
					document.getElementById("20-3").style="position:absolute; left:360px; top:255px; color:#32CD32;  font-size:25px; visibility:visible;";
					document.getElementById("20-3").innerHTML="&#10004;"
					document.getElementById("20-6").style.visibility="hidden";
					document.getElementById("20-4").style.visibility="hidden";
					document.getElementById("20-5").style.visibility="hidden";

					document.getElementById("input").style="border:none; background-color:transparent; color:black; font-size:16px;";
					document.getElementById("input").disabled="true";
					document.getElementById("inference").style.visibility="visible";
				}
				else
				{
					document.getElementById("20-6").style.visibility="visible";
					document.getElementById("20-3").style="position:absolute; left:360px; top:255px; color:red;  font-size:25px; visibility:visible;";
					document.getElementById("20-3").innerHTML="&#10008;"
				}
			}	
		}
		document.getElementById("20-6").onclick=function()
		{
			document.getElementById("formula").style.visibility="hidden";
			document.getElementById("input").style="border:none; background-color:transparent; color:black; font-size:16px;";
			document.getElementById("input").disabled="true";
			document.getElementById("input").value=cod;
			document.getElementById("20-6").style.visibility="hidden";
			document.getElementById("20-4").style.visibility="hidden";
			document.getElementById("20-5").style.visibility="hidden";
			document.getElementById("20-3").style.visibility="hidden";
			document.getElementById("inference").style.visibility="visible";
		}
	}
}

function fillRBRF1()
{
	//Open sulphate sulotion bottle
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:530px; top:315px; height: 30px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
	// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
	// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(270deg)";
	$("#"+can+"-1").click(function()
	{			
		myStopFunction();
		$("#"+can+"-1").off("click");	
		$("#"+can+"-1").animate({"position":"absolute","top":"285px"},150,
		function()
		{
			$("#"+can+"-1").animate({"position":"absolute","left":"540px"},250,
			function()
			{
				$("#"+can+"-1").animate({"position":"absolute","top":"400px"},250,
				function()
				{
					$("#"+can+"-5").fadeIn(200,
					function()
					{
						myInt = setInterval(function(){ animatearrow(); }, 500);
						document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:490px; top:140px; height: 30px; z-index: 10;";
						document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
						// Code for IE9
						document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
						 // Standard syntax
						document.getElementById("arrow1").style.transform = "rotate(180deg)";
						$("#"+can+"-5").click(function()
						{
							myStopFunction();
							$("#"+can+"-5").off("click");	
							$("#"+can+"-5").animate({"position":"absolute","top":"180px"},300,
							function()
							{
								$("#"+can+"-61").css({"visibility":"visible","position":"absolute","left":"250px","top":"100px"});
								$("#"+can+"-62").css({"visibility":"visible","left":"302px","top":"208px"});
								$("#"+can+"-63").css({"visibility":"visible","left":"314px","top":"220px"});
								$("#p"+can+"-1").css({"visibility":"visible"});
								myInt = setInterval(function(){ animatearrow(); }, 500);
								document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:310px; top:245px; height: 30px; z-index: 10;";
								document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
								// Code for IE9
								document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
								 // Standard syntax
								document.getElementById("arrow1").style.transform = "rotate(180deg)";
								$("#"+can+"-62").click(function()
								{
									myStopFunction();
									$("#"+can+"-62").off("click");
									$("#"+can+"-61").css({"visibility":"hidden"});
									$("#"+can+"-62").css({"visibility":"hidden"});
									$("#"+can+"-63").css({"visibility":"hidden"});
									$("#p"+can+"-1").css({"visibility":"hidden"});	
									if(can==2 || can==5 || can==12 || can==15)
									{
										$("#"+can+"-51").animate({"position":"absolute","top":"270px"},750);
										$("#"+can+"-3").animate({"position":"absolute","top":"370px"},750);
									}
									if(can==3 || can==13)
									{
										$("#"+can+"-51").animate({"position":"absolute","top":"329px"},750);
										$("#"+can+"-3").animate({"position":"absolute","top":"363px"},750);
									}
									if(can==4 || can==14)
									{
										$("#"+can+"-51").animate({"position":"absolute","top":"325px"},750);
										$("#"+can+"-3").animate({"position":"absolute","top":"365px"},750);
									}
									setTimeout(function()
									{
										myInt = setInterval(function(){ animatearrow(); }, 500);
										document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:490px; top:240px; height: 30px; z-index: 10;";
										document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
										// Code for IE9
										document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
										 // Standard syntax
										document.getElementById("arrow1").style.transform = "rotate(180deg)";
										$("#"+can+"-5").click(function()
										{
											myStopFunction();
											$("#"+can+"-5").off("click");	
											if(can==2 || can==5 || can==12 || can==15)
											{
												$("#"+can+"-5").animate({"position":"absolute","top":"90px"},750);
												$("#"+can+"-51").animate({"position":"absolute","top":"180px"},750);
											}
											if(can==3 || can==13)
											{
												$("#"+can+"-5").animate({"position":"absolute","top":"90px"},750);
												$("#"+can+"-51").animate({"position":"absolute","top":"243px"},750);
											}
											if(can==4 || can==14)
											{
												$("#"+can+"-5").animate({"position":"absolute","top":"90px"},750);
												$("#"+can+"-51").animate({"position":"absolute","top":"236px"},750);
											}
											setTimeout(function()
											{
												$("#"+can+"-5").animate({"position":"absolute","left":"190px"},1200);
												$("#"+can+"-51").animate({"position":"absolute","left":"207px"},1200);
												setTimeout(function()
												{
													if(can==2 || can==5 || can==12 || can==15)
													{
														$("#"+can+"-5").animate({"position":"absolute","top":"130px"},750);
														$("#"+can+"-51").animate({"position":"absolute","top":"215px"},750);
													}
													if(can==3 || can==13)
													{
														$("#"+can+"-5").animate({"position":"absolute","top":"130px"},750);
														$("#"+can+"-51").animate({"position":"absolute","top":"298px"},750);
													}
													if(can==4 || can==14)
													{
														$("#"+can+"-5").animate({"position":"absolute","top":"130px"},750);
														$("#"+can+"-51").animate({"position":"absolute","top":"275px"},750);
													}
													setTimeout(function()
													{
														$("#"+can+"-61").css({"visibility":"visible","position":"absolute","left":"420px"});
														$("#"+can+"-62").css({"visibility":"visible","position":"absolute","left":"472px"});
														$("#"+can+"-63").css({"visibility":"visible","position":"absolute","left":"484px"});
														//$("#p2-2").css({"visibility":"visible"});
														myInt = setInterval(function(){ animatearrow(); }, 500);
														document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:500px; top:257.5px; height: 30px; z-index: 10;";
														document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
														// Code for IE9
														document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
														 // Standard syntax
														document.getElementById("arrow1").style.transform = "rotate(180deg)";
														$("#"+can+"-63").click(function()
														{
															myStopFunction();
															$("#"+can+"-63").off("click");
															$("#"+can+"-61").css({"visibility":"hidden"});
															$("#"+can+"-62").css({"visibility":"hidden"});
															$("#"+can+"-63").css({"visibility":"hidden"});
															document.getElementById("p2-1").innerHTML=" ";
															$("#"+can+"-51").animate({"position":"absolute","top":"430px"},1250);
															setTimeout(function()
															{
																if(can==2 || can==12)
																{
																	$("#"+can+"-421").animate({"position":"absolute","top":"420px"},750);
																}
																if(can==3  || can==13)
																{
																	$("#"+can+"-421").animate({"position":"absolute","top":"425px"},750);
																	document.getElementById(can+"-421").style.backgroundColor="#FFFF99";
																	document.getElementById(can+"-421").style.borderTop="1px solid #FFFF99";
																}
																if(can==4  || can==14)
																{
																	$("#"+can+"-421").animate({"position":"absolute","top":"420px"},750);
																	document.getElementById(can+"-421").style.backgroundColor="#ffae42";
																	document.getElementById(can+"-421").style.borderTop="1px solid #ffae42";
																}
																if(can==5 || can==15)
																{
																	$("#"+can+"-421").animate({"position":"absolute","top":"410px"},750);
																}																
																setTimeout(function()
																{
																	$("#"+can+"-5").fadeOut(500);
																	$("#"+can+"-51").css({"visibility":"hidden"});
																	setTimeout(function()
																	{
																		if(can==2 || can==3 || can==4 || can==12 || can==13 || can==14)
																		{
																			closeCap();
																		}
																		if(can==5 || can==15)
																		{
																			fill5mlagso4();
																		}
																	},500);
																},750);
															},700);
														});
													},750);
												},750);
											},750);
										});
									},750);
								});
							});
						});
					});

				});
			});
		});
	});
}

function fill5mlagso4()
{
	document.getElementById(can+"-5").style="position:absolute; left:477px; top:80px;";
	document.getElementById(can+"-52").style.visibility="visible";
	$("#"+can+"-5").fadeIn(200,
	function()
	{
		document.getElementById("p"+can+"-1").innerHTML="Press the up arrow on the bulb </br></br>to take 5ml of Sulfuric acid</br></br> up into the pipette."; 
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:490px; top:140px; height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		$("#"+can+"-5").click(function()
		{
			myStopFunction();
			$("#"+can+"-5").off("click");	
			$("#"+can+"-5").animate({"position":"absolute","top":"180px"},300,
			function()
			{
				$("#"+can+"-61").css({"visibility":"visible","position":"absolute","left":"250px","top":"100px"});
				$("#"+can+"-62").css({"visibility":"visible","left":"302px","top":"208px"});
				$("#"+can+"-63").css({"visibility":"visible","left":"314px","top":"220px"});
				$("#p"+can+"-1").css({"visibility":"visible"});
				myInt = setInterval(function(){ animatearrow(); }, 500);
				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:310px; top:245px; height: 30px; z-index: 10;";
				document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
				// Code for IE9
				document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
				 // Standard syntax
				document.getElementById("arrow1").style.transform = "rotate(180deg)";
				$("#"+can+"-62").click(function()
				{
					myStopFunction();
					$("#"+can+"-62").off("click");
					$("#"+can+"-61").css({"visibility":"hidden"});
					$("#"+can+"-62").css({"visibility":"hidden"});
					$("#"+can+"-63").css({"visibility":"hidden"});
					$("#p"+can+"-1").css({"visibility":"hidden"});	
					$("#"+can+"-52").animate({"position":"absolute","top":"329px"},750);
					$("#"+can+"-3").animate({"position":"absolute","top":"373px"},750);
					setTimeout(function()
					{
						myInt = setInterval(function(){ animatearrow(); }, 500);
						document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:490px; top:240px; height: 30px; z-index: 10;";
						document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
						// Code for IE9
						document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
						 // Standard syntax
						document.getElementById("arrow1").style.transform = "rotate(180deg)";
						$("#"+can+"-5").click(function()
						{
							myStopFunction();
							$("#"+can+"-5").off("click");	
							$("#"+can+"-5").animate({"position":"absolute","top":"90px"},750);
							$("#"+can+"-52").animate({"position":"absolute","top":"243px"},750);
							setTimeout(function()
							{
								$("#"+can+"-5").animate({"position":"absolute","left":"190px"},1200);
								$("#"+can+"-52").animate({"position":"absolute","left":"207px"},1200);
								setTimeout(function()
								{
									$("#"+can+"-5").animate({"position":"absolute","top":"130px"},750);
									$("#"+can+"-52").animate({"position":"absolute","top":"298px"},750);
									setTimeout(function()
									{
										$("#"+can+"-61").css({"visibility":"visible","position":"absolute","left":"420px"});
										$("#"+can+"-62").css({"visibility":"visible","position":"absolute","left":"472px"});
										$("#"+can+"-63").css({"visibility":"visible","position":"absolute","left":"484px"});
										//$("#p2-2").css({"visibility":"visible"});
										myInt = setInterval(function(){ animatearrow(); }, 500);
										document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:500px; top:257.5px; height: 30px; z-index: 10;";
										document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
										// Code for IE9
										document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
										 // Standard syntax
										document.getElementById("arrow1").style.transform = "rotate(180deg)";
										$("#"+can+"-63").click(function()
										{
											myStopFunction();
											$("#"+can+"-63").off("click");
											$("#"+can+"-61").css({"visibility":"hidden"});
											$("#"+can+"-62").css({"visibility":"hidden"});
											$("#"+can+"-63").css({"visibility":"hidden"});
											document.getElementById("p2-1").innerHTML=" ";
											$("#"+can+"-52").animate({"position":"absolute","top":"430px"},1250);
											setTimeout(function()
											{
												$("#"+can+"-421").animate({"position":"absolute","top":"406px"},750);
												document.getElementById(can+"-421").style.backgroundColor="#ffae42";
												document.getElementById(can+"-421").style.borderTop="1px solid #ffae42";
												setTimeout(function()
												{
													$("#"+can+"-5").fadeOut(500);
													$("#"+can+"-52").css({"visibility":"hidden"});
													setTimeout(function()
													{
														closeCap();
													},500);
												},750);
											},700);
										});
									},750);
								},750);
							},750);
						});
					},750);
				});
			});
		});
	});
}

function closeCap()
{
	//close sulphate solution bottle
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:595px; top:405px; height: 30px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
	// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
	 // Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(270deg)";
	$("#"+can+"-1").click(function()
	{
		myStopFunction();
		$("#"+can+"-1").off("click");
		$("#"+can+"-1").animate({"position":"absolute","top":"285px"},300,
		function()
		{
			$("#"+can+"-1").animate({"position":"absolute","left":"472.5px"},300,
			function()
			{
				$("#"+can+"-1").animate({"position":"absolute","top":"310px"},150,
				function()
				{
					if( can==3 || can==12 || can==13 || can==14 || can==5 || can==15)
					{
						$("#nextButton").css({"visibility":"visible"});
					}
					if(can==2)
					{
						validateAnswer(3,0,"150px","150px");
					}
					if(can==4)
					{
						validateAnswer(2,0,"150px","150px");
					}
				});
			});
		});
	});
}

function fillBurette()
{
	$("#"+can+"-2").fadeIn(500);
	setTimeout(function()
	{
		myInt=setInterval(function(){animatearrow();},500);
		document.getElementById("arrow1").style="visibility:visible; position:absolute; left:500px; top:300px; height:30px; z-index:10;";
		document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
		document.getElementById("arrow1").style.msTransform="rotate(180deg)";
		document.getElementById("arrow1").style.transform="rotate(180deg)";
		document.getElementById(can+"-2").onclick=function()
		{
			myStopFunction();
			document.getElementById(can+"-2").onclick="";
			document.getElementById(can+"-2").style.animation="moveFunnel 1.5s forwards";
			setTimeout(function()
			{
				document.getElementById(can+"-3samp").style.visibility="visible";
				document.getElementById(can+"-3").style.visibility="visible";
				document.getElementById(can+"-3Cap").style.visibility="visible";
				setTimeout(function()
				{
					myInt=setInterval(function(){animatearrow();},500);
					document.getElementById("arrow1").style="visibility:visible; position:absolute; left:559px; top:350px; height:30px; z-index:10;";
					document.getElementById("arrow1").style.WebkitTransform="rotate(270deg)";
					document.getElementById("arrow1").style.msTransform="rotate(270deg)";
					document.getElementById("arrow1").style.transform="rotate(270deg)";
					document.getElementById(can+"-3Cap").onclick=function()
					{
						myStopFunction();
						document.getElementById(can+"-3Cap").onclick="";
						$("#"+can+"-3Cap").css({"visibility":"hidden"});
						$("#"+can+"-34").css({"visibility":"visible"});
						$("#"+can+"-34").animate({"position":"absolute","top":"280px"},300,
						function()
						{
							$("#"+can+"-34").css({"visibility":"hidden"});
							$("#"+can+"-35").css({"visibility":"visible"});		
							$("#"+can+"-35").animate({"position":"absolute","left":"560px","top":"399px"},700,
							function()
							{
								$("#"+can+"-35").css({"visibility":"hidden"});
								$("#"+can+"-3Cap").css({"visibility":"visible","position":"absolute","left":"575.5px","top":"437px"});
								setTimeout(function()
								{
									myInt=setInterval(function(){animatearrow();},500);
									document.getElementById("arrow1").style="visibility:visible; position:absolute; left:500px; top:450px; height:30px; z-index:10;";
									document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
									document.getElementById("arrow1").style.msTransform="rotate(180deg)";
									document.getElementById("arrow1").style.transform="rotate(180deg)";
									document.getElementById(can+"-3").onclick=function()
									{
										myStopFunction();
										document.getElementById(can+"-3").onclick="";
										document.getElementById(can+"-32").style.visibility="visible";
										$("#"+can+"-3samp").css({"position":"absolute","left":"521.5px","top":"400px"});
										document.getElementById(can+"-3").style.visibility="hidden";
										$("#"+can+"-32").animate({"position":"absolute","left":"370px","top":"15px"},1000);
										$("#"+can+"-3samp").animate({"position":"absolute","left":"391.5px","top":"65px"},1000,
										function()
										{
											$("#"+can+"-32").css({"transform":"rotate(-90deg)"});
											$("#"+can+"-3samp").css({"visibility":"hidden"});
											$("#"+can+"-3samp2").css({"visibility":"visible"});
											setTimeout(function()
											{
												document.getElementById(can+"-2samp").style.visibility="visible";
												document.getElementById(can+"-2samp").style.animation="sampFromFunnelUpDown 2s 7 ";
												$("#"+can+"-3samp2").animate({"position":"absolute","top":"93px"},10000);

												setTimeout(function()
												{
													document.getElementById(can+"-2samp2").style.visibility="visible";
													setTimeout(function()
													{
														document.getElementById(can+"-2samp3").style.animation="whiteUp 5s forwards";
														setTimeout(function()
														{
															document.getElementById(can+"-2samp3").style.visibility="hidden";
															document.getElementById(can+"-2samp4").style.animation="sampFromFunnelUp 5s forwards";
															setTimeout(function()
															{
																document.getElementById(can+"-2samp2").style.visibility="hidden";
																document.getElementById(can+"-2samp").style.animation="sampFromFunnelDown2 1.5s forwards ";
																setTimeout(function()
																{
																	document.getElementById(can+"-2samp").style.visibility="hidden";
																	document.getElementById(can+"-2samp4").style="position:absolute; left:240px; top:185px;";
																	document.getElementById(can+"-2samp4").style.animation="sampFromFunnelUp2 1.5s forwards";
																	$("#"+can+"-32").css({"transform":"rotate(0deg)"});
																	$("#"+can+"-3samp2").css({"visibility":"hidden"});
																	$("#"+can+"-3samp").css({"visibility":"visible","position":"absolute","top":"75px"});
																	setTimeout(function()
																	{
																		$("#"+can+"-3samp").animate({"position":"absolute","left":"501px","top":"411px"},1500);
																		$("#"+can+"-32").animate({"position":"absolute","left":"480px","top":"350px"},1500);
																	
																		setTimeout(function()
																		{
																			document.getElementById(can+"-32").style.visibility="hidden";
																			document.getElementById(can+"-3").style.visibility="visible";
																			
																			myInt=setInterval(function(){animatearrow();},500);
																			document.getElementById("arrow1").style="visibility:visible; position:absolute; left:618px; top:445px; height:30px; z-index:10;";
																			document.getElementById("arrow1").style.WebkitTransform="rotate(270deg)";
																			document.getElementById("arrow1").style.msTransform="rotate(270deg)";
																			document.getElementById("arrow1").style.transform="rotate(270deg)";
																			document.getElementById(can+"-3Cap").onclick=function()
																			{
																				myStopFunction();
																				document.getElementById(can+"-3Cap").onclick="";
																				$("#"+can+"-3Cap").css({"visibility":"hidden"});
																				$("#"+can+"-35").css({"visibility":"visible"});
																				$("#"+can+"-35").animate({"position":"absolute","left":"500px","top":"280px"},800,
																				function()
																				{
																					$("#"+can+"-35").css({"visibility":"hidden"});
																					$("#"+can+"-34").css({"visibility":"visible"});		
																					$("#"+can+"-34").animate({"position":"absolute","top":"301px"},300,
																					function()
																					{
																						$("#"+can+"-34").css({"visibility":"hidden"});
																						$("#"+can+"-3Cap").css({"visibility":"visible","position":"absolute","left":"514.5px","top":"341px"});
																					}
																					);
																				}
																				);
																				setTimeout(function()
																				{
																					document.getElementById(can+"-3Cap").style.visibility="hidden";
																					document.getElementById(can+"-3").style.visibility="hidden";
																					document.getElementById(can+"-3samp").style.visibility="hidden";
																					
																					myInt=setInterval(function(){animatearrow();},500);
																					document.getElementById("arrow1").style="visibility:visible; position:absolute; left:420px; top:155px; height:30px; z-index:10;";
																					document.getElementById("arrow1").style.WebkitTransform="rotate(0deg)";
																					document.getElementById("arrow1").style.msTransform="rotate(0deg)";
																					document.getElementById("arrow1").style.transform="rotate(0deg)";
																					document.getElementById(can+"-2").onclick=function()
																					{
																						myStopFunction();
																						document.getElementById(can+"-2").onclick="";
																						document.getElementById(can+"-2").style.animation="moveFunnelBack 1s forwards";
																						setTimeout(function()
																						{
																							$("#"+can+"-2").fadeOut(500,
																							function()
																							{
																								if(can==9)
																								{
																									validateAnswer(0,0,"420px","125px");
																								}
																								if(can==12)
																								{
																									validateAnswer(4,3,"430px","125px");
																								}
																							});
																						},1100);
																					}
																				},2100);
																			}
																		},1600);
																	},200);
																},800);
															},5000);
														},4500);
													},800);
												},900);
											},200);
										}	
										);
									}
								},100);//here
							}
							);
						}
						);
					}
				},250);
			},2100);
		}
	},1500);
}


function addIndicator()
{
	myInt=setInterval(function(){animatearrow();},500);
	document.getElementById("arrow1").style="visibility:visible; position:absolute; left:492.5px; top:290px; height:35px; z-index:10;";
	document.getElementById("arrow1").style.WebkitTransform="rotate(270deg)";
	document.getElementById("arrow1").style.msTransform="rotate(270deg)";
	document.getElementById("arrow1").style.transform="rotate(270deg)";
	document.getElementById(can+"-4").onclick=function()
	{
		myStopFunction();
		document.getElementById(can+"-4").onclick="";
		$("#"+can+"-4").animate({"position":"absolute","top":"260px"},100,
		function()
		{
			$("#"+can+"-4").animate({"position":"absolute","left":"520px"},200,
			function()
			{
				$("#"+can+"-4").animate({"position":"absolute","top":"370px"},250,
				function()
				{
					document.getElementById(can+"-4b").style.visibility="visible";
					document.getElementById(can+"-2b").style.visibility="visible";
					myInt=setInterval(function(){animatearrow();},500);
					document.getElementById("arrow1").style="visibility:visible; position:absolute; left:445px; top:250px; height:35px; z-index:10;";
					document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
					document.getElementById("arrow1").style.msTransform="rotate(180deg)";
					document.getElementById("arrow1").style.transform="rotate(180deg)";
					document.getElementById(can+"-4b").onclick=function()
					{
						myStopFunction();
						document.getElementById(can+"-4b").onclick="";
						document.getElementById(can+"-4b").style.animation="moveDropper 0.75s forwards";
						setTimeout(function()
						{
							document.getElementById(can+"-2a").style.animation="indicatorDown 1s forwards";
							document.getElementById(can+"-2b").style.animation="indicatorUp 1s forwards";
							setTimeout(function()
							{
								myInt=setInterval(function(){animatearrow();},500);
								document.getElementById("arrow1").style="visibility:visible; position:absolute; left:510px; top:260px; height:35px; z-index:10;";
								document.getElementById("arrow1").style.WebkitTransform="rotate(270deg)";
								document.getElementById("arrow1").style.msTransform="rotate(270deg)";
								document.getElementById("arrow1").style.transform="rotate(270deg)";
								document.getElementById(can+"-4b").onclick=function()
								{
									myStopFunction();
									document.getElementById(can+"-4b").onclick="";
									document.getElementById(can+"-4b").style.animation="moveDropper2 2s forwards";
									document.getElementById(can+"-2b").style.animation="moveDroppersolution2 2s forwards";
									setTimeout(function()
									{
										myInt=setInterval(function(){animatearrow();},500);
										document.getElementById("arrow1").style="visibility:visible; position:absolute; left:80px; top:220px; height:35px; z-index:10;";
										document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
										document.getElementById("arrow1").style.msTransform="rotate(180deg)";
										document.getElementById("arrow1").style.transform="rotate(180deg)";
										document.getElementById(can+"-4b").onclick=function()
										{
											myStopFunction();
											document.getElementById(can+"-4b").onclick="";
											document.getElementById(can+"-2b").style.animation="ferroinDown2 12.5s forwards";
											document.getElementById(can+"drop4-1").style.visibility="visible";
											document.getElementById(can+"drop4-1").style.animation="dropFerroin 0.6s 6";
											setTimeout(function()
											{
												document.getElementById(can+"-0").style.borderColor="#b0c4de";
												document.getElementById(can+"-0").style.backgroundImage="linear-gradient(#b0c4de ,#ffae42 15% )";
												setTimeout(function()
												{
													document.getElementById(can+"-0").style.backgroundImage="linear-gradient(#b0c4de ,#ffae42 45% )";
													setTimeout(function()
													{
														document.getElementById(can+"-0").style.backgroundImage="linear-gradient(#b0c4de ,#ffae42 65% )";
														setTimeout(function()
														{	
															document.getElementById(can+"-0").style.backgroundImage="linear-gradient(#b0c4de ,#ffae42 95%)";
															setTimeout(function()
															{	
																document.getElementById(can+"-0").style.backgroundImage="linear-gradient(#b0c4de ,#b0c4de)";
																document.getElementById(can+"drop4-1").style.visibility="hidden";
																document.getElementById(can+"-2b").style.visibility="hidden";
																document.getElementById(can+"-2c").style.visibility="hidden";
																document.getElementById(can+"-4b").style.visibility="hidden";
																document.getElementById("nextButton").style.visibility="visible";
															},600);
														},750);
													},750);
												},750);
											},750);
										}	
									},2000);
								}
							},1000);
						},750);
					}
				});
			});
		});
	}
}

function titration()
{
	document.getElementById("p"+can+"-0a").style.visibility="visible";
	document.getElementById("p"+can+"-1").style.visibility="visible";
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:225px; top:320px; height: 35px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(300deg)"; 
		// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(300deg)"; 
		// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(300deg)";
	document.getElementById(can+"-1knob").onclick=function()
	{
		myStopFunction();
		document.getElementById(can+"-1knob").onclick="";	
		document.getElementById(can+"-1knob").style.visibility="hidden";
		document.getElementById(can+"-1hand").style.visibility="visible";
		setTimeout(function()
		{
			document.getElementById("p"+can+"-0a").style.visibility="hidden";
			document.getElementById(can+"-1hand").style.visibility="hidden";
			document.getElementById(can+"-1hand2").style.visibility="visible";
			document.getElementById(can+"-1stopper").style="position:absolute; left:153px; top:309.75px;";
			setTimeout(function()
			{
				document.getElementById("drop"+can+"-1").style.visibility="visible";
				document.getElementById("drop"+can+"-1").style.animation="dropFAS 0.75s 15";
				document.getElementById(can+"-1a").style.animation="FASfromBurette 13s forwards";
				setTimeout(function()
				{
					document.getElementById("drop"+can+"-2").style.visibility="visible";
					document.getElementById("drop"+can+"-2").style.animation="dropFAS 0.75s 15";
					setTimeout(function()
					{
						document.getElementById(can+"-3").style.animation="colourChange2 13s forwards";

						setTimeout(function()
						{
							document.getElementById("p"+can+"-0b").style.visibility="visible";
							document.getElementById(can+"-3").style.borderTop="1px solid #000000";
							document.getElementById("drop"+can+"-1").style.visibility="hidden";
							document.getElementById("drop"+can+"-2").style.visibility="hidden";
							document.getElementById(can+"-1hand").style.visibility="visible";
							document.getElementById(can+"-1hand2").style.visibility="hidden";
							document.getElementById(can+"-1stopper").style="position:absolute; left:150px; top:307.75px; ";
							setTimeout(function()
							{
								document.getElementById("p"+can+"-0b").style.visibility="hidden";
								document.getElementById(can+"-1hand").style.visibility="hidden";
								setTimeout(function()
								{
									document.getElementById("p"+can+"-3").style.visibility="visible";
									document.getElementById("p"+can+"-3").innerHTML="Final burette reading = "+dataSet[a][p]+" ml";
									document.getElementById("nextButton").style.visibility="visible";
								},500);
							},750);
						},12200);
					},250);
				},250);
			},100);
		},250);
	}
}

function transferContentToDV()
{
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:480px; top:150px; height: 35px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(180deg)";
	document.getElementById(can+"-41").onclick=function()
	{
		myStopFunction();
		document.getElementById(can+"-41").onclick="";	
		$("#"+can+"-41").animate({"position":"absolute","top":"225px"},300,
		function()
		{
			document.getElementById(can+"-31").style.visibility="visible";
			document.getElementById(can+"-32").style.visibility="visible";
			document.getElementById(can+"-33").style.visibility="visible";
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:317.5px; top:246.75px; height: 30px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
			 // Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(180deg)";
			$("#"+can+"-32").click(function()
			{
				myStopFunction();
				$("#"+can+"-32").off("click");
				$("#"+can+"-31").css({"visibility":"hidden"});
				$("#"+can+"-32").css({"visibility":"hidden"});
				$("#"+can+"-33").css({"visibility":"hidden"});
				$("#"+can+"-42").animate({"position":"absolute","top":"316.5px"},300);
				$("#"+can+"-1").animate({"position":"absolute","top":"435px"},300,
				function()
				{
					$("#"+can+"-41").animate({"position":"absolute","top":"100px"},300);
					$("#"+can+"-42").animate({"position":"absolute","top":"192.5px"},300,
					function()
					{
						$("#"+can+"-41").animate({"position":"absolute","left":"237.5px"},600);
						$("#"+can+"-42").animate({"position":"absolute","left":"255px"},600,
						function()
						{
							$("#"+can+"-41").animate({"position":"absolute","top":"145px"},300);
							$("#"+can+"-42").animate({"position":"absolute","top":"237.5px"},300,
							function()
							{
								$("#"+can+"-31").css({"visibility":"visible","position":"absolute","left":"350px","top":"100px"});
								$("#"+can+"-32").css({"visibility":"visible","left":"402px","top":"208px"});
								$("#"+can+"-33").css({"visibility":"visible","left":"414px","top":"220px"});
								//release the solution
								myInt = setInterval(function(){ animatearrow(); }, 500);
								document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:427.5px; top:256px; height: 30px; z-index: 10;";
								document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
								// Code for IE9
								document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
								 // Standard syntax
								document.getElementById("arrow1").style.transform = "rotate(180deg)";
								$("#"+can+"-33").click(function()
								{
									myStopFunction();
									$("#"+can+"-33").off("click");
									$("#"+can+"-31").css({"visibility":"hidden"});
									$("#"+can+"-32").css({"visibility":"hidden"});
									$("#"+can+"-33").css({"visibility":"hidden"});
									$("#"+can+"-54").animate({"position":"absolute","top":"385px"},750);
									$("#"+can+"-42").animate({"position":"absolute","top":"400px"},600,
									function()
									{
										document.getElementById(can+"-42").style.visibility="hidden";
										document.getElementById(can+"-41").style.visibility="hidden";
										setTimeout(function()
										{
											$("#"+can+"-53").animate({"position":"absolute","left":"249.20px","top":"353px"},250,
											function()
											{
												$("#"+can+"-53").animate({"position":"absolute","top":"363.5px"},100,
												function()
												{
													document.getElementById(can+"-55").style.visibility="visible";
													document.getElementById(can+"-51").style.visibility="hidden";
													document.getElementById(can+"-52").style.visibility="hidden";
													document.getElementById(can+"-53").style.visibility="hidden";
													document.getElementById(can+"-54").style.visibility="hidden";
													document.getElementById(can+"-56").style.visibility="hidden";
													document.getElementById("note"+can+"-1").style.visibility="visible";
													document.getElementById("b"+can+"-1").onclick=function()
													{
														document.getElementById("note"+can+"-1").style.visibility="hidden";
														document.getElementById(can+"-61").style.visibility="visible";
														document.getElementById(can+"-62").style.visibility="visible";
														document.getElementById(can+"-63").style.visibility="visible";
														document.getElementById(can+"-64").style.visibility="visible";
														document.getElementById(can+"-1").style.visibility="hidden";
														document.getElementById(can+"-2").style.visibility="hidden";
														document.getElementById(can+"-21").style.visibility="hidden";
														placeDigestionVessel();
													}
												});
											});
										},300);
									});
								});
							});
						});
					});
				});
			});
		});
	}
}

function placeDigestionVessel()
{
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:255px; top:425px; height: 30px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
	// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
	 // Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(180deg)";
	document.getElementById(can+"-55").onclick=function()
	{
		myStopFunction();
		document.getElementById(can+"-55").onclick="";
		document.getElementById(can+"-55").style.visibility="hidden";
		document.getElementById(can+"-57").style.visibility="visible";
		$("#"+can+"-57").animate({"position":"absolute","left":"380px","top":"190px"},500,
		function()  
		{
			$("#"+can+"-57").animate({"position":"absolute","left":"450px"},300,
			function()
			{
				$("#"+can+"-57").animate({"position":"absolute","top":"250px"},300,
				function()
				{
					document.getElementById(can+"-57").style.visibility="hidden";
					document.getElementById(can+"-55").style="visibility:visible; position:absolute; left:464px; top:272.5px; width:19px;";
					//switch on the digestor
					myInt = setInterval(function(){ animatearrow(); }, 500);
					document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:570px; top:425px; height: 30px; z-index: 10;";
					document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
					// Code for IE9
					document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
					 // Standard syntax
					document.getElementById("arrow1").style.transform = "rotate(180deg)";
					document.getElementById(can+"-64").onclick=function()
					{
						myStopFunction();
						document.getElementById(can+"-64").onclick="";
						document.getElementById(can+"-63").style.backgroundColor="#FF0000";
						document.getElementById("p"+can+"-1").innerHTML="Digest the content in the </br>digestion vessel for 2 hours.";
						document.getElementById("note"+can+"-1").style.visibility="visible";
						document.getElementById("b"+can+"-1").onclick=function()
						{
							document.getElementById("note"+can+"-1").style.visibility="hidden";
							document.getElementById(can+"-7c").style.visibility="visible";
							document.getElementById(can+"-7n").style.visibility="visible";
							setTimeout(function()
							{
								document.getElementById(can+"-7n").style.transformOrigin="80%  100%";
								document.getElementById(can+"-7n").style.animation="needleRotate 2.5s 2 linear";
								setTimeout(function()
								{
									document.getElementById(can+"-7c").style.visibility="hidden";
									document.getElementById(can+"-7n").style.visibility="hidden";
									document.getElementById("p"+can+"-2").style.visibility="visible";
									//switch off the machine 
									myInt = setInterval(function(){ animatearrow(); }, 500);
									document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:570px; top:425px; height: 30px; z-index: 10;";
									document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
									// Code for IE9
									document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
									 // Standard syntax
									document.getElementById("arrow1").style.transform = "rotate(180deg)";
									document.getElementById(can+"-64").onclick=function()
									{
										myStopFunction();
										document.getElementById(can+"-64").onclick="";
										document.getElementById(can+"-63").style.backgroundColor="#800000";
										document.getElementById("p"+can+"-2").style.visibility="hidden";
										setTimeout(function()
										{
											//take out the digestion vessel
											myInt = setInterval(function(){ animatearrow(); }, 500);
											document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:505px; top:295px; height: 30px; z-index: 10;";
											document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
											// Code for IE9
											document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
											 // Standard syntax
											document.getElementById("arrow1").style.transform = "rotate(270deg)";
											document.getElementById(can+"-58").onclick=function()
											{
												myStopFunction();
												document.getElementById(can+"-58").onclick="";
												document.getElementById(can+"-58").style.visibility="hidden";
												document.getElementById(can+"-55").style.visibility="hidden";
												document.getElementById(can+"-57").style.visibility="visible";
												$("#"+can+"-57").animate({"position":"absolute","left":"450px","top":"190px"},300,
												function()
												{
													$("#"+can+"-57").animate({"position":"absolute","left":"380px"},400,
													function()
													{
														$("#"+can+"-57").animate({"position":"absolute","left":"245px","top":"345px"},600,
														function()
														{
															document.getElementById(can+"-57").style.visibility="hidden";
															document.getElementById(can+"-55").style="visibility:visible; position:absolute; left:249.20px; top:363.5px; width:20px; ";
															document.getElementById("p"+can+"-2").innerHTML="Allow the contents to </br>cool for 30 minutes";
															document.getElementById("p"+can+"-2").style.visibility="visible";
															document.getElementById("nextButton").style.visibility="visible";
														});
													});
												});
											}
										},500);
									}
								},5500);
							},350);
						}
					}
				});
			});
		});
	}
}

function transferContentToCF()
{
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:530px; top:395px; height: 30px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)"; 
	// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(0deg)"; 
	 // Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(0deg)";
	document.getElementById(can+"-51").onclick=function()
	{
		myStopFunction();
		document.getElementById(can+"-51").onclick="";
		document.getElementById(can+"-51").style.visibility="hidden";
		document.getElementById(can+"-54").style.visibility="hidden";
		document.getElementById(can+"-55").style.visibility="visible";
		document.getElementById(can+"-55").style.animation="moveDV 1s forwards";
		document.getElementById(can+"-52").style.animation="moveDVS 1s forwards";
		setTimeout(function()
		{
			document.getElementById(can+"-55").style="position:absolute; left:90.5px; top:181px;";
			document.getElementById(can+"-55").style.animation="rotateDV 0.25s forwards";
			document.getElementById(can+"-52").style="position:absolute; left:155.5px; top:231px; background-color:#ffae42; border-top:1.5px solid #ffae42; width:26px; height:92px; ";
			document.getElementById(can+"-52").style.animation="rotateDVS 0.25s forwards";
			setTimeout(function()
			{
				document.getElementById(can+"-56").style.visibility="visible";
				$("#"+can+"-0").animate({"position":"absolute","top":"395px"},1000);
				$("#"+can+"-52").animate({"position":"absolute","top":"250px"},1000,
				function()
				{
					document.getElementById(can+"-56").style.visibility="hidden";
					document.getElementById(can+"-52").style.visibility="hidden";
					document.getElementById(can+"-55").style.animation="rotateDVS2 0.25s forwards";
					setTimeout(function()
					{
						document.getElementById(can+"-55").style.visibility="hidden";
						document.getElementById(can+"-53").style.visibility="hidden";
						setTimeout(function()
						{
							document.getElementById(can+"-2a").style.visibility="visible";
							document.getElementById(can+"-31").style.visibility="visible";
							document.getElementById(can+"-32").style.visibility="visible";
							document.getElementById(can+"-4").style.visibility="visible";
							setTimeout(function()
							{
								addIndicator();
							},500);
						},500);
					},300);
				});
			},500);
		},1000);
	}
}

function checkAnswer()
{
	var str;
	document.getElementById("ans").style.visibility="visible";
	if($("input[name='inf']:checked").val()==1)
	{
		document.getElementById("ans").innerHTML="Correct answer!";
	}
	else
	{
		document.getElementById("ans").innerHTML="Wrong! Answer is &lt;250mg/l";
	}
	setTimeout(function()
	{
		document.getElementById("inference").style.visibility="hidden";
		if(cod<=250)
		{
			str="suitable";
			str=str.fontcolor("green");
			document.getElementById("infAns").innerHTML="Acceptable limit of COD in drinking water is &lt;250mg/l. So the water sample given is "+ str +" for drinking.";
		}
		else 
		{
			str="not suitable";
			str=str.fontcolor("red");
			document.getElementById("infAns").innerHTML="Acceptable limit of COD in drinking water is &lt;250mg/l. So the water sample given is "+ str +" for drinking.";
		}
		$("#infAns").fadeIn(750);
	},1000);
}