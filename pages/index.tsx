import Head from "next/head";
import Layout, { siteTitle } from "../components/layout/Layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
    const selfIntroduction: string = "I'm a Software Engineer and a Computer Science student. ";
    const ContactInfo = () => (
        <span>
            You can contact me on{" "}
            <a
                href="https://www.linkedin.com/in/jes%C3%BAs-alejandro-rojas-villarroel-b13272174/?locale=en_US"
                target="blank"
            >
                LinkedIn
            </a>
        </span>
    );

    return (
        <Layout home={true}>
            <>
                <Head>
                    <title>{siteTitle}</title>
                </Head>
                <section className={utilStyles.headingMd}>
                    <p>
                        {selfIntroduction}
                        {ContactInfo()}
                    </p>
                    <p>
                        (This is a sample website - you’ll be building a site like this on{" "}
                        <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                    </p>
                </section>
            </>
        </Layout>
    );
}
