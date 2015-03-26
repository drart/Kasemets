outlets = 4;

var count = 0;
var f = {};
var a = {};
var c = {};
var i = {};
var totalcards = 0;

for (var ttt = 0; ttt < 10; ttt++)
{
	f[ttt] = new Array();
	a[ttt] = new Array();
	c[ttt] = new Array();
	i[ttt] = new Array();
}

function setfrequencyval(freq)
{
    if (typeof freq != 'number') 
        return; 

    f[count].push(freq);

    var ff = f[count];
    
    var sum = 0;
    for (var t = 0 ; t < ff.length; t++)
    {
        sum += ff[t];
    }

    outlet (0, sum / ff.length);
}

function setamplitudeval(amp)
{
    if (typeof amp != 'number') 
        return; 

    a[count].push(amp);

    var aa = a[count];
    
    var sum = 0;
    for (var t = 0 ; t < aa.length; t++)
    {
        sum += aa[t];
    }

    outlet (1, sum / aa.length);
}

function setcolourval(col)
{
    if (typeof col != 'number') 
        return; 

    c[count].push(col);

    var cc = c[count];
    
    var sum = 0;
    for (var t = 0 ; t < cc.length; t++)
    {
        sum += cc[t];
    }

    outlet (2, sum / cc.length);
}

function setintensityval(tens)
{
    if (typeof tens != 'number') 
        return; 

    i[count].push(tens);

    var ii = i[count];
    
    var sum = 0;
    for (var t = 0 ; t < ii.length; t++)
    {
        sum += ii[t];
    }

    outlet (3, sum/ii.length);
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
    if (typeof val != 'number') 
        return; 
    count = val;
    //totalcards = 0;
//    f[count] = new Array();
//    a[count] = new Array();
//    c[count] = new Array();
//    i[count] = new Array();
}

function whichround()
{
    post(count);
}

function clear()
{
    count = 0;
    totalcards = 0;
    f = {};
    a = {};
    c = {};
    i = {};
	
	for (var ttt = 0; ttt < 10; ttt++)
	{
		f[ttt] = new Array();
		a[ttt] = new Array();
		c[ttt] = new Array();
		i[ttt] = new Array();
	}
}
