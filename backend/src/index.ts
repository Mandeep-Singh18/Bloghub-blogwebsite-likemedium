import { Hono } from 'hono';
import { UserRouter } from './routes/user';
import { BlogRouter } from './routes/blog';
import { cors } from 'hono/cors';


const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string,
  }
}>()

// Bckend URL: https://backend.mandeepsingh36633.workers.dev
// https://backend.mandeepsingh36633.workers.dev/api/v1/user/*
app.use('/*',cors())
app.route('/api/v1/user', UserRouter)
app.route('/api/v1/blog', BlogRouter)

export default app      