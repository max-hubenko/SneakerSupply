/* eslint-disable react/prop-types */
import './App.css'
import SecondHero from '../../components/second-hero'
import MainHero from '../../components/main-hero'
import Navbar from '../../components/navbar'
import ThirdHero from '../../components/third-hero'
import Suppliers from '../../components/suppliers'
import Footer from '../../components/footer'
import ScrollToTop from '../../components/scrollToTop'

function App({count}) {

  return (
    <>
      <ScrollToTop />
      <Navbar count={count}/>
      <MainHero/>
      <SecondHero/>
      <ThirdHero/>
      <Suppliers/>
      <Footer/>
    </>
  )
}

export default App
