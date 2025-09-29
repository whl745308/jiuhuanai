module.exports = {
  apps: [{
    name: "llm-tavern",
    script: "./server.js",
    instances: "max",
    env: {
      NODE_ENV: "production",
      PORT: 8000
    }
  }]
}
