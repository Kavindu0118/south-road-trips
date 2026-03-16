import Header from './components/header'
import HeaderSlideshow from './components/HeaderSlideshow'
import Features from './components/Features'
import Vehicles from './components/Vehicles'
import Tours from './components/Tours'
import Blog from './components/Blog'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ArticlePage from './pages/ArticlePage'
import { PageProvider, useNavigation } from './context/PageContext'
import './App.css'

function AppContent() {
  const { currentPage } = useNavigation();

  if (currentPage === 'article') {
    return (
      <>
        <Header />
        <ArticlePage />
      </>
    );
  }

  return (
    <>
      <Header />
      <HeaderSlideshow />
      <Features />
      <Vehicles />
      <Tours />
      <Blog />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

function App() {
  return (
    <PageProvider>
      <AppContent />
    </PageProvider>
  )
}

export default App
