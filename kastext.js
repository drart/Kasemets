mytext = new JitterObject("jit.gl.text", "KassWindow");
var myrender = new JitterObject("jit.gl.render","KassWindow");
myrender.ortho = 2; 
myrender.erase_color = [0,0,0,1]; 

mytext.depth_enable = 0;
mytext.align=1;
mytext.fontsize=20;
mytext.color=[1.,1.,1.,1.];



function bang() 
{
    // rendering block...
    myrender.erase(); // erase the drawing context
    myrender.drawclients(); // draw the client objects
    myrender.swap(); // swap in the new drawing
    outlet(0, "bang");
}

function clear()
{
	mytext.text("");

}

function show()
{
	mytext.text("fkajlfjlkajfkja\njllkfjlkajlk");
}