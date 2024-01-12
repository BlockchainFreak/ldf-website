#!/bin/bash

# FTP server details
FTP_HOST="ftp.lahoredesignfestival.com"
FTP_USER="emperien_ldf_ftp_user"

# Log in to FTP server and upload contents of /dist
ftp -inv $FTP_HOST <<EOF
user $FTP_USER $FTP_PASS
binary
cd /astro_build
mput dist/*
bye
EOF