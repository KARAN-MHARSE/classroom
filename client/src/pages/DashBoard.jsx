import React from "react";
import CountCard from "../components/CountCard";
import { data } from "../data/cardsData";
import TimeTable from "../components/TimeTable";

function DashBoard() {
  return (
    <div className="flex flex-col gap-4 p-5 flex-wrap">
      {/* upper part */}
      <div>
        {/* left-upper */}
        <div className="">
          <div className="flex gap-2 flex-wrap">
            {data.map((v, index) => (
              <CountCard data={v} />
            ))}
          </div>
        </div>
        {/* right-upper */}
        <div>
          <h1>Notices</h1>
        </div>
      </div>
      {/* lower part */}
      <div>
        <TimeTable />
      </div>

      <p className=" absolute bottom-4">
        Note: To check Assignment please login first <br />
        and above dashboard is currently static for ui purpose
        <br />
        Email Id: principal@classroom.com
        <br /> Password: Admin
      </p>
    </div>
  );
}

export default DashBoard;
