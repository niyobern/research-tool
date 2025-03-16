'use client'

import { useSession } from 'next-auth/react'
import MainLayout from '@/components/layout/MainLayout'
import DashboardCharts from '@/components/charts/DashboardCharts'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import { 
  ChartBarIcon, 
  DocumentTextIcon, 
  UserGroupIcon, 
  ClipboardDocumentListIcon 
} from '@heroicons/react/24/outline'

const stats = [
  { name: 'Total Surveys', stat: '71', icon: ClipboardDocumentListIcon },
  { name: 'Completed Today', stat: '12', icon: DocumentTextIcon },
  { name: 'Active Users', stat: '23', icon: UserGroupIcon },
  { name: 'Response Rate', stat: '87%', icon: ChartBarIcon },
]

export default function DashboardPage() {
  const { status } = useSession()

  if (status === 'loading') {
    return <LoadingSpinner />
  }

  return (
    <MainLayout>
      <div className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          {/* Stats */}
          <div className="mt-8">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((item) => (
                <div
                  key={item.name}
                  className="relative overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:px-6 sm:py-6"
                >
                  <dt>
                    <div className="absolute rounded-md bg-indigo-500 p-3">
                      <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <p className="ml-16 truncate text-sm font-medium text-gray-500">{item.name}</p>
                  </dt>
                  <dd className="ml-16 flex items-baseline">
                    <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
                  </dd>
                </div>
              ))}
            </div>
          </div>

          {/* Charts */}
          <div className="mt-8">
            <div className="bg-white shadow rounded-lg p-6">
              <DashboardCharts />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
} 