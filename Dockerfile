FROM node:11
RUN mkdir -p /src/app
WORKDIR /src/app
COPY . /src/app
RUN npm install
EXPOSE 9009
CMD ["npm", "start"]