import React from 'react';
import { generateEthereumAddress } from '../utils/generateAddress';

interface ProfileCardProps {
  fullname: string;
  username: string;
}

export function ProfileCard({ fullname, username }: ProfileCardProps) {
  const initials = fullname
    .split(' ')
    .map(name => name[0])
    .join('')
    .toUpperCase();



  return (
    <div className="group w-full bg-white/5 backdrop-blur-lg rounded-2xl border border-purple-500/20 p-6 transition-all duration-300 hover:bg-white/10 hover:border-purple-500/40 hover:scale-[1.02]">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
          {initials}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{fullname}</h3>
          <p className="text-gray-400">@{username}</p>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-purple-500/20">
        {/* <p className="text-sm font-mono text-purple-300 break-all">{address}</p> */}
      </div>
    </div>
  );
}