# Create image based on the official Node 10 image from dockerhub
FROM node:8.17.0-alpine3.9 as builder

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app/react-client

# Copy dependency definitions
COPY package*.json /usr/src/app/react-client/

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /usr/src/app/react-client/

# Serve the app
RUN npm run build


#nginx 
FROM nginx

EXPOSE 3000
#override the default default.conf file
COPY default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /usr/src/app/react-client/build /usr/share/nginx/html