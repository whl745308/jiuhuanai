FROM node:18-alpine

WORKDIR /app

# 复制package文件并安装依赖
COPY package.json ./
RUN npm install

# 复制所有源代码
COPY . .

# 安装pm2用于进程管理
RUN npm install -g pm2

# 暴露端口
EXPOSE 8000

# 启动命令
CMD ["pm2-runtime", "start", "ecosystem.config.js"]
