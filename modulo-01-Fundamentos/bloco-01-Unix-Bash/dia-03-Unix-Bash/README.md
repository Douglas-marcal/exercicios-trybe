# Exercícios - Unix & Bash - Dia 03

## Parte I - Criação de arquivos e diretórios

**Dica** : Para criação de arquivos vazios você pode utilizar o comando `touch nome-do-arquivo.extensao`.

1. Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu, crie um diretório chamado `unix_tests` e navegue até ele.

1. Crie um arquivo de texto com o nome `trybe.txt`.

1. Crie uma cópia do arquivo `trybe.txt` com nome `trybe_backup.txt`.

1. Renomeie o arquivo `trybe.txt`.

1. Dentro de `unix_tests`, crie um novo diretório chamado ``backup``.

1. Mova o arquivo `trybe_backup.txt` para o diretório `backup`.

1. Dentro de `unix_tests`, crie um novo diretório chamado `backup2`.

1. Mova o arquivo `trybe_backup.txt` da pasta `backup` para a pasta `backup2`.

1. Apague a pasta `backup`.

1. Renomeie a pasta `backup2` para `backup`.

1. Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.

1. Apague o diretório `backup`.

1. Limpe o terminal.

**Para os exercícios, 14 e 15, crie, de forma manual na parte gráfica do seu sistema operacional, um arquivo de texto com o conteúdo abaixo, chamado `skills.txt`:**

```
Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL
```

14. Mostre na tela as 5 primeiras skills do arquivo `skills.txt`.

1. Mostre na tela as 4 últimas skills do arquivo `skills.txt`.

1. Apague todos os arquivos que terminem em `.txt`.

## Parte II - Manipulação & Busca

1. Na pasta `unix_tests`, baixe um arquivo com os nomes de todos os países do mundo utilizando o comando `curl`:

```
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
```

1. Mostre todo o conteúdo do arquivo `countries.txt` na tela.

1. Mostre o conteúdo de `countries.txt`, página por página, até encontra a `Zambia`.

1. Mostre novamente o conteúdo de `countries.txt` página por página, mas agora utilize um comando para buscar por `Zambia`.

1. Busque por `Brazil` no `countries.txt`.

1. Busque novamente por `brazil`, mas agora utilizando o lower case.

**Para os próximos exercícios, crie um novo arquivo chamado `phrases.txt` e adicione algumas frases a sua escolha. Não precisa criar o arquivo pelo terminal.**

7. Busque pelas frases que não contenham a palavra `fox`.

1. Conte o número de palavras do arquivo `phrases.txt`.

1. Conte o número de linhas do arquivo `phrases.txt`.

1. Crie os arquivos `empty.tbt` e `empty.pdf`.

1. Liste todos os arquivos do diretório `unix_tests`.

1. Liste todos os arquivos que terminem com `txt`.

1. Liste todos os arquivos que terminem com `tbt` ou `txt`.

1. Acesse o manual do comando `ls`.
