import React, { useState, useMemo } from 'react';
import { Database } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { ProfileCard } from './components/ProfileCard';
import profilesData from './data/profiles.json';

export default function App() {
  const [search, setSearch] = useState('');

  const filteredProfiles = useMemo(() => {
    const searchLower = search.toLowerCase();
    return profilesData.profiles.filter(
      profile =>
        profile.fullname.toLowerCase().includes(searchLower) ||
        profile.username.toLowerCase().includes(searchLower)
    );
  }, [search]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#0a0a0a] relative pb-16">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center mb-12">
          <img 
            src="https://www.codewizard.tech/assets/logocode-DziRWbTR.png" 
            alt="CodeWizard Logo" 
            className="h-16 mb-8 animate-pulse"
          />
         <div className="relative flex items-center gap-2 md:gap-3 mb-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative flex items-center gap-2 md:gap-3 bg-black/50 backdrop-blur-xl rounded-lg p-2 md:p-4">
              <Database className="h-6 w-6 md:h-10 md:w-10 text-purple-500" />
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white font-['Poppins'] relative whitespace-nowrap">
                <span className="relative z-10">0x</span>
                <span className="relative z-10 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                  Profile Checker
                </span>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-xl -z-0"></div>
              </h1>
            </div>
          </div>
          <SearchBar value={search} onChange={setSearch} />
        </div>
         

        {search && (
          <div className="space-y-4 animate-fade-in">
            {filteredProfiles.length > 0 ? (
              filteredProfiles.map((profile, index) => (
                <ProfileCard
                  key={index}
                  fullname={profile.fullname}
                  username={profile.username}
                />
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-400">No profiles found</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md border-t border-purple-500/20">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-center items-center gap-2 text-sm text-gray-400">
            <span></span>
            <span className="text-gray-500">Developed by some cool geeks 😎</span>
            <div className="flex items-center gap-2">
              <a 
                href="https://github.com/kartikey-mittal" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
              >
                Kartikey
              </a>
              <span>&</span>
              <a 
                href="https://github.com/aydee-akash" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                Akash
              </a>
            </div>
           
           
          </div>
        </div>
      </div>
    </div>
  );
}