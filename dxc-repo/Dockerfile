#base image
FROM node:16-alpine3.14

ENV NODE_ENV development
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY yarn.lock .
RUN npm install
# Copy app files
COPY . .
# Arguments
# ARG REACT_APP_API_BASE_URL
# ENV REACT_APP_API_BASE_URL=${REACT_APP_API_BASE_URL}
# Expose port
EXPOSE 3000
# Start the app
CMD [ "npm", "start" ]