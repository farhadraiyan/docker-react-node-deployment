# Create image based on the official Node 10 image from dockerhub
FROM node:8.17.0-alpine3.9

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app/react-client

# Copy dependency definitions
COPY ./react-client/package*.json /usr/src/app/react-client/

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY ./react-client /usr/src/app/react-client/

# Serve the app
CMD ["npm", "run", "start"]