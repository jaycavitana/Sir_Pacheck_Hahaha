import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import React from 'react'
import PropTypes from 'prop-types'

function Home ({ allPostsData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className="container mx-auto">
                <p>Being a product of a startup technology company, I am trained not just in programming, but also to do project management and client presentations. With a vast experience in web and hybrid mobile applications development, I transform ideas into reality. Visionary and passionate, I always make sure that programs I deliver are of quality and can be of help to the attainment of clients`&apos;` mission and vision.</p>

                <p>I am well versed in programming and scripting languages like PHP and JavaScript (Angular and React). I am also knowledgeable in other technology stacks like NativeScript, Firebase, Bootstrap, Java Spring Boot and C# .NET.</p>

                <p>I am a data science hobbyist and enjoy analysing data. If given the chance, I want to pursue a career in Big Data, Artificial Intelligence, and Machine Learning. Tools and languages I`&apos;`m currently using include R, Python, and Tableau.</p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blogs about NextJS</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href="/posts/[id]" as={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}

Home.propTypes = {
    allPostsData: PropTypes.func
}

export async function getStaticProps () {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default Home
