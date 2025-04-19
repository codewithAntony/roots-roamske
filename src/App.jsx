import React, { useEffect } from 'react'
import Header from './components/Header'

function App() {
  useEffect(() => {
    document.title = 'KenyaExplore - Discover the Magic of Kenya'

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault()

        const targetId = this.getAttribute('href')?.substring(1)
        if (!targetId) return

        const targetElement = document.getElementById(targetId)
        if (!targetElement) return

        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        })
      })
    })

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {})
      })
    }
  }, [])
  return (
    <div className='font-sans'>
      <Header />
    </div>
  )
}

export default App