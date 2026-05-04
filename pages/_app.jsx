import '../styles/welcome.css'
import '../styles/posts.css'
import '../styles/about.css'
import '../styles/journey.css'
import '../styles/architecture.css'
import '../styles/timeline.css'
import '../styles/category.css'
import '../styles/post.css'
import '../styles/navigation.css'
import '../styles/search.css'
import '../styles/mobile.css'
import '../styles/mermaid.css'
import '../styles/services.css'
import ReadingProgress from '../components/ReadingProgress'

export default function App({ Component, pageProps }) {
  return (
    <>
      <ReadingProgress />
      <Component {...pageProps} />
    </>
  )
}
