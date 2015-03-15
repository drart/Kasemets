var count = 0;
var f = {};
var a = {};
var c = {};
var i = {};

/*
f[count] = new Array();
f[count].push(99);
console.log(f);
*/

f[count] = new Array();

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
    
    outlet (0, total);
}

function nextround()
{
    count++;
    f[count] = new Array();
}

function gotoround(val)
{
    if (typeof freq != 'number') 
        return; 
    count = val;
}

function whichround()
{
    outlet(0, count);
}
