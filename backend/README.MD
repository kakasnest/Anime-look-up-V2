# Anime-Look-Up V2 API

The API uses both public and private routes, unauthorized requests will be denied on private routes.
The basic URL is `http://localhost:5000/api`.

## Public Routes

Basic URL at this point: `http://localhost:5000/api/public`

### Get

1. route:`/`

- body: not required to have any attached data
- response: checks whether the server is up or not

On Success you will see something like this:

```json
{ "connection": true }
```

2. route: `/posts`

- body: not required to have any attached data
- response: returns every post stored in the database

On Success you will see something like this:

```json
{[{"_id": "6098140882ae6d2fe0289fcd", "title": "Hello there!", "content": "GENERAL KENOBI!", "createdAt": "2021-05-09T16:55:36.299Z", "createdBy": {"_id": "609806c582ae6d2fe0289fcc", "username": "GeneralKenobi", "__v": 0}}, ...]}
```

3. route: `/csrf-protection`

- body: not required to have any attached data
- response: csrf token in json format

On Success you will see something like this:

```json
{ "csrfToken": "A79j6jcK-zSOoblUP8q1Gu9R36rSgsc-jjVw" }
```

### Post

1. route: `/register`

- body: json, { username, password(hashed and salted), registeredAt(default value, not user given)}
- response: message of success in jsonformat

On Success you will see something like this:

```json
{ "message": "Registration complete" }
```

2. route: `/login`

- body: json, { username, password(hashed and salted)}
- response: message of success in json format, **jwt token**

On Success you will see something like this:

```json
{ "message": "Login successful" }
```

### Delete

1. route: `/cookieClear`

- body: not required to have any attached data
- response: message of succsess in json format

On Success you will see something like this:

```json
{ "message": "Auth cookie has been cleared from the browser" }
```

## Private Routes

Basic URL at this point: `http://localhost:5000/api/private`

### Get

1. route: `/userposts`

- body: from the jwt token - trough a middleware - a userid is attached to the body if authenticated
- response: returns the posts of the user in json format

On Success you will see something like this:

```json
{"_id": "6097da764286ac11ac79e06e", "title": "Super creative story", "content": "Thanks!", ...}
```

2. route: `/user`

- body: from the jwt token - trough a middleware - a userid is attached to the body if authenticated
- response: returns a user with the corresponding username and id

On Success you will see something like this:

```json
{ "_id": "6083f0878b204d2f2092b0bc", "username": "GeneralKenobi", "__v": 0 }
```

### Post

1. route: `/posts`

- body: json, {title, content}, from the jwt token - trough a middleware - a userid is attached to the body if authenticated
- response: created post in json format

On Success you will see something like this:

```json
{
  "content": "Hello There!",
  "createdAt": "2021-05-09T21:38:27.382Z",
  "createdBy": "6083f0878b204d2f2092b0bc",
  "title": "Here again",
  "__v": 0,
  "_id": "60985653e6f88d33a84c9c2e"
}
```

### Put

1. route: `posts/:id`

- body: json, {title, content}
- request parameter: id (necessary)
- response: edited post in json format

On Success you will see something like this:

```json
{
  "content": "Some cool story",
  "createdAt": "2021-05-09T21:31:17.098Z",
  "createdBy": "6083f0878b204d2f2092b0bc",
  "title": "That's really cool",
  "__v": 0,
  "_id": "609854a50b84c025f4507c6d"
}
```

### Delete

1. route: `posts/:id`

- body: not required to have any attached data
- request parameter: id (necessary)
- response: deleted post in json format

```json
{
  "content": "Some deleted post",
  "createdAt": "2021-05-09T21:40:28.226Z",
  "createdBy": "6083f0878b204d2f2092b0bc",
  "title": "Deleted",
  "__v": 0,
  "_id": "609856cce6f88d33a84c9c2f"
}
```
