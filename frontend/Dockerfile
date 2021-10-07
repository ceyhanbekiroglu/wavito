FROM node:alpine AS BUILDER

WORKDIR /app

ADD package.json package-lock.json ./

RUN npm install

ADD public ./public
ADD .browserslistrc .prettierrc .eslintrc.js babel.config.js vue.config.js ./

ADD src ./src
ADD public ./public

RUN npm run build

FROM node:alpine 

WORKDIR /app
RUN npm i - serve

COPY --from=BUILDER /app/dist ./

CMD serve -l $PORT

