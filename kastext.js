var count = 0;

mytext = new JitterObject("jit.gl.text", "KassWindow");

mytext.depth_enable = 0;
mytext.align=1;
mytext.fontsize=50;
mytext.font("Courier");
mytext.color=[1.,1.,1.,1.];
mytext.position=[0.,0.2,0.];




function bang() 
{
    outlet(0, "bang");
}

function clear()
{
	mytext.text("");

}

function show()
{
	switch(count)
	{
		case 0:
			mytext.text("(1)\nIn BLOCK 1 mark one quantity\nin each of the four COLUMNS\n(FRQ, AMP, COL, INT)");
            //var forcetext = this.patcher.newdefault(0,0,"jit.gl.text");
			break;
		case 1:
			mytext.text("(2)\nIn BLOCK 2 mark one quantity\nin any one and only one\nof the four columns\n(FRQ, AMP, COL, INT)");
            break;
        case 2:
			mytext.text("(3)\nIn BLOCK 3 mark one quantity\nin any one and only one\nof the three columns\nnot marked in BLOCK 2");
            break;
        case 3:
			mytext.text("(4)\nIn BLOCK 4 mark one quantity\nin any one and only one\nof the three columns\nnot marked in BLOCKS 2 and 3");
            break;
        case 4:
			mytext.text("(5)\nIn BLOCK 5 mark one quantity\nin any one and only one\nof the three columns\nnot marked in BLOCKS 2, 3, and 4");
            break;
		case 5:
			mytext.text("(6)\nIn BLOCK 6 mark one quantity\nin any one and only one\nof the four columns\n(FRQ, AMP, COL, INT)");
            break;
        case 6:
			mytext.text("(7)\nIn BLOCK 7 mark one quantity\nin any one and only one\nof the three columns\nnot marked in BLOCK 6");
            break;
        case 7:
			mytext.text("(8)\nIn BLOCK 8 mark one quantity\nin any one and only one\nof the three columns\nnot marked in BLOCKS 6 and 7");
            break;
        case 8:
			mytext.text("(9)\nIn BLOCK 9 mark one quantity\nin any one and only one\nof the three columns\nnot marked in BLOCKS 6, 7, and 8");
            break;
		default: 
			mytext.text();
			break;
	}

	bang();
}


function gotoround(val)
{
    if (typeof val != 'number') 
        return; 

	count = val;
	show();
}

function whichround()
{
    post(count);
}
