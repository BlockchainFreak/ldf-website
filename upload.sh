#!/bin/bash

# FTP server details
FTP_HOST="ftp.lahoredesignfestival.com"
FTP_USER="emperien_ldf_ftp_user"

# Log in to FTP server and upload contents of /dist recursively
lftp -e "
open $FTP_HOST
user $FTP_USER $FTP_PASS
mirror --reverse --verbose dist /astro_build
bye
"