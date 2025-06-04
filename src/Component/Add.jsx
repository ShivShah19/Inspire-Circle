import { NavLink } from "react-router-dom";
import { useFirebase } from "../Context/Firebase";
import { useEffect, useState } from "react";

function Add() {
  const firebase = useFirebase();
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (firebase.googleUser) {
      setIsSignedIn(true);
    }
  }, [firebase.googleUser])

  console.log(isSignedIn);


  const handleData = (e) => {
    e.preventDefault();
    const id = new Date().getTime();
    const username = firebase.googleUser?.displayName;
    const idea = e.target[1].value;
    const count = 0;
    console.log(id, username, idea);
    firebase.addData("users/", { id, username, idea, count });
    e.target.reset();
  };

  return (
    <div className="w-full max-w-4xl mx-auto m-5 bg-white rounded-md shadow-md p-3 sm:p-5">
      <div className="flex items-center gap-1 mt-5">
        <NavLink to="/" className="flex items-center gap-1 cursor-pointer">
          <svg
            className="w-4 h-4 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 10 16"
          >
            <path d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#000000"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" /></svg><span>Back</span>
        </NavLink>
      </div>
      <div className="flex justify-center pt-5 ">
        <button
          onClick={firebase.signWithGoogle}
          className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <svg
            className="h-6 w-6 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="-0.5 0 48 48"
            version="1.1"
          >
            <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="Color-" transform="translate(-401.000000, -860.000000)">
                <g id="Google" transform="translate(401.000000, 860.000000)">
                  <path
                    d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                    id="Fill-1"
                    fill="#FBBC05"
                  />
                  <path
                    d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                    id="Fill-2"
                    fill="#EB4335"
                  />
                  <path
                    d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                    id="Fill-3"
                    fill="#34A853"
                  />
                  <path
                    d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                    id="Fill-4"
                    fill="#4285F4"
                  />
                </g>
              </g>
            </g>
          </svg>
          <span>Continue with Google</span>
        </button>
      </div>
      <form className="w-full mt-5" onSubmit={handleData}>
        <div className="my-4">
          <label
            htmlFor="website-admin"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Username
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-50 border border-e-0 border-gray-300 rounded-s-md">
              <svg
                className="w-5 h-5 text-purple-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
            </span>
            <input
              type="text"
              id="website-admin"
              className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5"
              placeholder={firebase.googleUser ? firebase.googleUser?.displayName : "Username"}
              disabled={true}
            />
          </div>
        </div>
        <div className="my-4">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
            placeholder="Write your ideas"
            disabled={!isSignedIn}
          ></textarea>
        </div>
        <button
          type="submit"
          className={`${isSignedIn ? 'bg-purple-500' : 'bg-gray-200'} ${isSignedIn ? 'hover:bg-purple-600' : 'hover:bg-gray-400'} mt-4 w-full text-white text-sm font-medium rounded-lg px-4 py-2  focus:outline-none focus:ring-2 ${isSignedIn ? 'focus:ring-purple-500' : 'focus:ring-gray-500'} focus:ring-offset-2`}
          disabled={!isSignedIn}>
          Submit
        </button>

      </form>
    </div>
  );
}

export default Add;
