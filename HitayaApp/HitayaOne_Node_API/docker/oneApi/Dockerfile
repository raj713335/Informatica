FROM node:15.13-alpine

WORKDIR /core

ENV PATH="./node_modules/.bin:$PATH"

COPY package.json /core/
RUN npm install

COPY . /core

EXPOSE 3200