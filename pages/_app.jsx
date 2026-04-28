import '../styles/welcome.css'
import '../styles/posts.css'
import '../styles/about.css'
import '../styles/journey.css'
import '../styles/architecture.css'
import '../styles/timeline.css'
import '../styles/category.css'
import '../styles/post.css'
import ReadingProgress from '../components/ReadingProgress'

export default function App({ Component, pageProps }) {
  return (
    <>
      <ReadingProgress />
      <Component {...pageProps} />
    </>
  )
}
