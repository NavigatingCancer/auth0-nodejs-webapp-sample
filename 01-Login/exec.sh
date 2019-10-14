#!/usr/bin/env bash
docker build -t auth0-nodejs-webapp-01-login .
docker run --env-file .env -p 3001:3001 -it auth0-nodejs-webapp-01-login
