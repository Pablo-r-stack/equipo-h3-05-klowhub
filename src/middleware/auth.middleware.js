import passport from "passport";

export const requireAuth = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({
        message: "Unauthorized",
        error: info ? info.message : "No token provided",
      });
    }

    req.user = user;
    next();
  })(req, res, next);
};
