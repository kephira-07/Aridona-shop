import React from 'react'
import Header from './composant/Header';
import Hero from './composant/Hero';
import Collection from './composant/Collection';
import Boutique from './composant/Boutique';



export default function App() {
  return (
    <div className="font-sans antialiased text-gray-900">
      <Header/>
      <Hero/>
      <Collection/>
      {/* <Boutique/> */}
    </div>
  );
}