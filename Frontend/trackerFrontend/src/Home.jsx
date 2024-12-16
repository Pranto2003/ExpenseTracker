import { useState,useEffect } from "react";
import "./font/font.css";
import ExpenseBarChart from "./Graph/bargraph.jsx";
import { useLocation } from "react-router-dom";

function Home() {
  const [name, setName] = useState("");
  const location = useLocation();
  const initialSalary = location.state?.salary
  const [totalBalance, setTotalBalance] = useState(initialSalary);
  const [targetForMonth, setTargetForMonth] = useState(0);
  const [dailyTarget, setDailyTarget] = useState(0);

  function form() {
    const userName = prompt("Enter your name here :");
    const salary = prompt("Enter your salary :");
    setName(userName);
    setTotalBalance(parseFloat(salary));
  }


  useEffect(() => {
    const calculatedTargetForMonth = totalBalance * 0.7;
    setTargetForMonth(calculatedTargetForMonth);
    setDailyTarget(calculatedTargetForMonth / 30);
  }, [totalBalance]);
  return (
    <>
      <div className="bg-[#ccbed7]" style={{ width: "100%", height: "100vh" }}>
        <nav
          className="bg-gray-700 p-5 poppins-semibold lg:text-3xl md:text-3xl flex flex-col lg:flex-row sm:text-sm justify-center gap-6"
          style={{
            width: "100%",
            height: "20%",
            position: "relative",
          }}
        >
          <button
            className="bg-[#d4daea] hover:bg-[#cecfd2]"
            onClick={form}
            style={{
              width: "25%",
              height: "60%",
              position: "relative",
              top: "10px",
              borderRadius: "10px",
              fontFamily: "poppins-semibold",
              textAlign: "center",
              color: "black",
              fontWeight: "500px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            Enter Data
          </button>

          <button
            className="bg-[#d4daea] hover:bg-[#cecfd2]"
            style={{
              width: "25%",
              height: "60%",
              position: "relative",
              top: "10px",
              borderRadius: "10px",
              fontFamily: "poppins-semibold",
              textAlign: "center",
              color: "black",
              fontWeight: "500px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            INCOME
          </button>

          <button
            className="bg-[#d4daea] hover:bg-[#cecfd2]"
            style={{
              width: "25%",
              height: "60%",
              position: "relative",
              top: "10px",
              borderRadius: "10px",
              fontFamily: "poppins-semibold",
              textAlign: "center",
              color: "black",
              fontWeight: "500px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            MONTH
          </button>
        </nav>

        <div
          className="bg-[#ac538d] poppins-light lg:text-3xl md:text-3xl flex flex-col lg:flex-row sm:text-sm justify-center gap-6"
          style={{
            width: "100%",
            height: "10%",
            position: "relative",
            textAlign: "center",
          }}
        >
          <div
            className="transparent"
            style={{
              width: "25%",
              height: "60%",
              position: "relative",
              top: "10px",
              bottom: "4px",
              borderRadius: "10px",
              fontFamily: "poppins-semibold",
              textAlign: "center",
              color: "black",
              fontWeight: "500px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            Total Income: {totalBalance}
          </div>

          <div
            className="transparent"
            style={{
              width: "25%",
              height: "60%",
              position: "relative",
              top: "10px",
              borderRadius: "10px",
              fontFamily: "poppins-semibold",
              textAlign: "center",
              color: "black",
              fontWeight: "500px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Target for Month: {targetForMonth}
          </div>

          <div
            className="transparent"
            style={{
              width: "25%",
              height: "60%",
              position: "relative",
              top: "10px",
              borderRadius: "10px",
              fontFamily: "poppins-semibold",
              textAlign: "center",
              color: "black",
              fontWeight: "500px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Daily Target: {dailyTarget}
          </div>
        </div>

        <ExpenseBarChart />
      </div>
    </>
  );
}

export default Home;
