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
    <div className="m-4 bg-white rounded-md shadow-md p-3 lg:p-5 cursor-pointer ">
      <div className="flex justify-between">
        <div className="flex justify-between flex-col">
          <p className="text-[#121B2D] text-sm sm:text-lg mb-2">{text}</p>
          <p className="text-sm text-gray-500 flex items-center ">
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#6B7280"><path d="M232-444v-72h496v72H232Z" /></svg>
            <span className="font-semibold">{author}</span>
          </p>
        </div>

        <div className="flex flex-col items-center text-lg">
          <span
            onClick={handleIncrease}
            className={` text-orange-500 hover:scale-110 transition-transform ${action === 'increase' ? 'cursor-not-allowed' : 'cursor-pointer'
              }`}
          >
            🔥
          </span>

          <span className="text-lg font-semiBold">{lastCount}</span>

          <span
            onClick={handleDecrease}
            className={` text-yellow-500 hover:scale-110 transition-transform ${action === 'decrease' ? 'cursor-not-allowed ' : 'cursor-pointer'
              }`}
          >
            👎
          </span>
        </div>
      </div>
    </div>
  );
}

export default Idea;
