import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

export default function Blog({ shows }) {
  return (
    <Layout>
      <h1>Batman TV show </h1>
      {shows.map(show => (
        <ul>
          <li>
            <Link href="/p/[id]" as={`/p/${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        </ul>
      ))}
      <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </Layout>
  )
}

Blog.getInitialProps = async function() {
  const req = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await req.json()
  console.log(data)
  console.log(`Show data fetched. Count: ${data.length}`)
  return {
    shows: data.map(entry => entry.show)
  }
}
