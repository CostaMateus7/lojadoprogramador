**Apesentação** 

Essa é uma loja virtual do programador. Nela você pode navegar e conferir os produtos. Além disso você tem a opção de adicionar ao carrinho. Outra funcionalidade é o usuário poder trocar o tema (claro ou escuro). No front-end foi utilizado o React e no back-end foi utilizado o node, já os dados foram mokados. 

**Link dos vídeos na versão desktop e mobile:**

https://drive.google.com/file/d/14Br2IhMEUMgg_vlpRk-D5Ei6Pk1JT2zV/view?usp=sharing

https://drive.google.com/file/d/1SdngxKV6n5_mt6p2iJBlRNAUs6SkINhz/view?usp=sharing



**Instruções para o funcionamento da aplicação**

**OBSERVAÇÕES**

- Para utilizar tais comandos é necessário que você tenha o Docker e o Docker Compose instalado em sua máquina;

- Antes de executar o comando verifique que está com as seguintes portas liberadas: 8080 e 3000;

- Verificar se está no diretório /lojadoprogramador antes de realizar o comando;

**Comandos** 

- Para baixar o repositório vá ao terminal e cole a seguinte instrução:

git clone https://github.com/CostaMateus7/lojadoprogramador.git


- Vá até o diretório /lojadoprogramador e digite o seguinte comando:


*Dispositivos em geral*

docker compose -f server/docker-compose.yaml up -d --build &&  docker compose -f client/docker-compose.yaml up -d


*Linux*

sudo docker compose -f server/docker-compose.yaml up -d --build && sudo  docker compose -f client/docker-compose.yaml up -d

- Confira se os containers estão ativos com o comando: 

docker ps 

- Vá ao navegador e acesse

http://localhost:3000 


**Conteúdos utilizados e estudados:** 

*FRONT:*

- ReactJs
- Organização de pastas;
-JSX
- Components;
-React Router
-ContextAPI
-Persistência de dados (Local Storage),
-UseState,
-UseNavigate,
-UseEffect,
-Styled components,
- Map, find, reduce
-Axios
-Themes
- Responsividade



*BACK*

- NodeJs
- Express
- Eslint
- Insomnia
- Cors
- Path