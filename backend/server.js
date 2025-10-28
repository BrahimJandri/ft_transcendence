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
    return { message: "All fields are required." };
  }

  const userExists = users.find((u) => u.email === email || u.username === username);
  if (userExists) {
    reply.code(409);
    return { message: "User already exists." };
  }

  const user = { 
    id: String(users.length + 1),
    username, 
    email,
    createdAt: new Date().toISOString()
  };
  
  users.push({ ...user, password });
  
  const token = Buffer.from(`${username}:${Date.now()}`).toString('base64');
  
  return { 
    token,
    user,
    message: "Signup successful!" 
  };
});

// ----------------------------------------------------
// Login route
// ----------------------------------------------------
fastify.post("/api/login", async (request, reply) => {
  const { username, password } = request.body;

  if (!username || !password) {
    reply.code(400);
    return { message: "Username and password are required." };
  }

  // Allow login with either username or email
  const userRecord = users.find((u) => 
    (u.username === username || u.email === username) && u.password === password
  );

  if (!userRecord) {
    reply.code(401);
    return { message: "Invalid username or password." };
  }

  const { password: _, ...user } = userRecord;
  const token = Buffer.from(`${userRecord.username}:${Date.now()}`).toString('base64');

  return { 
    token,
    user,
    message: "Login successful!" 
  };
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
