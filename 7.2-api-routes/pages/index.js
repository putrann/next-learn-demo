import useSWR from 'swr'

const fetcher = url => {
  return fetch(url).then(r => r.json())
}

export default function Index() {
  const { data, error } = useSWR('/api/randomQuote', fetcher)
  console.log('data', data)
  let author = data?.author
  let quote = data?.quote
  if (!data) {
    quote = 'Loading'
  }
  if (error) {
    quote = 'Error'
  }

  return (
    <main className="center">
      <div className="quote">{quote}</div>
      <span className="author"> - {author} </span>

      <style jsx>{`
        main {
          width: 90%;
          max-width: 900px;
          margin: 300px auto;
          text-align: center;
        }
        .quote {
          font-family: cursive;
          color: #e243de;
          font-size: 24px;
          padding-bottom: 10px;
        }
        .author {
          font-family: sans-serif;
          color: #559834;
          font-size: 20px;
        }
      `}</style>
    </main>
  )
}
