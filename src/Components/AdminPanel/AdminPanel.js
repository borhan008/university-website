import React, { useState } from "react";
import logo from "../../img/logo.png";
import AddStudent from "./AddStudent";
import RegistrationViews from "./RegistrationViews";
import ViewStudent from "./ViewStudent";

export default function AdminPanel() {
  const [page, setPage] = useState("");
  const [year, serYear] = useState("");
  const [term, setTerm] = useState("");
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden bg"
        >
          Open drawer
        </label>
        <div className="border-l flex-1 w-full">
          <div className="border-b px-2 py-2 flex items-center justify-between w-full">
            <div>
              <h3 className="font-semibold">
                Welcome, <span className="text-blue-800">Borhan</span>
              </h3>
              <h2 className="text-2xl font-semibold">Admin Panel</h2>
            </div>
            <button className="btn btn-ghost">Log out</button>
          </div>
          <div className="p-5">
            {page == "addStudent" && <AddStudent />}
            {page == "viewStudent" && <ViewStudent />}
            {page == "viewRegistraion" && (
              <RegistrationViews year={year} term={term} />
            )}
          </div>
        </div>
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu bg-gray-100 p-4 w-80 text-base-content">
          <div className="flex items-center flex-col">
            <img src={logo} alt="NSTU LOGO" className="w-16" />
            <h2 className="font-semibold text-2xl py-2">CSTE, NSTU</h2>
          </div>
          <div tabindex="0" class="collapse collapse-arrow">
            <input type="checkbox" />
            <div class="collapse-title font-medium">Student</div>
            <ul class="collapse-content menu">
              <li>
                <button onClick={() => setPage("addStudent")}>Add</button>
              </li>
              <li>
                <button onClick={() => setPage("viewStudent")}>View</button>
              </li>
            </ul>
          </div>
          <div tabindex="0" class="collapse collapse-arrow">
            <input type="checkbox" />
            <div class="collapse-title font-medium">Registration</div>
            <ul class="collapse-content menu">
              <li>
                <button
                  onClick={() => {
                    setPage("viewRegistraion");
                    serYear("1");
                    setTerm("1");
                  }}
                >
                  1-1
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setPage("viewRegistraion");
                    serYear("1");
                    setTerm("2");
                  }}
                >
                  1-2
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setPage("viewRegistraion");
                    serYear("2");
                    setTerm("1");
                  }}
                >
                  2-1
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setPage("viewRegistraion");
                    serYear("2");
                    setTerm("2");
                  }}
                >
                  2-2
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setPage("viewRegistraion");
                    serYear("3");
                    setTerm("1");
                  }}
                >
                  3-1
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setPage("viewRegistraion");
                    serYear("3");
                    setTerm("2");
                  }}
                >
                  3-2
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setPage("viewRegistraion");
                    serYear("4");
                    setTerm("1");
                  }}
                >
                  4-1
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setPage("viewRegistraion");
                    serYear("4");
                    setTerm("2");
                  }}
                >
                  4-2
                </button>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  );
}
