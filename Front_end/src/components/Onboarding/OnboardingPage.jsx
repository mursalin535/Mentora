import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../lib/supabaseClient'
import { useAuth } from '../../context/AuthContext'
import ProgressPath from './ProgressPath'
import RoleSelectStep from './RoleSelectStep'
import CandidateDetailsStep from './CandidateDetailsStep'
import MentorDetailsStep from './MentorDetailsStep'

export default function OnboardingPage() {
  const { session } = useAuth()
  const navigate = useNavigate()

  const [step, setStep] = useState(1)
  const [roleChoice, setRoleChoice] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  const [candidateForm, setCandidateForm] = useState({
    school: null, college: null, class_level: '', group_name: '', hsc_year: '',
  })
  const [mentorForm, setMentorForm] = useState({
    university: null, department: null, admission_year: '', current_year: '',
  })

  const handleSelectRole = (role) => {
    setRoleChoice(role)
    setStep(2)
  }

  const handleSubmit = async () => {
    if (!session?.user?.id) return
    setSubmitting(true)
    setError(null)

    if (roleChoice === 'candidate') {
      const { error: insertError } = await supabase.from('candidate_profiles').upsert({
        user_id: session.user.id,
        school_id: candidateForm.school?.id || null,
        college_id: candidateForm.college?.id || null,
        class_level: candidateForm.class_level || null,
        group_name: candidateForm.group_name || null,
        hsc_year: candidateForm.hsc_year ? Number(candidateForm.hsc_year) : null,
      })

      if (insertError) {
        setError(insertError.message)
        setSubmitting(false)
        return
      }

      await supabase.from('profiles').update({ role: 'candidate' }).eq('id', session.user.id)
    } else {
      const { error: insertError } = await supabase.from('mentor_profiles').upsert({
        user_id: session.user.id,
        university_id: mentorForm.university?.id || null,
        department_id: mentorForm.department?.id || null,
        admission_year: mentorForm.admission_year ? Number(mentorForm.admission_year) : null,
        current_year: mentorForm.current_year ? Number(mentorForm.current_year) : null,
        verification_status: 'pending',
      })

      if (insertError) {
        setError(insertError.message)
        setSubmitting(false)
        return
      }
    }

    setSubmitting(false)
    navigate('/')
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-5 py-14"
      style={{
        backgroundColor: '#FCFAF4',
        backgroundImage: 'repeating-linear-gradient(#FCFAF4 0px, #FCFAF4 31px, #DCE6ED 32px)',
      }}
    >
      <div
        className="w-full max-w-lg rounded-2xl bg-white p-6 sm:p-8"
        style={{ boxShadow: '4px 8px 20px rgba(60,52,50,0.12)' }}
      >
        <div className="text-center mb-6">
          <span className="font-hand text-xl font-bold text-[#26215C]">Welcome to Mentora ✈️</span>
        </div>

        <ProgressPath step={step} totalSteps={2} />

        {error && (
          <p className="text-sm text-[#993C1D] bg-[#FFE3D1] rounded-md px-4 py-2 mb-4">{error}</p>
        )}

        {step === 1 && <RoleSelectStep onSelect={handleSelectRole} />}

        {step === 2 && roleChoice === 'candidate' && (
          <CandidateDetailsStep
            form={candidateForm}
            onChange={(k, v) => setCandidateForm((f) => ({ ...f, [k]: v }))}
            onBack={() => setStep(1)}
            onSubmit={handleSubmit}
            submitting={submitting}
          />
        )}

        {step === 2 && roleChoice === 'mentor' && (
          <MentorDetailsStep
            form={mentorForm}
            onChange={(k, v) => setMentorForm((f) => ({ ...f, [k]: v }))}
            onBack={() => setStep(1)}
            onSubmit={handleSubmit}
            submitting={submitting}
          />
        )}
      </div>
    </div>
  )
}