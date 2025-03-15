'use client'

import MainLayout from '@/components/layout/MainLayout'
import SurveyForm from '@/components/forms/SurveyForm'

export default function SurveysPage() {
  return (
    <MainLayout>
      <div className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">New Survey</h1>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="py-4">
            <div className="bg-white shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <SurveyForm
                  type="TEENAGE_PREGNANCY"
                  onSubmit={(data) => {
                    // Handle form submission
                    console.log(data)
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
} 