import Head from 'next/head';
import type { ReactNode } from 'react';

interface SeoProps {
  title: string;
  description: string;
  keywords?: string[];
  jsonLd?: object | object[];
  canonical?: string;
}

export default function Seo({ title, description, keywords, jsonLd, canonical }: SeoProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      {canonical && <link rel="canonical" href={canonical} />}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </Head>
  );
}
