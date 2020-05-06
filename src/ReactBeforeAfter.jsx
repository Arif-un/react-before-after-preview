import React, { useRef, useState } from 'react'
import './App.css'
function ReactBeforeAfter({ height, width, before, after }) {
  /*  var m = document.getElementById('move');
   m.addEventListener('mousedown', mouseDown, false);
   window.addEventListener('mouseup', mouseUp, false); */
  console.log('render')

  const bar = useRef(null)
  const con = useRef(null)
  let cx = 0, tx = 0
  const [Xpos, setXpos] = useState(null)

  function removeEvent() {
    console.log('removed')
    document.removeEventListener('mousemove', move);
    document.onmousemove = null
  }

  function mouseDown(e) {
    cx = e.target.getBoundingClientRect().x
    console.log(e.clientX, e.target.getBoundingClientRect().x)
    setXpos(e.target.getBoundingClientRect().x)
    document.addEventListener('mousemove', move);
  }

  function mouseOnContainer() {
    /* bar.current.onClick = () => {
      console.log('clicked')
    } */
  }

  function mouseOutContainer() {
    // console.log("out")
    // window.removeEventListener('mousemove', move, true);
  }

  function move(e) {
    //  e.preventDefault();
    let x = e.clientX - cx
    console.log(e.clientX, e.target.getBoundingClientRect().x)
    bar.current.style.left = x + 'px';
  };
  return (
    <div
      onMouseOver={mouseOnContainer}
      onMouseOut={mouseOutContainer}
      className="_react-b-a-wrp"
      style={{ height: height, width: width }}
    >
      <div style={{ height: height }} className="_before_after _before">{before}</div>
      <div
        ref={bar}
        style={{ height: height }}
        onMouseDown={mouseDown}
        onMouseUp={removeEvent}
        onMouseOut={removeEvent}
        className="_bar"></div>
      <div style={{ height: height }} className="_before_after">{after}</div>
    </div>
  )
}

export default ReactBeforeAfter
