FROM node:4-onbuild
RUN npm install
RUN npm run build
RUN npm run start
EXPOSE 3000