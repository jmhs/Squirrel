import express from 'express';
import passport from 'passport';
import User from '../models/User';

const router = express.Router();

/* GET index page. */
router.get('/user', (req, res, next) => {
  res.json(req.user);
});

router.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email', 'public_profile'] }));
router.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/LogIn' }), (req, res) => {
  res.redirect(req.session.returnTo || '/chat');
});

// LOGIN
router.post('/login', function(req, res, next) {
    passport.authenticate('local', function(error, user, info) {
        if(error) {
            console.log(error);
            return res.json({'error':'database','message': "Something went seriously wrong. Contact the dev team."});
        }
        if(!user) {
          return res.json({'error':'user','message': "Wrong password or email"})
        }

        req.logIn(user, function(err) {
            if (err) {
              console.log("Login err", "Wrong password");
              return res.json({'error':'user','message': "Wrong password"})
            }
            user.latitude = req.body.latitude;
            user.longitude = req.body.longitude;
            user.save((err) => {
              console.log("User save error");
              return res.json({'error':'database','message': err});
            });
            return res.json(user);
        });
    })(req, res, next);
});

// SIGNUP
router.post('/signup', function(req, res, next) {
    User.findOne({ email: req.body.email }, (err, existingUser) => {

      console.log("Data: ",req.body.email, req.body.password)

      if (existingUser) {
          return res.json({'error':'login','message': 'This email already exists!'});
      }

      console.log("New user");

      let user = new User();
      user.email = req.body.email;
      user.password = req.body.password;
      user.latitude = req.body.latitude;
      user.longitude = req.body.longitude;
      user.save((err) => {
        if (err) {
          console.log("User save error");
          return res.json({'error':'database','message': err});
        }
        req.logIn(user, (err) => {
        if (err) {
            console.log("User login error");
            return res.json({'error':'login','message': err});
        }
        console.log("User login success");
        res.json({'redirect':'/chat'});
        });
      });
    });
});

// LOGOUT
router.get('/logout',(req, res, next) => {
  req.logout();
  res.redirect('/');
});

export default router;
