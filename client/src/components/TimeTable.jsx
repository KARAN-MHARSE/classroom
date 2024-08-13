import React from "react";

function TimeTable() {
  return (
    <div className="bg-darkGray p-3 rounded-lg max-w-fit">
      <div className="my-2 flex items-center justify-between">
        <h1 className="text-lg font-semibold">Timetable</h1>
        <h1 className="text-lg font-semibold">May/2024</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto min-w-full">
          <thead>
            <tr className="text-lightText">
              <th className="w-[50px]">Time</th>
              <th className="w-[50px]">Mon</th>
              <th className="w-[50px]">Tue</th>
              <th className="w-[50px]">Wed</th>
              <th className="w-[50px]">Thu</th>
              <th className="w-[50px]">Sat</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-white">
              <th className="w-[50px]">09:00</th>
              <td className="w-[50px] ">NLP</td>
              <td className="w-[50px]">IR</td>
              <td className="w-[50px]">BDA</td>
              <td className="w-[50px]">BC</td>
              <td className="w-[50px]">T&P</td>
            </tr>

            {/* Add other rows similarly */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TimeTable;
