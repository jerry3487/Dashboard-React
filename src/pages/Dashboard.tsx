import { useState, useEffect } from "react";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import CyberKarmaGPT from "./CyberKarmaGPT";
import KnowledgeAssessmentResults from "./KnowledgeAssessmentResults";
import { FaCheckCircle, FaTimesCircle, FaQuestionCircle } from "react-icons/fa";

Chart.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [blinkColor, setBlinkColor] = useState("bg-red-500");
  const [showCyberKarmaGPT, setShowCyberKarmaGPT] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlinkColor((prev) => (prev === "bg-red-500" ? "bg-blue-500" : "bg-red-500"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-primary min-h-screen flex flex-col items-center px-6 py-6">
      {/* Knowledge Assessment Section */}
      <div className="w-full max-w-6xl bg-secondary p-4 rounded-lg shadow-lg border border-borderGlow mb-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`${blinkColor} text-white px-6 py-3 rounded-md shadow-lg transition-colors duration-500`}
        >
          Knowledge Assessment Results {isOpen ? "▼" : "▲"}
        </button>
        {/* ✅ Top Summary Section - Visible only when isOpen is true */}
        {isOpen && (
          <div className="w-full flex justify-end"> {/* ✅ This ensures text is on the right */}
            <div className="flex space-x-6 text-sm">
              <div className="flex items-center space-x-2 text-green-400">
                <FaCheckCircle className="text-lg" />
                <span>65% Correct</span>
              </div>
              <div className="flex items-center space-x-2 text-red-400">
                <FaTimesCircle className="text-lg" />
                <span>20% Incorrect</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <FaQuestionCircle className="text-lg" />
                <span>15% Don't Know</span>
              </div>
            </div>
          </div>
        )}
      </div>


      {/* Main Dashboard */}
      <div className="w-full max-w-6xl bg-secondary rounded-lg shadow-lg p-6 border border-borderGlow">
        {!isOpen && (
          <div className="flex justify-center gap-10 mb-6">
            <button
              onClick={() => setShowCyberKarmaGPT(false)}
              className={`px-6 py-2 rounded-md shadow-lg ${!showCyberKarmaGPT ? "bg-blue-500 text-white" : "border border-white text-white"
                }`}
            >
              📖 Summary
            </button>
            <button
              onClick={() => setShowCyberKarmaGPT(!showCyberKarmaGPT)}
              className={`px-6 py-2 rounded-md shadow-lg ${showCyberKarmaGPT ? "bg-blue-500 text-white" : "border border-white text-white"
                }`}
            >
              🔍 CyberKarma GPT
            </button>
          </div>
        )}

        {isOpen ? (
          <KnowledgeAssessmentResults togglePage={() => setIsOpen(false)} />
        ) : showCyberKarmaGPT ? (
          <CyberKarmaGPT />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* Chart 1 - Unpatched Assets */}
            <div className="bg-[#121826] p-4 rounded-lg shadow-lg border border-[#6a5acd]">
              <div className="bg-[#3A5EE0] text-white text-center py-2 rounded-t-lg text-lg font-semibold">
                Unpatched Assets since 30 Days
              </div>
              <div className="relative flex justify-center items-center p-6">
                <Pie
                  data={{
                    labels: ["Windows", "Linux", "Other OS"],
                    datasets: [{ data: [35, 25, 40], backgroundColor: ["#FF6B00", "#7FDB7D", "#F5D547"] }],
                  }}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { position: "bottom" } },
                  }}
                  height={200}
                  width={200}
                />
              </div>
            </div>

            {/* Chart 2 - Unresolved Critical SOC Incidents */}
            <div className="bg-[#121826] p-4 rounded-lg shadow-lg border border-[#6a5acd]">
              <div className="bg-[#3A5EE0] text-white text-center py-2 rounded-t-lg text-lg font-semibold">
                Unresolved Critical SOC Incidents
              </div>
              <div className="p-6">
                <Bar
                  data={{
                    labels: ["Firewall", "Windows", "O365"],
                    datasets: [
                      { label: "Critical Incidents", data: [7, 10, 5], backgroundColor: ["#7FDB7D", "#FF6B00", "#F5D547"] },
                    ],
                  }}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { position: "bottom" } },
                    scales: {
                      x: { ticks: { color: "#fff" }, grid: { display: false } },
                      y: { ticks: { color: "#fff" }, grid: { color: "#444" } },
                    },
                  }}
                />
              </div>
            </div>

            {/* Chart 3 - Weak Points (EMP & Machines) */}
            <div className="bg-[#121826] p-4 rounded-lg shadow-lg border border-[#6a5acd]">
              <div className="bg-[#3A5EE0] text-white text-center py-2 rounded-t-lg text-lg font-semibold">
                Weak Points (EMP & Machines)
              </div>
              <div className="relative flex justify-center items-center p-6">
                <Pie
                  data={{
                    labels: ["Employee Devices", "Machine Devices", "Other Devices"],
                    datasets: [{ data: [50, 30, 20], backgroundColor: ["#FF6B00", "#7FDB7D", "#F5D547"], cutout: "70%" }],
                  }}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { position: "bottom" } },
                  }}
                  height={200}
                  width={200}
                />
              </div>
            </div>

            {/* Chart 4 - Weak Apps & Software */}
            <div className="bg-[#121826] p-4 rounded-lg shadow-lg border border-[#6a5acd]">
              <div className="bg-[#3A5EE0] text-white text-center py-2 rounded-t-lg text-lg font-semibold">
                Weak (Apps & Softwares)
              </div>
              <div className="p-6">
                <Bar
                  data={{
                    labels: ["HR Management", "CRM", "Websites"],
                    datasets: [
                      { label: "Vulnerability", data: [5, 4, 10], backgroundColor: "#7FDB7D" },
                      { label: "SOC", data: [10, 2, 3], backgroundColor: "#FF6B00" },
                    ],
                  }}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { position: "bottom" } },
                    scales: {
                      x: { ticks: { color: "#fff" }, grid: { display: false } },
                      y: { ticks: { color: "#fff" }, grid: { color: "#444" } },
                    },
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
