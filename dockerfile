FROM node:12-alpine

WORKDIR /cliente

COPY . .

RUN yarn install --production

CMD ["node", "/cliente/src/App.js"]