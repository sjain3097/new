window.onload=playChance;//testing
//window.onload=draw;
var flag=true;
var event;
var count=0;
var c1=1;
var x;

function draw(){
	//diaognal1
	var c = document.getElementById('diagonal1');
	var ctx1 = c.getContext('2d');
	 ctx1.moveTo(0,0);
	 ctx1.lineTo(500,253);
	ctx1.strokeStyle="red";
	ctx1.lineWidth=1;
	ctx1.stroke();
	//---diagonal2
	var c2 = document.getElementById('diagonal2');
	var ctx = c2.getContext('2d');
	 ctx.moveTo(299,0);
	 ctx.lineTo(-200,250);
	ctx.strokeStyle="red";
	ctx.lineWidth=1;
	ctx.stroke();
	//vertical1
	var v1 = document.getElementById('vertical1');
	var ctx2 = v1.getContext('2d');
	 ctx2.moveTo(53,0);
	 ctx2.lineTo(53,190);
	ctx2.strokeStyle="red";
	ctx2.lineWidth=1;
	ctx2.stroke();
	//vertical2
	var v2 = document.getElementById('vertical2');
	var ctx3 =v2.getContext('2d');
	 ctx3.moveTo(155,0);
	 ctx3.lineTo(153,190);
	ctx3.strokeStyle="red";
	ctx3.lineWidth=1;
	ctx3.stroke();
	//vertical3
	var v3 = document.getElementById('vertical3');
	var ctx4 =v3.getContext('2d');
	 ctx4.moveTo(250,0);
	 ctx4.lineTo(250,190);
	ctx4.strokeStyle="red";
	ctx4.lineWidth=1;
	ctx4.stroke();
	//horizontal1
	var h1 = document.getElementById('horizontal1');
	var ctx5 =h1.getContext('2d');
	 ctx5.moveTo(-100,32);
	 ctx5.lineTo(500,30);
	ctx5.strokeStyle="red";
	ctx5.lineWidth=1;
	ctx5.stroke();
	//horizontal2
	var h2 = document.getElementById('horizontal2');
	var ctx6 =h2.getContext('2d');
	 ctx6.moveTo(-900,80);
	 ctx6.lineTo(300,80);
	ctx6.strokeStyle="red";
	ctx6.lineWidth=1;
	ctx6.stroke();
	//horizontal3
	var h3 = document.getElementById('horizontal3');
	var ctx7 =h3.getContext('2d');
	 ctx7.moveTo(-1950,150);
	 ctx7.lineTo(500,120);
	ctx7.strokeStyle="red";
	ctx7.lineWidth=1;
	ctx7.stroke();
}

function func(event){
	if(!(document.getElementById(event.id).isContentEditable)){
		confirm("Don't try to CHEAT Buddy!!!")
		return;
	}
	if(flag){
		count++;
		play(count,event.id);
		
		if(x=='player1 wins'){
			alert('Woww PlayerX WINS');
		}else if(x=='player2 wins'){
			alert('Woww playerO WINS');
		}else if(x=='undefined'){
			return;
		}else if(count==9){
			document.getElementById('header').innerHTML ="FINISH";
			alert("Damn its a DRAW!!!");
		}
	}
}

function playChance(){
	draw();
	if(count%2==0){
		document.getElementById('header').innerHTML = 'Player'+c1;
		c1++;
	}
	else{
		document.getElementById('header').innerHTML = 'Player'+c1;
		c1--;
	}
}

function play(count,event){	
	if(count%2==0){
		document.getElementById('header').innerHTML = 'Player2';
		document.getElementById(event).innerHTML = player2.type;
		x=win(event);
	}
	else{
		document.getElementById('header').innerHTML = 'Player1';
		document.getElementById(event).innerHTML = player1.type;
		x=win(event);
	}
	playChance();
	document.getElementById(event).contentEditable = false;	
}

var player1={type:"X"};
var player2={type:"O"};

