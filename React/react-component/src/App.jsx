import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Footer/>
      <Card title="Hello" description="This is card 1"/>
      <Card title="Hello" description="This is card 1"/>
      <Card title="Hello" description="This is card 1"/>
      <Card title="Hello" description="This is card 1"/>
    </div>
  )
}

export default App
