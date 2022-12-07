#!/bin/sh
pwd
ls
npm run create

# chown -R $(ls -ldn /github/workspace/ | awk '{print $3":"$4}') /github/workspace/dist/
