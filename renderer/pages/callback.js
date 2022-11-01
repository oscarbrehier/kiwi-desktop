import { useRouter } from 'next/router';
import { useEffect } from 'react';
import {addToken,getToken} from '../json/token';
import Head from 'next/head';
import { Fragment } from 'react';

const Callback = () => {

    const router = useRouter();
    const { asPath } = useRouter();
    const token = asPath.slice(23, -34);

    useEffect(() => {

        console.log(token)
        addToken(token);
        console.log(getToken())
        router.push('/main');

    });

    return (

        <Fragment>
            <Head>
                <title>Kiwi - Music with friends</title>
            </Head>
            <div></div>
        </Fragment>

    );

};

export default Callback;