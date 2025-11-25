import { ReactNode } from 'react';

interface HexagonCardProps {
  children: ReactNode;
  className?: string;
}

export default function HexagonCard({ children, className = '' }: HexagonCardProps) {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#3AE9F3]/20 to-[#0057B8]/20 rounded-2xl transform transition-transform duration-300 group-hover:scale-105 blur-sm"></div>
      <div className="relative bg-white/80 backdrop-blur-md border border-[#3AE9F3]/30 rounded-2xl p-6 shadow-lg transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(58,233,243,0.3)]">
        {children}
      </div>
    </div>
  );
}
