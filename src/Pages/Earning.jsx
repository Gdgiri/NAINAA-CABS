import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import UseAdminBookingDataHook from "../CustomHook/UseAdminBookingDataHook";

// const sampleData = {
//   week: [
//     { period: "Week 1", earnings: 5000, bookings: 10 },
//     { period: "Week 2", earnings: 7000, bookings: 15 },
//     { period: "Week 3", earnings: 4000, bookings: 7 },
//     { period: "Week 4", earnings: 6000, bookings: 12 },
//   ],
//   month: [
//     { period: "Jan", earnings: 20000, bookings: 40 },
//     { period: "Feb", earnings: 18000, bookings: 35 },
//     { period: "Mar", earnings: 22000, bookings: 50 },
//     { period: "Apr", earnings: 25000, bookings: 60 },
//     { period: "May", earnings: 21000, bookings: 45 },
//     { period: "Jun", earnings: 19000, bookings: 38 },
//     { period: "Jul", earnings: 24000, bookings: 55 },
//     { period: "Aug", earnings: 23000, bookings: 52 },
//     { period: "Sep", earnings: 25000, bookings: 58 },
//     { period: "Oct", earnings: 26000, bookings: 60 },
//     { period: "Nov", earnings: 28000, bookings: 65 },
//     { period: "Dec", earnings: 30000, bookings: 70 },
//   ],
//   year: [
//     { period: "2019", earnings: 220000, bookings: 450 },
//     { period: "2020", earnings: 280000, bookings: 500 },
//     { period: "2021", earnings: 320000, bookings: 550 },
//     { period: "2022", earnings: 300000, bookings: 520 },
//     { period: "2023", earnings: 350000, bookings: 600 },
//   ],
// };

const Earning = () => {
  const [sampleData, setSampleData] = useState({});
  const [timePeriod, setTimePeriod] = useState("monthlyStats");
  const data = sampleData[timePeriod];

  const { charLoading, chartHook, weeklyStats, monthlyStats, last5years } =
    UseAdminBookingDataHook();

  useEffect(() => {
    chartHook();
  }, []);
  useEffect(() => {
    setSampleData(weeklyStats);
    // weeklyStats();
  }, [weeklyStats]);
  const handleChange = (e) => setTimePeriod(e.target.value);

  return (
    <div className="flex-1 p-4 md:p-8 bg-gray-50 overflow-auto" id="earn">
      {/* Summary Cards */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:flex gap-4 mb-6">
        <div className="bg-white shadow p-6 rounded text-center flex-1">
          <div className="text-blue-500 text-2xl mb-2">🔁</div>
          <p className="text-gray-600">Total Bookings</p>
          <p className="text-2xl font-bold">200</p>
        </div>
        <div className="bg-white shadow p-6 rounded text-center flex-1">
          <div className="text-blue-500 text-2xl mb-2">🚗</div>
          <p className="text-gray-600">Total Cars</p>
          <p className="text-2xl font-bold">1</p>
        </div>
      </div> */}

      <div className="p-4 bg-white rounded shadow-md max-w-7xl mx-auto">
        <h2 className="text-xl font-bold mb-4">Earnings & Bookings</h2>

        <select
          value={timePeriod}
          onChange={handleChange}
          className="mb-6 p-2 border rounded"
        >
          <option value="weeklyStats">Weekly</option>
          <option value="monthlyStats">Monthly</option>
          <option value="last5Years">Yearly</option>
        </select>

        {/* Scrollable container */}
        <div className="overflow-x-auto">
          <div style={{ width: timePeriod === "month" ? "1200px" : "100%" }}>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 16 - 0, bottom: 5 }}
                barGap={12}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="period" />
                <YAxis
                  yAxisId="left"
                  orientation="left"
                  stroke="#2E709E"
                  label={{
                    value: "Earnings (₹)",
                    angle: -90,
                    dx: -15,
                    position: "insideLeft",
                  }}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  stroke="#E6A43B"
                  label={{
                    value: "Bookings",
                    angle: 90,
                    position: "insideRight",
                  }}
                />
                <Tooltip />
                <Legend verticalAlign="top" />
                <Bar
                  yAxisId="left"
                  dataKey="earnings"
                  fill="#2E709E"
                  name="Earnings (₹)"
                  barSize={20}
                />
                <Bar
                  yAxisId="right"
                  dataKey="bookings"
                  fill="#E6A43B"
                  name="Bookings"
                  barSize={20}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earning;
