import { z } from "zod";  


const schema = z.object ({
    name: z.string().min(2, {message: "Name must be at least 2 characters"}),
    email: z.string().email()
    // username: z.string().min(3)
    // password: z.string().min(3)
    // confirmPassword: z.string().min(3)
    // phone: z.string().min(3)
    // address: z.string().min(3)
});

export default schema;