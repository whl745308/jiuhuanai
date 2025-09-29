const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;

// 中间件
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// 基础健康检查
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'LLM Tavern is running!',
    timestamp: new Date().toISOString()
  });
});

// 简单的聊天接口
app.post('/api/chat', (req, res) => {
  const { message } = req.body;
  
  console.log('Received message:', message);
  
  res.json({ 
    response: `我已收到你的消息："${message}"。这是一个测试回复。`,
    usage: { credits: 1 },
    timestamp: new Date().toISOString()
  });
});

// 静态文件服务
app.use(express.static(path.join(__dirname, 'public')));

// 主页面
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 启动服务器
app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 LLM Tavern 服务已启动在端口 ${port}`);
