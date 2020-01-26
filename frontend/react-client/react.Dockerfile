# Create image based on the official Node 10 image from dockerhub
FROM node:8.17.0-alpine3.9

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app/react-client

# Copy dependency definitions
COPY package.*json /usr/src/app/react-client/

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /usr/src/app/react-client/

# Serve the app
CMD ["npm", "run", "dev"]