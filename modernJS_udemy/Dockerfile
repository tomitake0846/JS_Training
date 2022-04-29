FROM node:latest

LABEL version="1.0"
LABEL description="Sandbox container for js training"

RUN apt-get update
RUN apt-get install -y vim
RUN echo "set bell-style none" >> ~/.inputrc

RUN npm install -g -y npm@latest
