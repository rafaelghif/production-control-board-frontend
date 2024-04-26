module.exports = {
  apps: [
    {
      name: 'Production Control Board Frontend Https',
      script: 'node_modules/.bin/vite',
      args: 'preview --https --key ssl/server.key --cert ssl/server.crt --port 3007',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};