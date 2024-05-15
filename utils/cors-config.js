import { default as Cors } from 'cors';

export const cors = Cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  credentisals: true,
  optionsSuccessStatus: true,
});
