import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null)
  const [profile, setProfile] = useState(null)
  const [needsOnboarding, setNeedsOnboarding] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
      setLoading(false)
    })
    const { data: listener } = supabase.auth.onAuthStateChange((_event, sess) => {
      setSession(sess)
    })
    return () => listener.subscription.unsubscribe()
  }, [])

  useEffect(() => {
    if (!session?.user) {
      setProfile(null)
      setNeedsOnboarding(false)
      return
    }

    async function loadProfileAndCheckOnboarding() {
      const { data: profileRow } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single()

      setProfile(profileRow)
      if (!profileRow) return

      if (profileRow.role === 'candidate') {
        const { data: candidateRow } = await supabase
          .from('candidate_profiles')
          .select('user_id')
          .eq('user_id', session.user.id)
          .maybeSingle()
        setNeedsOnboarding(!candidateRow)
      } else if (profileRow.role === 'mentor') {
        const { data: mentorRow } = await supabase
          .from('mentor_profiles')
          .select('user_id')
          .eq('user_id', session.user.id)
          .maybeSingle()
        setNeedsOnboarding(!mentorRow)
      } else {
        setNeedsOnboarding(false)
      }
    }

    loadProfileAndCheckOnboarding()
  }, [session])

  const signInWithGoogle = () => supabase.auth.signInWithOAuth({ provider: 'google' })
  const signOut = () => supabase.auth.signOut()

  return (
    <AuthContext.Provider
      value={{ session, profile, needsOnboarding, loading, signInWithGoogle, signOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)