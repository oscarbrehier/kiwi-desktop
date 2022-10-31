import { useRouter } from 'next/router';
import { useEffect } from 'react';
import {addToken,getToken} from '../json/token';

const Callback = () => {

    const router = useRouter();
    const { asPath } = useRouter();
    const token = asPath.slice(23, -34);

    // const [cookie, setCookie] = useCookies(['access_token']);

    useEffect(() => {

        console.log(token)
        addToken(token);
        console.log(getToken())
        router.push('/main');

    });

    return (

        <div>

        </div>

    );

};

export default Callback;