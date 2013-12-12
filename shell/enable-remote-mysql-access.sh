#!/bin/bash

mysql -uroot < "/vagrant/shell/enable-remote-mysql-access.sql"
sed -i "s/^bind-address/#bind-address/" /etc/mysql/my.cnf
sudo service mysql restart