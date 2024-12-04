"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

// Mock Data
const enrolledCoursesData = [
  { name: "Pest Control", students: 10 },
  { name: "Crop Protection", students: 15 },
  { name: "Soil Management", students: 8 },
  { name: "Weather Forecasting", students: 11 }
];

const completedCoursesData = [
  { name: "Pest Control", value: 3 },
  { name: "Crop Protection", value: 5 },
  { name: "Soil Management", value: 6 },
  { name: "Weather Forecasting", value: 7 }
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A020F0"];

const TopCoursesPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Top Courses Overview
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Top Enrolled Courses */}
        <div className="bg-white shadow rounded-md p-4">
          <h2 className="text-xl font-bold mb-4">Top Enrolled Courses</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={enrolledCoursesData}>
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="students" fill="#8884d8" barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Top Completed Courses */}
        <div className="bg-white shadow rounded-md p-4">
          <h2 className="text-xl font-bold mb-4">Top Completed Courses</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={completedCoursesData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
              >
                {completedCoursesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default TopCoursesPage;
