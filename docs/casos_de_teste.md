# 🧪 Casos de Teste – Projeto QA Links

Este documento descreve os casos de teste manuais do projeto e sua relação direta com os testes automatizados.

---

## ✅ CT01 — Pesquisa válida
**Objetivo:** Verificar se a barra de pesquisa retorna resultados.

**Passos:**
1. Acessar a página inicial.
2. Digitar **"Python"** no campo de busca.
3. Clicar no botão **Buscar**.

**Resultado esperado:** A página exibe uma lista de resultados relacionados a Python.

**Teste automatizado correspondente:**  
✔ `busca.spec.js`

---

## ✅ CT02 — Pesquisa vazia
**Objetivo:** Verificar o comportamento ao tentar buscar sem digitar nada.

**Passos:**
1. Deixar o campo de busca vazio.
2. Clicar em **Buscar**.

**Resultado esperado:** Mensagem: **"Digite um termo para pesquisar"**.

**Teste automatizado correspondente:**  
✔ Será implementado como `busca_vazia.spec.js`

---

## ✅ CT03 — Link abrindo corretamente
**Objetivo:** Validar se os links da pesquisa abrem corretamente.

**Passos:**
1. Buscar por **"JavaScript"**.
2. Clicar no primeiro link da lista.

**Resultado esperado:** Uma nova aba abre com o site correspondente.

**Teste automatizado correspondente:**  
✔ `clique_botao.spec.js` (valida abertura de elementos)

---

## ✅ CT04 — Caracteres especiais
**Objetivo:** Garantir que a aplicação se comporte corretamente com caracteres inválidos.

**Passos:**
1. Digitar **"&&&&&"** na busca.
2. Clicar em **Buscar**.

**Resultado esperado:** Mensagem: **"Nenhum resultado encontrado"**.

**Teste automatizado correspondente:**  
✔ Será implementado como `busca_caracteres_invalidos.spec.js`

---

## ✅ CT05 — Busca com tecla Enter
**Objetivo:** Verificar se pressionar Enter executa a busca.

**Passos:**
1. Digitar **"Data Science"** no campo de busca.
2. Pressionar a tecla **Enter**.

**Resultado esperado:** A busca é executada normalmente.

**Teste automatizado correspondente:**  
✔ `busca.spec.js` (Enter será adicionado)

---

# 📌 Observação importante
Os testes automatizados **devem sempre refletir estes casos de teste**.  
Cada CT terá **um arquivo .spec.js** correspondente dentro de `automacao/tests/`.

Assim, sua documentação e sua automação estarão sempre alinhadas.
