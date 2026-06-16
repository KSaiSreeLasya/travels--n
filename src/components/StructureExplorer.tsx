import React, { useState, useEffect } from 'react';
import { MAIN_NAV_STRUCTURE, SubCategory } from '../data/structureData';
import { Car, CAR_FLEET } from '../data/cars';
import { CarCard } from './CarCard';
import { 
  Briefcase, 
  Compass, 
  CheckCircle, 
  MessageSquare, 
  ArrowRight, 
  Sparkles, 
  Wand2, 
  Search,
  Filter,
  Layers,
  ChevronRight,
  ShieldCheck,
  ShieldAlert,
  Phone
} from 'lucide-react';

interface StructureExplorerProps {
  onRentCar: (car: Car) => void;
  onTriggerCustomTrip: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const StructureExplorer: React.FC<StructureExplorerProps> = ({
  onRentCar,
  onTriggerCustomTrip,
  onScrollToSection
}) => {
  // Category-based filter: 'all' | 'vehicles' | 'services' | 'destinations'
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Local Fleet Filtering sub-state
  const [selectedVehicleType, setSelectedVehicleType] = useState<string>('All');

  // Handle external header links navigation events
  useEffect(() => {
    const handleSetSubCategory = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && customEvent.detail.mainId) {
        setSelectedCategory(customEvent.detail.mainId);
        // Scroll to explorer section safely
        const section = document.getElementById('structure-explorer-section');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    window.addEventListener('sree-hanuman-set-main-category', handleSetSubCategory);
    return () => window.removeEventListener('sree-hanuman-set-main-category', handleSetSubCategory);
  }, []);

  // Pre-configured custom redirect parameters for WhatsApp
  const generateWhatsAppHref = (categoryTitle: string, sub: SubCategory) => {
    const textMessage = `Hello Sree Hanuman Travels Kadapa! 🚩\n\nI want to enquire about customized tariff rates, driver parameters, and direct package booking estimates for your: \n\n📁 Category: *${categoryTitle}*\n📝 Selection: *${sub.name}*\n🏷️ Details: ${sub.tagline}\n\nSuggested Fleet Preferred:\n${sub.suggestedVehicles.map(v => `  • ${v}`).join('\n')}\n\nPlease check availability and reply back with your best rates! Thanks Settooru Bros!`;
    return `https://wa.me/919676939529?text=${encodeURIComponent(textMessage)}`;
  };

  const handleActionClick = (categoryTitle: string, sub: SubCategory) => {
    if (sub.id === 'custom_trip' || sub.id === 'custom_trip_plans') {
      onTriggerCustomTrip();
    } else {
      // Services or Destinations scroll down directly to packages search
      onScrollToSection('packages-section');
    }
  };

  // Compile flat services and destinations list with parent metadata for search
  const staticCategories = MAIN_NAV_STRUCTURE.filter(main => main.id !== 'vehicles');
  const staticItems = staticCategories.reduce((acc, main) => {
    const itemsWithParent = main.subcategories.map(sub => ({
      ...sub,
      parentCategory: main.id,
      parentTitle: main.title,
    }));
    return [...acc, ...itemsWithParent];
  }, [] as Array<SubCategory & { parentCategory: string; parentTitle: string }>);

  // Filter based on search query
  const filteredStaticItems = staticItems.filter(item => {
    const matchesSearch = 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.parentTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.highlightFeatures.some(f => f.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.suggestedVehicles.some(v => v.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesSearch;
  });

  const filteredServices = filteredStaticItems.filter(item => item.parentCategory === 'services');
  const filteredDestinations = filteredStaticItems.filter(item => item.parentCategory === 'destinations');

  // Filtered live vehicles catalog
  const filteredVehicles = CAR_FLEET.filter((car) => {
    const matchesSearch = 
      car.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      car.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase())) ||
      car.type.toLowerCase().includes(searchQuery.toLowerCase()) ;
      
    const matchesType = selectedVehicleType === 'All' || car.type === selectedVehicleType;
    return matchesSearch && matchesType;
  });

  // Calculate total counts
  const totalVehiclesCount = CAR_FLEET.length;
  const totalServicesCount = 6;
  const totalDestinationsCount = 4;
  const totalAllCount = totalVehiclesCount + totalServicesCount + totalDestinationsCount;

  // Check if anything matches at all across any visible group
  const hasSomeMatches = 
    (selectedCategory === 'all' && (filteredVehicles.length > 0 || filteredServices.length > 0 || filteredDestinations.length > 0)) ||
    (selectedCategory === 'vehicles' && filteredVehicles.length > 0) ||
    (selectedCategory === 'services' && filteredServices.length > 0) ||
    (selectedCategory === 'destinations' && filteredDestinations.length > 0);

  // Renderer for standard static categories card (Services, Destinations)
  const renderCategoryCard = (item: SubCategory & { parentCategory: string; parentTitle: string }) => {
    const isService = item.parentCategory === 'services';
    const isDest = item.parentCategory === 'destinations';

    let categoryColorBadge = "bg-purple-500/10 text-purple-600 border-purple-500/20";
    if (isService) categoryColorBadge = "bg-amber-500/10 text-amber-600 border-amber-500/20";
    if (isDest) categoryColorBadge = "bg-orange-500/10 text-orange-600 border-orange-500/20";

    return (
      <div 
        key={item.id} 
        className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-xl hover:border-orange-500/30 transition-all duration-300 flex flex-col justify-between group"
        id={`directory-card-${item.id}`}
      >
        {/* Upper graphic with Unsplash visuals */}
        <div className="relative h-48 bg-slate-950 overflow-hidden shrink-0">
          <img 
            src={item.image} 
            alt={item.name}
            referrerPolicy="no-referrer"
            className="absolute inset-0 h-full w-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-350"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
          
          {/* Category overlay tags */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <span className={`px-2.5 py-1 text-[8px] font-black uppercase tracking-widest rounded-md border backdrop-blur-xs ${categoryColorBadge}`}>
              {item.parentTitle}
            </span>
            <span className="bg-slate-900/85 text-amber-400 border border-white/10 px-2 py-0.5 rounded-md text-[8px] font-black uppercase tracking-wider font-mono">
              Safe Drive ★
            </span>
          </div>

          {/* Title and tagline overlay */}
          <div className="absolute bottom-4 left-4 right-4 text-white space-y-0.5">
            <h4 className="text-lg font-black uppercase italic tracking-tight line-clamp-1">
              {item.name}
            </h4>
            <p className="text-[9px] text-slate-300 font-bold uppercase tracking-wider line-clamp-1">
              {item.tagline}
            </p>
          </div>
        </div>

        {/* Content & Action block */}
        <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
          
          {/* Descriptions and highlights list */}
          <div className="space-y-3.5">
            {isService && (
              <div className="bg-orange-500/10 border border-orange-500/30 p-3 rounded-2xl flex items-center justify-between shadow-xs">
                <div className="flex items-center space-x-1.5">
                  <span className="flex h-1.5 w-1.5 rounded-full bg-orange-600 animate-ping"></span>
                  <span className="text-[10px] font-black uppercase text-orange-850 tracking-wider font-mono">Special Cost Badge</span>
                </div>
                <span className="text-xs font-extrabold text-orange-700 bg-white border border-orange-200/50 px-2.5 py-1 rounded-lg shadow-2xs font-mono">
                  {item.tagline}
                </span>
              </div>
            )}

            <p className="text-xs text-slate-500 font-semibold leading-relaxed min-h-[44px]">
              {item.description}
            </p>

            {/* Inclusion items list */}
            <div className="space-y-1.5">
              <span className="text-[8px] font-black tracking-widest text-slate-400 uppercase font-mono block">Premium Inclusion Advantages</span>
              <ul className="grid grid-cols-1 gap-1.5 text-[9px] text-slate-700 font-bold uppercase tracking-wider">
                {item.highlightFeatures.slice(0, 3).map((feat, index) => (
                  <li key={index} className="flex items-center space-x-1.5">
                    <CheckCircle className="h-3 w-3 text-emerald-500 shrink-0" />
                    <span className="truncate">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommended cabs */}
            <div className="space-y-1 bg-slate-50 border border-slate-100 p-2.5 rounded-xl">
              <span className="text-[8px] font-black tracking-widest text-slate-400 uppercase font-mono block">Suggested fleet deployment</span>
              <div className="flex flex-wrap gap-1 mt-0.5">
                {item.suggestedVehicles.map((fleetItem, idx) => (
                  <span 
                    key={idx} 
                    className="bg-white border border-slate-200 px-2 py-0.5 rounded-md text-[8px] font-bold text-slate-800 uppercase tracking-widest"
                  >
                    🚩 {fleetItem}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action buttons section */}
          <div className="pt-3.5 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-2">
            
            {/* Secondary interactive callback button */}
            {isService ? (
              <a
                href="tel:9676939529"
                className="inline-flex items-center justify-center space-x-1.5 py-1.5 px-3 border-2 border-amber-500 bg-amber-500/5 hover:bg-amber-500 text-amber-700 hover:text-slate-950 rounded-full transition-all text-[9.5px] font-black uppercase tracking-wide cursor-pointer font-bold text-center"
                id={`btn-dir-call-${item.id}`}
              >
                <Phone className="h-3 w-3 shrink-0" />
                <span>Call Now</span>
              </a>
            ) : (
              <button
                type="button"
                onClick={() => handleActionClick(item.parentTitle, item)}
                className="inline-flex items-center justify-center space-x-1 py-1.5 px-3 border border-slate-200 hover:border-slate-800 text-slate-700 hover:text-slate-900 rounded-full transition-colors text-[9px] font-black uppercase tracking-wide cursor-pointer font-bold text-center"
              >
                {item.id === 'custom_trip' || item.id === 'custom_trip_plans' ? (
                  <>
                    <Wand2 className="h-3 w-3 text-orange-500" />
                    <span>Use Planner</span>
                  </>
                ) : (
                  <>
                    <Compass className="h-3 w-3 text-orange-500" />
                    <span>Show Tours</span>
                  </>
                )}
                <ArrowRight className="h-2.5 w-2.5 shrink-0 ml-1" />
              </button>
            )}

            {/* Primary direct WhatsApp price query button */}
            <a 
              href={generateWhatsAppHref(item.parentTitle, item)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-1 py-1.5 px-3 bg-[#25D366] hover:bg-[#20ba59] hover:scale-[1.02] text-slate-950 rounded-full transition-all text-[9px] font-black uppercase tracking-wide cursor-pointer font-bold text-center shadow-xs"
              id={`btn-dir-whatsapp-${item.id}`}
            >
              <MessageSquare className="h-3 w-3 fill-slate-950 stroke-none shrink-0" />
              <span>Enquire Price</span>
            </a>
          </div>

        </div>

      </div>
    );
  };

  return (
    <section id="structure-explorer-section" className="space-y-8 pt-6 scroll-mt-28">
      
      {/* Visual Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6">
        <div className="max-w-2xl space-y-1">
          <span className="inline-flex items-center space-x-1.5 text-[10px] font-black text-orange-600 uppercase tracking-widest font-mono">
            <Layers className="h-3.5 w-3.5 animate-pulse" />
            <span>Interactive Classified Directory</span>
          </span>
          <h3 className="text-3xl font-black text-slate-900 tracking-tight uppercase italic leading-none">
            Browse Sree Hanuman Travel Options
          </h3>
          <p className="text-xs text-slate-500 font-medium">
            Explore our comprehensive structure of premium vehicles, customized outstation services, and iconic pilgrimages all in one place.
          </p>
        </div>

        {/* Counter Widget */}
        <div className="bg-slate-900 border border-slate-800 text-white rounded-2xl px-4 py-3 shrink-0 flex items-center space-x-3.5 shadow-sm max-w-[240px]">
          <div className="h-9 w-9 rounded-xl bg-orange-600/20 border border-orange-500/30 flex items-center justify-center text-orange-400">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <span className="text-[10px] text-white/50 block font-bold uppercase tracking-wider font-mono">Directory Database</span>
            <span className="text-sm font-black text-amber-400 block leading-none mt-0.5">{totalAllCount}+ Live Listings</span>
          </div>
        </div>
      </div>

      {/* Control Deck: Category-Based Filters & Universal Search Bar */}
      <div className="bg-white p-4 sm:p-5 rounded-3xl border border-slate-100 shadow-sm space-y-4">
        
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          
          {/* Category Selector Tabs - Touch-friendly single row horizontal scroll on mobile */}
          <div className="flex overflow-x-auto whitespace-nowrap scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden w-full lg:w-auto p-1.5 bg-slate-100 rounded-2xl border border-slate-200 flex-nowrap gap-1">
            {[
              { id: 'all', label: '✨ Show All', count: totalAllCount },
              { id: 'vehicles', label: '🚗 Vehicles', count: totalVehiclesCount },
              { id: 'services', label: '🛠️ Services', count: totalServicesCount },
              { id: 'destinations', label: '🚩 Destinations', count: totalDestinationsCount },
            ].map((tab) => {
              const works = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-[11px] sm:text-xs font-black uppercase tracking-wider transition-all duration-150 cursor-pointer flex-shrink-0 text-center justify-center ${
                    works
                      ? 'bg-slate-900 text-white shadow-sm scale-[1.01]'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                  }`}
                  id={`explorer-filter-tab-${tab.id}`}
                >
                  <span>{tab.label}</span>
                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md ${works ? 'bg-orange-600 text-white' : 'bg-slate-200 text-slate-600'}`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Dynamic Search Box */}
          <div className="relative w-full lg:w-96 shrink-0">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
              <Search className="h-4 w-4" />
            </span>
            <input 
              type="text" 
              placeholder="Search services, vehicles, temples..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2.5 bg-slate-50 border border-slate-200 focus:border-orange-500 focus:bg-white focus:outline-none text-[11px] sm:text-xs font-bold uppercase tracking-wider rounded-2xl transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-[10px] text-slate-400 hover:text-slate-700 font-bold font-mono"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Quick Suggestion Pills - Horizontally scrollable list on mobile */}
        <div className="flex items-center space-x-2 overflow-x-auto scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-1 text-[10px] text-slate-400 font-bold uppercase tracking-wider flex-nowrap shrink-0">
          <span className="flex items-center space-x-1 flex-shrink-0 pr-1 border-r border-slate-200">
            <Filter className="h-3 w-3 text-orange-500" />
            <span>Keywords:</span>
          </span>
          <div className="flex items-center gap-1.5 flex-nowrap">
            {['Innova', 'Urbania', 'Pilgrimage', 'Airport', 'Wedding', 'Temple', 'Local'].map((kw) => (
              <button
                key={kw}
                type="button"
                onClick={() => setSearchQuery(kw)}
                className="px-2.5 py-1 rounded-lg border border-slate-200 hover:border-orange-500 bg-slate-50 hover:bg-orange-500/5 text-slate-600 hover:text-orange-600 cursor-pointer uppercase transition-colors flex-shrink-0 text-[10px]"
              >
                {kw}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Grid Display */}
      {!hasSomeMatches ? (
        <div className="bg-white rounded-3xl border border-slate-100 p-16 text-center space-y-3 shadow-xs">
          <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
            <Search className="h-6 w-6" />
          </div>
          <p className="text-sm font-black text-slate-800 uppercase tracking-widest font-mono">No matching fleet or options found</p>
          <p className="text-xs text-slate-400 uppercase tracking-widest">Try adjusting filters or clearing the search query to show all premium segments</p>
          <button
            type="button"
            onClick={() => { setSelectedCategory('all'); setSearchQuery(''); setSelectedVehicleType('All'); }}
            className="inline-flex items-center space-x-2 text-xs font-bold text-orange-600 uppercase tracking-widest border border-orange-200 hover:bg-orange-500/5 rounded-xl px-4 py-2 mt-2 transition-all cursor-pointer"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="space-y-12">
          
          {/* VEHICLES SECTION */}
          {(selectedCategory === 'all' || selectedCategory === 'vehicles') && (
            <div className="space-y-6 pt-2 scroll-mt-28" id="fleet-section">
              
              <div className="border-b border-slate-200 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <span className="text-[10px] font-black text-orange-500 uppercase tracking-widest font-mono">Certified Commercial Plate Car Fleet</span>
                  <h4 className="text-2xl font-black text-slate-900 tracking-tight uppercase italic leading-none mt-1">Our Rental Fleet Collection</h4>
                </div>
                
                {/* Vehicle sub-filters */}
                <div className="flex overflow-x-auto whitespace-nowrap scrollbar-none rounded-2xl bg-slate-200/60 p-1 border border-slate-200 flex-nowrap shrink-0">
                  {['All', 'MUV', 'Sedan', 'Tempo', 'Bus'].map((type) => (
                    <button 
                      key={type}
                      type="button"
                      onClick={() => setSelectedVehicleType(type)}
                      className={`px-3.5 py-1.5 text-[11px] sm:text-xs font-black uppercase tracking-wider rounded-xl transition-all cursor-pointer flex-shrink-0 ${
                        selectedVehicleType === type 
                          ? 'bg-slate-900 text-white shadow-sm font-bold scale-[1.01]' 
                          : 'text-slate-600 hover:text-slate-950 font-semibold'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tariff Rates Warning */}
              <div className="bg-emerald-500/5 rounded-2xl border border-emerald-500/10 p-4 text-xs font-semibold text-emerald-800 flex items-center space-x-2.5 max-w-2xl">
                <ShieldAlert className="h-4.5 w-4.5 text-emerald-500 shrink-0" />
                <span>
                  To give you the lowest possible rate, we do not keep fixed price tags. Tap any <strong>Ask Price on WhatsApp</strong> on our fleet cards to receive custom friendly tariffs direct from Settooru Bros!
                </span>
              </div>

              {/* Cars Grid List */}
              {filteredVehicles.length === 0 ? (
                <div className="py-12 text-center bg-white rounded-3xl border border-slate-150">
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest font-mono">No matching fleet vehicles found in this category</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredVehicles.map((car) => (
                    <CarCard 
                      key={car.id} 
                      car={car} 
                      onBook={onRentCar} 
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* SERVICES SECTION */}
          {(selectedCategory === 'all' || selectedCategory === 'services') && (
            <div className="space-y-6 pt-4">
              <div className="border-b border-slate-200 pb-4">
                <span className="text-[10px] font-black text-orange-500 uppercase tracking-widest font-mono">Custom Tailored Road Travel Solutions</span>
                <h4 className="text-2xl font-black text-slate-900 tracking-tight uppercase italic leading-none mt-1">Premium Travel Services</h4>
              </div>
              
              {filteredServices.length === 0 ? (
                <div className="py-12 text-center bg-white rounded-3xl border border-slate-150">
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest font-mono">No matching services listed</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredServices.map((item) => renderCategoryCard(item))}
                </div>
              )}
            </div>
          )}

          {/* DESTINATIONS SECTION */}
          {(selectedCategory === 'all' || selectedCategory === 'destinations') && (
            <div className="space-y-6 pt-4">
              <div className="border-b border-slate-200 pb-4">
                <span className="text-[10px] font-black text-orange-500 uppercase tracking-widest font-mono">Andhra Pradesh & Rayalaseema Pathways</span>
                <h4 className="text-2xl font-black text-slate-900 tracking-tight uppercase italic leading-none mt-1">Popular Shrines & Scenic Spots</h4>
              </div>

              {filteredDestinations.length === 0 ? (
                <div className="py-12 text-center bg-white rounded-3xl border border-slate-155 font-mono">
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest font-mono">No matching destinations found</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredDestinations.map((item) => renderCategoryCard(item))}
                </div>
              )}
            </div>
          )}

        </div>
      )}

    </section>
  );
};
