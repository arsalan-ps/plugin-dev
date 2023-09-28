'use strict';

module.exports = ({ strapi }) => ({
  async generate(ctx) {
    const data = await strapi
      .plugin('ai-text-generation')
      .service('openAi')
      .generateText(ctx.request.body.prompt);
    ctx.body = data;
  },
});