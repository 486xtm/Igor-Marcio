'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-1 flex items-center justify-center rounded-lg transition-colors hover:bg-[#b79ae010] dark:hover:bg-gray-800"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <SunIcon className="sm:w-5 md:w-7 w-[20px] text-white" />
      ) : (
        <MoonIcon className="sm:w-5 md:w-7 w-[20px] text-gray-900" />
      )}
    </button>
  );
}