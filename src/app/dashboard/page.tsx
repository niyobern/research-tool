import MainLayout from '@/components/layout/MainLayout'
import DashboardCharts from '@/components/charts/DashboardCharts'

export default function DashboardPage() {
  return (
    <MainLayout>
      <div className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="py-4">
            <DashboardCharts />
          </div>
        </div>
      </div>
    </MainLayout>
  )
} 