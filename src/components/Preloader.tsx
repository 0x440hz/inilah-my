import { useState, useEffect } from "react";

export const Preloader = () => {
  const [booting, setBooting] = useState<boolean>(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        const nextProgress = p + Math.floor(Math.random() * 15) + 5;
        if (nextProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => setBooting(false), 600);
          return 100;
        }
        return nextProgress;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  const clampedProgress = Math.min(progress, 100);
  const barLength = 16;
  const filledLength = Math.round((clampedProgress / 100) * barLength);
  const emptyLength = Math.max(0, barLength - filledLength);
  const bar = "█".repeat(filledLength) + "░".repeat(emptyLength);

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#0a0a0a] flex items-center justify-center pointer-events-none transition-opacity duration-700 ease-in-out ${booting ? "opacity-100" : "opacity-0"}`}
    >
      <div className="flex flex-col gap-2 text-zinc-400 font-mono w-full max-w-xs px-6">
        <div className="flex justify-between text-xs text-zinc-600 mb-1 border-b border-zinc-800/50 pb-2">
          <span>0x440hz@system</span>
          <span>v2.0.0</span>
        </div>
        <div>
          <span className="text-zinc-300">Mounting portfolio assets...</span>
        </div>
        <div className="text-green-500 text-sm tracking-widest break-all">
          [{bar}] {progress > 100 ? 100 : progress}%
        </div>
        <div className="h-4 mt-1">
          {progress >= 100 ? (
            <span className="text-blue-400 text-xs animate-pulse">
              Access Granted_
            </span>
          ) : (
            <span className="text-zinc-500 text-xs animate-pulse">
              Resolving dependencies...
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
