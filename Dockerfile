FROM nginx:latest
RUN apt-get update && apt-get install curl --yes
COPY ./course/index.html ./usr/share/nginx/html/course/
COPY ./course/js/config.js ./usr/share/nginx/html/course/js/
COPY ./course/js/main.js ./usr/share/nginx/html/course/js/
COPY ./course/js/list.js ./usr/share/nginx/html/course/js/
COPY ./course/css/bootstrap.min.css ./usr/share/nginx/html/course/css/
