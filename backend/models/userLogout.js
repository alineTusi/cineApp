import express from "express"

const router = express.Router()


router.post('/', (req, res) => {
    // Clear the user's session data
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: 'An error occurred' });
      }
  
      return res.status(204).end();
    });
  });

  export default router;