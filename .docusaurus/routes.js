import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/gen-ai/__docusaurus/debug',
    component: ComponentCreator('/gen-ai/__docusaurus/debug', '7f6'),
    exact: true
  },
  {
    path: '/gen-ai/__docusaurus/debug/config',
    component: ComponentCreator('/gen-ai/__docusaurus/debug/config', '279'),
    exact: true
  },
  {
    path: '/gen-ai/__docusaurus/debug/content',
    component: ComponentCreator('/gen-ai/__docusaurus/debug/content', 'aac'),
    exact: true
  },
  {
    path: '/gen-ai/__docusaurus/debug/globalData',
    component: ComponentCreator('/gen-ai/__docusaurus/debug/globalData', '0d9'),
    exact: true
  },
  {
    path: '/gen-ai/__docusaurus/debug/metadata',
    component: ComponentCreator('/gen-ai/__docusaurus/debug/metadata', 'dd6'),
    exact: true
  },
  {
    path: '/gen-ai/__docusaurus/debug/registry',
    component: ComponentCreator('/gen-ai/__docusaurus/debug/registry', '12a'),
    exact: true
  },
  {
    path: '/gen-ai/__docusaurus/debug/routes',
    component: ComponentCreator('/gen-ai/__docusaurus/debug/routes', '48c'),
    exact: true
  },
  {
    path: '/gen-ai/blog',
    component: ComponentCreator('/gen-ai/blog', 'b9d'),
    exact: true
  },
  {
    path: '/gen-ai/blog/archive',
    component: ComponentCreator('/gen-ai/blog/archive', '3dc'),
    exact: true
  },
  {
    path: '/gen-ai/blog/first-blog-post',
    component: ComponentCreator('/gen-ai/blog/first-blog-post', '065'),
    exact: true
  },
  {
    path: '/gen-ai/blog/long-blog-post',
    component: ComponentCreator('/gen-ai/blog/long-blog-post', '1d7'),
    exact: true
  },
  {
    path: '/gen-ai/blog/mdx-blog-post',
    component: ComponentCreator('/gen-ai/blog/mdx-blog-post', 'e3c'),
    exact: true
  },
  {
    path: '/gen-ai/blog/tags',
    component: ComponentCreator('/gen-ai/blog/tags', 'afb'),
    exact: true
  },
  {
    path: '/gen-ai/blog/tags/docusaurus',
    component: ComponentCreator('/gen-ai/blog/tags/docusaurus', 'e39'),
    exact: true
  },
  {
    path: '/gen-ai/blog/tags/facebook',
    component: ComponentCreator('/gen-ai/blog/tags/facebook', 'c90'),
    exact: true
  },
  {
    path: '/gen-ai/blog/tags/hello',
    component: ComponentCreator('/gen-ai/blog/tags/hello', '4c4'),
    exact: true
  },
  {
    path: '/gen-ai/blog/tags/hola',
    component: ComponentCreator('/gen-ai/blog/tags/hola', '157'),
    exact: true
  },
  {
    path: '/gen-ai/blog/welcome',
    component: ComponentCreator('/gen-ai/blog/welcome', '00a'),
    exact: true
  },
  {
    path: '/gen-ai/markdown-page',
    component: ComponentCreator('/gen-ai/markdown-page', '3ff'),
    exact: true
  },
  {
    path: '/gen-ai/docs',
    component: ComponentCreator('/gen-ai/docs', 'e69'),
    routes: [
      {
        path: '/gen-ai/docs/chatbotllm/',
        component: ComponentCreator('/gen-ai/docs/chatbotllm/', 'c3f'),
        exact: true,
        sidebar: "mySidebar"
      },
      {
        path: '/gen-ai/docs/chatbotwithCohert/intro',
        component: ComponentCreator('/gen-ai/docs/chatbotwithCohert/intro', 'a1a'),
        exact: true,
        sidebar: "mySidebar"
      },
      {
        path: '/gen-ai/docs/chatwithpdf/intro',
        component: ComponentCreator('/gen-ai/docs/chatwithpdf/intro', '402'),
        exact: true,
        sidebar: "mySidebar"
      },
      {
        path: '/gen-ai/docs/Creating AI applications/intro',
        component: ComponentCreator('/gen-ai/docs/Creating AI applications/intro', '1b0'),
        exact: true,
        sidebar: "mySidebar"
      },
      {
        path: '/gen-ai/docs/imagegen/backward',
        component: ComponentCreator('/gen-ai/docs/imagegen/backward', '375'),
        exact: true,
        sidebar: "mySidebar"
      },
      {
        path: '/gen-ai/docs/imagegen/clipdropgradio',
        component: ComponentCreator('/gen-ai/docs/imagegen/clipdropgradio', 'fd3'),
        exact: true,
        sidebar: "mySidebar"
      },
      {
        path: '/gen-ai/docs/imagegen/clipdropintro',
        component: ComponentCreator('/gen-ai/docs/imagegen/clipdropintro', '18b'),
        exact: true,
        sidebar: "mySidebar"
      },
      {
        path: '/gen-ai/docs/imagegen/diffusionIntro',
        component: ComponentCreator('/gen-ai/docs/imagegen/diffusionIntro', 'da4'),
        exact: true,
        sidebar: "mySidebar"
      },
      {
        path: '/gen-ai/docs/imagegen/forwarddiffusion',
        component: ComponentCreator('/gen-ai/docs/imagegen/forwarddiffusion', 'da2'),
        exact: true,
        sidebar: "mySidebar"
      },
      {
        path: '/gen-ai/docs/imagegen/imagegenintro',
        component: ComponentCreator('/gen-ai/docs/imagegen/imagegenintro', '8eb'),
        exact: true,
        sidebar: "mySidebar"
      },
      {
        path: '/gen-ai/docs/imgcap/intro',
        component: ComponentCreator('/gen-ai/docs/imgcap/intro', '6ad'),
        exact: true,
        sidebar: "mySidebar"
      },
      {
        path: '/gen-ai/docs/intro',
        component: ComponentCreator('/gen-ai/docs/intro', 'cb0'),
        exact: true,
        sidebar: "mySidebar"
      },
      {
        path: '/gen-ai/docs/langchain/intro',
        component: ComponentCreator('/gen-ai/docs/langchain/intro', '70c'),
        exact: true,
        sidebar: "mySidebar"
      },
      {
        path: '/gen-ai/docs/streamlit/intro',
        component: ComponentCreator('/gen-ai/docs/streamlit/intro', '46d'),
        exact: true,
        sidebar: "mySidebar"
      }
    ]
  },
  {
    path: '/gen-ai/',
    component: ComponentCreator('/gen-ai/', '92e'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
