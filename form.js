var round = 1;

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
    if (round < 10 ) 
    outlet(0, "gotoround " + round)
   round++;
}


function start()
{
    round = 1;
    bang();    
}


function stop()
{
    round = 10; // not the best way to do this
}
