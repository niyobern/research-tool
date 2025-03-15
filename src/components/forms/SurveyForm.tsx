'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const surveySchema = z.object({
  type: z.enum(['TEENAGE_PREGNANCY', 'HIV_AIDS', 'GBV']),
  respondentAge: z.number().min(10).max(100),
  gender: z.enum(['MALE', 'FEMALE', 'OTHER']),
  location: z.object({
    province: z.string().min(1),
    district: z.string().min(1),
    sector: z.string().min(1),
    cell: z.string().min(1),
    village: z.string().optional(),
  }),
  responses: z.record(z.string(), z.string())
})

type SurveyFormData = z.infer<typeof surveySchema>

interface SurveyFormProps {
  onSubmit: (data: SurveyFormData) => void
  type: 'TEENAGE_PREGNANCY' | 'HIV_AIDS' | 'GBV'
}

export default function SurveyForm({ onSubmit, type }: SurveyFormProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const { register, handleSubmit, formState: { errors } } = useForm<SurveyFormData>({
    resolver: zodResolver(surveySchema),
    defaultValues: {
      type,
    }
  })

  const handleFormSubmit = (data: SurveyFormData) => {
    onSubmit(data)
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-8 divide-y divide-gray-200">
      <div className="space-y-8 divide-y divide-gray-200">
        {currentStep === 1 && (
          <div className="pt-8">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">Respondent Information</h3>
              <p className="mt-1 text-sm text-gray-500">Please provide basic information about the respondent.</p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                  Age
                </label>
                <div className="mt-1">
                  <input
                    type="number"
                    {...register('respondentAge', { valueAsNumber: true })}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                {errors.respondentAge && (
                  <p className="mt-2 text-sm text-red-600">{errors.respondentAge.message}</p>
                )}
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                  Gender
                </label>
                <div className="mt-1">
                  <select
                    {...register('gender')}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option value="">Select gender</option>
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                    <option value="OTHER">Other</option>
                  </select>
                </div>
                {errors.gender && (
                  <p className="mt-2 text-sm text-red-600">{errors.gender.message}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="pt-8">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">Location Information</h3>
              <p className="mt-1 text-sm text-gray-500">Please provide the location details.</p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="province" className="block text-sm font-medium text-gray-700">
                  Province
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    {...register('location.province')}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="district" className="block text-sm font-medium text-gray-700">
                  District
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    {...register('location.district')}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="sector" className="block text-sm font-medium text-gray-700">
                  Sector
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    {...register('location.sector')}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="cell" className="block text-sm font-medium text-gray-700">
                  Cell
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    {...register('location.cell')}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="pt-8">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">Survey Questions</h3>
              <p className="mt-1 text-sm text-gray-500">Please answer the following questions.</p>
            </div>

            <div className="mt-6 space-y-6">
              {/* Dynamic questions based on survey type */}
              {type === 'TEENAGE_PREGNANCY' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Are you aware of any teenage pregnancies in your community?
                    </label>
                    <div className="mt-1">
                      <select
                        {...register('responses.awareness')}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      >
                        <option value="">Select an answer</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              {type === 'HIV_AIDS' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Do you know where to get tested for HIV?
                    </label>
                    <div className="mt-1">
                      <select
                        {...register('responses.testing_knowledge')}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      >
                        <option value="">Select an answer</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              {type === 'GBV' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Are you aware of any GBV support services in your area?
                    </label>
                    <div className="mt-1">
                      <select
                        {...register('responses.support_services')}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      >
                        <option value="">Select an answer</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="pt-5">
        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => setCurrentStep(step => Math.max(1, step - 1))}
            className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Previous
          </button>
          <button
            type={currentStep === 3 ? 'submit' : 'button'}
            onClick={() => currentStep < 3 && setCurrentStep(step => step + 1)}
            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {currentStep === 3 ? 'Submit' : 'Next'}
          </button>
        </div>
      </div>
    </form>
  )
} 