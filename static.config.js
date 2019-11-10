import React from  'react';
import path from 'path';
import articles from './src/data/articles';
import articlesEn from './src/data/articlesEn';

export default {
  getRoutes: async () =>  
     [
      {
        path: '/',
        getData: () => ({
          articles,
        }),
        children: articles.map(article => ({
          path: `/portfolio/${article.name.toLowerCase()}`,
          template: 'src/containers/Article',
          getData: () => ({article,articles,}),
          
        })),
      },
      {
        path: '/en',
        getData: () => ({
          articlesEn,
        }),
        children: articlesEn.map(article => ({
          path: `/portfolio/${article.name.toLowerCase()}`,
          template: 'src/containers/ArticleEn',
          getData: () => ({
            article,articlesEn, 
          }),
          
        })),
        
      },
      {
        path: '/en/info',
        template: 'src/pages/enInfo'
      },
    ],
    Document: ({
      Html,
      Head,
      Body,
      children,
      state: { siteData, renderMeta },
    }) => (
        <Html lang="cs">
          <Head>
            <meta charSet="UTF-8"/>
            <title>Mára Čmára</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Mohu pro Vás ilustrovat knihy, články, weby, plakáty,
             zpracovat svatební oznámení, návrh na tetování nebo vyhotovit portrét. Projektům se meze nekladou!" />
            <meta name="author" content="Michal Hlaváč" />
            <meta name="keywords" content="" />
            <link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-logo-16.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-logo-32.png" />
            <meta property="og:title" content="Mára Čmára"/>
            <meta property="og:description" content="Mohu pro Vás ilustrovat knihy, články, weby, plakáty,
             zpracovat svatební oznámení, návrh na tetování nebo vyhotovit portrét. Projektům se meze nekladou!"/>
            <meta property="og:image" content="https://martina-fischmeisterr.netlify.com/IMG/personal_work/personal_work.jpg"/>
            <meta property="og:url" content="https://martina-fischmeisterr.netlify.com/"/>
          </Head>
          <Body>{children}</Body>
        </Html>
      ),
  
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
    require.resolve('react-static-plugin-styled-components'),
  ],
}
