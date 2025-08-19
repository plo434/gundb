# GunDB Peer Relay Server

A simple GunDB relay server that can be deployed to any Node.js hosting platform.

## Features

- GunDB relay server for P2P messaging
- Express.js integration
- Ready for deployment on Render, Heroku, or any Node.js host

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

The server will run on port 8765 by default.

## Deployment on Render

1. Create a GitHub repository with these files
2. Sign up at [Render.com](https://render.com/)
3. Go to **New → Web Service**
4. Connect your GitHub repository
5. Choose **Runtime: Node**
6. Set **Build Command:** `npm install`
7. Set **Start Command:** `npm start`
8. Click **Create Web Service**

## Usage

After deployment, use the relay URL in your GunDB applications:

```javascript
const Gun = require('gun');
const gun = Gun({ 
  peers: ['https://your-project.onrender.com/gun'] 
});
```

## Notes

- This relay does not store messages permanently
- It acts as a message relay between peers
- Suitable for P2P messaging without a central server
