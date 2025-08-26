import { motion } from 'framer-motion'

export default function Section({ id, title, children, accent = 'rojoSuave' }) {
  return (
    <motion.section
      id={id}
      className={`w-full bg-white border-t-4 border-${accent} shadow-playful`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-bold mb-4 text-rojoSuave">{title}</h2>
        <div className="bg-fondo p-6 rounded-2xl">
          {children}
        </div>
      </div>
    </motion.section>
  )
}
