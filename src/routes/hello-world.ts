import { Response, Router } from 'express';

const router = Router();

/**
 * GET `/hello-world`
 */
router.get('/', ({}, response: Response): any => {
    response.json({ message: 'Hello, world!' });
});

export default router;
