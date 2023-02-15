import express from "express"
import session from "express-session"


const router = express.Router()

router.use(session({
  secret: 'WVUapR9koEdX0KbK16YKROP0vXCdvkogrf23lrpA',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));


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