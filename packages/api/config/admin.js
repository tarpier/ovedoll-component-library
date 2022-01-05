module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ef0cb3dede1c7c1203baa4546cc34526'),
  },
});
