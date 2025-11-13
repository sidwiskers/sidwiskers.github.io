import { m } from 'framer-motion'

export default function Footer() {
  return (
    <m.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mt-16 mb-8"
    >
      <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
      <p className="text-gray-400 mb-6 max-w-md mx-auto">
        Have an idea, a question, or just want to say hello? Reach out on Telegram.
      </p>
      <m.a
        href="https://t.me/sidwiskers"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg"
        whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(147, 51, 234, 0.5)' }}
        whileTap={{ scale: 0.95 }}
      >
        Message LastLife
      </m.a>
    </m.footer>
  )
}
