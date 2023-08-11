# Poaster

###### Commands
```
npx create-redwood-app poaster
cd poaster

yarn rw setup ui tailwindcss

yarn rw dev


# Login to Railway.app and start Postgres db and copy DB_URL

touch .env
nvim .env
# ~/.env:
# DATABASE_URL=***your-db-url-from-railway***

yarn rw prisma migrate dev
yarn rw setup auth dbAuth
yarn rw g dbAuth
# username label: Username
# password label: Password


yarn rw g sdl users
yarn rw g sdl posts
yarn rw g sdl post-likes
yarn rw g sdl follows

yarn rw g layout container
yarn rw g layout navbar
yarn rw g layout sidebar

yarn rw g page home /
yarn rw g page new-post /new
yarn rw g page post-details
yarn rw g page profile

yarn rw g cell home
yarn rw g cell post
yarn rw g cell user-post
yarn rw g cell user
yarn rw g cell profile
yarn rw g cell likes

yarn rw g component comment-form


# Because we don't like VSCode:
rm -rf .vscode


# Create Git repo
# Import app from GitHub to Netifly Also add env vars from ~/.env file. Finally change name and deploy.
```
# poaster
