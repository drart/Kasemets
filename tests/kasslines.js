var sketch = new JitterObject("jit.gl.sketch", "KassWindow");
var myrender = new JitterObject("jit.gl.render","KassWindow");
myrender.ortho = 2; 
myrender.erase_color = [0,0,0,1]; 

var mydata = {}

var xmin = -0.4;
var xmax = .4;
var ymin = -.4;
var ymax = .4;


function redraw()
{
	if(mydata.f == null || mydata.a == null || mydata.i == null || mydata.c == null)
	{
		return;
	}
	
	sketch.reset();

	sketch.glcolor(1,1,1,1);
	sketch.moveto(xmin,mydata.a,0);
	sketch.lineto(xmax,mydata.a,0);	

	sketch.glcolor(1,1,1,1);
	sketch.moveto(mydata.f,ymin,0);
	sketch.lineto(mydata.f,ymax,0);	

	// Line1
	sketch.moveto(xmax,mydata.i,0);
	sketch.lineto(mydata.f, mydata.a,0);
	// Line2
	sketch.moveto(xmax,mydata.a,0);
	sketch.lineto(mydata.c, mydata.i,0);
	
	/// -----------
	/// intersection of ff/aa and ii/cc
	/// -----------	
	
	var A1 = mydata.a-mydata.i;
	var B1 = xmax - mydata.f;
	var C1 = A1*xmax + B1*mydata.i;
	var A2 = mydata.i - mydata.a;
	var B2 = xmax - mydata.c;
	var C2 = A2*xmax + B2*mydata.a;
	var det = A1*B2 - A2*B1;
	var x1,y1;
	if (0 == det)
	{// lines are parallel
	}
	else
	{
		x1 = (B2*C1 - B1*C2)/det;
		y1 = (A1*C2 - A2*C1)/det;

	}
	/// -----------
	
	if ( !isNaN(x1) && !isNaN(y1) )
	{	
		sketch.glcolor(1,0.3,0.3,1);
		sketch.moveto(x1,ymin,0);
		sketch.lineto(x1, y1,0);		
		sketch.moveto(x1,y1,0);
		sketch.lineto(xmin, y1,0);		
	}
	
	
	
	
	
	sketch.glenable("line_stipple");
	sketch.gllinestipple(1,1);	
	sketch.glcolor(1,1,1,1);
	
	sketch.moveto(mydata.c,ymin,0);
	sketch.lineto(mydata.c,ymax,0);	

	sketch.moveto(xmin,mydata.i,0);
	sketch.lineto( xmax,mydata.i, 0);	
	
	
	sketch.glcolor(1,0.3,0.3,1);
	
}
redraw.local = 1;
redraw();

function scalenums(val)
{
	var temp = val;
	if (temp > 10) temp = 10;
	if (temp < 0) temp = 0;
  
	return temp / 10;	
}

function a(num)
{
	mydata.a = scalenums(num) + xmin;
	
	redraw();
}

function i(num)
{	
	mydata.i = scalenums(num) + xmin;
	
	redraw();
}

function f(num)
{	
	mydata.f = scalenums(num) + ymin;
	
	redraw();
}

function c(num)
{	
	mydata.c = scalenums(num) + ymin;
	
	redraw();
}

function erase()
{
	sketch.reset();
}

function bang() 
{
	// rendering block...
	myrender.erase(); // erase the drawing context
	myrender.drawclients(); // draw the client objects
	myrender.swap(); // swap in the new drawing

	outlet(0, "bang");
}

