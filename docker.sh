#!/bin/sh

# Criação da Imagem e Container Docker

# Declarar variaveis
tag=v02
repositorio=fabiocaettano74
imagem=controle-de-compras
nomeDaImagem=web

status=`ps ax | grep docker | grep -v grep | wc -l`

if [ $status -lt 1 ]; 
then
    echo "Iniciar Docker"
    sudo service docker start
else
    echo "Docker em execução"
fi

#  Criar Imagem e executar Container
echo ""
echo "Passo 01: Construindo Imagem Docker"
docker build -t $repositorio/$imagem:$tag .
echo ""
echo "Passo 02: Deletando o container"
docker container rm -f $nomeDaImagem
echo ""
echo "Passo 03: Exectuando o container "
docker run -d -p 8080:80 --name $nomeDaImagem $repositorio/$imagem:$tag