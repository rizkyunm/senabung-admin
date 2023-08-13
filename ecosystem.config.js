module.exports = {
  apps: [
    {
      name: 'senabung-admin',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './.output/server/index.mjs',
    },
  ],
}
