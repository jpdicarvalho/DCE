# Imagem oficial do Node.js otimizada para produção
FROM node:20-alpine

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia apenas os arquivos necessários para instalar as dependências
COPY package.json package-lock.json tsconfig.json ./

# Instala as dependências
RUN npm ci --only=production

# Copia todo o código para o container
COPY . .

# Compila o TypeScript
RUN npm run compile

# Expõe a porta que o backend usa
EXPOSE 4000

# Comando para iniciar o servidor (executa o código já compilado)
CMD ["node", "dist/index.js"]