const express = require("express");
const passport = require("../config/passport");
const router = express.Router();

// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve redirecting
//   the user to google.com.  After authorization, Google will redirect the user
//   back to this application at /auth/google/callback
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }), (req, res) => {
  res.send(req.user);
  res.send("it is the redirect uri");
});

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
router.get("/google/redirect", passport.authenticate("google", { failureRedirect: "/login" }), function (req, res) {
  res.redirect("/");
});

router.get("/logout", (req, res) => {
  req.logout();
  res.send(req.user);
});

module.exports = router;
