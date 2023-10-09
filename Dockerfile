FROM node:16-alpine

WORKDIR /ipl-dashborad-frontend

COPY node_modules /ipl-dashborad-frontend/node_modules

COPY public /ipl-dashborad-frontend/public

COPY src /ipl-dashborad-frontend/src

COPY package.json /ipl-dashborad-frontend/

CMD ["npm", "start"]