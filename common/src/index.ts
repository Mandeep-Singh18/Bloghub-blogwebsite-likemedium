import z from "zod";

export const signupinput = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()
});

export const signininput = z.object({
    email: z.string().email(),
    password: z.string().min(6)
});

export const createbloginput = z.object({
    title: z.string().min(1),
    content: z.string().min(1)
});

export const updatebloginput = z.object({
    title: z.string().min(1).optional(),
    content: z.string().min(1).optional(),
    id: z.string()
});


//type inference
export type SignupInput = z.infer<typeof signupinput>
export type SigninInput = z.infer<typeof signininput>
export type BlogInput = z.infer<typeof createbloginput>
export type UpdateBlogInput = z.infer<typeof updatebloginput>

