FROM node:16-alpine

WORKDIR /home/node/app
COPY package*.json ./
RUN npm install

COPY ./index.js ./

EXPOSE 3001

CMD ["node", "index.js"];
