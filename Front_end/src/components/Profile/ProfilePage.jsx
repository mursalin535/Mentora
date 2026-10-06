import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../../lib/supabaseClient'
import { useAuth } from '../../context/AuthContext'
import ProfileHeader from './ProfileHeader'
import ProfileDetails from './ProfileDetails'
import ProfileStats from './ProfileStats'

export default function ProfilePage() {
  const { userId } = useParams()
  const { session } = useAuth()

  const targetId = userId || session?.user?.id

  const [profile, setProfile] = useState(null)
  const [roleData, setRoleData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const isOwnProfile = session?.user?.id === targetId

  useEffect(() => {
    if (!targetId) {
      setLoading(false)
      return
    }

    async function loadProfile() {
      setLoading(true)
      setError(null)

      const { data: profileRow, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', targetId)
        .single()

      if (profileError || !profileRow) {
        setError('Profile not found.')
        setLoading(false)
        return
      }

      setProfile(profileRow)

      // fetch role-specific data
      if (profileRow.role === 'mentor') {
        const { data: mentorRow } = await supabase
          .from('mentor_profiles')
          .select('*')
          .eq('user_id', targetId)
          .single()

        if (mentorRow) {
          const [uniRes, deptRes] = await Promise.all([
            mentorRow.university_id
              ? supabase.from('institutions').select('name').eq('id', mentorRow.university_id).single()
              : Promise.resolve({ data: null }),
            mentorRow.department_id
              ? supabase.from('departments').select('name').eq('id', mentorRow.department_id).single()
              : Promise.resolve({ data: null }),
          ])
          setRoleData({
            ...mentorRow,
            universityName: uniRes.data?.name,
            departmentName: deptRes.data?.name,
          })
        }
      } else if (profileRow.role === 'candidate') {
        const { data: candidateRow } = await supabase
          .from('candidate_profiles')
          .select('*')
          .eq('user_id', targetId)
          .single()

        if (candidateRow) {
          const [schoolRes, collegeRes] = await Promise.all([
            candidateRow.school_id
              ? supabase.from('institutions').select('name').eq('id', candidateRow.school_id).single()
              : Promise.resolve({ data: null }),
            candidateRow.college_id
              ? supabase.from('institutions').select('name').eq('id', candidateRow.college_id).single()
              : Promise.resolve({ data: null }),
          ])
          setRoleData({
            ...candidateRow,
            schoolName: schoolRes.data?.name,
            collegeName: collegeRes.data?.name,
          })
        }
      }

      setLoading(false)
    }

    loadProfile()
  }, [targetId])

  if (!targetId) {
    return (
      <div className="min-h-screen flex items-center justify-center px-5" style={{ backgroundColor: '#FCFAF4' }}>
        <p className="text-[#4A453B] text-lg">প্রোফাইল দেখতে আগে লগইন করো।</p>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#FCFAF4' }}>
        <p className="text-[#4A453B] font-hand text-2xl animate-pulse">Loading profile...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#FCFAF4' }}>
        <p className="text-[#993C1D] text-lg">{error}</p>
      </div>
    )
  }

  return (
    <div
      className="min-h-screen font-body text-[#2C2C2A] py-14 sm:py-20 px-5 sm:px-7"
      style={{
        backgroundColor: '#FCFAF4',
        backgroundImage: 'repeating-linear-gradient(#FCFAF4 0px, #FCFAF4 31px, #DCE6ED 32px)',
      }}
    >
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        <ProfileHeader profile={profile} roleData={roleData} isOwnProfile={isOwnProfile} />
        <ProfileStats profile={profile} />
        <ProfileDetails profile={profile} roleData={roleData} />
      </div>
    </div>
  )
}