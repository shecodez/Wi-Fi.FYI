export default [
  { UserAgent: '*' },
  { Disallow: '/' },
  { BlankLine: true },
  { Comment: 'Comment here' },

  { Sitemap: (req: { headers: { host: any } }) => `https://${req.headers.host}/sitemap.xml` },
]
