'use client';

import { Input } from "@/components/ui/input";
import { useState } from "react";
import { quotesData, Topic } from "@/data/quotes";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  const [topic, setTopic] = useState("");
  const [quotes, setQuotes] = useState<string[]>([]);

  const handleSearch = () => {
    const key = topic.toLowerCase() as Topic;

    if (key in quotesData) {
      const foundQuotes = quotesData[key];
      setQuotes(foundQuotes.slice(0, 3));
    } else {
      setQuotes(["No quotes found for this topic."]);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4 p-6">
      <ThemeToggle /><br></br>
      <h1 className="text-2xl font-bold">Quote Generator</h1>
      
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Enter a topic(e.g motivation or life or success)"
          className="w-[300px]"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <Button
          onClick={handleSearch}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Get Quotes
        </Button>
      </div>

      <div className="mt-6 space-y-2 text-center">
        {quotes.map((quote, index) => (
          <p key={index} className="text-gray-700 italic">
            “{quote}”
          </p>
        ))}
      </div>
    </main>
  );
}

