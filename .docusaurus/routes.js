import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '38f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '860'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '1d2'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'bb2'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'be7'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '973'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'b42'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '779'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'b22'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '5fb'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '2f8'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '0ff'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'f39'),
    routes: [
      {
        path: '/docs/accessibility/objects',
        component: ComponentCreator('/docs/accessibility/objects', '87d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/change-detection/objects',
        component: ComponentCreator('/docs/change-detection/objects', '85b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ciclo-de-vida-de-componentes/objects',
        component: ComponentCreator('/docs/ciclo-de-vida-de-componentes/objects', '068'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/component/objects',
        component: ComponentCreator('/docs/component/objects', '9b8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/components-primeng/objects',
        component: ComponentCreator('/docs/components-primeng/objects', 'b68'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/conceitos/concepts',
        component: ComponentCreator('/docs/conceitos/concepts', '363'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/data-binding/objects',
        component: ComponentCreator('/docs/data-binding/objects', '737'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/directive/objects',
        component: ComponentCreator('/docs/directive/objects', 'fee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/enum/objects',
        component: ComponentCreator('/docs/enum/objects', '290'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/environment/arquivo-de-configuracoes',
        component: ComponentCreator('/docs/environment/arquivo-de-configuracoes', '87a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/event-binding/objects',
        component: ComponentCreator('/docs/event-binding/objects', '292'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/forms/objects',
        component: ComponentCreator('/docs/forms/objects', '38e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/HTTP-Resquest/objects',
        component: ComponentCreator('/docs/HTTP-Resquest/objects', 'f2e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/input-data/objects',
        component: ComponentCreator('/docs/input-data/objects', 'a8d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/interface/objects',
        component: ComponentCreator('/docs/interface/objects', '5be'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/lazy-loading/objects',
        component: ComponentCreator('/docs/lazy-loading/objects', 'd8d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/markdown/objects',
        component: ComponentCreator('/docs/markdown/objects', '3a0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/module/objects',
        component: ComponentCreator('/docs/module/objects', 'ac9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ng-generate/ng-g-component',
        component: ComponentCreator('/docs/ng-generate/ng-g-component', '55f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ng-generate/ng-g-directive',
        component: ComponentCreator('/docs/ng-generate/ng-g-directive', 'f09'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ng-generate/ng-g-module',
        component: ComponentCreator('/docs/ng-generate/ng-g-module', '13d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ng-generate/ng-g-module-app-routing',
        component: ComponentCreator('/docs/ng-generate/ng-g-module-app-routing', 'c9c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ng-generate/ng-g-service',
        component: ComponentCreator('/docs/ng-generate/ng-g-service', '2d8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ng-generate/ng-g1',
        component: ComponentCreator('/docs/ng-generate/ng-g1', '65f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ng-generate/ng-g2',
        component: ComponentCreator('/docs/ng-generate/ng-g2', 'b0d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/output-data/objects',
        component: ComponentCreator('/docs/output-data/objects', '811'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pipe/objects',
        component: ComponentCreator('/docs/pipe/objects', '783'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/routing/routing',
        component: ComponentCreator('/docs/routing/routing', '528'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/services/objects',
        component: ComponentCreator('/docs/services/objects', 'cbf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/testing/objects',
        component: ComponentCreator('/docs/testing/objects', '49e'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '7cd'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
