import React from 'react'
import { NavLink } from "react-router";

function HeadSection() {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 shadow-lg px-4 lg:px-10 py-5 rounded-xl my-0 lg:my-10 w-full m-auto">
      <div className="mx-auto flex justify-between items-center">
        <NavLink to="/">
          <div className="text-lg lg:text-2xl text-slate-50  font-semibold tracking-tight drop-shadow-sm">
            Inspire Circle
          </div>
        </NavLink>

        {/* <NavLink to="/add">
          <div className="flex items-center gap-2 lg:gap-3 cursor-pointer px-3 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg transition-transform hover:scale-105 active:scale-95">
            <svg
              className="w-5 h-5 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
            <p className="text-white text-md lg:text-lg font-semibold">
              Add Your Idea
            </p>
          </div>
        </NavLink> */}
        <NavLink to="/add">
          <button className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm sm:text-base font-semibold rounded-lg shadow-md hover:scale-[1.02] hover:shadow-lg transition-transform duration-200 ease-in-out">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path>
            </svg>
            <span>Add Your Idea</span>
          </button>
        </NavLink>


      </div>
    </div>
  )
}

export default HeadSection