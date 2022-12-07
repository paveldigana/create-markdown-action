FROM node:18-alpine

WORKDIR /create-markdown-action

COPY package.json .
COPY package-lock.json .
RUN npm ci

COPY . .

RUN ["chmod", "+x", "/create-markdown-action/entrypoint.sh"]
ENTRYPOINT ["/create-markdown-action/entrypoint.sh"]