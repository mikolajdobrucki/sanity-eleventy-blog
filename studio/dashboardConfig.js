export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5e53c8b034b48de443e54b64',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-7cpgj2fa',
                  apiId: 'eaf19c60-20ab-4b99-ac92-fe90d2ac0734'
                },
                {
                  buildHookId: '5e53c8b122193afd77c0a336',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-thziwpx9',
                  apiId: '64dcdbda-459b-4e31-82b0-b314c4d6fc77'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mikolajdobrucki/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-thziwpx9.netlify.com', category: 'apps'}
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
