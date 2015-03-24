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
    f[count+"average"] = sum / ff.length;

    var result = sum;
    switch(count)
    {
        case 0: 
            totalcards++; 
            break;
        case 1:
            result = sum + ( f[0+"average"]*f[0].length ); 
            break;
        case 2:
            result = sum + ( f[1+"average"]*f[1].length ); 
            break;
        case 3:
            result = sum + ( f[2+"average"]*f[2].length ); 
            break;
        case 4:
            result = sum + ( f[3+"average"]*f[3].length ); 
            break;
        default: 
            break; 
    }
	post(result);
    result = result / totalcards;

    outlet (0, result);
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
    a[count+"average"] = sum / aa.length;

    var result = sum;
    switch(count)
    {
        case 1:
            result = sum + ( a[0+"average"]*a[0].length ); 
            break;
        case 2:
            result = sum + ( a[1+"average"]*a[1].length ); 
            break;
        case 3:
            result = sum + ( a[2+"average"]*a[2].length ); 
            break;
        case 4:
            result = sum + ( a[3+"average"]*a[3].length ); 
            break;
        default: 
            break; 
    }
	//post(result);
    result = result / totalcards;

    outlet (1, result);
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
    c[count+"average"] = sum / cc.length;

    var result = sum;
    switch(count)
    {
        case 1:
            result = sum + ( c[0+"average"]*c[0].length ); 
            break;
        case 2:
            result = sum + ( c[1+"average"]*c[1].length ); 
            break;
        case 3:
            result = sum + ( c[2+"average"]*c[2].length ); 
            break;
        case 4:
            result = sum + ( c[3+"average"]*c[3].length ); 
            break;
        default: 
            break; 
    }
	//post(result);
    result = result / totalcards;

    outlet (2, result);
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
    i[count+"average"] = sum / ii.length;

    var result = sum;
    switch(count)
    {
        case 1:
            result = sum + ( i[0+"average"]*i[0].length ); 
            break;
        case 2:
            result = sum + ( i[1+"average"]*i[1].length ); 
            break;
        case 3:
            result = sum + ( i[2+"average"]*i[2].length ); 
            break;
        case 4:
            result = sum + ( i[3+"average"]*i[3].length ); 
            break;
        default: 
            break; 
    }
	//post(result);
    result = result / totalcards;

    outlet (3, result);
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
