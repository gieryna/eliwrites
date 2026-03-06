"use client";

import { useState, useEffect } from "react";
import { RefreshCw } from "lucide-react";

const greetings = {
  morning: [
    "Top of the morning.",
    "Hey, early bird.",
    "Hope the coffee is strong.",
    "Good morning from Kansas City.",
  ],
  afternoon: [
    "Good afternoon.",
    "Howdy, stranger.",
    "Oh hey, you found it.",
    "Welcome. Pull up a chair.",
    "Hello from Kansas City.",
  ],
  evening: [
    "Good evening.",
    "Come on in.",
    "Welcome. Stay a while.",
    "Hello from Kansas City.",
    "Oh hey, you found it.",
  ],
  night: [
    "You're up late.",
    "Burning the midnight oil?",
    "Night owl. Respect.",
    "Don't mind the quiet.",
  ],
};

function getPool(): string[] {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return greetings.morning;
  if (hour >= 12 && hour < 17) return greetings.afternoon;
  if (hour >= 17 && hour < 22) return greetings.evening;
  return greetings.night;
}

function getRandom(pool: string[], current: string): string {
  const filtered = pool.filter((g) => g !== current);
  return filtered[Math.floor(Math.random() * filtered.length)];
}

export default function Greeting() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const pool = getPool();
    setGreeting(pool[Math.floor(Math.random() * pool.length)]);
  }, []);

  function refresh() {
    const pool = getPool();
    setGreeting((current) => getRandom(pool, current));
  }

  if (!greeting) return null;

  return (
    <div className="flex items-center gap-3 group">
      <h1 className="font-serif text-4xl font-bold text-[#1C1C1A]">
        {greeting}
      </h1>
      <button
        onClick={refresh}
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[#B84318] hover:text-[#1C1C1A] mt-1"
        aria-label="New greeting"
      >
        <RefreshCw size={16} />
      </button>
    </div>
  );
}