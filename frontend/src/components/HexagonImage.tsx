interface HexagonImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function HexagonImage({ src, alt, className = '' }: HexagonImageProps) {
  return (
    <div className={`relative group ${className}`}>
      <div
        className="w-full h-full rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(58,233,243,0.4)]"
        style={{
          clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
        }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#3AE9F3]/0 to-[#0057B8]/0 group-hover:from-[#3AE9F3]/10 group-hover:to-[#0057B8]/10 transition-all duration-300 rounded-2xl"
        style={{
          clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
        }}
      ></div>
    </div>
  );
}
