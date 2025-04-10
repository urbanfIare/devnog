import { motion } from 'framer-motion'
import { useEffect } from 'react'

export default function Hero({ onEnd }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onEnd()
    }, 3000)
    return () => clearTimeout(timer)
  }, [onEnd])

  return (
    <motion.section
      className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      {/* 아래에서 위로 밝아지는 배경 */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full z-0"
        initial={{ background: 'linear-gradient(to top, #000000, #000000)' }}
        animate={{ background: 'linear-gradient(to top, #ffffff10, #000000)' }}
        transition={{ duration: 2 }}
      />

      {/* 텍스트 콘텐츠 */}
      <div className="relative z-10 px-4 pb-20"> {/* padding bottom 확보 */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          UrbanFIare
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          기록은 더 나은 방향을 만든다
        </motion.p>
      </div>

      {/* 푸터 */}
      <motion.footer
        className="absolute bottom-4 text-xs text-slate-400 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        © 2025 UrbanFIare. Made with 💙 by You.
      </motion.footer>
    </motion.section>
  )
}
