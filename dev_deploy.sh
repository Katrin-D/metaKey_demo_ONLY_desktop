#!/bin/bash
print_blue () {
  echo -e "\e[44m$1\e[0m"
}

print_green () {
  echo -e "\e[42m$1\e[0m"
}

print_red () {
  echo -e "\e[41m$1\e[0m"
}

ENV="development"
HOST=""
PORT=""
STATIC_DIR=out/

# Rest the same for prod and dev

print_blue "Start deploy $ENV"
#sleep 1

APPS=()

if [ -d "$STATIC_DIR" ]; then
  APPS+=("$STATIC_DIR")
fi

UPLOAD=""
APPS_LEN=${#APPS[@]}

if ((APPS_LEN == 0)); then
  print_red "APPS EMPTY"
  exit 1
fi

for (( i=0; i < APPS_LEN; i++ )); do
  if (( i > 0 )); then
    UPLOAD+=" "
  fi
  UPLOAD+=${APPS[$i]}
done

print_blue "Upload $UPLOAD to server"
#sleep 1
rsync -e "ssh -p $PORT" -avh --delete $UPLOAD $HOST:/var/www/metakey

print_green "Finish Deploy $ENV"
