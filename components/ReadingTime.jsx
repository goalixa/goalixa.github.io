export default function ReadingTime({ content }) {
  // Average reading speed: 200 words per minute
  const wordsPerMinute = 200

  const calculateReadingTime = (text) => {
    if (!text) return 1

    // Remove code blocks and special characters
    const cleanText = text
      .replace(/```[\s\S]*?```/g, '') // Remove code blocks
      .replace(/`[^`]+`/g, '') // Remove inline code
      .replace(/[#*_~`]/g, '') // Remove markdown syntax

    const words = cleanText.trim().split(/\s+/).length
    const minutes = Math.ceil(words / wordsPerMinute)

    return minutes
  }

  const minutes = calculateReadingTime(content)

  return (
    <span className="reading-time">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }}
      >
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
      {minutes} min read
    </span>
  )
}
