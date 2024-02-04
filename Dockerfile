# syntax=docker/dockerfile:1
FROM nodejs:20.10.0-bookworm-slim as builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
RUN npm run build:ncc

FROM nodejs:20.10.0-bookworm-slim 
LABEL org.opencontainers.image.authors="vaggeliskls <vaggeliskls@gmail.com>"
WORKDIR /app
ENV API_KEY=""
ENV MODEL="gpt-3.5-turbo"
ENV TEMPERATURE="0.5"
ENV TOP_P="0.8"
ENV DEBUG="false"
COPY --from=builder /app/dist /app
CMD node ./index.js