FROM node:latest

LABEL version="1.0"
LABEL description="Sandbox container for react with typescript"

RUN apt-get update
RUN apt-get install -y vim
RUN echo "set bell-style none" >> ~/.inputrc

RUN npm install -g -y npm@latest
RUN npx -y create-react-app --template typescript app
