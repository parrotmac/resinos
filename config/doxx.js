var _ = require('lodash')
var path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '..'),
  destDir: 'public',
  buildLunrIndex: true,
  parseNav: true,
  serializeNav: true,
  defaultTemplate: 'docs.html',
  layoutLocals: {
    menuLinks: [
      { title: 'Resin.io', link: 'https://resin.io' },
      { title: 'Documentation', link: '/docs' },
      { title: 'Doxx GitHub', link: 'https://github.com/resin-io-projects/doxx' }
    ],
    jumbotron: {
      title: 'My new Project',
      lead: "It'll solve all your problems"
    },
    features: [
      {
        title: "Buzzy buzz word",
        description: "Features I got features!",
        link: "#",
        image: "icon"
      }
    ]
  }
}
