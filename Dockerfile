FROM node:18-alpine

# WORKDIR /create-markdown-action

COPY package.json .
COPY package-lock.json .
RUN npm ci

COPY . .

RUN ["chmod", "+x", "entrypoint.sh"]
ENTRYPOINT ["entrypoint.sh"]