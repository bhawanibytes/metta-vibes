/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://yourwebsite.com',
  generateRobotsTxt: true, // (optional)
  // Optional: exclude specific paths
  exclude: ['/admin/*', '/private/*'],
  // Optional: add additional paths
  // additionalPaths: async (config) => [
  //   await config.transform(config, '/additional-page'),
  // ],
}