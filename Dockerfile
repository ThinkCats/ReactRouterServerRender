FROM daocloud.io/node:0.10-onbuild
RUN npm install
RUN npm run build
RUN npm run start
EXPOSE 3000