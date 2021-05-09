# Anime-Look-Up V2

## Subject

The main purpose of creating the application is to understand the basic knowledge behind building a RESTful API, fulfilling the role of providing responses to HTTP requests (GET, POST, PUT, DELETE). In addition to that the task requires a frontend to be able to test and use those services.

## Technology used

Backend uses Express and MongoDB and NodeJS while the frontend is built using React, so basically the MERN Stack is being used mainly. In addition to that it uses:

- React Icons (frontend)
- Axios (frontend)
- CSURF (backend)
- JWT (backend)
- Bcrypt (backend)
- React Router (frontend)
- ErrorBoundary (frontend)

MongoDB is being used with it's cloud version ([MongoDB_Atlas](https://cloud.mongodb.com/)).

## Theme

With the application you can create posts, which can be seen by anyone (even unauthorized members), edit and delete posts and check anime on the home screen. Posts can only be created, edited and deleted by authenticated members (authorization management is not available so every registered member is eligible to create, post, put and delete). Users can not be deleted on the frontend not even if they want to delete only their own profiles.

## Project Startup

1. copy `backend/.env.temp` to `backend/.env` and fill in the data in `backend/.env`

```bash
cp backend/.env.temp backend/.env
```

2. And run

```bash
npm install
npm run start
```
