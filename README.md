# Homies Onboarding Application

## Setup

0. Setup environment variables (see .env.example). Make sure to replace the sample database url with the actual database url (message Aidan or Paul for a direct DM)

1. Install dependencies
```bash
yarn install
```
2. Generate the prisma client
```bash
yarn prisma generate
```
3. Run the app
```bash
yarn dev
```

## Loging in

Currently the only configured way to log into the application is through email "magic links." This is where a link is sent to your email containing session information in the url, and clicking it redirects your back to the application with said session information. The application is not yet configured to send actual emails, so instead a link is outputted to the terminal. Click the link in and open it in the browser to log in.

![image](https://github.com/alecdewitz/homies/assets/64103161/b54999d2-768b-4ced-b833-d7dd658fc63b)

The link should look something like the url shown here.
