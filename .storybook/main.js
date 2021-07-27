module.exports = {
  "stories": [
    "../src/components/**/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/thurs-ui/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/page/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/chart-echarts/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ]
}