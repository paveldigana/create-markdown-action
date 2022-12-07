#!/bin/sh
pwd
ls
cd /create-markdown-action
pwd
ls
npm run create

# chown -R $(ls -ldn /github/workspace/ | awk '{print $3":"$4}') /github/workspace/dist/
