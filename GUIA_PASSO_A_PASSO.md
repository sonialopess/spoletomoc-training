# 📚 Guia Passo a Passo - Como Adicionar Receitas

Este guia é para você que quer adicionar novas receitas de forma fácil e rápida.

---

## 🎯 O que você vai fazer:

1. Baixar o projeto no seu computador
2. Instalar as ferramentas necessárias
3. Executar o script para adicionar receitas
4. Enviar para o GitHub (automático)
5. Site atualiza automaticamente

---

## 📥 PASSO 1: Baixar o Projeto

### No Windows:

1. **Abra o Explorador de Arquivos**
2. **Escolha uma pasta** onde quer salvar o projeto (ex: `C:\Meus Documentos`)
3. **Clique com botão direito** e escolha **"Git Bash Here"** (ou abra o Git Bash)
4. **Digite este comando:**
   ```bash
   git clone https://github.com/sonialopess/spoletomoc-training.git
   ```
5. **Pressione Enter** e aguarde

### No Mac/Linux:

1. **Abra o Terminal**
2. **Vá para a pasta desejada:**
   ```bash
   cd ~/Documentos
   ```
3. **Digite:**
   ```bash
   git clone https://github.com/sonialopess/spoletomoc-training.git
   ```
4. **Pressione Enter** e aguarde

---

## 🛠️ PASSO 2: Instalar as Ferramentas

### Você precisa de UMA destas opções:

#### **Opção A: Node.js (Recomendado)**

1. **Acesse:** https://nodejs.org/
2. **Baixe a versão LTS** (a mais estável)
3. **Instale** (clique em "Next" várias vezes)
4. **Abra o terminal e teste:**
   ```bash
   node --version
   ```
   Deve mostrar algo como: `v18.0.0`

#### **Opção B: Python**

1. **Acesse:** https://www.python.org/downloads/
2. **Baixe a versão mais recente**
3. **Instale** (marque a opção "Add Python to PATH")
4. **Abra o terminal e teste:**
   ```bash
   python --version
   ```
   Deve mostrar algo como: `Python 3.11.0`

---

## 🚀 PASSO 3: Executar o Script

### Abra o Terminal na Pasta do Projeto

#### No Windows:
1. **Abra o Explorador de Arquivos**
2. **Vá para a pasta `spoletomoc-training`**
3. **Clique com botão direito** e escolha **"Git Bash Here"**

#### No Mac/Linux:
1. **Abra o Terminal**
2. **Digite:**
   ```bash
   cd ~/Documentos/spoletomoc-training
   ```

### Execute o Script

#### Se você instalou Node.js:
```bash
node scripts/addRecipe.js
```

#### Se você instalou Python:
```bash
python3 scripts/addRecipe.py
```

---

## 📝 PASSO 4: Adicionar a Receita

O script vai fazer perguntas. Aqui está um exemplo:

```
🍕 ADICIONAR NOVA RECEITA

Próximo ID: 36

Nome da receita: PIZZA NOVA
```

**Você digita:** `PIZZA NOVA` e pressiona **Enter**

```
Ingrediente 1 - Quantidade (ex: 1x, 200gr, 1 pacote): 
```

**Você digita:** `1x` e pressiona **Enter**

```
Ingrediente 1 - Nome: 
```

**Você digita:** `Pizza Mozzarela` e pressiona **Enter**

```
Ingrediente 2 - Quantidade (ex: 1x, 200gr, 1 pacote): 
```

**Você digita:** `2x` e pressiona **Enter**

```
Ingrediente 2 - Nome: 
```

**Você digita:** `Bacon` e pressiona **Enter**

```
Ingrediente 3 - Quantidade (ex: 1x, 200gr, 1 pacote): 
```

**Você digita:** `1x` e pressiona **Enter**

```
Ingrediente 3 - Nome: 
```

**Você digita:** `Requeijão` e pressiona **Enter**

```
Ingrediente 4 - Quantidade (ex: 1x, 200gr, 1 pacote): 
```

**Você digita:** `pronto` e pressiona **Enter** (para terminar)

---

## ✅ PASSO 5: Confirmar e Enviar

O script vai mostrar:

```
✅ Receita adicionada com sucesso!
📋 ID: 36
📝 Nome: PIZZA NOVA
🥘 Ingredientes: 3

💾 Arquivo salvo! Agora execute:
   git add .
   git commit -m "Adicionar receita: PIZZA NOVA"
   git push
```

### Agora você executa estes 3 comandos:

**Comando 1:**
```bash
git add .
```
(Pressione Enter)

**Comando 2:**
```bash
git commit -m "Adicionar receita: PIZZA NOVA"
```
(Pressione Enter)

**Comando 3:**
```bash
git push
```
(Pressione Enter)

---

## 🎉 PRONTO!

Depois de fazer `git push`:

1. **GitHub recebe o código** (automático)
2. **Vercel faz o deploy** (automático, leva 10-30 segundos)
3. **Site atualiza** (automático)
4. **Nova receita aparece no site!** ✨

---

## 🔍 Como Verificar se Funcionou

1. **Acesse o site:** https://spoletomoc-training.vercel.app
2. **Clique em "Receitas Fechadas"**
3. **Clique em "Estudar Receitas"**
4. **Procure pela sua nova receita** (deve estar no final da lista)

---

## ❓ Dúvidas Frequentes

### P: Devo fazer isso toda vez que quero adicionar uma receita?
**R:** Sim! Mas é rápido (5 minutos).

### P: E se eu cometer um erro ao digitar?
**R:** Sem problema! Você pode:
- Executar o script novamente (vai criar outra receita)
- Ou editar manualmente o arquivo `src/data/recipes.js`

### P: Quanto tempo leva para aparecer no site?
**R:** 10-30 segundos após fazer `git push`

### P: Preciso de internet?
**R:** Sim, para fazer `git push` e para o Vercel fazer deploy

### P: Posso adicionar múltiplas receitas?
**R:** Sim! Execute o script quantas vezes quiser

### P: O que é "git"?
**R:** É um sistema que controla versões e envia código para o GitHub

### P: O que é "GitHub"?
**R:** É um servidor onde o código fica guardado

### P: O que é "Vercel"?
**R:** É um servidor que hospeda o site e atualiza automaticamente

---

## 🎓 Resumo dos Comandos

| Comando | O que faz |
|---------|-----------|
| `git clone ...` | Baixa o projeto |
| `node scripts/addRecipe.js` | Abre o script (Node.js) |
| `python3 scripts/addRecipe.py` | Abre o script (Python) |
| `git add .` | Prepara os arquivos para enviar |
| `git commit -m "..."` | Cria um "checkpoint" com mensagem |
| `git push` | Envia para o GitHub |

---

## 📞 Precisa de Ajuda?

Se tiver dúvidas ou problemas:
1. Releia este guia
2. Verifique se instalou Node.js ou Python corretamente
3. Verifique se está na pasta correta (spoletomoc-training)
4. Entre em contato com o desenvolvedor

---

**Boa sorte! 🚀**
