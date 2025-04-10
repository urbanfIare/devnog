import AboutContent from './AboutContent'
import BlogContent from './BlogContent'
import StudyContent from './StudyContent'

export default function MainContent({ activeMenu }) {
  switch (activeMenu) {
    case 'About':
      return <AboutContent />
    case 'Blog':
      return <BlogContent />
    case 'Study':
      return <StudyContent />
    default:
      return <AboutContent />
  }
}
