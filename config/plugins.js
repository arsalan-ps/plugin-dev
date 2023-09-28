module.exports = {
  'ai-text-generation': {
    enabled: true,
    config: {
      apiToken: process.env.OPEN_AI_API_TOKEN,
    },
    resolve: './src/plugins/ai-text-generation'
  },
}