# ビルドステージ
FROM node:18-alpine as build

WORKDIR /app

# 依存関係のファイルをコピー
COPY package*.json ./

# 依存関係のインストール
RUN npm install

# ソースコードをコピー
COPY . .

# アプリケーションのビルド
RUN npm run build

# 実行ステージ
FROM nginx:alpine

# ビルドしたファイルをNginxのドキュメントルートにコピー
COPY --from=build /app/build /usr/share/nginx/html

# Nginxの設定ファイルをコピー（必要に応じて）
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"] 