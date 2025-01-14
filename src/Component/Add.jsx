import { NavLink } from "react-router";
import { useFirebase } from "../Context/Firebase";

function Add() {
  const firebase = useFirebase();
  

  const handleData = (e) => {
    e.preventDefault();
    const id = new Date().getTime();
    const username = e.target[0].value;
    const idea = e.target[1].value;
    console.log(id, username, idea);
    firebase.addData("users/", { id, username, idea });
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
          <span>Back</span>
        </NavLink>
      </div>
      <form className="w-full mt-8" onSubmit={handleData}>
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
              placeholder="Username"
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
          ></textarea>
        </div>
        <button
          type="submit"
          className="mt-4 w-full bg-purple-500 text-white text-sm font-medium rounded-lg px-4 py-2 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Add;
