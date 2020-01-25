import Layout from '../components/MyLayout.js'
import Link from 'next/link'

const PostLink = ({ title }) => (
  <li>
    <Link href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
)
export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink title="Lesson 1" />
        <PostLink title="Lesson 2" />
        <PostLink title="Lesson 3" />
      </ul>
    </Layout>
  )
}
