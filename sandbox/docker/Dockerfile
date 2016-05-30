FROM ubuntu:14.04
MAINTAINER Sardo Ip <sardo.ip@sardo.work>

#Install software-properties for add apt repo

RUN apt-get update && apt-get install -y software-properties-common python-software-properties

#Add repo of mongo database

RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10

RUN echo "deb http://downloads-distro.mongodb.org/repo/debian-sysvinit dist 10gen" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list

#Add chris-lea's node.js repo

RUN DEBIAN_FRONTEND=noninteractive add-apt-repository -y ppa:chris-lea/node.js


#Install node.js and mongodb

RUN apt-get update && apt-get install -y \
nodejs mongodb-org supervisor

#Fix create /data/db to fix mongodb's problem

RUN mkdir -p /data/db

#Create log folder of treehole.
#Change the path if you changed the setting of treehole.

RUN mkdir /var/log/treehole

#Export port 3000.
#Change the port if you changed the setting of treehole.

EXPOSE 3000

ADD supervisord.conf /etc/supervisor/conf.d/supervisord.conf
CMD supervisord -n -c /etc/supervisor/conf.d/supervisord.conf
