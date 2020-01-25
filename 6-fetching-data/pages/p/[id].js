import { useRouter } from 'next/router'
import Layout from '../../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

export default function Post({ show }) {
  return (
    <Layout>
      <h1>{show.name}</h1>
      <p>{show.summary.replace(/<[/]?[pb]>/g, '')}</p>
      {show.image ? <img src={show.image.medium}></img> : null}
    </Layout>
  )
}

Post.getInitialProps = async function(context) {
  const { id } = context.query
  const req = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await req.json()

  console.log('data', show) // only show in browser cause navigate post info via client side
  return { show }
}
