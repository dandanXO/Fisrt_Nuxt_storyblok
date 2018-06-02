const pkg = require('./package')
const axios  = require('axios')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400,700'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    ['storyblok-nuxt',{accessToken:process.env.NODE_NEV == 'production'?'Zs4388f4T4C452a2k7OTzgtt':'blzj0zmA59foZ4SYVCMwsAtt', cacheProvider: 'memory'}]
  ],

  generate: {
    routes: function() {
      return axios.get("https://api.storyblok.com/v1/cdn/stories?version=published&token=Zs4388f4T4C452a2k7OTzgtt&starts_with=blog&cv="+
      Math.floor(Date.now()/1e3)
    )
    .then(res =>{
      const blogPost = res.data.stories.map(bp => bp.full_slug)
      return [
        '/',
        '/blog',
        '/about',
        ...blogPost
      ]
    })
    }
  },

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
