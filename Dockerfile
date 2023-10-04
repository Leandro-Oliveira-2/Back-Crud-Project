FROM node:16

WORKDIR /app

RUN apt-get update && \
    apt-get install -y \
    build-essential \
    python3

COPY package.json ./

RUN npm install 

COPY . .

EXPOSE 8081

CMD ["npm","run","run:dev"]
