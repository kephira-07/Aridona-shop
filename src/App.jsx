import React from 'react'
import Header from './composant/Header';
import Hero from './composant/Hero';
import Collection from './composant/Collection';
import Boutique from './pages/Boutique';
import BandeAnnonce from './composant/BandeAnnonce';



export default function App() {
  return (
    <div >
      <BandeAnnonce/>
      <Header/>
      <Hero/>
      <Collection/>
      {/* <Boutique/> */}
    </div>
  );
}