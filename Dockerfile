FROM node:4-onbuild
RUN npm install
RUN npm run build
EXPOSE 3000
ENTRYPOINT npm run start