import { motion } from 'framer-motion'
import AchievementCard from './AchievementCard'

const rotations = [-1.2, 1, -0.8, 1.3, -1, 0.7]

export default function AchievementsGrid({ items = [] }) {
  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-10 sm:gap-14">
      {items.map((item, i) => (
        <motion.div
          key={item.id || i}
          initial={{
            opacity: 0,
            y: 45,
            scale: 0.94,
            rotate: i % 2 === 0 ? -3 : 3,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: rotations[i % rotations.length],
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.65,
            delay: Math.min(i * 0.08, 0.4),
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <AchievementCard
            item={item}
            rotate={rotations[i % rotations.length]}
          />
        </motion.div>
      ))}
    </div>
  )
}