FROM node:14.15.1
WORKDIR /myapp
COPY . .
RUN rm -rf node_modules
RUN npm set registry http://192.168.1.11:4873/
RUN npm install

# container running phase
CMD ["npm", "run", "serve"]
