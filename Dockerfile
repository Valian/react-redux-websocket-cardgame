FROM node

ENV PROJECT_ROOT=/srv
ADD package.json $PROJECT_ROOT/package.json

RUN cd $PROJECT_ROOT && npm install && npm install -g nodemon

ADD . $PROJECT_ROOT
WORKDIR $PROJECT_ROOT

CMD ["npm", "run", "server"]