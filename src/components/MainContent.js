// import AboutContent from './AboutContent'
// import BlogContent from './BlogContent'
// import StudyContent from './StudyContent'

// export default function MainContent({ activeMenu }) {
//   switch (activeMenu) {
//     case 'About':
//       return <AboutContent />
//     case 'Blog':
//       return <BlogContent />
//     case 'Study':
//       return <StudyContent />
//     default:
//       return <AboutContent />
//   }
// }

import GitHubCommits from './sections/GithubCommits'
import PostList from './sections/PostList'
import OtherSection from './sections/OtherSection'
// import Footer from './Footer'
import Sidebar from './Sidebar'

export default function MainContent() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Main Section */}
      <main className="flex-1 bg-white px-4 md:px-8 py-10">
        <div className="w-full space-y-10">
          {/* 인사 문구 */}
          <section className="px-2 md:px-6 lg:px-12">
            <h1 className="text-3xl md:text-4xl font-bold">안녕하세요! UrbanFIare입니다 👋</h1>
            <p className="text-gray-600 mt-2">기록은 더 나은 방향을 만든다고 믿습니다.</p>
          </section>

          {/* GitHub 커밋 이력 */}
          <section className="px-2 md:px-6 lg:px-12">
            <GitHubCommits />
          </section>

          {/* 작성글 목록 */}
          <section className="px-2 md:px-6 lg:px-12">
            <PostList />
          </section>

          {/* 기타 영역 */}
          <section className="px-2 md:px-6 lg:px-12">
            <OtherSection />
          </section>
        </div>

        {/* Footer */}
        {/* <div className="mt-16 px-2 md:px-6 lg:px-12">
          <Footer />
        </div> */}
      </main>
    </div>
  )
}
