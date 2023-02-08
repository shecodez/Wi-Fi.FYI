export default [
  { UserAgent: '*' },
  { Disallow: '/' },
  { BlankLine: true },
  { Comment: 'Algolia-Crawler-Verif: 79D40442AEBAFA80' },

  { Sitemap: (req: { headers: { host: any } }) => `https://${req.headers.host}/sitemap.xml` },
]
