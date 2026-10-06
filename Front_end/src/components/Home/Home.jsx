import Hero from './Hero'
import Intro from './Intro'
import NewsSection from './NewsSection'
import AchievementsSection from './AchievementsSection'
import MentorConnect from './MentorConnect'
import TopMentors from './TopMentors'

export default function Home() {
  return (
    <div
      className="min-h-screen font-body text-ink"
      style={{
        backgroundColor: '#FCFAF4',
        backgroundImage:
          'repeating-linear-gradient(#FCFAF4 0px, #FCFAF4 31px, #DCE6ED 32px)',
      }}
    >
      <Hero />
      <Intro />
      <NewsSection />
      <AchievementsSection />
      <MentorConnect />
      <TopMentors />
    </div>
  )
}