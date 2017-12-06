#!/bin/bash

npm run deploy:prod
scp -r dist portfolio:/home/ubuntu/other
