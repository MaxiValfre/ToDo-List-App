#!/bin/bash

# En el directorio backend
cd backend || exit

echo "Instalando dependencias para el backend..."
npm install

echo "Migrando la base de datos del backend..."
npx sequelize-cli db:migrate

echo "Levantando el servidor del backend..."
npm run dev &

# En el directorio frontend
cd ../frontend || exit

echo "Instalando dependencias para el frontend..."
npm install

echo "Levantando el servidor del frontend..."
npm run dev &

# Esperar a que ambos servidores estén listos
wait