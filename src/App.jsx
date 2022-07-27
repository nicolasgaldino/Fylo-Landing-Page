import React from 'react';
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import AdvantagesSection from './components/AdvantagesSection';
import ProductiveSection from './components/ProductiveSection';
import ReportsSection from './components/ReportsSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <main>
      <Header />
      <IntroSection />
      <AdvantagesSection />
      <ProductiveSection />
      <ReportsSection />
      <Footer />
    </main>
  )
}

export default App