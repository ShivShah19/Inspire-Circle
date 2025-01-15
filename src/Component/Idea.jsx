import React, { useState, useEffect } from 'react';
import { useFirebase } from '../Context/Firebase';

function Idea({ id, text, author, count }) {
  const firebase = useFirebase();
  const [lastCount, setLastCount] = useState(count || 0);
  const [disabled, setDisabled] = useState({ increase: false, decrease: false });

  useEffect(() => {
    setLastCount(count);
  }, [count]);

  const handleIncrease = async () => {
    const updatedCount = lastCount + 1;
    setLastCount(updatedCount);
    setDisabled({ increase: true, decrease: false });
    await firebase.updateData(`users/${id}`, { count: updatedCount });
  };

  const handleDecrease = async () => {
    if (lastCount > 0) {
      const updatedCount = lastCount - 1;
      setLastCount(updatedCount);
      setDisabled({ increase: false, decrease: true });
      await firebase.updateData(`users/${id}`, { count: updatedCount });
    }
  };

  return (
    <div className="m-5 bg-white rounded-md shadow-md p-3 lg:p-5 cursor-pointer">
      <div className="flex justify-between">
        <div className='flex justify-between flex-col'>
          <p className="text-gray-700 mb-2">{text}</p>
          <p className="text-sm text-gray-500">
            ~ <span className="font-semibold">{author}</span>
          </p>
        </div>

        <div className="flex flex-col items-center text-lg">
          <span
            onClick={disabled.increase ? null : handleIncrease} 
            className={`cursor-pointer text-orange-500 hover:scale-110 transition-transform ${disabled.increase ? 'text-gray-400 cursor-not-allowed' : ''}`}
          >
            🔥
          </span>
          <span className="text-lg font-semiBold">{lastCount}</span>
          <span
            onClick={disabled.decrease ? null : handleDecrease}
            className={`cursor-pointer text-yellow-500 hover:scale-110 transition-transform ${disabled.decrease ? 'text-gray-400 cursor-not-allowed' : ''}`}
          >
            👎
          </span>
        </div>
      </div>
    </div>
  );
}

export default Idea;
