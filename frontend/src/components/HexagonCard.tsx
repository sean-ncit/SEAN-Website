import { ReactNode } from 'react';

interface HexagonCardProps {
    children: ReactNode;
    className?: string;
}

export default function HexagonCard({ children, className = '' }: HexagonCardProps) {
    return (
        <div className={`relative group ${className}`}>

            {/* Background Glow */}
            <div className="
        absolute inset-0 
        bg-gradient-to-br 
        from-[#003C7A]/20 
        to-[#0057B8]/20 
        rounded-2xl 
        transform 
        transition-transform 
        duration-300 
        group-hover:scale-105 
        blur-sm
      "></div>

            {/* Main Card */}
            <div className="
        relative 
        bg-white/90 
        backdrop-blur-md 
        border 
        border-[#003C7A]/30 
        rounded-2xl 
        p-6 
        shadow-lg 
        transition-all 
        duration-300 
        group-hover:shadow-[0_0_30px_rgba(0,87,184,0.35)]
      ">
                {children}
            </div>
        </div>
    );
}
