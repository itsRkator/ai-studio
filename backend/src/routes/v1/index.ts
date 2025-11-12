import { Router } from 'express';

const router = Router();

// API v1 routes will be added here
// Example: router.use('/auth', authRoutes);

router.get('/', (_req, res) => {
  res.json({
    version: 'v1',
    message: 'AI Studio API v1',
  });
});

export default router;
