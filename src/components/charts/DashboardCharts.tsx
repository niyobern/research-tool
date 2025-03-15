'use client'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js'
import { Bar, Pie } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
)

const barOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Survey Responses by Region',
    },
  },
}

const pieOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Survey Type Distribution',
    },
  },
}

// Sample data - replace with real data from your backend
const barData = {
  labels: ['Kigali', 'Northern', 'Southern', 'Eastern', 'Western'],
  datasets: [
    {
      label: 'Teenage Pregnancy',
      data: [65, 45, 38, 54, 48],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'HIV/AIDS',
      data: [78, 55, 42, 58, 51],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'GBV',
      data: [42, 38, 31, 35, 28],
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
    },
  ],
}

const pieData = {
  labels: ['Teenage Pregnancy', 'HIV/AIDS', 'GBV'],
  datasets: [
    {
      data: [250, 284, 174],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(53, 162, 235, 0.5)',
        'rgba(75, 192, 192, 0.5)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(53, 162, 235, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1,
    },
  ],
}

export default function DashboardCharts() {
  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow">
        <Bar options={barOptions} data={barData} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <Pie options={pieOptions} data={pieData} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Key Statistics</h3>
            <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="px-4 py-5 bg-gray-50 shadow rounded-lg overflow-hidden sm:p-6">
                <dt className="text-sm font-medium text-gray-500 truncate">Total Surveys</dt>
                <dd className="mt-1 text-3xl font-semibold text-indigo-600">708</dd>
              </div>
              <div className="px-4 py-5 bg-gray-50 shadow rounded-lg overflow-hidden sm:p-6">
                <dt className="text-sm font-medium text-gray-500 truncate">Provinces Covered</dt>
                <dd className="mt-1 text-3xl font-semibold text-indigo-600">5</dd>
              </div>
              <div className="px-4 py-5 bg-gray-50 shadow rounded-lg overflow-hidden sm:p-6">
                <dt className="text-sm font-medium text-gray-500 truncate">Active Enumerators</dt>
                <dd className="mt-1 text-3xl font-semibold text-indigo-600">24</dd>
              </div>
              <div className="px-4 py-5 bg-gray-50 shadow rounded-lg overflow-hidden sm:p-6">
                <dt className="text-sm font-medium text-gray-500 truncate">Completion Rate</dt>
                <dd className="mt-1 text-3xl font-semibold text-indigo-600">92%</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
} 