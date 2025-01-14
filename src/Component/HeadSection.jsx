import React from 'react'
import { NavLink } from "react-router";

function HeadSection() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 shadow px-4 lg:px-10 py-5 rounded-xl my-0 lg:my-10 w-full m-auto">
    <div className="mx-auto flex justify-between items-center">
      <NavLink to="/">
      <div className="text-lg lg:text-2xl text-blue-500 font-semibold tracking-wide drop-shadow-sm">
        Inspire Circle
      </div>
      </NavLink>
      
      <NavLink to="/add">
      <div className="flex items-center  gap-1 lg:gap-3 cursor-pointer">
        <div className="p-1 bg-gradient-to-br from-blue-50 to-blue-200 rounded-full shadow transition-transform hover:scale-105 ">
          <svg
            className="w-6 h-6 text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14m-7 7V5"
            />
          </svg>
        </div>
        <p className="text-md lg:text-lg text-blue-500 font-semibold hover:text-blue-600 transition-colors">
          Add Your Idea
        </p>
      </div>
      </NavLink>
    </div>
  </div>
  )
}

export default HeadSection