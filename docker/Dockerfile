# 使用官方的 Node.js 基礎映像
FROM node:16

# 設置工作目錄
WORKDIR /app

# 將 package.json 和 package-lock.json 複製到工作目錄
COPY ../package*.json ./

# 安裝依賴項
RUN npm install

# 複製應用程序的其餘部分
COPY .. .

# 暴露 Nuxt.js 服務所需的端口
EXPOSE 3000

# 運行 Nuxt.js 開發服務
CMD ["npx", "nuxi", "dev", "--host", "0.0.0.0"]
