import { motion } from 'framer-motion'
import AlumniCard from './AlumniCard'

const rotations = [-3, 2, -1.5, 1.5, -2, 2.5]

export default function AlumniGrid({ people }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-14 lg:gap-12 items-start justify-items-center">
      {people.map((person, i) => (
        <motion.div
          key={person.id}
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: Math.min((i % 3) * 0.14, 0.4), ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-[250px]"
        >
          <AlumniCard person={person} rotate={rotations[i % rotations.length]} tapeAlt={i % 2 !== 0} />
        </motion.div>
      ))}
    </div>
  )
}