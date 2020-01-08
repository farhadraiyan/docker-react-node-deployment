FROM node:8.17.0-alpine3.9

WORKDIR /usr/src/app/node-server

#Install express 
RUN npm install express

#install express generator globally, this is not nesscessary since we are working on
#existing project.
# RUN npm install express-generator 

COPY ./node-server/package*.json /usr/src/app/node-server/

RUN npm install

COPY ./node-server /usr/src/app/node-server/

EXPOSE 3000

CMD [ "npm", "start" ]