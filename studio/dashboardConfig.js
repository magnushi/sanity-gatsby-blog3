export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5cd545bdb5084c4d82000f47',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog3-studio-pbugw22g',
                  apiId: 'e6c0103c-6e6b-419b-b721-da4a3eae1d91'
                },
                {
                  buildHookId: '5cd545bd5ba08e085122659f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog3-web',
                  apiId: '3518f04a-aca5-4893-9440-d5730333ac8f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/magnushi/sanity-gatsby-blog3',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog3-web.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
