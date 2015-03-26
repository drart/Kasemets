var round = 0;

function msg_int(ii)
{
   if (ii < 10)
      round = ii;  
   else
      return;
   bang();
}

function bang()
{
	var myoutput = new Array();
	myoutput.push("gotoround");
	myoutput.push(round);
    
	if (round < 10 ) 
    	outlet(0, myoutput)
   
	round++;
}


function start()
{
    round = 0;
    bang();    
}


function stop()
{
    round = 10; // not the best way to do this
}
