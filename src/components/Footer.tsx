import React from 'react';
import { Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-[#E8E8E6] bg-white py-6 mt-12">
      <div className="max-w-[1400px] mx-auto px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#888888]">
        <div className="flex items-center gap-2">
          <Lock className="w-3.5 h-3.5 text-[#00C853]" />
          <span>
            All data in this tool is stored in your browser's localStorage. The page itself does not retain any user data.
          </span>
        </div>
        <div className="text-right">
          <span>Theseus Workshop • ecommerce-profit-calculator-excel</span>
        </div>
      </div>
    </footer>
  );
};
