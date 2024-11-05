import React, { useState } from "react";
import '../styles/meetTheTeam.css';
import TeamSection from './TeamSection';
import SidebarFilter from './SidebarFilter';
import NavigationBar from './Header';

export default function MeetTheTeam() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Top Committee',
    'Programme',
    'Public Relations and Documentation',
    'Publicity and Marketing',
    'Sponsorship',
    'Logistics',
    'Technical',
    'Design & Multimedia'
  ];

  return (
    <div className="min-h-screen bg-[#0E1A1F] text-white pb-20">
      <NavigationBar />
      <main className="mt-16 mx-4 mb-20 sm:mx-10 flex justify-center items-center">
        <div className="max-w-[1440px] w-full">
          <SidebarFilter 
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center [@media(min-width:940px)]:grid-cols-3 [@media(min-width:1400px)]:max-w-[80%] [@media(min-width:1400px)]:ml-96">
            <TeamSection selectedRole={activeCategory} />
          </div>
        </div>
      </main>
    </div>
  );
}