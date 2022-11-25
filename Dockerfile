FROM node
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY tsconfig.json .
COPY .env .
COPY src .
RUN npm run build
EXPOSE 5000
CMD npm start