export default [
  { UserAgent: '*' },
  { Allow: '/' },
  { BlankLine: true },

  { Comment: 'Algolia-Crawler-Verif: 79D40442AEBAFA80' },
  { BlankLine: true },

  { Sitemap: (req: { headers: { host: any } }) => `https://${req.headers.host}/sitemap.xml` },
]
