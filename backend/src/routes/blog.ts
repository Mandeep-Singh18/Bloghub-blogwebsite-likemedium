import { PrismaClient } from '@prisma/client/extension'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Hono } from 'hono'
import { verify } from 'hono/jwt'

export const BlogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables:{
        userId: string;
    }
}>()


BlogRouter.use('/*', async (c, next) => {
    const header = c.req.header('Authorization');
    if (!header) {
        c.status(403)
        return c.json({
            message: 'Unauthorized'
        })
    }
    const user = await verify(header, c.env.JWT_SECRET)
    if (!user) {
        c.status(403)
        return c.json({
            message: 'Unauthorized'
        })
    }
    c.set("userId", String(user.id));
    await next();
})


BlogRouter.post('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const body = await c.req.json();
        const blog = await prisma.blog.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: c.get('userId')
            }
        })
        return c.json({
            id: blog.id
        })
    } catch (e) {
        c.status(403)
        return c.json({
            error: "error while creating blog"
        })
    }
})


BlogRouter.put('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const body = await c.req.json();
        const blog = await prisma.blog.Update({
            where: {
                id: body.id
            },
            data: {
                title: body.title,
                content: body.content,
            }
        })
        return c.json({
            id: blog.id
        })
    } catch (e) {
        c.status(403)
        return c.json({
            error: "error while updating blog"
        })
    }
})


BlogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())
    try {
        const blogs = await prisma.blog.findMany();
        return c.json({
            blogs
        })
    } catch (e) {
        c.status(403)
        return c.json({
            error: "error while fetching blogs"
        })
    }
})


BlogRouter.get('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())
    try {
        const id = c.req.param("id");
        const blog = await prisma.blog.findFirst({
            where: {
                id: id
            }
        })
        return c.json({
            blog
        })
    } catch (e) {
        c.status(403)
        return c.json({
            error: "error while fetching blog"
        })
    }
})



