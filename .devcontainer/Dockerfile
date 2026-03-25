FROM node:24-alpine

RUN apk add --virtual .deps bash make git ripgrep

RUN wget -O /usr/local/bin/pnpm https://github.com/pnpm/pnpm/releases/download/v10.28.1/pnpm-linuxstatic-arm64 && \
chmod +x /usr/local/bin/pnpm

RUN adduser -s /bin/bash -D evg
USER evg