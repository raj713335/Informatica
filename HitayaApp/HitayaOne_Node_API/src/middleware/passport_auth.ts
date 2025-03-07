import passport from 'passport';
/*import logger from '../utils/logger';*/

import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;


passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.URL+process.env.PORT+'/api/v1/user/google/callback',
    passReqToCallback: true
},
function(request, accessToken, refreshToken, profile, done) {
    return done(null, profile);
}
));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});