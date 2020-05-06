import React from 'react';
import './App.css';
import ReactBeforeAfter from './ReactBeforeAfter'
function App() {
  return (
    <div>
      <ReactBeforeAfter
        height={300}
        width={500}
        //before={<img src="https://images.unsplash.com/photo-1558980394-a3099ed53abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" />}
        //after={<img src="https://images.unsplash.com/photo-1558980394-a3099ed53abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" />}
      before={<h1>asdasasdfasdfasfdda</h1>}
      after={<h1>asdasasdfasdfasfdda</h1>}
      />
    </div>
  );
}

export default App;
