import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-2xl">
      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-purple-300" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search profiles..."
        className="w-full py-4 pl-12 pr-4 text-gray-100 bg-white/10 backdrop-blur-lg rounded-2xl border border-purple-500/20 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 outline-none placeholder:text-gray-400"
      />
    </div>
  );
}