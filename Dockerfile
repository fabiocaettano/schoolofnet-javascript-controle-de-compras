FROM nginx:latest
COPY ./course/index.html ./usr/share/nginx/html/course/
COPY ./course/css/bootstrap.min.css ./usr/share/nginx/html/course/css/
