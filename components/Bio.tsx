import { m } from 'framer-motion'

export default function Bio() {
  return (
    <m.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.8 }}
      className="max-w-3xl text-center my-8 mx-auto"
    >
      <p className="text-lg text-gray-400 leading-relaxed">
        Bunch of Telegram Bots and Games with a few Services
      </p>
    </m.section>
  )
}
