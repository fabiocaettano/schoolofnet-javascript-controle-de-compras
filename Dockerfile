FROM nginx:latest
COPY ./course/index.html ./usr/share/nginx/html/course/
COPY ./course/js/config.js ./usr/share/nginx/html/course/js/
COPY ./course/css/bootstrap.min.css ./usr/share/nginx/html/course/css/
