import React from 'react'
import { Helmet } from 'react-helmet'

const id = ({ id, serverData }) => {
  console.log(id, serverData)
  return (
    <Helmet>
      <title>{serverData?.title}</title>
      <meta name="description" content={serverData?.description} />
      <meta property="og:image" content={serverData?.image} />
      <meta property="og:title" content={serverData?.title} />
      <meta property="og:description" content={serverData?.description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={'give&get'} />
      <meta name="twitter:title" content={serverData?.title} />
      <meta name="twitter:description" content={serverData?.description} />
    </Helmet>
  )
}

export async function getServerData({ params }) {
  const { id } = params
  try {
    const res = await fetch(`https://api.givenget.org/api/lp/challenge/${id}`, {
      method: `GET`,
    })
    if (!res.ok) {
      throw new Error(`Response failed`)
    }

    return {
      props: await res.json(),
    }
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    }
  }

}

export default id