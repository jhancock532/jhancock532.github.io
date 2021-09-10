// Following the twgl tiny tutorial, https://twgljs.org/
// Code adapted from https://github.com/greggman/twgl.js/blob/master/examples/tiny.html

const gl = document.getElementById("canvas").getContext("webgl");
const programInfo = twgl.createProgramInfo(gl, ["vertexShader", "fragmentShader"]);

const arrays = {
  position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0],
};
const bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);

let mouseX = 0, mouseY = 0, mouseFocus = 0.0, timeAddition = 0;

document.getElementById("content").addEventListener('mousemove', e => {
  if (window.innerWidth > 600) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    //console.log("mouse moved", e)
  }
});

document.getElementById("content").addEventListener('mousedown', e => {
  if (window.innerWidth > 600) {
    mouseFocus = 100;
    //console.log("mouse moved", e)
  }
});


function render(time) {
  twgl.resizeCanvasToDisplaySize(gl.canvas, 0.5); 
  //Paint less pixels and save on computation. 
  //A full resolution canvas requires a graphics card.

  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  if (mouseFocus > 0) {
    mouseFocus *= 0.95;
    //timeAddition += mouseFocus * 1;
  }

  const uniforms = {
    u_time: (time) * 0.002,
    u_resolution: [gl.canvas.width, gl.canvas.height],
    u_scroll: window.scrollY,
    u_mouse: [mouseX, mouseY],
    u_focus: mouseFocus,
  };

  gl.useProgram(programInfo.program);
  twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);
  twgl.setUniforms(programInfo, uniforms);
  twgl.drawBufferInfo(gl, bufferInfo);

  requestAnimationFrame(render);
}
requestAnimationFrame(render);

const comment = document.createComment("Developed by James Hancock, 2021.\n\nThe background runs using twgljs.org, I've adapted the noise function from a shader by Liam Egan. Website otherwise coded by hand, each byte delivered by electric magic from the GitHub Pages host servers.");
document.prepend(comment);
//Comment prepending idea stolen from Jaytel of www.jaytel.com