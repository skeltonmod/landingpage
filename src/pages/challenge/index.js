
import React from "react";

// components
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const IndexPage = () => {
    return (
        <Layout>
            <div className='grid h-screen place-content-center'>
                <p className="uppercase tracking-widest text-gray-500">Give & Get Nothing to show here 🦾 🤖 </p>
            </div>
        </Layout>
    )
}

export const Head = () => <Seo
    title="Share Give & Get"
    description="We’re bringing charitable giving into the modern era with the latest mobile application technology, and linking it to the growing popularity of people participating in challenges for a cause. Only with the Give + Get app, YOU get to decide which cause is worthy of receiving your hard-earned money."
    image="https://givenget.org/img/main-screen2x.png"
/>

export default IndexPage