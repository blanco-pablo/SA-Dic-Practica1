FROM node
RUN apt-get update && apt-get upgrade -y \
    && apt-get clean
WORKDIR /app
ADD /Server /app
RUN npm install
EXPOSE 3000

CMD npm start