#base image
FROM node:16-alpine3.14



COPY . .
RUN npm install

#start app
CMD ["npm", "start"]