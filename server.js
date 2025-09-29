const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;

// 中间件
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// 提供静态文件
app.use(express.static(path.join(__dirname, 'public')));

// 基础API路由
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'LLM Tavern is running!' });
});

app.post('/api/chat', (req, res) => {
  const { message, api_key } = req.body;
  
  // 这里可以集成你的AI API
  res.json({ 
    response: `Received: ${message}`,
    usage: { credits: 1 },
    timestamp: new Date().toISOString()
  });
});

// 主页面
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 启动服务器
app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 LLM Tavern running on port ${port}`);
  console.log(`📡 Access via: http://localhost:${por
