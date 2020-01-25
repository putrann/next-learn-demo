import Layout from '../components/MyLayout.js'
import { useRouter } from 'next/router'

export default function Post() {
  const router = useRouter()
  return (
    <Layout>
      <h1>{router.query.title}</h1>
      <p>This is content of lesson </p>
    </Layout>
  )
}
