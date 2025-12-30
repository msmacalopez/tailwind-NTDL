import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Wrapper */}
      <div className="min-h-screen bg-gray-300 text-gray-900 p-6">
        {/* Container */}
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <h1 className="text-4xl font-bold text-center my-12">
            Not To Do List
          </h1>
          {/* Toggle btn */}
          <div></div>
          {/* Task Form */}
          <div className="bg-white p-6 rounded-xl shadow-xl mb-10">
            <div className="flex flex-col md:flex-row gap-4 text-gray-900">
              <input
                type="text"
                name="task"
                id="task"
                placeholder="e.g. Sleeping"
                className="flex-1 p-3 rounded bg-yellow-200 border border-red-400"
              />
              <input
                type="number"
                name="hour"
                id="hour"
                placeholder="e.g. 1"
                className="w-36 p-3 rounded bg-yellow-200 border border-red-400"
              />
              <select
                name="type"
                id="type"
                className="w-36 p-3 rounded bg-yellow-200 border border-red-400"
              >
                <option value="good" selected>
                  Good
                </option>
                <option value="bad">Bad</option>
              </select>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-2xl">
                Save
              </button>
            </div>
          </div>
          {/* Task List */}
          <div>
            {/* Good List */}
            <div>
              <header>Productive List</header>
              <hr />
              <table>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>grocery</td>
                    <td>10 Hr</td>
                    <td>
                      <button>Delete</button>
                      <button>Swap</button>
                    </td>
                  </tr>
                </tbody>
              </table>
              {/* Total Hrs Good */}
              <div>Total Good Hrs: 10hrs</div>
            </div>
            {/* Bad List */}
            <div>
              <header>Unproductive List</header>
              <hr />
              <table>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Sleeping</td>
                    <td>10 Hr</td>
                    <td>
                      <button>Delete</button>
                      <button>Swap</button>
                    </td>
                  </tr>
                </tbody>
              </table>
              {/* Total Hrs Bad */}
              <div>Total Bad Hrs: 10 hrs</div>
            </div>
            {/* Total hrs */}
            <div>Total Time entered: 100hrs</div>
            {/* Footer */}
            <footer>
              Created by Maca Lopez to practice tailwindCSS. &copy; 2025 All
              rights reserved.
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
