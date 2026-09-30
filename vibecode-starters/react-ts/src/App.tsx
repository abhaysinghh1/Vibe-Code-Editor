import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ textAlign: 'center', padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>⚛️ React + TypeScript</h1>
      <p>Edit <code>src/App.tsx</code> and save to reload.</p>
      <button onClick={() => setCount(c => c + 1)} style={{ padding: '0.5rem 1rem', fontSize: '1rem', cursor: 'pointer' }}>
        Count: {count}
      </button>
    </div>
  )
}

export default App
