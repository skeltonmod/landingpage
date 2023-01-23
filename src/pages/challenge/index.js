
import React, { useEffect } from "react";
import { Helmet } from 'react-helmet'


// components
import Layout from '../../components/layout'
import PreLoader from '../../components/Preloader'
import Seo from "../../components/seo"

const IndexPage = ({serverData}) => {
    return (
        <>
            <Helmet>
                <title>{serverData?.title}</title>
                <meta name="description" content={serverData?.description} />
                <meta property="og:image" content={serverData?.photo} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content={serverData?.title} />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:title" content={serverData?.title} />
                <meta property="og:description" content={serverData?.description} />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:creator" content={'give&get'} />
                <meta name="twitter:title" content={serverData?.title} />
                <meta name="twitter:description" content={serverData?.description} />
            </Helmet>
            <Layout>
                <div
                    className="flex flex-col h-screen justify-between"
                    style={{
                        backgroundImage:
                            "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1051%26quot%3b)' fill='none'%3e%3cpath d='M1427.064%2c180.51C1468.124%2c177.658%2c1504.703%2c155.567%2c1524.923%2c119.717C1544.78%2c84.511%2c1543.085%2c42.811%2c1525.165%2c6.58C1504.635%2c-34.928%2c1473.352%2c-76.784%2c1427.064%2c-78.139C1379.181%2c-79.541%2c1342.646%2c-40.834%2c1318.481%2c0.528C1294.044%2c42.356%2c1277.419%2c93.69%2c1302.443%2c135.169C1326.917%2c175.736%2c1379.8%2c183.793%2c1427.064%2c180.51' fill='rgba(37%2c 40%2c 52%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M275.898%2c627.441C323.747%2c625.078%2c359.924%2c589.071%2c383.425%2c547.324C406.387%2c506.534%2c418.655%2c456.863%2c394.492%2c416.773C370.907%2c377.642%2c321.55%2c367.083%2c275.898%2c368.919C233.869%2c370.61%2c196.208%2c390.775%2c172.753%2c425.692C145.764%2c465.87%2c126.224%2c515.842%2c148.257%2c558.937C171.816%2c605.018%2c224.207%2c629.994%2c275.898%2c627.441' fill='rgba(37%2c 40%2c 52%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1245.871%2c569.278C1301.903%2c569.521%2c1353.848%2c539.312%2c1381.549%2c490.605C1408.946%2c442.433%2c1407.709%2c382.805%2c1378.822%2c335.511C1351.094%2c290.113%2c1299.03%2c270.449%2c1245.871%2c268.468C1188.218%2c266.32%2c1124.432%2c275.554%2c1094.573%2c324.919C1063.979%2c375.499%2c1081.101%2c439.175%2c1112.22%2c489.434C1141.5%2c536.724%2c1190.251%2c569.036%2c1245.871%2c569.278' fill='rgba(37%2c 40%2c 52%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M968.051%2c385.697C992.561%2c385.067%2c1015.395%2c372.826%2c1027.579%2c351.55C1039.691%2c330.401%2c1039.399%2c304.12%2c1026.669%2c283.337C1014.467%2c263.416%2c991.401%2c255.089%2c968.051%2c254.362C943.067%2c253.584%2c916.347%2c258.505%2c902.751%2c279.48C888.124%2c302.046%2c888.895%2c331.841%2c902.979%2c354.75C916.461%2c376.68%2c942.316%2c386.358%2c968.051%2c385.697' fill='rgba(37%2c 40%2c 52%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1051'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e\")",
                    }}
                >
                    <PreLoader />
                </div>
            </Layout>
        </>
    )
}



export async function getServerData({ page, pageContext }) {
    try {

        console.log('page', pageContext)
        const res = await fetch(`https://api.givenget.org/api/lp/challenge/squat-challenge-ofK3csMeTI`, {
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

export default IndexPage