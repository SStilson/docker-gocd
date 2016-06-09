FROM node:argon
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

# Expose so it can be mapped by Docker Daemon
EXPOSE 8080

# Command to start app
CMD [ "npm", "start" ]