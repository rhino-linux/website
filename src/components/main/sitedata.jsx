import Head from 'next/head';

export default function SiteData({ title, description }) {
  return (
    <Head>
      <title>{`${title} | Rhino Linux`}</title>
      <meta name="description" content={description || "Ubuntu Based, Rolling Release"} />
      <meta name="og:site_name" content="Rhino Linux" />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description || "Ubuntu Based, Rolling Release"} />
      <meta name="darkreader-lock" />
      <meta name="theme-color" content="#8d7be4" />
    </Head>
  );
}