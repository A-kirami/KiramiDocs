// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorial: [
    'intro',
    {
      '开始': [
        {
          type: 'autogenerated',
          dirName: 'guide/start',
        },
      ],
    },
    {
      '使用': [
        {
          type: 'autogenerated',
          dirName: 'guide/tutorial',
        },
      ],
    },
    {
      '迁移': [
        {
          type: 'autogenerated',
          dirName: 'guide/migrate',
        },
      ],
    },
    'guide/question'
  ],
  manual: [
    {
      type: 'autogenerated',
      dirName: 'manual',
    },
  ],
  api: [
    {
      type: 'autogenerated',
      dirName: 'api',
    }
  ],
  community: [
    {
      type: 'autogenerated',
      dirName: 'community',
    },
  ]
};

module.exports = sidebars;
