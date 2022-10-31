import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

	const isProd = process.env.NODE_ENV === "production";
	const router = useRouter();

	useEffect(() => {

	let location = window.location;

	if (isProd) {

		if (location.href.search(".html") < 0) {
			location.replace(`${location.href}.html`);
		}

	}

	}, [router.asPath]);

	return (
		<Component {...pageProps} />
	);

}

export default MyApp;
