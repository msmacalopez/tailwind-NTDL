import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <>
      {/* Wrapper */}
      <div className="min-h-screen bg-gray-300 dark:bg-gray-900 text-gray-900 dark:text-gray-200 flex flex-col">
        {/* Main Content */}
        <div className="grow px-4 sm:px-6 lg:px-8">
          {/* Container */}
          <div className="w-full max-w-4xl mx-auto">
            {/* Header */}
            <h1 className="text-4xl font-bold text-center my-12">
              Not To Do List
            </h1>
            {/* Toggle btn */}
            <div className="flex justify-end mb-2">
              <input
                type="checkbox"
                name=""
                id="darkModeToggle"
                className="sr-only"
                onChange={() => setIsDarkMode((prev) => !prev)}
              />
              <label
                htmlFor="darkModeToggle"
                className="flex items-center gap-2"
              >
                <div className="relative">
                  {/* track */}
                  <div className="block bg-amber-50 w-14 h-8 rounded-full"></div>
                  {/* knob */}
                  <div className="bg-gray-600 w-6 h-6 rounded-full absolute left-1 top-1 cursor-pointer dark:translate-x-full"></div>
                </div>
                {/* label light/dark */}
                <div>Light/Dark</div>
              </label>
            </div>
            {/* Task Form */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-xl mb-10 grow">
              <div className="flex flex-col md:flex-row gap-4 text-gray-900 dark:text-white">
                <input
                  type="text"
                  name="task"
                  id="task"
                  placeholder="e.g. Sleeping"
                  className="w-full md:flex-1 p-3 rounded bg-yellow-200 border border-red-400 dark:bg-gray-600 dark:border-black"
                />
                <input
                  type="number"
                  name="hour"
                  id="hour"
                  placeholder="e.g. 1"
                  className="w-full md:w-36 p-3 rounded bg-yellow-200 border border-red-400  dark:bg-gray-600 dark:border-black"
                />
                <select
                  name="type"
                  id="type"
                  className="w-full md:w-36 p-3 rounded bg-yellow-200 border border-red-400  dark:bg-gray-600 dark:border-black"
                >
                  <option value="good" selected>
                    Good
                  </option>
                  <option value="bad">Bad</option>
                </select>
                <button className="w-full md:w-auto bg-blue-500 text-white px-6 py-3 rounded-2xl">
                  Add Task
                </button>
              </div>
            </div>
            {/* Task List */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Good List */}
              <div className="bg-white rounded-xl dark:bg-gray-600 p-5 shadow-md w-full">
                <h2 className="text-gray-900 text-xl font-semibold text-center mb-2 uppercase dark:text-white">
                  Productive Time
                </h2>
                <hr />
                <table className="w-full text-left table-fixed">
                  <colgroup>
                    <col className="w-12" />
                    <col className="w-24" />
                    <col className="w-1/4" />
                    <col className="w-48" />
                  </colgroup>
                  <tbody>
                    <tr className="border-b border-gray-400 hover:bg-gray-200 dark:hover:text-black text-sm">
                      <td className="p-2">1</td>
                      <td className="p-2">grocery</td>
                      <td className="p-2">10 Hr</td>
                      <td className="p-2">
                        <button className="bg-red-600 hover:bg-red-800 py-1 px-3 rounded text-white text-md font-semibold mx-2">
                          Delete
                        </button>
                        <button className="bg-orange-400 hover:bg-orange-600 py-1 px-3 rounded text-white text-md font-semibold mx-2">
                          Swap
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-400 hover:bg-gray-200 dark:hover:text-black text-sm">
                      <td className="p-2">1</td>
                      <td className="p-2">grocery</td>
                      <td className="p-2">10 Hr</td>
                      <td className="p-2">
                        <button className="bg-red-600 hover:bg-red-800 py-1 px-3 rounded text-white text-md font-semibold mx-2">
                          Delete
                        </button>
                        <button className="bg-orange-400 hover:bg-orange-600 py-1 px-3 rounded text-white text-md font-semibold mx-2">
                          Swap
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* Total Hrs Good */}
                <div className="bg-green-600 border border-amber-600 text-white text-center rounded-lg py-2 mt-2">
                  Total Good Hrs: 10hrs
                </div>
              </div>
              {/* Bad List */}
              <div className="bg-white  dark:bg-gray-600 rounded-xl p-5 shadow-md w-full">
                <h2 className="text-gray-900 text-xl font-semibold text-center mb-2 uppercase dark:text-white">
                  Wasted Time
                </h2>
                <hr />
                <table className="w-full text-left table-fixed">
                  <colgroup>
                    <col className="w-12" />
                    <col className="w-24" />
                    <col className="w-1/4" />
                    <col className="w-48" />
                  </colgroup>
                  <tbody>
                    <tr className="border-b border-gray-400 hover:bg-gray-200 dark:hover:text-black text-sm">
                      <td className="p-2">1</td>
                      <td className="p-2">grocery</td>
                      <td className="p-2">10 Hr</td>
                      <td className="p-2">
                        <button className="bg-red-600 hover:bg-red-800 py-1 px-3 rounded text-white text-md font-semibold mx-2">
                          Delete
                        </button>
                        <button className="bg-orange-400 hover:bg-orange-600 py-1 px-3 rounded text-white text-md font-semibold mx-2">
                          Swap
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-400 hover:bg-gray-200 dark:hover:text-black text-sm">
                      <td className="p-2">1</td>
                      <td className="p-2">grocery</td>
                      <td className="p-2">10 Hr</td>
                      <td className="p-2">
                        <button className="bg-red-600 hover:bg-red-800 py-1 px-3 rounded text-white text-md font-semibold mx-2">
                          Delete
                        </button>
                        <button className="bg-orange-400 hover:bg-orange-600 py-1 px-3 rounded text-white text-md font-semibold mx-2">
                          Swap
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* Total Hrs Good */}
                <div className="bg-amber-600 border border-green-600 text-white text-center rounded-lg py-2 mt-2">
                  Total Bad Hrs: 10hrs
                </div>
              </div>
            </div>
            {/* Total hrs */}
            <div className="bg-blue-500 text-white text-center font-bold my-8 py-3 rounded-xl shadow-lg">
              Total Time entered: 100hrs
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className="py-4 bg-black text-white text-center">
          Created by Maca Lopez to practice tailwindCSS. &copy; 2025 All rights
          reserved.
        </footer>
      </div>
    </>
  );
}

export default App;
