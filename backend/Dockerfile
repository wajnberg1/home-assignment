FROM node:12-alpine

MAINTAINER wajnberg1@gmail.com
EXPOSE 8080

########
## User: backend
#####
RUN addgroup -g 1005 backend
RUN adduser -G backend -u 1005 backend -D
USER backend
WORKDIR /home/backend
RUN chmod -R 750 /home/backend
COPY . /home/backend/

CMD ["/bin/sh","/home/backend/backend.sh"]

