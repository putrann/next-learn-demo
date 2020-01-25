import Link from 'next/link'
export default function About() {
  return (
    <div>
      <Link href="/index">
        <button>Back to home</button>
      </Link>
      <p>This is the about page</p>
    </div>
  )
}
