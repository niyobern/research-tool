'use client'

import { useState } from 'react'
import MainLayout from '@/components/layout/MainLayout'
import SurveyForm from '@/components/forms/SurveyForm'
import SurveyList from '@/components/surveys/SurveyList'
import { useSession } from 'next-auth/react'
import LoadingSpinner from '@/components/ui/LoadingSpinner'

export default function SurveysPage() {
  const { status } = useSession()
  const [isCreating, setIsCreating] = useState(false)

  if (status === 'loading') {
    return <LoadingSpinner />
  }

  return (
    <MainLayout>
      <div className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Surveys</h1>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="py-4">
            {isCreating ? (
              <div className="bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-medium text-gray-900">Create New Survey</h2>
                    <button
                      onClick={() => setIsCreating(false)}
                      className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Back to List
                    </button>
                  </div>
                  <SurveyForm
                    type="TEENAGE_PREGNANCY"
                    onSubmit={(data) => {
                      console.log(data)
                      setIsCreating(false)
                    }}
                  />
                </div>
              </div>
            ) : (
              <div className="bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <SurveyList />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  )
} 