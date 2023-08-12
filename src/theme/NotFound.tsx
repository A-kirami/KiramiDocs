import React from 'react';
import {translate} from '@docusaurus/Translate';
import {PageMetadata} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function NotFound(): JSX.Element {
  return (
    <>
      <PageMetadata
        title={translate({
          id: 'theme.NotFound.title',
          message: 'Page Not Found',
        })}
      />
      <Layout>
        <main className="container margin-vert--xl">
          <div className="h-full flex flex-col items-center justify-center gap-8 mt-1/5">
            <div className="text-5xl text-gray-400"></div>
            <div className="text-5xl font-extrabold">什么也没有</div>
            <div className="text-2xl text-gray-400">似乎来到了空无一物的荒漠</div>
            <Link to="/" className="rounded-lg bg-blue-400 px-3 py-1 text-light hover:text-white">回到首页</Link>
          </div>
        </main>
      </Layout>
    </>
  );
}
