import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import Client from '../schemas/client.schema';
import session from 'express-session';

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
      scope: ['email', 'profile'],
    },
    async (accessToken, refreshToken, profile, cb) => {
      try {
        const existingClient = await Client.findOne({ email: profile.emails[0].value });

        if (existingClient) {
          return cb(null, existingClient);
        }

        const newClient = new Client({
          email: profile.emails[0].value,
          // Puedes agregar otros campos del perfil de Google que desees almacenar en tu base de datos
        });

        await newClient.save();

        return cb(null, newClient);
      } catch (error) {
        return cb(error, false);
      }
    },
  ),
);

export const configurePassport = (app) => {
  app.use(passport.initialize());

  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
    }),
  );
};

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await Client.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});
