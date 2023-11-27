@echo off

cd backend
echo Instalando dependencias para el backend...
call npm install

echo Migrando la base de datos del backend...
call npx sequelize-cli db:migrate

echo Levantando el servidor del backend...
start cmd /k npm run dev

cd ../frontend
echo Instalando dependencias para el frontend...
call npm install

echo Levantando el servidor del frontend...
start cmd /k npm run dev

pause