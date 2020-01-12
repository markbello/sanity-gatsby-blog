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
                  buildHookId: '5e1b53f552e923235ad422ff',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-74dh4b7g',
                  apiId: 'bd7dc3c4-e478-4738-af40-42e64f6ee140'
                },
                {
                  buildHookId: '5e1b53f625e9a7c1acccc403',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-dwdjeavq',
                  apiId: '024f9c6f-5912-49b0-bd10-6d00457f188e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/markbello/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-dwdjeavq.netlify.com', category: 'apps' }
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
