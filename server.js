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

// 健康检查端点
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        message: '服务器运行正常',
        timestamp: new Date().toISOString()
    });
});

// 聊天API端点
app.post('/api/chat', (req, res) => {
    try {
        const { message } = req.body;
        
        if (!message) {
            return res.status(400).json({ error: '消息不能为空' });
        }
        
        console.log('收到消息:', message);
        
        // 模拟AI回复
        const response = {
            reply: `你说："${message}"。这是一个测试回复，表示服务器正常工作！`,
            timestamp: new Date().toISOString(),
            status: 'success'
        };
        
        res.json(response);
    } catch (error) {
        console.error('处理
