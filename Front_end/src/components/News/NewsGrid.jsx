import { motion } from 'framer-motion'
import NewsCard from './NewsCard'

export default function NewsGrid({ items }) {
  return (
    <div className="flex flex-col gap-6">
      {items.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: Math.min(i * 0.06, 0.4), ease: 'easeOut' }}
        >
          <NewsCard item={item} />
        </motion.div>
      ))}
    </div>
  )
}