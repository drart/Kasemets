var mydata = {f:-2, i:-2, c:-2, i:-2}

//var myrender = new JitterObject("jit.gl.render","KassWindow");

//myrender.ortho = 2; 
//myrender.erase_color = [0,0,0,1]; 

//var sketch = new JitterObject("jit.gl.sketch", "KassWindow");

var sketch ;

//myrender.drawto = "out-ctx";
//sketch.drawTo = "out-ctx";


/*
// create an array of [jit.gl.gridshape] objects randomly arrayed across the window
var mysphere = new Array(OBJECT_COUNT);

// initialize our little spheres with random colors and positions (x,y)
for(var i=0;i<OBJECT_COUNT;i++) { 
	mysphere[i] = new JitterObject("jit.gl.gridshape","ListenWindow");
	mysphere[i].shape = "sphere";
	mysphere[i].lighting_enable = 1;
	mysphere[i].smooth_shading = 1;
	mysphere[i].scale = [0.05,0.05,0.05];
	mysphere[i].color = [Math.random(),Math.random(),Math.random(),0.5] ;
	mysphere[i].position = [Math.random()*2.-1, Math.random()*2.-1];
	mysphere[i].blend_enable = 1;
}
*/
function init(){
	
	sketch = this.patcher.getnamed("sketcher");
}

function redraw()
{
	sketch.reset();

	sketch.glcolor(1,1,1,1);
	sketch.moveto(-2,mydata.a,0);
	sketch.lineto( 2,mydata.a,0);	

	sketch.glcolor(1,1,1,1);
	sketch.moveto(mydata.f,-2,0);
	sketch.lineto(mydata.f, 2,0);	

	// Line1
	sketch.moveto(2,mydata.i,0);
	sketch.lineto(mydata.f, mydata.a,0);
	// Line2
	sketch.moveto(2,mydata.a,0);
	sketch.lineto(mydata.c, mydata.i,0);
	
	/// -----------
	/// intersection of ff/aa and ii/cc
	/// -----------	
	
	var A1 = mydata.a-mydata.i;
	var B1 = 2 - mydata.f;
	var C1 = A1*2 + B1*mydata.i;
	var A2 = mydata.i - mydata.a;
	var B2 = 2 - mydata.c;
	var C2 = A2*2 + B2*mydata.a;
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
		//post(x1);
		//post(y1);	
		
		sketch.glcolor(1,0.3,0.3,1);
		sketch.moveto(x1,-2,0);
		sketch.lineto(x1, y1,0);		
		sketch.moveto(x1,y1,0);
		sketch.lineto(-2, y1,0);		
	}
	
	sketch.glenable("line_stipple");
	sketch.gllinestipple(1,1);
	
	sketch.glcolor(1,1,1,1);
	sketch.moveto(mydata.c,-2,0);
	sketch.lineto(mydata.c, 2,0);	

	sketch.glcolor(1,1,1,1);
	sketch.moveto(-2,mydata.i,0);
	sketch.lineto( 2,mydata.i, 0);	
}
redraw.local = 1;
redraw();

function scalenums(val)
{
	var temp = val;
	if (temp > 10) temp = 10;
	if (temp < 0) temp = 0;
	
	temp = temp / 5 -1;

	return temp;	
}

function a(num)
{
	mydata.a = scalenums(num);
	
	redraw();
}

function i(num)
{	
	mydata.i = scalenums(num);
	
	redraw();
}

function f(num)
{	
	mydata.f = scalenums(num);
	
	redraw();
}

function c(num)
{	
	mydata.c = scalenums(num);
	
	redraw();
}

function bang() 
{

	// rendering block...
	//myrender.erase(); // erase the drawing context
	//myrender.drawclients(); // draw the client objects
	//myrender.swap(); // swap in the new drawing

	outlet(0, "bang");

}

