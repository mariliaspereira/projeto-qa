# Cenários BDD (Gherkin)

## Cenário 01 — Buscar conteúdo válido
**Dado** que o usuário está na página inicial  
**Quando** digita "Python" no campo de busca  
**E** clica em "Buscar"  
**Então** deve visualizar links sobre Python.

---

## Cenário 02 — Campo de busca vazio
**Dado** que o usuário está na página inicial  
**Quando** clicar em "Buscar" sem digitar nada  
**Então** deve aparecer a mensagem "Digite um termo para pesquisar".

---

## Cenário 03 — Abrir link
**Dado** que o usuário realizou uma busca  
**Quando** clicar no primeiro link  
**Então** o sistema deve abrir o site em nova aba.

