FROM node:18-alpine

WORKDIR /app

# 复制 package 文件
COPY package*.json ./
RUN npm install

# 复制所有文件（包括 ecosystem.config.js）
COPY . .

# 直接使用 node 启动，去掉 PM2
CMD ["node", "server.js"]
