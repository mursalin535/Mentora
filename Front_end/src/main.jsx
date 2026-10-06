import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'

import App from './App.jsx'
import './App.css'

import Home from './components/Home/Home.jsx'
import FAQs from './components/FAQs/FAQs.jsx'
import NewsPage from './components/News/NewsPage.jsx'
import AlumniPage from './components/Alumni/AlumniPage.jsx'
import AchievementsPage from './components/Achievements/AchievementsPage.jsx'
import ProfilePage from './components/Profile/ProfilePage.jsx'
import OnboardingPage from './components/Onboarding/OnboardingPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'faqs', element: <FAQs /> },
      { path: 'news', element: <NewsPage /> },
      { path: 'alumni', element: <AlumniPage /> },
      { path: 'achievements', element: <AchievementsPage /> },
      { path: 'profile', element: <ProfilePage /> },
      { path: 'profile/:userId', element: <ProfilePage /> },
      { path: 'onboarding', element: <OnboardingPage /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)