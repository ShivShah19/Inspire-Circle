import React, { useState } from 'react'

function Idea({ text, author }) {
    const [count, setCount] = useState(0);
  
    const countIncrease = () => {
      setCount(count + 1);
    };
  
    const countDecrease = () => {
      setCount(count - 1);
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
              onClick={countIncrease}
              className="cursor-pointer text-orange-500 hover:scale-110 transition-transform"
            >
              🔥
            </span>
            <span className="text-lg font-semiBold">{count}</span>
            <span
              onClick={countDecrease}
              className="cursor-pointer text-yellow-500 hover:scale-110 transition-transform"
            >
              👎
            </span>
          </div>
        </div>
      </div>
    );
  }
  
export default Idea