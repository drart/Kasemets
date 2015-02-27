var mywindow = new JitterObject("jit.window","ListenWindow");
// turn off depth testing... we're using blending instead:
mywindow.depthbuffer = 0; 
mywindow.fsmenubar = 0;
mywindow.hidecursor = 1;

var myrender = new JitterObject("jit.gl.render","ListenWindow");

myrender.ortho = 2; 
myrender.erase_color = [0,0,0,1]; 

var sketch = new JitterObject("jit.gl.sketch", "ListenWindow");

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


function redraw()
{
	sketch.reset();
}

function a(num)
{
	var temp = num;
	if (temp > 10) temp = 10;
	if (temp < 0) temp = 0;
	
	temp = temp / 5 -1;
	
	sketch.glenable("line_stipple");
	sketch.gllinestipple(1,1);
	sketch.glcolor(1,1,1,1);
	sketch.moveto(temp,-2,0);
	sketch.lineto(temp,2,0);	
}


function i(num)
{
	var temp = num;
	if (temp > 10) temp = 10;
	if (temp < 0) temp = 0;
	
	temp = temp / 5 -1;
	
	sketch.glenable("line_stipple");
	sketch.gllinestipple(1,1);
	sketch.glcolor(1,1,1,1);
	sketch.moveto(-2,temp,0);
	sketch.lineto(2,temp,0);	
}



function bang() 
{

	// rendering block...
	myrender.erase(); // erase the drawing context
	myrender.drawclients(); // draw the client objects
	myrender.swap(); // swap in the new drawing
}

function fullscreen(v) 
// function to send the [jit.window] into fullscreen mode
{
	messnamed("jitter", "cursor", !v); // turns the cursor off :)
	mywindow.fullscreen = v;
}

