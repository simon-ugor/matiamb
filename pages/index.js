import Layout from "../components/Layout.js"

import Head from "next/head"

const index = () => {
    return (
        <Layout>
            <Head>
                <title>MATIAMB, s. r. o.</title>
                <meta name="description" content="Informácie o firme MATIAMB, s. r. o."></meta>
            </Head>
            <div className="main-body-div">
                <div className="body-div-one">
                    <h2 className="h2-heading">Základné informácie:</h2>
                    <br />
                    <p className="p-text">Obchodné meno: MATIAMB s.r.o.</p>
                    <br />
                    <p className="p-text">IČO: 47 413 310</p>
                    <br />
                    <p className="p-text">Právna forma: Spoločnosť s ručením obmedzeným</p>
                    <br />
                    <p className="p-text">Deň zápisu: 07.11.2013</p>
                </div>

                <div className="body-div-two">
                    <h2 className="map-h2">Sídlo spoločnosti:</h2>
                    <iframe className="map" width="92%" height="450" frameBorder="" scrolling="no" marginHeight="0" marginWidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=W.%20Schiffera%205%20Trnava+(MATIAMB)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <a href='https://www.symptoma.sk/sk/info/covid-19#info'>SARS-CoV-2</a> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=51a6ed110e48cf5bc0de94d3ad6da25ca8f9ea35'></script>
                </div>
            </div>
        </Layout>
    )
}

export default index