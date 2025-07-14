import React from "react";

function About() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-[720px] mx-auto">
        <div className="block mb-4 mx-auto border-b border-slate-300 pb-2 max-w-[360px]">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.material-tailwind.com/docs/html/input-phone"
            className="block w-full px-4 py-2 text-center text-slate-700 transition-all"
          >
            More components on <b>Material Tailwind</b>.
          </a>
        </div>

        <div className="w-full max-w-sm min-w-[200px]">
          <label htmlFor="contactNumber" className="block mb-1 text-sm text-slate-800">
            Contact Number
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <input
              id="contactNumber"
              className="w-full h-10 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
              placeholder="e.g., +1 123-456-7890"
              pattern="^\+\d{1,3}\s\d{1,3}-\d{3}-\d{4}$"
              title="Phone number must be in the format: +1 123-456-7890"
              maxLength={16}
              required
            />
          </div>
          <p className="mt-2 text-xs text-slate-500">
            Include your country code for international numbers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
