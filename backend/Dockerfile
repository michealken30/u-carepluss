FROM node:18
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
COPY package*.json ./
RUN npm install
EXPOSE 4000
CMD ["npm", "run", "start"]