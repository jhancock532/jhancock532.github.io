// Following the twgl tiny tutorial, https://twgljs.org/
// Code adapted from https://github.com/greggman/twgl.js/blob/master/examples/tiny.html

const gl = document.getElementById("canvas").getContext("webgl");
const programInfo = twgl.createProgramInfo(gl, ["vertexShader", "fragmentShader"]);

const arrays = {
  position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0],
};
const bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);

function render(time) {
  twgl.resizeCanvasToDisplaySize(gl.canvas, 0.5); 
  //Paint less pixels and save on computation. 
  //A full resolution canvas requires a graphics card.

  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  const uniforms = {
    u_time: time * 0.002,
    u_resolution: [gl.canvas.width, gl.canvas.height],
    u_scroll: window.scrollY,
  };

  gl.useProgram(programInfo.program);
  twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);
  twgl.setUniforms(programInfo, uniforms);
  twgl.drawBufferInfo(gl, bufferInfo);

  requestAnimationFrame(render);
}
requestAnimationFrame(render);