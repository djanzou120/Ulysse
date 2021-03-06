import type {NextPage} from 'next'
import Head from 'next/head'
import React, {Fragment, useContext} from "react";

import ReactPageScroller from "react-page-scroller";

import SideBar from "../app/components/SideBar";
import MobileNavBar from "../app/components/MobileNavBar";
import ThemeToggle from "../app/components/ThemeToggle";
import {useState} from "react";
import PageScrollElement from "../app/components/PageScrollElement";
import SkillPage from "../app/components/SkillPage";
import AboutPage from "../app/components/AboutPage";
import ShowcasePage from "../app/components/ShowcasePage";
import ContactPage from "../app/components/ContactPage";
import {ScrollPageContext} from "../app/context/ScrollPageContext";

const Home: NextPage = () => {
    const {currentPage, setCurrentPage} = useContext(ScrollPageContext)

    return (
        <div>
            <Head>
                <title>D.</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="author" content="D."/>
                <meta name="language" content="english" />
                <meta name="copyright" content="D Smart © 2022" />
                <meta name="description" content="Fullstack (Back End + Front End) developer Cameroon | Learning lover | D Smart"/>

                {/*  =========== Open Graph / Facebook =============> */}
                <meta property="og:title" content="Fullstack (Back End + Front End) developer Cameroon | Learning lover | D Smart"/>
                <meta property="og:description"
                      content="Fullstack (Back End + Front End) developer Cameroon | Learning lover | D Smart"/>
                <meta property="og:image" content={'/profile.png'}/>

                {/*  =========== Twitter =============> */}
                <meta property="twitter:title" content="Fullstack (Back End + Front End) developer Cameroon | Learning lover"/>
                <meta property="twitter:url" content="https://twitter.com/djanzou120"/>
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:description"
                      content="Fullstack (Back End + Front End) developer Cameroon | Learning lover | D Smart"/>
                <meta property="twitter:image" content={'/profile.png'}/>
            </Head>

            <main className="dark:bg-black h-screen w-screen dark:text-white text-black bg-white transition-colors duration-400">
                <SideBar/>
                <MobileNavBar/>
                <div className="fixed top-0 w-full md:flex hidden justify-end pt-9 z-20">
                    <div className="flex justify-center px-12">
                        <div className="flex items-center">
                            <ThemeToggle/>
                        </div>
                        <button
                            className="py-3 px-10 border border-green-600 border-2 rounded-full font-light uppercase text-sm hover:bg-green-600 hover:text-white dark:hover:text-black transition duration-300">
                            Telecharger mon CV
                        </button>
                    </div>
                </div>
                <div className="right-12 top-28 h-full w-12 fixed md:flex items-end flex-col hidden">
                    <div className="w-0.5 h-1/3 bg-green-600"/>
                    <div className="w-0.5 h-1/3 w-full flex justify-center">
                        <div className="top-1/2 absolute -rotate-90 dark:text-green-400 text-black cursor-pointer font-light text-sm">djanzou120@yahoo.fr</div>
                    </div>
                    <div className="w-0.5 h-1/3 bg-green-600 overflow-hidden relative">
                        <span className="myBounce w-0.5 h-52 bg-green-400 absolute"/>
                    </div>
                </div>
                <div className="w-full h-full top-0 absolute">
                    <React.Fragment>
                        <ReactPageScroller
                            pageOnChange={page => setCurrentPage(page)}
                            customPageNumber={currentPage}
                        >
                            <PageScrollElement>
                                <SkillPage/>
                            </PageScrollElement>
                            <PageScrollElement>
                                <AboutPage/>
                            </PageScrollElement>
                            <PageScrollElement>
                                <ShowcasePage/>
                            </PageScrollElement>
                            <PageScrollElement>
                                <ContactPage/>
                            </PageScrollElement>
                        </ReactPageScroller>
                    </React.Fragment>
                </div>
            </main>
        </div>
    )
}

export default Home
