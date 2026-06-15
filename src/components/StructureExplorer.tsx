import React, { useState, useEffect } from 'react';
import { MAIN_NAV_STRUCTURE, MainCategory, SubCategory } from '../data/structureData';
import { 
  CarFront, 
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
  MapPin,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

interface StructureExplorerProps {
  onSelectVehicleTypeFilter: (type: string) => void;
  onTriggerCustomTrip: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const StructureExplorer: React.FC<StructureExplorerProps> = ({
  onSelectVehicleTypeFilter,
  onTriggerCustomTrip,
  onScrollToSection
}) => {
  // Category-based filter: 'all' | 'vehicles' | 'services' | 'destinations'
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

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
    } else if (categoryTitle.toLowerCase() === 'vehicles') {
      // Map structures to appropriate fleet filtering type labels
      let targetFilter = 'All';
      if (sub.id === 'cars') targetFilter = 'Hatchback';
      if (sub.id === 'suvs') targetFilter = 'MUV';
      if (sub.id === 'innova_crysta') targetFilter = 'MUV';
      if (sub.id === 'tempo_traveller') targetFilter = 'MUV';
      if (sub.id === 'buses') targetFilter = 'Bus';
      
      onSelectVehicleTypeFilter(targetFilter);
      onScrollToSection('fleet-section');
    } else {
      // Services or Destinations scroll down directly to packages search
      onScrollToSection('packages-section');
    }
  };

  // Compile flat items list with parent metadata for unified searching & filtering
  const allItems = MAIN_NAV_STRUCTURE.reduce((acc, main) => {
    const itemsWithParent = main.subcategories.map(sub => ({
      ...sub,
      parentCategory: main.id,
      parentTitle: main.title,
    }));
    return [...acc, ...itemsWithParent];
  }, [] as Array<SubCategory & { parentCategory: string; parentTitle: string }>);

  // Filter based on search query AND category tab selection
  const filteredItems = allItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.parentCategory === selectedCategory;
    const matchesSearch = 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.parentTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.highlightFeatures.some(f => f.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.suggestedVehicles.some(v => v.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

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
            <span className="text-sm font-black text-amber-400 block leading-none mt-0.5">16+ Verified Options</span>
          </div>
        </div>
      </div>

      {/* Control Deck: Category-Based Filters & Universal Search Bar */}
      <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm space-y-4">
        
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          
          {/* Category Selector Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 rounded-2xl border border-slate-200 w-full lg:w-auto">
            {[
              { id: 'all', label: '✨ Show All', count: allItems.length },
              { id: 'vehicles', label: '🚗 Vehicles', count: allItems.filter(i => i.parentCategory === 'vehicles').length },
              { id: 'services', label: '🛠️ Services', count: allItems.filter(i => i.parentCategory === 'services').length },
              { id: 'destinations', label: '🚩 Destinations', count: allItems.filter(i => i.parentCategory === 'destinations').length },
            ].map((tab) => {
              const works = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-150 cursor-pointer flex-1 sm:flex-initial text-center justify-center ${
                    works
                      ? 'bg-slate-900 text-white shadow-sm scale-[1.02]'
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
              placeholder="Search services, vehicles, temples (e.g. Crysta, Urbania)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-3 bg-slate-50 border border-slate-200 focus:border-orange-500 focus:bg-white focus:outline-none text-xs font-bold uppercase tracking-wider rounded-2xl transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-slate-400 hover:text-slate-700 font-bold font-mono"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Quick Suggestion Pills */}
        <div className="flex flex-wrap gap-2 items-center text-[10px] text-slate-400 font-bold uppercase tracking-wider">
          <span className="flex items-center space-x-1">
            <Filter className="h-3 w-3 text-orange-500" />
            <span>Quick Keywords:</span>
          </span>
          {['Innova', 'Urbania', 'Pilgrimage', 'Airport', 'Wedding', 'Temple', 'Local'].map((kw) => (
            <button
              key={kw}
              type="button"
              onClick={() => setSearchQuery(kw)}
              className="px-2.5 py-1 rounded-lg border border-slate-200 hover:border-orange-500 bg-slate-50 hover:bg-orange-500/5 text-slate-600 hover:text-orange-600 cursor-pointer uppercase transition-colors"
            >
              {kw}
            </button>
          ))}
        </div>

      </div>

      {/* Grid Display - ALL matching categories render simultaneously! */}
      {filteredItems.length === 0 ? (
        <div className="bg-white rounded-3xl border border-slate-100 p-16 text-center space-y-3 shadow-xs">
          <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
            <Search className="h-6 w-6" />
          </div>
          <p className="text-sm font-black text-slate-800 uppercase tracking-widest font-mono">No matching travel blueprints logged</p>
          <p className="text-xs text-slate-400 uppercase tracking-widest">Try adjusting filters or clearing the search query to show all 16 premium segments</p>
          <button
            type="button"
            onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
            className="inline-flex items-center space-x-2 text-xs font-bold text-orange-600 uppercase tracking-widest border border-orange-200 hover:bg-orange-500/5 rounded-xl px-4 py-2 mt-2 transition-all cursor-pointer"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="explorer-items-display-grid">
          {filteredItems.map((item) => {
            // Determine parent indicator badges
            const isVehicle = item.parentCategory === 'vehicles';
            const isService = item.parentCategory === 'services';
            const isDest = item.parentCategory === 'destinations';

            let categoryColorBadge = "bg-purple-500/10 text-purple-600 border-purple-500/20";
            if (isVehicle) categoryColorBadge = "bg-blue-500/10 text-blue-600 border-blue-500/20";
            if (isService) categoryColorBadge = "bg-amber-500/10 text-amber-600 border-amber-500/20";
            if (isDest) categoryColorBadge = "bg-orange-500/10 text-orange-600 border-orange-500/20";

            return (
              <div 
                key={item.id} 
                className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-xl hover:border-orange-500/30 transition-all duration-300 flex flex-col justify-between group"
                id={`directory-card-${item.id}`}
              >
                
                {/* Upper graphic */}
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
                    <button
                      type="button"
                      onClick={() => handleActionClick(item.parentTitle, item)}
                      className="inline-flex items-center justify-center space-x-1 py-2 px-3 border border-slate-200 hover:border-slate-800 text-slate-700 hover:text-slate-900 rounded-full transition-colors text-[9px] font-black uppercase tracking-wide cursor-pointer font-bold text-center"
                    >
                      {item.id === 'custom_trip' || item.id === 'custom_trip_plans' ? (
                        <>
                          <Wand2 className="h-3 w-3 text-orange-500" />
                          <span>Use Planner</span>
                        </>
                      ) : isVehicle ? (
                        <>
                          <CarFront className="h-3 w-3 text-orange-500" />
                          <span>Filter Fleet</span>
                        </>
                      ) : (
                        <>
                          <Compass className="h-3 w-3 text-orange-500" />
                          <span>Show Tours</span>
                        </>
                      )}
                      <ArrowRight className="h-2.5 w-2.5 shrink-0 ml-1" />
                    </button>

                    {/* Primary direct WhatsApp price query button */}
                    <a 
                      href={generateWhatsAppHref(item.parentTitle, item)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-1 py-2 px-3 bg-[#25D366] hover:bg-[#20ba59] hover:scale-[1.02] text-slate-950 rounded-full transition-all text-[9px] font-black uppercase tracking-wide cursor-pointer font-bold text-center shadow-xs"
                      id={`btn-dir-whatsapp-${item.id}`}
                    >
                      <MessageSquare className="h-3 w-3 fill-slate-950 stroke-none shrink-0" />
                      <span>Enquire Price</span>
                    </a>
                  </div>

                </div>

              </div>
            );
          })}
        </div>
      )}

    </section>
  );
};
