import React from 'react'
import { Search, ShoppingCart, User, Menu, X, Heart,ChevronRight } from 'lucide-react';
export default function Collection() {
  return (
    <div>        
        {/* <FeaturedProducts />
      <BrandStory />
      <Footer /> */}
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, repudiandae esse. Nulla, ducimus. Minima sunt, iure distinctio cupiditate voluptatibus quos unde maxime numquam magnam incidunt optio! Illum cumque rem cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem culpa tempore quaerat commodi doloribus obcaecati, ea consequuntur quidem, eos labore omnis praesentium dolorem! Nemo, praesentium dignissimos. Dolorum, totam. Laborum, temporibus!
     </div>
    )
 }
 
// --- NOUVELLE SECTION : PRODUITS PHARES (Best Sellers) ---
const FeaturedProducts = () => {
  const products = [
    { id: 1, name: "Bague Éclat Éternel", price: "850 F", img: "https://images.unsplash.com/photo-1605100804763-247f67b6348e?auto=format&fit=crop&q=80&w=600" },
    { id: 2, name: "Collier Goutte d'Or", price: "1 200 F", img: "https://images.unsplash.com/photo-1599643478514-4a11011c289e?auto=format&fit=crop&q=80&w=600" },
    { id: 3, name: "Boucles Célestes", price: "450 F", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=600" },
    { id: 4, name: "Bracelet Jonc Arilona", price: "680 F", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=600" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-serif text-gray-900 mb-2">Pièces Maîtresses</h2>
            <p className="text-gray-500 font-light">Les créations les plus convoitées de notre maison.</p>
          </div>
          <a href="#" className="hidden md:flex items-center text-amber-600 hover:text-amber-700 font-medium transition-colors">
            Voir tout <ChevronRight className="w-5 h-5 ml-1" />
          </a>
        </div>

        {/* Grille de produits */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-[#fffaf5] aspect-[4/5] mb-4">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                {/* Bouton favoris (Cœur) */}
                <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-500 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300 md:flex hidden">
                  <Heart className="w-4 h-4" />
                </button>
                {/* Bouton Ajout rapide (Visible au survol sur PC) */}
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 hidden md:block">
                  <button className="w-full py-3 bg-white/90 backdrop-blur-sm text-gray-900 text-sm font-medium rounded-full hover:bg-amber-500 hover:text-white transition-colors shadow-lg">
                    Ajouter au panier
                  </button>
                </div>
              </div>
              
              {/* Infos Produit */}
              <div className="text-center md:text-left">
                <h3 className="text-sm md:text-base font-medium text-gray-900 mb-1">{product.name}</h3>
                <p className="text-amber-600 font-serif text-sm md:text-base">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bouton Mobile "Voir tout" */}
        <div className="mt-8 text-center md:hidden">
          <button className="w-full py-3 border border-gray-300 rounded-full font-medium text-gray-700 hover:bg-gray-50">
            Voir toute la collection
          </button>
        </div>
      </div>
    </section>
  );
};

// --- NOUVELLE SECTION : SAVOIR-FAIRE (Brand Story) ---
const BrandStory = () => {
  return (
    <section className="py-20 bg-[#f9f6f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Image */}
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-[4/5] md:aspect-square overflow-hidden rounded-t-full rounded-b-2xl">
              <img 
                src="https://images.unsplash.com/photo-1573408301145-b98c41dbe321?auto=format&fit=crop&q=80&w=800" 
                alt="Savoir faire Arilona" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Badge flottant décoratif */}
            <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-white p-6 rounded-full shadow-xl hidden md:block">
              <div className="w-24 h-24 border border-amber-200 rounded-full flex items-center justify-center text-center p-2">
                <span className="font-serif text-amber-700 text-sm leading-tight">Fait avec<br/>passion</span>
              </div>
            </div>
          </div>

          {/* Texte */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h4 className="text-amber-600 text-sm font-bold tracking-widest uppercase mb-4">Notre Maison</h4>
            <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight">L'Art de la<br />Haute Joaillerie</h2>
            <p className="text-gray-600 mb-8 font-light leading-relaxed">
              Chez Arilona, chaque pièce est façonnée à la main avec une attention méticuleuse portée aux détails. 
              Nous sélectionnons les métaux les plus purs et les gemmes les plus rares pour créer des bijoux qui 
              traversent le temps. Un mélange parfait entre tradition artisanale et design contemporain.
            </p>
            <button className="pb-1 border-b-2 border-amber-500 text-gray-900 font-medium hover:text-amber-600 hover:border-amber-600 transition-colors">
              Découvrir notre histoire
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- NOUVEAU COMPOSANT : FOOTER ---
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-center md:text-left">
          
          {/* Colonne 1 : Marque & Newsletter */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-serif text-3xl tracking-widest text-amber-500 mb-6">ARILONA</h2>
            <p className="text-gray-400 font-light mb-6 max-w-sm mx-auto md:mx-0">
              Inscrivez-vous à notre newsletter pour recevoir nos offres exclusives et découvrir nos nouvelles collections en avant-première.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto md:mx-0">
              <input 
                type="email" 
                placeholder="Votre adresse email" 
                className="flex-1 bg-gray-800 border border-gray-700 rounded-full py-3 px-6 text-white focus:outline-none focus:border-amber-500"
              />
              <button className="bg-amber-500 text-white px-8 py-3 rounded-full hover:bg-amber-600 transition-colors font-medium">
                S'inscrire
              </button>
            </div>
          </div>

          {/* Colonne 2 : Liens utiles */}
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase mb-6 text-gray-300">Boutique</h3>
            <ul className="space-y-4 font-light text-gray-400">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Toutes les collections</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Bagues de fiançailles</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Idées Cadeaux</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Prendre rendez-vous</a></li>
            </ul>
          </div>

          {/* Colonne 3 : Service Client */}
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase mb-6 text-gray-300">Service Client</h3>
            <ul className="space-y-4 font-light text-gray-400">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Contactez-nous</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Livraison & Retours</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Guide des tailles</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Entretien des bijoux</a></li>
            </ul>
          </div>
        </div>

        {/* Ligne du bas : Copyright */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 font-light gap-4">
          <p>&copy; {new Date().getFullYear()} Arilona Joaillerie. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
