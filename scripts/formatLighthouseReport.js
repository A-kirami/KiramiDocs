/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// @ts-check

/** @typedef {Record<'performance' | 'accessibility' | 'best-practices' | 'seo' | 'pwa', number>} LighthouseSummary */

/** @type {Record<keyof LighthouseSummary, string>} */
const summaryKeys = {
  performance: '性能',
  accessibility: '无障碍',
  'best-practices': '最佳做法',
  seo: 'SEO',
  pwa: 'PWA',
}

/** @param {number} rawScore */
function scoreEntry(rawScore) {
  const score = Math.round(rawScore * 100)
  // eslint-disable-next-line no-nested-ternary
  const scoreIcon = score >= 90 ? '🟢' : score >= 50 ? '🟠' : '🔴'
  return `${scoreIcon} ${score}`
}

/**
 * @param {string} url
 * @returns {module:url.URL}
 */
function createURL(url) {
  try {
    return new URL(url)
  } catch (e) {
    throw new Error(`Can't create URL for string=${url}`, { cause: e })
  }
}

/**
 * @param {Object} param0
 * @param {string} param0.url
 * @param {LighthouseSummary} param0.summary
 * @param {string} param0.reportUrl
 */
function createMarkdownTableRow({ url, summary, reportUrl }) {
  return [
    `| [${createURL(url).pathname}](${url})`,
    .../** @type {(keyof LighthouseSummary)[]} */ (Object.keys(summaryKeys)).map((k) => scoreEntry(summary[k])),
    `[查看](${reportUrl}) |`,
  ].join(' | ')
}

function createMarkdownTableHeader() {
  return [
    ['| URL', ...Object.values(summaryKeys), '报告 |'].join(' | '),
    ['|---', ...Array(Object.keys(summaryKeys).length).fill('---'), '---|'].join('|'),
  ]
}

/**
 * @param {Object} param0
 * @param {Record<string, string>} param0.links
 * @param {{url: string, summary: LighthouseSummary}[]} param0.results
 */
function createLighthouseReport({ results, links }) {
  const tableHeader = createMarkdownTableHeader()
  const tableBody = results.map((result) => {
    const testUrl = /** @type {string} */ (Object.keys(links).find((key) => key === result.url))
    const reportPublicUrl = /** @type {string} */ (links[testUrl])

    return createMarkdownTableRow({
      url: testUrl,
      summary: result.summary,
      reportUrl: reportPublicUrl,
    })
  })
  const comment = ['### ⚡️ 此 PR 部署预览的 Lighthouse 报告', '', ...tableHeader, ...tableBody, '']
  return comment.join('\n')
}

export default createLighthouseReport
