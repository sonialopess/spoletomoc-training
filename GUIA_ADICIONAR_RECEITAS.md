# 📋 Guia para Adicionar Novas Receitas

Este guia explica como adicionar novas receitas ao sistema de treinamento do Spoleto.

## ✨ Opção 1: Usar o Script Automático (Recomendado)

### Pré-requisitos
- Node.js instalado no seu computador
- Acesso ao terminal/prompt de comando

### Passos:

1. **Abra o terminal** na pasta do projeto `spoleto-training`

2. **Execute o script:**
   ```bash
   node scripts/addRecipe.js
   ```

3. **Siga as instruções:**
   - Digite o **nome da receita**
   - Digite cada **ingrediente** com sua **quantidade**
   - Digite `pronto` quando terminar de adicionar ingredientes

4. **Exemplo de uso:**
   ```
   Nome da receita: PIZZA NOVA
   Ingrediente 1 - Quantidade: 1x
   Ingrediente 1 - Nome: Pizza Mussarela
   Ingrediente 2 - Quantidade: 2x
   Ingrediente 2 - Nome: Bacon
   Ingrediente 3 - Quantidade: 1x
   Ingrediente 3 - Nome: Requeijão
   (digite "pronto" para terminar)
   ```

5. **Confirme o resultado:**
   - O script mostrará um resumo da receita adicionada
   - O arquivo será salvo automaticamente

6. **Envie para o GitHub:**
   ```bash
   git add .
   git commit -m "Adicionar receita: PIZZA NOVA"
   git push
   ```

---

## ✨ Opção 2: Editar Manualmente

Se preferir editar diretamente:

1. **Abra o arquivo:** `src/data/recipes.js`

2. **Encontre o final do arquivo** (antes do `];`)

3. **Adicione uma nova receita** seguindo este formato:

   ```javascript
   {
     id: 36,
     name: "PIZZA NOVA",
     ingredients: [
       { quantity: "1x", item: "Pizza Mussarela" },
       { quantity: "2x", item: "Bacon" },
       { quantity: "1x", item: "Requeijão" }
     ]
   }
   ```

4. **Importante:**
   - Aumente o `id` em 1 (último ID + 1)
   - Use a mesma formatação
   - Adicione uma **vírgula** após a receita anterior
   - Não adicione vírgula após a última receita

5. **Salve o arquivo** (Ctrl+S ou Cmd+S)

6. **Envie para o GitHub:**
   ```bash
   git add .
   git commit -m "Adicionar receita: PIZZA NOVA"
   git push
   ```

---

## 📝 Formato Correto dos Ingredientes

Use estes formatos para a **quantidade**:

| Formato | Exemplo |
|---------|---------|
| Unidades | `1x`, `2x`, `3x` |
| Gramas | `90g`, `200g`, `75gr` |
| Pacotes | `1 pacote`, `2 pacotes` |
| Conchas | `2 conchas` |
| Fio/Pincelada | `1 fio / 1 pincelada` |
| Polvilhadas | `4 polvilhadas` |
| Unidade | `1 unidade` |

---

## ✅ Checklist Antes de Enviar

- [ ] Receita tem um nome claro e em MAIÚSCULAS
- [ ] Todos os ingredientes têm quantidade e nome
- [ ] A quantidade está em um formato válido
- [ ] O ID é sequencial (último + 1)
- [ ] Não há erros de digitação
- [ ] A formatação está correta
- [ ] Fez `git add .`, `git commit` e `git push`

---

## 🚀 Após Enviar

Depois de fazer `git push`:

1. O GitHub receberá o código
2. O Vercel fará o deploy automaticamente
3. Em poucos segundos, o site estará atualizado
4. A nova receita aparecerá no site

---

## ❓ Dúvidas Frequentes

**P: Posso adicionar múltiplas receitas de uma vez?**
R: Sim! Execute o script várias vezes, uma para cada receita.

**P: E se eu cometer um erro?**
R: Você pode editar o arquivo `src/data/recipes.js` manualmente ou usar o script novamente.

**P: Como saber qual é o próximo ID?**
R: O script automaticamente encontra o último ID e sugere o próximo.

**P: Preciso atualizar os quizzes também?**
R: Sim, você pode adicionar perguntas sobre a nova receita no arquivo `src/data/recipeQuizzes.js` seguindo o mesmo padrão.

---

## 📞 Suporte

Se tiver dúvidas, entre em contato com o desenvolvedor! 🚀
