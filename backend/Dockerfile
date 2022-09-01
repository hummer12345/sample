FROM php:7.4.8-fpm

RUN apt update -y && \
    apt upgrade -y && \
    apt install -y libpq-dev libfreetype6-dev libjpeg62-turbo-dev libpng-dev curl zip unzip npm && \
    docker-php-ext-configure gd --with-freetype --with-jpeg && \
    docker-php-ext-install -j$(nproc) bcmath ctype fileinfo json pdo_mysql tokenizer gd
#COPY --from=node:16 /usr/local/bin /usr/local/bin
#COPY --from=node:16 /usr/local/lib /usr/local/lib
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer 
RUN  chmod +x /usr/bin/composer
    #apt install -y curl zip unzip npm && \
    #npm install n -g && \
    #n stable && \
    #apt purge -y nodejs npm && \
    #apt remove cmdtest && \
    #apt remove yarn && \
    #apt install -y gnupg2 && \
    #curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    #echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    #apt install -y yarn && \
    #php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"  && \
    #php -r "if (hash_file('sha384', 'composer-setup.php') === '906a84df04cea2aa72f40b5f787e49f22d4c2f19492ac310e8cba5b96ac8b64115ac402c8cd292b8a03482574915d1a8') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"  && \
    #php composer-setup.php  && \
    #php -r "unlink('composer-setup.php');" && \
    #mv composer.phar /usr/local/bin/composer && \