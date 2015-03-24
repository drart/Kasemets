outlets = 4;

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
    
    var sum = 0;
    for (var i = 0 ; i < ff.length; i++)
    {
        sum += ff[i];
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
    result = result / totalcards;

    outlet (0, result);
}

/*
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
    
    outlet (1, total);
}
*/

function donecards()
{

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
    if (typeof freq != 'number') 
        return; 

    count = val;
    totalcards = 0;
    f[count] = new Array();
    a[count] = new Array();
    c[count] = new Array();
    i[count] = new Array();
}

/*function whichround()
{
    post(count);
    outlet(1, count);
}*/

function clear()
{
    count = 0;
    totalcards = 0;
    f = {};
    a = {};
    c = {};
    i = {};
}
