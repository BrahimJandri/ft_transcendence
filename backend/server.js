import Fastify from "fastify";
import cors from "@fastify/cors";

const fastify = Fastify({ logger: true });

// Enable CORS for frontend requests
await fastify.register(cors, {
  origin: "*",
});

// Mock user database (in-memory)
const users = [];

// ----------------------------------------------------
// Root route
// ----------------------------------------------------
fastify.get("/", async () => {
  return { message: "✅ Fastify backend is running!" };
});

// ----------------------------------------------------
// Signup route
// ----------------------------------------------------
fastify.post("/api/signup", async (request, reply) => {
  const { username, email, password } = request.body;

  if (!username || !email || !password) {
    reply.code(400);
    return { error: "All fields are required." };
  }

  const userExists = users.find((u) => u.email === email);
  if (userExists) {
    reply.code(409);
    return { error: "User already exists." };
  }

  users.push({ username, email, password });
  return { message: "Signup successful!", user: { username, email } };
});

// ----------------------------------------------------
// Login route
// ----------------------------------------------------
fastify.post("/api/login", async (request, reply) => {
  const { email, password } = request.body;

  if (!email || !password) {
    reply.code(400);
    return { error: "Email and password are required." };
  }

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    reply.code(401);
    return { error: "Invalid email or password." };
  }

  return { message: "Login successful!", user: { username: user.username, email } };
});

// ----------------------------------------------------
// Start server
// ----------------------------------------------------
const PORT = process.env.PORT || 4000;

try {
  await fastify.listen({ port: PORT, host: "0.0.0.0" });
  console.log(`🚀 Fastify server running on http://localhost:${PORT}`);
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
