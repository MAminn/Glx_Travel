import React from 'react'
import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'
import Footer from '../components/Footer.jsx'
import TrainingCom from '../components/TrainingCom.jsx'

const Training = () => {
  return (
      <div>
          <Navbar />
          <HeroImage heading='TRAINING' text='Pre-Flight & In-Flight Training.' />
          <TrainingCom />
          <Footer />
    </div>
  )
}

export default Training