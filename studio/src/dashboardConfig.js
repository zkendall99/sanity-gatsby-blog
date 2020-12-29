export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5feace359463209ee4728559',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-tisudi8x',
                  apiId: '8d7b0a29-54a2-4893-9828-119cf09ca9a8'
                },
                {
                  buildHookId: '5feace3592118c9b228bc601',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-yu2kf3th',
                  apiId: 'cf5aa674-80ad-4e90-a36f-2b2fd6efdf1b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zkendall99/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-yu2kf3th.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
