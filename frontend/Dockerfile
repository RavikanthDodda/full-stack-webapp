#build app
FROM node:13.12.0-alpine 

RUN ["npm","i","-g","serve"]

COPY ./build /build

EXPOSE 5000

ENTRYPOINT ["serve","-s","build"]