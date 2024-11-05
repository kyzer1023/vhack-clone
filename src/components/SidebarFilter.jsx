import React from 'react';

export default function SidebarFilter({ categories, activeCategory, setActiveCategory }) {
  return (
    <div className="flex flex-wrap justify-center items-start max-w-[80%] [@media(min-width:1400px)]:flex-col [@media(min-width:1400px)]:max-w-full [@media(min-width:1400px)]:justify-start [@media(min-width:1400px)]:ml-6 [@media(min-width:1400px)]:fixed [@media(min-width:1400px)]:-mt-8 max-w-[800px] mx-auto">
      <h1 className="w-full text-4xl md:text-5xl text-center text-[rgb(239,246,139)] font-['Skranji'] [@media(min-width:1400px)]:mb-4">
        Meet the team.
      </h1>

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`transition-colors duration-200 font-proza text-lg hover:text-[#60A5FA] 
            ${activeCategory === category 
              ? 'text-[#60A5FA] bg-[#0a0f12] rounded-md inline-block' 
              : 'text-white'
            } mt-2 font-light text-left px-4 py-2.5`}
          type="button"
        >
          {category}
        </button>
      ))}
    </div>
  );
}
