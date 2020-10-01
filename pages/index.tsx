import Head from "next/head";
import Layout, { siteTitle } from "../components/layout/Layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

const Home = ({ allPostsData }): JSX.Element => {
    const selfIntroduction: string = "I'm a Software Engineer and a Computer Science student. ";
    const ContactInfo = (): JSX.Element => (
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
                        <a href="https://nextjs.org/learn" target="blank">
                            our Next.js tutorial
                        </a>
                        .)
                    </p>
                </section>
                <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                    <h2 className={utilStyles.headingLg}>Blog</h2>
                    <ul className={utilStyles.list}>
                        {allPostsData.map(({ id, date, title }) => (
                            <li className={utilStyles.listItem} key={id}>
                                {title}
                                <br />
                                {id}
                                <br />
                                {date}
                            </li>
                        ))}
                    </ul>
                </section>
            </>
        </Layout>
    );
};

export const getStaticProps = async () => {
    const allPostsData = getSortedPostsData();

    return {
        props: {
            allPostsData,
        },
    };
};

export default Home;
