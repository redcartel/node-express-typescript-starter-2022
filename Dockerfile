FROM node:16-alpine as ts-environment
WORKDIR /usr/app
COPY package*.json ./
COPY tsconfig*.json ./
RUN npm install
COPY . ./
RUN npm run build
CMD ["node", "dist/src/index.js"]