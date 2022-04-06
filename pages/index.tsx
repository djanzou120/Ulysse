import type {NextPage} from 'next'
import Head from 'next/head'

import SideBar from "../app/components/SideBar";
import MobileNavBar from "../app/components/MobileNavBar";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className="dark:bg-black h-screen w-screen dark:text-white text-black bg-white">
                <SideBar/>
                <MobileNavBar/>
            </main>
        </div>
    )
}

export default Home
