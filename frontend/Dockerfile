FROM node:16-alpine

MAINTAINER wajnberg1@gmail.com

EXPOSE 5173


########
## User: frontend
#####
RUN addgroup -g 1005 frontend
RUN adduser -G frontend -u 1005 frontend -D
USER frontend

WORKDIR /home/frontend


RUN chmod -R 750 /home/frontend
COPY . /home/frontend/

CMD ["/bin/sh","/home/frontend/frontend.sh"]

