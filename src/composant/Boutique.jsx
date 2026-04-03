import React, { useState, useMemo, useEffect } from 'react';
import { Search, ShoppingCart, User, Menu, X, Heart, SlidersHorizontal, ChevronDown } from 'lucide-react';
 
  const Header = () => (
    <header className="sticky top-0 z-40 bg-white border-b border-[#EAE0D5]">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Menu className="w-6 h-6 text-gray-800 md:hidden" />
          <h1 className="font-serif text-2xl tracking-widest text-[#7B5C46]">ARIDONA</h1>
        </div>
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-gray-500">j
          <a href="/" className="hover:text-[#7B5C46] transition-colors">Accueil</a>
          <a href="/boutique" className="text-[#7B5C46] font-medium border-b border-[#7B5C46]">Boutique</a>
          <a href="#" className="hover:text-[#7B5C46] transition-colors">Univers</a>
        </div>
        <div className="flex items-center gap-4 text-gray-800">
          <Search className="w-5 h-5 cursor-pointer hover:text-[#7B5C46]" />
          <User className="w-5 h-5 cursor-pointer hover:text-[#7B5C46]" />
          <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-[#7B5C46]" />
        </div>
      </div>
    </header>
  );

export default function Boutique() {
 const [selectedCategory, setSelectedCategory] = useState("Toutes");
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 300 });
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // --- LOGIQUE DE FILTRAGE ---
  // useMemo permet de ne recalculer les filtres que si les critères ou les produits changent
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      // 1. Filtre par catégorie
      const matchCategory = selectedCategory === "Toutes" || product.category === selectedCategory;
      
      // 2. Filtre par matière (si aucune matière n'est sélectionnée, on affiche tout)
      const matchMaterial = selectedMaterials.length === 0 || selectedMaterials.includes(product.material);
      
      // 3. Filtre par prix
      const matchPrice = product.price >= priceRange.min && product.price <= priceRange.max;

      return matchCategory && matchMaterial && matchPrice;
    });
  }, [selectedCategory, selectedMaterials, priceRange]);

  // Gestion des cases à cocher pour les matières
  const handleMaterialToggle = (material) => {
    setSelectedMaterials(prev => 
      prev.includes(material) 
        ? prev.filter(m => m !== material) // Retire si déjà coché
        : [...prev, material] // Ajoute si non coché
    );
  };

  // Empêcher le scroll du body quand le filtre mobile est ouvert
  useEffect(() => {
    if (isMobileFilterOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isMobileFilterOpen]);

  // --- COMPOSANT HEADER (Version simplifiée pour la boutique) ---


  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Header />

      {/* --- EN-TÊTE DE LA PAGE BOUTIQUE --- */}
      <div className="bg-[#FAF6F0] py-12 px-4 text-center">
        <h2 className="text-4xl font-serif text-[#7B5C46] mb-4">Notre Boutique</h2>
        <p className="text-gray-500 font-light max-w-2xl mx-auto">
          Découvrez nos collections épurées. L'alliance parfaite entre l'argent, l'acier inoxydable et la douceur des perles.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        
        {/* --- BARRE D'OUTILS MOBILE (Bouton Filtre) --- */}
        <div className="md:hidden flex justify-between items-center pb-4 border-b border-gray-100">
          <span className="text-sm text-gray-500">{filteredProducts.length} articles</span>
          <button 
            onClick={() => setIsMobileFilterOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-[#FAF6F0] text-[#7B5C46] rounded-full text-sm font-medium"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filtrer
          </button>
        </div>

        {/* --- SIDEBAR FILTRES (Desktop + Mobile Drawer) --- */}
        <aside className={`
          fixed inset-0 z-50 bg-white p-6 transition-transform duration-300 overflow-y-auto
          md:static md:block md:w-64 md:p-0 md:bg-transparent md:z-0 md:translate-x-0 md:shrink-0
          ${isMobileFilterOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="flex justify-between items-center md:hidden mb-8">
            <h3 className="font-serif text-xl text-[#7B5C46]">Filtres</h3>
            <button onClick={() => setIsMobileFilterOpen(false)} className="p-2 rounded-full bg-gray-100">
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Filtre: Catégories */}
          <div className="mb-10">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-4 flex items-center justify-between">
              Catégories
            </h4>
            <ul className="space-y-3 font-light text-gray-600">
              {CATEGORIES.map(cat => (
                <li key={cat}>
                  <button 
                    onClick={() => { setSelectedCategory(cat); setIsMobileFilterOpen(false); }}
                    className={`text-left w-full hover:text-[#7B5C46] transition-colors ${selectedCategory === cat ? 'text-[#7B5C46] font-medium' : ''}`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Filtre: Matières */}
          <div className="mb-10">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-4">Matières</h4>
            <div className="space-y-3 font-light text-gray-600">
              {MATERIALS.map(mat => (
                <label key={mat} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${selectedMaterials.includes(mat) ? 'bg-[#7B5C46] border-[#7B5C46]' : 'border-gray-300 group-hover:border-[#7B5C46]'}`}>
                    {selectedMaterials.includes(mat) && <div className="w-2 h-2 bg-white rounded-sm" />}
                  </div>
                  <input 
                    type="checkbox" 
                    className="hidden" 
                    checked={selectedMaterials.includes(mat)}
                    onChange={() => handleMaterialToggle(mat)}
                  />
                  <span className={`group-hover:text-[#7B5C46] transition-colors ${selectedMaterials.includes(mat) ? 'text-gray-900 font-medium' : ''}`}>
                    {mat}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Filtre: Prix */}
          <div className="mb-10">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-4">Prix (F)</h4>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <label className="text-xs text-gray-400 mb-1 block">Min</label>
                <input 
                  type="number" 
                  value={priceRange.min}
                  onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
                  className="w-full h-10 bg-gray-50 border border-gray-200 rounded px-3 outline-none focus:border-[#7B5C46] text-sm"
                />
              </div>
              <span className="text-gray-300 mt-4">-</span>
              <div className="flex-1">
                <label className="text-xs text-gray-400 mb-1 block">Max</label>
                <input 
                  type="number" 
                  value={priceRange.max}
                  onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                  className="w-full h-10 bg-gray-50 border border-gray-200 rounded px-3 outline-none focus:border-[#7B5C46] text-sm"
                />
              </div>
            </div>
          </div>

          {/* Boutons Mobile (Appliquer) */}
          <div className="md:hidden sticky bottom-0 pt-4 bg-white border-t border-gray-100">
            <button 
              onClick={() => setIsMobileFilterOpen(false)}
              className="w-full py-3 bg-[#7B5C46] text-white rounded-full font-medium"
            >
              Afficher les {filteredProducts.length} résultats
            </button>
          </div>
        </aside>

        {/* --- GRILLE DE PRODUITS --- */}
        <main className="flex-1">
          <div className="hidden md:flex justify-between items-center mb-6">
            <p className="text-sm text-gray-500 font-light">{filteredProducts.length} créations trouvées</p>
            <div className="flex items-center gap-2 text-sm text-gray-600 font-light cursor-pointer">
              Trier par : <span className="font-medium text-gray-900">Nouveautés</span> <ChevronDown className="w-4 h-4" />
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-12">
              {filteredProducts.map(product => (
               <a href={`/boutique/pageProduit/${product.id}`} key={product.id}>
                <div className="group cursor-pointer flex flex-col">
                  <div className="relative overflow-hidden bg-[#FAF6F0] rounded-xl aspect-[4/5] mb-4">
                    <img 
                      src={product.img} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-400 hover:text-red-500 transition-colors">
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="flex flex-col flex-1">
                    <span className="text-xs text-gray-400 uppercase tracking-wider mb-1">{product.material}</span>
                    <h3 className="text-sm md:text-base font-medium text-gray-900 mb-1 line-clamp-1">{product.name}</h3>
                    <p className="text-[#7B5C46] font-serif text-sm md:text-base mt-auto">{product.price} F</p>
                  </div>
                </div>
               </a>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-16 h-16 bg-[#FAF6F0] rounded-full flex items-center justify-center mb-4">
                <Search className="w-8 h-8 text-[#7B5C46] opacity-50" />
              </div>
              <h3 className="text-xl font-serif text-gray-900 mb-2">Aucune création trouvée</h3>
              <p className="text-gray-500 font-light">Essayez de modifier vos filtres pour voir plus de bijoux.</p>
              <button 
                onClick={() => { setSelectedCategory("Toutes"); setSelectedMaterials([]); setPriceRange({min: 0, max: 300}); }}
                className="mt-6 px-6 py-2 border border-[#7B5C46] text-[#7B5C46] rounded-full hover:bg-[#7B5C46] hover:text-white transition-colors"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </main>

      </div>
    </div>
  );
}
// --- DONNÉES SIMULÉES (Mock Data) ---
// Dans un vrai site, ces données viendraient de ton serveur/base de données
const PRODUCTS = [
  { id: 1, name: "Bague Éternité Or & Perle", category: "Bagues", material: "Perle", price: 120, img: "https://images.unsplash.com/photo-1605100804763-247f67b6348e?auto=format&fit=crop&q=80&w=600" },
  { id: 2, name: "Collier Minimaliste Goutte", category: "Colliers", material: "Acier Inoxydable", price: 45, img: "https://images.unsplash.com/photo-1599643478514-4a11011c289e?auto=format&fit=crop&q=80&w=600" },
  { id: 3, name: "Boucles d'oreilles Célestes", category: "Boucles d'oreilles", material: "Argent", price: 85, img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=600" },
  { id: 4, name: "Bracelet Jonc Torsadé", category: "Bracelets", material: "Acier Inoxydable", price: 55, img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=600" },
  { id: 5, name: "Peigne Cheveux Nacre", category: "Bijoux de cheveux", material: "Perle", price: 150, img: "https://images.unsplash.com/photo-1515562141207-7a8ef1c09930?auto=format&fit=crop&q=80&w=600" },
  { id: 6, name: "Collier Pendentif Lune", category: "Colliers", material: "Argent", price: 95, img: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&q=80&w=600" },
  { id: 7, name: "Bague Acier Martelé", category: "Bagues", material: "Acier Inoxydable", price: 35, img: "https://images.unsplash.com/photo-1605100804763-247f67b6348e?auto=format&fit=crop&q=80&w=600" },
  { id: 8, name: "Diadème Floral Perlé", category: "Bijoux de cheveux", material: "Argent", price: 210, img: "https://images.unsplash.com/photo-1515562141207-7a8ef1c09930?auto=format&fit=crop&q=80&w=600" },
  { id: 9, name: "Créoles Épaisses", category: "Boucles d'oreilles", material: "Acier Inoxydable", price: 40, img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=600" },
];

const CATEGORIES = ["Toutes", "Bagues", "Colliers", "Boucles d'oreilles", "Bracelets", "Bijoux de cheveux"];
const MATERIALS = ["Argent", "Acier Inoxydable", "Perle"];
