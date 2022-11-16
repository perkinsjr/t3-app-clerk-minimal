# Clerk TRPC Minimal Starter

The following project uses TRPC + Clerk with minimal styling. The project is a good starting point for using TRPC + Clerk.

## Project features

1. User Context throughout
2. Protected and public procedures
3. Sign-in, Sign-Up and User Profile components

## How to use

1. Create a [Clerk account](https://dashboard.clerk.dev/sign-up)
2. Copy `.env.local.sample` and rename to `.env.local` and add your keys found in the dashboard.
3. Run `npm install`
4. Run `npm run dev`

## How does the code work?

The code is written in a way to keep seperation and adding features easy.

- src
  - _components_ (Holds all layout elements)
  - _env_ (Holds schema for .env to make sure you don't expose secrets or forget required ones)
  - _pages_ (Holds your next pages)
  - _server/trpcs_
    - _context.ts_ contains a way to retrieve user info from Clerk
    - _trpc.ts_ holds procedures and middelware for protected procedure
    - router
      - _\_app.ts_ all of the routers
      - _example.ts_ shows an example router using public procedure
      - _protected.ts_ shows an example router using protected procedure
  - _styles_
    - _header.module.css_ - Holds styling for header component
    - \_shared_module.css - Holds layout stylings.
  - _utils_
    - _trpc.ts_ contains all TRPC configuration

## Shoutouts

- Huge shoutout to the team at [TRPC](https://trpc.io) for making an awesome project.

- Shoutout to [t3 stack](https://create.t3.gg/) for introducing a lot of people to the project and influencing structure of this project.
