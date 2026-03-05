'use client';

export default function StarField() {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 bg-galaxy-black">
      {Array.from({ length: 100 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            opacity: Math.random(),
          }}
        />
      ))}
    </div>
  );
}
