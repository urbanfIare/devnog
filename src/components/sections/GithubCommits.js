import { useEffect, useState } from 'react'

export default function GitHubCommits() {
  const [heatmapData, setHeatmapData] = useState([])

  useEffect(() => {
    async function fetchHeatmap() {
      const res = await fetch('https://github-contributions-api.jogruber.de/v4/urbanfiare?y=2024')
      const data = await res.json()
      setHeatmapData(data.contributions)
    }
    fetchHeatmap()
  }, [])

  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-6">🔥 GitHub 커밋 히트맵 (2024)</h2>
      <div className="overflow-x-auto">
        <div className="flex">
          {/* 요일 라벨 */}
          <div className="flex flex-col justify-between text-xs text-gray-400 py-1 mr-2 h-[112px]">
            <span>Mon</span>
            <span>Wed</span>
            <span>Fri</span>
          </div>

          {/* 히트맵 셀 */}
          <div className="grid grid-rows-7 grid-flow-col gap-1 p-2 border rounded-lg bg-white shadow-sm">
            {heatmapData.flat().map((day, idx) => (
              <div
                key={idx}
                className={`w-4 h-4 rounded-sm transition-all duration-200 ${getColor(day.count)}`}
                title={`Date: ${day.date}\nCommits: ${day.count}`}
              ></div>
            ))}
          </div>
        </div>

        {/* 색상 범례 */}
        <div className="mt-3 flex justify-end items-center text-sm text-gray-500 px-2 gap-2">
          <span>Less</span>
          <div className="flex gap-1">
            <div className="w-4 h-4 bg-gray-200 rounded-sm" />
            <div className="w-4 h-4 bg-green-200 rounded-sm" />
            <div className="w-4 h-4 bg-green-400 rounded-sm" />
            <div className="w-4 h-4 bg-green-600 rounded-sm" />
            <div className="w-4 h-4 bg-green-800 rounded-sm" />
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  )
}

function getColor(count) {
  if (count === 0) return 'bg-gray-200'
  if (count < 3) return 'bg-green-200'
  if (count < 6) return 'bg-green-400'
  if (count < 10) return 'bg-green-600'
  return 'bg-green-800'
}
