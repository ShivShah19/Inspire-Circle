import React, { useState, useEffect } from 'react';
import { useFirebase } from '../Context/Firebase';

function Idea({ id, text, author, count }) {
  const firebase = useFirebase();
  const [lastCount, setLastCount] = useState(count || 0);
  const [action, setAction] = useState(null);

  useEffect(() => {
    setLastCount(count);
  }, [count]);

  useEffect(() => {
    const userAction = localStorage.getItem(`userAction_${id}`);
    if (userAction) {
      setAction(userAction);
    }
  }, [id]);

  const handleIncrease = async () => {
    if (action === 'increase') return;

    const updatedCount = lastCount + 1;
    setLastCount(updatedCount);
    setAction('increase');
    localStorage.setItem(`userAction_${id}`, 'increase');

    await firebase.updateData(`users/${id}`, { count: updatedCount });
  };

  const handleDecrease = async () => {
    if (action === 'decrease' || lastCount <= 0) return;

    const updatedCount = lastCount - 1;
    setLastCount(updatedCount);
    setAction('decrease');
    localStorage.setItem(`userAction_${id}`, 'decrease');

    await firebase.updateData(`users/${id}`, { count: updatedCount });
  };

  return (
    <div
      className="relative 
      bg-[#111] rounded-2xl p-4 border border-[#222]
      shadow-[0_0_40px_rgba(0,0,0,0.35)] hover:shadow-[0_0_60px_rgba(0,0,0,0.55)]
      transition-all duration-300 hover:-translate-y-1
      before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br
      before:from-white/5 before:to-transparent before:opacity-0 hover:before:opacity-10
      overflow-hidden cursor-pointer group

      w-full
      sm:w-[48%]
      md:w-[48%]
      lg:w-[48%]
      xl:w-[48%]

      m-2">

      <div className="mb-3 relative z-10">
        <p className="font-semibold text-sm tracking-wide text-gray-200 group-hover:text-white transition">
          {author}
        </p>
      </div>

      <p className="text-sm leading-relaxed text-gray-400 mb-5 relative z-10 group-hover:text-gray-200 transition">
        {text}
      </p>

      {/* ✅ FIXED ALIGNMENT HERE */}
      <div className="flex items-center gap-3 text-lg relative z-10 leading-none">

        <span
          onClick={handleIncrease}
          className={`text-orange-400 hover:scale-110 transition-transform align-middle
        ${action === "increase" ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
        >
          🔥
        </span>

        <span className="text-gray-300 text-sm font-semibold leading-none align-middle group-hover:text-white transition">
          {lastCount}
        </span>

        <span
          onClick={handleDecrease}
          className={`text-red-400 hover:scale-110 transition-transform align-middle
        ${action === "decrease" ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
        >
          👎
        </span>

      </div>

    </div>
  );

}

export default Idea;
