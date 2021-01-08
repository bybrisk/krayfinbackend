# Simple Node with Express Server with REST API

### GET Routes

- visit http://localhost:3000
  - /messages
  - /messages/1
  - /users
  - /users/1

### Beyond GET Routes

- Install [Postman](https://www.getpostman.com/apps) to interact with REST API
- Create a message with:
  - URL: http://localhost:3000/messages
  - Method: POST
  - Body: raw + JSON (application/json)
  - Body Content: `{ "text": "Hi again, World" }`
- Delete a message with:
  - URL: http://localhost:3000/messages/1
  - Method: DELETE
