import React from 'react'
import { Helmet } from 'react-helmet'

// components
import Layout from '../../components/layout'
import PostMain from '../../components/post/PostMain'

const id = ({ serverData }) => {
  return (
    <>
      <Helmet>
        <title>{serverData?.title}</title>
        <meta name="description" content={serverData?.description} />
        <meta property="og:image" content={serverData?.photo} />
        <meta property="og:title" content={serverData?.title} />
        <meta property="og:description" content={serverData?.description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content={'give&get'} />
        <meta name="twitter:title" content={serverData?.title} />
        <meta name="twitter:description" content={serverData?.description} />
      </Helmet>

      <Layout>
        <PostMain newsfeedData={serverData} />
      </Layout>

    </>
  )
}

export async function getServerData({ params }) {
  const { id } = params

  try {
    
    const res = await fetch(`https://api.givenget.org/api/landing/posts/${id}`, {
      method: `GET`,
    })
    
    if (!res.ok) {
      throw new Error(`Response failed`)
    }

    return {
      status: 200,
      props: await res.json(),
    }
    
  } catch (error) {
    return {
      status: 404,
      props: {}, 
    }
  }

}

export default id