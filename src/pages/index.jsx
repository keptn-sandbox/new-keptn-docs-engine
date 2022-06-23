import React from 'react';
import { Redirect } from '@docusaurus/router';
import Head from '@docusaurus/Head';

export default function Homepage() {
  return (
    <>
      <Head>
        <meta title="Keptn Docs" />
        <meta property="og:title" content="Keptn Docs" />
        <meta
          property="og:description"
          content="keptn | Cloud-native application life-cycle orchestration"
        />
        <meta
          property="description"
          content="keptn | Cloud-native application life-cycle orchestration"
        />
        <link rel="canonical" href="https://keptn.sh/" />
      </Head>
      <Redirect to="/docs/home/introduction" />
    </>
  );
}
