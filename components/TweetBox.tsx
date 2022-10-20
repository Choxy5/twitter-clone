import React, { useState } from 'react';
import {
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  CalendarIcon,
  SearchCircleIcon,
} from '@heroicons/react/outline';

function TweetBox() {
  const [input, setInput] = useState<string>('');

  return (
    <div className="flex spcae-x-2 p-5">
      <img
        className="h-14 w-14 rounded-full object-cover mt-4 opacity-50"
        src="https://imgs.search.brave.com/JotfCp3u5mKiHBjApkf_7PUUFYWet1ugAXrd9kbgArM/rs:fit:452:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5p/WXBGU3UyTzJrVlAx/T3B0RWRKLXV3SGFI/eCZwaWQ9QXBp"
        alt=""
      />

      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col">
          <input
            type="text"
            placeholder="What's Happening?"
            className="h-24 w-full text-xl outline-none placeholder:text-xl"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <div className="flex items-center">
            <div className="flex space-x-2 text-twitter flex-1">
              <PhotographIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <SearchCircleIcon className="h-5 w-5" />
              <EmojiHappyIcon className="h-5 w-5" />
              <CalendarIcon className="h-5 w-5" />
              <LocationMarkerIcon className="h-5 w-5" />
            </div>

            <button
              disabled={!input}
              className="bg-twitter px-5 py-2 font-bold text-white rounded-full disabled:opacity-40"
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TweetBox;
