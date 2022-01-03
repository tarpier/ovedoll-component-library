module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dbc61281765ff3f4929f5f5cb25e4662'),
  },
});
