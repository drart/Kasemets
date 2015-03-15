var count = 0;
var f = {};
var a = {};
var c = {};
var i = {};
var totalcards = 0;

f[count] = new Array();
a[count] = new Array();
c[count] = new Array();
i[count] = new Array();

function setfrequencyval(freq)
{
    if (typeof freq != 'number') 
        return; 

    f[count].push(freq);

    var ff = f[count];
    
    var total = 0;
    for (var i = 0 ; i < ff.length; i++)
    {
        total += ff[i];
    }
    total = total/ff.length;
    f[count+"val"] = total;

    switch(count)
    {
        case 0: 
            totalcards++; 
            break;
        case 1:
            total = total + f[count+"val"]; 
        default: 
            break; 
    }

    outlet (0, total);
}


function setamplitudeval(amp)
{
    if (typeof amp != 'number') 
        return; 

    a[count].push(amp);

    var ff = a[count];
    
    var total = 0;
    for (var i = 0 ; i < ff.length; i++)
    {
        total += ff[i];
    }
    total = total/ff.length;

    if (0 != count)
    {
        totalcards++;
    }
    
    outlet (0, total);
}

/********************
 * Changing and Querying rounds
 ********************/
function nextround()
{
    count++;
    gotoround(count);
}

function gotoround(val)
{
  //  post("fakdjfalj");
//    if (typeof freq != 'number') 
 //       return; 

    count = val;
    totalcards = 0;
    f[count] = new Array();
    a[count] = new Array();
    c[count] = new Array();
    i[count] = new Array();
}

function whichround()
{
    outlet(0, count);
}

function clear()
{
    count = 0;
    totalcards = 0;
    f = {};
    a = {};
    c = {};
    i = {};
}
