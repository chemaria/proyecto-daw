const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER

  const isProd = phase === PHASE_PRODUCTION_BUILD

  console.log(`isDev:${isDev}  isProd:${isProd}`)

  const env = {
    URLAPI: (() => {
      if (isDev) return 'http://localhost:3002'
      if (isProd) return 'https://api.blomile.com'
    })(),
    URLAPP: (() => {
      if (isDev) return 'http://localhost:3000'
      if (isProd) return 'https://blomile.com'
    })(),
  }

  return {
    reactStrictMode: true,
    images: {
      domains: ['localhost'],
    },
    env,
  }
}
