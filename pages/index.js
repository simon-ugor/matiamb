import Layout from "../components/Layout.js"

import Head from "next/head"

import emailjs from "emailjs-com"

const index = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_xhpiebu', 'template_n2xgap7', e.target, 'user_3mYfrOcpDiD2jB1VinkuJ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    }

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
                    <div className="desktop-div">
                        <h2 className="h2-heading">Kontaktujte nás:</h2>
                        <form onSubmit={sendEmail}>
                            <input className="input-field" type="text" name="name" placeholder="Meno/Názov spoločnosti"></input>
                            <input className="input-field" type="email" name="email" placeholder="Váš email"></input>
                            <input className="input-field" type="text" name="subject" placeholder="Predmet"></input>
                            <textarea className="textarea" name="text" placeholder="Text"></textarea>
                            <br />
                            <button className="button">Odoslať</button>
                        </form>
                    </div>
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