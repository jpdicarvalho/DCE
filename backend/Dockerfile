# Usa a imagem oficial do Node.js como base
FROM node:20

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia apenas os arquivos package.json e package-lock.json para instalar as dependências
COPY package.json package-lock.json ./

# Instala TODAS as dependências, incluindo as de desenvolvimento
RUN npm install --include=dev

# Copia o restante do código para o container
COPY . .

# Gera o Prisma Client para garantir compatibilidade com o ambiente do container
RUN npx prisma generate

# Expõe a porta 4000 para acessar a API
EXPOSE 4000

# Comando para iniciar o servidor
CMD ["node", "./dist/index.js"]
