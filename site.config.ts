import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '1ceeedcb355648d0b18f8da0e0345915',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'anklav-code',
  domain: 'anklav-code.duckdns.org',
  author: 'Aleksandr Lobanov',

  // open graph metadata (optional)
  description: 'Aleksandr Lobanov (Anklav Code) Personal Blog',

  // social usernames (optional)
  // twitter: 'anklav24',
  github: 'anklav24',
  linkedin: 'anklav24',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/resume': 'bfb7f09dce924d1a813058126697a74f',
    '/about': '9ad2883d5733403ca93998bdcf3ecb25'
  },
  // pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default',
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Home',
      pageId: '1ceeedcb355648d0b18f8da0e0345915'
    },
    {
      title: 'Resume',
      pageId: 'bfb7f09dce924d1a813058126697a74f'
    },
    {
      title: 'About',
      pageId: '9ad2883d5733403ca93998bdcf3ecb25'
    }
  ],
})
