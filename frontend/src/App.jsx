import React, { useEffect, useState } from 'react'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🎉 我的論壇</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}><b>{post.title}</b>: {post.content}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