function win(event){
	var identity = event;
	if(identity=='one'){
		//player1
		if(document.getElementById('one').innerHTML=='X' && document.getElementById('two').innerHTML=='X' && document.getElementById('three').innerHTML=='X'){
			flag=false;
			document.getElementById("horizontal1").style.visibility="visible";
			return 'player1 wins';
		}else if(document.getElementById('one').innerHTML=='X' && document.getElementById('four').innerHTML=='X' && document.getElementById('seven').innerHTML=='X'){
			flag=false;
			document.getElementById("vertical1").style.visibility="visible";
			return 'player1 wins';
		}else if(document.getElementById('one').innerHTML=='X' && document.getElementById('five').innerHTML=='X' && document.getElementById('nine').innerHTML=='X'){
			flag=false;
			document.getElementById("diagonal1").style.visibility="visible";
			return 'player1 wins';
		}
		//player2
		if(document.getElementById('one').innerHTML=='O' && document.getElementById('two').innerHTML=='O' && document.getElementById('three').innerHTML=='O'){
			flag=false;
			document.getElementById("horizontal1").style.visibility="visible";
			return 'player2 wins';
		}else if(document.getElementById('one').innerHTML=='O' && document.getElementById('four').innerHTML=='O' && document.getElementById('seven').innerHTML=='O'){
			flag=false;
			document.getElementById("vertical1").style.visibility="visible";
			return 'player2 wins';
		}else if(document.getElementById('one').innerHTML=='O' && document.getElementById('five').innerHTML=='O' && document.getElementById('nine').innerHTML=='O'){
			flag=false;
			document.getElementById("diagonal1").style.visibility="visible";
			return 'player2 wins';
		}
	}
	if(identity=='two'){
		//player1
		if(document.getElementById('two').innerHTML=='X' && document.getElementById('five').innerHTML=='X' && document.getElementById('eigth').innerHTML=='X'){
			flag=false;
			document.getElementById("vertical2").style.visibility="visible";
			return 'player1 wins';
		}else if(document.getElementById('one').innerHTML=='X' && document.getElementById('two').innerHTML=='X' && document.getElementById('three').innerHTML=='X'){
			flag=false;
			document.getElementById("horizontal1").style.visibility="visible";
			return 'player1 wins';
		}
		//player2
		if(document.getElementById('two').innerHTML=='O' && document.getElementById('five').innerHTML=='O' && document.getElementById('eigth').innerHTML=='O'){
			flag=false;
			document.getElementById("vertical2").style.visibility="visible";
			return 'player2 wins';
		}else if(document.getElementById('one').innerHTML=='O' && document.getElementById('two').innerHTML=='O' && document.getElementById('three').innerHTML=='O'){
			flag=false;
			document.getElementById("horizontal1").style.visibility="visible";
			return 'player2 wins';
		}
	}
	else if(identity=='three'){
		//player1
		if(document.getElementById('one').innerHTML=='X' && document.getElementById('two').innerHTML=='X' && document.getElementById('three').innerHTML=='X'){
			flag=false;
			document.getElementById("horizontal1").style.visibility="visible";
			return 'player1 wins';
		}else if(document.getElementById('three').innerHTML=='X' && document.getElementById('six').innerHTML=='X' && document.getElementById('nine').innerHTML=='X'){
			flag=false;
			document.getElementById("vertical3").style.visibility="visible";
			return 'player1 wins';
		}else if(document.getElementById('three').innerHTML=='X' && document.getElementById('five').innerHTML=='X' && document.getElementById('seven').innerHTML=='X'){
			flag=false;
			document.getElementById("diagonal2").style.visibility="visible";
			return 'player1 wins';
		}
		//player2
		if(document.getElementById('one').innerHTML=='O' && document.getElementById('two').innerHTML=='O' && document.getElementById('three').innerHTML=='O'){
			flag=false;
			document.getElementById("horizontal1").style.visibility="visible";
			return 'player2 wins';
		}else if(document.getElementById('three').innerHTML=='O' && document.getElementById('six').innerHTML=='O' && document.getElementById('nine').innerHTML=='O'){
			flag=false;
			document.getElementById("vertical3").style.visibility="visible";
			return 'player2 wins';
		}else if(document.getElementById('three').innerHTML=='O' && document.getElementById('five').innerHTML=='O' && document.getElementById('seven').innerHTML=='O'){
			flag=false;
			document.getElementById("diagonal2").style.visibility="visible";
			return 'player2 wins';
		}
	}
	else if(identity=='four'){
		//player1
		if(document.getElementById('one').innerHTML=='X' && document.getElementById('four').innerHTML=='X' && document.getElementById('seven').innerHTML=='X'){
			flag=false;
			document.getElementById("vertical1").style.visibility="visible";			
			return 'player1 wins';
		}else if(document.getElementById('four').innerHTML=='X' && document.getElementById('five').innerHTML=='X' && document.getElementById('six').innerHTML=='X'){
			flag=false;
			document.getElementById("horizontal2").style.visibility="visible";
			return 'player1 wins';
		}
		//player2
		if(document.getElementById('one').innerHTML=='O' && document.getElementById('four').innerHTML=='O' && document.getElementById('seven').innerHTML=='O'){
			flag=false;
			document.getElementById("vertical1").style.visibility="visible";
			return 'player2 wins';
		}else if(document.getElementById('four').innerHTML=='O' && document.getElementById('five').innerHTML=='O' && document.getElementById('six').innerHTML=='O'){
			flag=false;
			document.getElementById("horizontal2").style.visibility="visible";
			return 'player2 wins';
		}
	}
	else if(identity=='five'){
		//player1
		if(document.getElementById('one').innerHTML=='X' && document.getElementById('five').innerHTML=='X' && document.getElementById('nine').innerHTML=='X'){
			flag=false;
			document.getElementById("diagonal1").style.visibility="visible";
			return 'player1 wins';
		}else if(document.getElementById('three').innerHTML=='X' && document.getElementById('five').innerHTML=='X' && document.getElementById('seven').innerHTML=='X'){
			flag=false;
			document.getElementById("diagonal2").style.visibility="visible";
			return 'player1 wins';
		}else if(document.getElementById('two').innerHTML=='X' && document.getElementById('five').innerHTML=='X' && document.getElementById('eigth').innerHTML=='X'){
			flag=false;
			document.getElementById("vertical2").style.visibility="visible";			
			return 'player1 wins';
		}
		else if(document.getElementById('four').innerHTML=='X' && document.getElementById('five').innerHTML=='X' && document.getElementById('six').innerHTML=='X'){
			flag=false;
			document.getElementById("horizontal2").style.visibility="visible";			
			return 'player1 wins';
		}
		//player2
		if(document.getElementById('one').innerHTML=='O' && document.getElementById('five').innerHTML=='O' && document.getElementById('nine').innerHTML=='O'){
			flag=false;
			document.getElementById("diagonal1").style.visibility="visible";
			return 'player2 wins';
		}else if(document.getElementById('three').innerHTML=='O' && document.getElementById('five').innerHTML=='O' && document.getElementById('seven').innerHTML=='O'){
			flag=false;
			document.getElementById("diagonal2").style.visibility="visible";
			return 'player2 wins';
		}else if(document.getElementById('two').innerHTML=='O' && document.getElementById('five').innerHTML=='O' && document.getElementById('eigth').innerHTML=='O'){
			flag=false;
			document.getElementById("vertical2").style.visibility="visible";			
			return 'player2 wins';
		}
		else if(document.getElementById('four').innerHTML=='O' && document.getElementById('five').innerHTML=='O' && document.getElementById('six').innerHTML=='O'){
			flag=false;
			document.getElementById("horizontal2").style.visibility="visible";			
			return 'player2 wins';
		}
	}
	else if(identity=='six'){
		//player1
		if(document.getElementById('three').innerHTML=='X' && document.getElementById('six').innerHTML=='X' && document.getElementById('nine').innerHTML=='X'){
			flag=false;
			document.getElementById("vertical3").style.visibility="visible";
			return 'player1 wins';
		}else if(document.getElementById('four').innerHTML=='X' && document.getElementById('five').innerHTML=='X' && document.getElementById('six').innerHTML=='X'){
			flag=false;
			document.getElementById("horizontal2").style.visibility="visible";			
			return 'player1 wins';
		}
		//player2
		if(document.getElementById('three').innerHTML=='O' && document.getElementById('six').innerHTML=='O' && document.getElementById('nine').innerHTML=='O'){
			flag=false;
			document.getElementById("vertical3").style.visibility="visible";			
			return 'player2 wins';
		}else if(document.getElementById('four').innerHTML=='O' && document.getElementById('five').innerHTML=='O' && document.getElementById('six').innerHTML=='O'){
			flag=false;
			document.getElementById("horizontal2").style.visibility="visible";
			return 'player2 wins';
		}
	}
	else if(identity=='seven'){
		//player1
		if(document.getElementById('one').innerHTML=='X' && document.getElementById('four').innerHTML=='X' && document.getElementById('seven').innerHTML=='X'){
			flag=false;
			document.getElementById("vertical1").style.visibility="visible";			
			return 'player1 wins';
		}else if(document.getElementById('seven').innerHTML=='X' && document.getElementById('eigth').innerHTML=='X' && document.getElementById('nine').innerHTML=='X'){
			flag=false;
			document.getElementById("horizontal3").style.visibility="visible";
			return 'player1 wins';
		}else if(document.getElementById('seven').innerHTML=='X' && document.getElementById('five').innerHTML=='X' && document.getElementById('three').innerHTML=='X'){
			flag=false;
			document.getElementById("diagonal2").style.visibility="visible";
			return 'player1 wins';
		}
		//player2
		if(document.getElementById('one').innerHTML=='O' && document.getElementById('four').innerHTML=='O' && document.getElementById('seven').innerHTML=='O'){
			flag=false;
			document.getElementById("vertical1").style.visibility="visible";			
			return 'player2 wins';
		}else if(document.getElementById('seven').innerHTML=='O' && document.getElementById('eigth').innerHTML=='O' && document.getElementById('nine').innerHTML=='O'){
			flag=false;
			document.getElementById("horizontal3").style.visibility="visible";
			return 'player2 wins';
		}else if(document.getElementById('seven').innerHTML=='O' && document.getElementById('five').innerHTML=='O' && document.getElementById('three').innerHTML=='O'){
			flag=false;
			document.getElementById("diagonal2").style.visibility="visible";			
			return 'player2 wins';
		}
	}
	else if(identity=='eigth'){
		//player1
		if(document.getElementById('two').innerHTML=='X' && document.getElementById('five').innerHTML=='X' && document.getElementById('eigth').innerHTML=='X'){
			flag=false;
			document.getElementById("vertical2").style.visibility="visible";
			return 'player1 wins';
		}else if(document.getElementById('seven').innerHTML=='X' && document.getElementById('eigth').innerHTML=='X' && document.getElementById('nine').innerHTML=='X'){
			flag=false;
			document.getElementById("horizontal3").style.visibility="visible";
			return 'player1 wins';
		}
		//player2
		else if(document.getElementById('two').innerHTML=='O' && document.getElementById('five').innerHTML=='O' && document.getElementById('eigth').innerHTML=='O'){
			flag=false;
			document.getElementById("vertical2").style.visibility="visible";
			return 'player2 wins';
		}else if(document.getElementById('seven').innerHTML=='O' && document.getElementById('eigth').innerHTML=='O' && document.getElementById('nine').innerHTML=='O'){
			flag=false;
			document.getElementById("horizontal3").style.visibility="visible";			
			return 'player2 wins';
		}
	}
	else if(identity=='nine'){
		//player1
		if(document.getElementById('one').innerHTML=='X' && document.getElementById('five').innerHTML=='X' && document.getElementById('nine').innerHTML=='X'){
			flag=false;
			document.getElementById("diagonal1").style.visibility="visible";			
			return 'player1 wins';
		}else if(document.getElementById('seven').innerHTML=='X' && document.getElementById('eigth').innerHTML=='X' && document.getElementById('nine').innerHTML=='X'){
			flag=false;
			document.getElementById("horizontal3").style.visibility="visible";			
			return 'player1 wins';
		}else if(document.getElementById('three').innerHTML=='X' && document.getElementById('six').innerHTML=='X' && document.getElementById('nine').innerHTML=='X'){
			flag=false;
			document.getElementById("vertical3").style.visibility="visible";			
			return 'player1 wins';
		}
		//player2
		if(document.getElementById('one').innerHTML=='O' && document.getElementById('five').innerHTML=='O' && document.getElementById('nine').innerHTML=='O'){
			flag=false;
			document.getElementById("diagonal1").style.visibility="visible";			
			return 'player2 wins';
		}else if(document.getElementById('seven').innerHTML=='O' && document.getElementById('eigth').innerHTML=='O' && document.getElementById('nine').innerHTML=='O'){
			flag=false;
			document.getElementById("horizontal3").style.visibility="visible";			
			return 'player2 wins';
		}else if(document.getElementById('three').innerHTML=='O' && document.getElementById('six').innerHTML=='O' && document.getElementById('nine').innerHTML=='O'){
			flag=false;
			document.getElementById("vertical3").style.visibility="visible";			
			return 'player2 wins';
		}
	}
}
