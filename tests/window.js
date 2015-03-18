var mywindow = new JitterObject("jit.window","KassWindow");
// turn off depth testing... we're using blending instead:
mywindow.depthbuffer = 0; 
mywindow.fsmenubar = 0;
mywindow.hidecursor = 1;

function fullscreen(v) 
// function to send the [jit.window] into fullscreen mode
{
	messnamed("jitter", "cursor", !v); // turns the cursor off :)
	mywindow.fullscreen = v;
}