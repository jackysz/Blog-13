const path = require('path')

const user = 'logan70'
exports.repoConfig = {
  owner: user,
  repo: 'Blog',
  creator: user,
  direction: 'asc',
}

exports.seriesOrder = [
  {
    series: '前端知识体系',
    subSeriesArr: [
      'JavaScript基础',
    ],
  },
  {
    series: '深入JavaScript系列',
    subSeriesArr: []
  },
  {
    series: '实战系列',
    subSeriesArr: []
  },
]
exports.charset = 'utf-8'
exports.tempFileName = path.resolve(__dirname, './README-template.md')
exports.filename = path.resolve(__dirname, '../README.md')