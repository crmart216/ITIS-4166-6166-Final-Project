// middleware/rateLimiter.js
import rateLimit from "express-rate-limit";

// General rate limiter for non-auth endpoints
export const generalLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 200, // limit each IP to 200 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests, try again later." },
});

// Stricter limiter for auth-sensitive endpoints (login/signup, role changes)
export const strictLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests on this endpoint, slow down." },
});
