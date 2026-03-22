#!/usr/bin/env node

/**
 * Script para adicionar novas receitas ao arquivo recipes.js
 * 
 * Uso: node scripts/addRecipe.js
 * 
 * O script irá:
 * 1. Ler o arquivo recipes.js
 * 2. Solicitar os dados da nova receita
 * 3. Adicionar a receita com o próximo ID disponível
 * 4. Salvar o arquivo atualizado
 */

import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (prompt) => new Promise((resolve) => {
  rl.question(prompt, resolve);
});

async function main() {
  try {
    const recipesPath = path.join(__dirname, '../src/data/recipes.js');
    
    // Ler o arquivo atual
    let content = fs.readFileSync(recipesPath, 'utf8');
    
    // Encontrar o último ID
    const idMatches = content.match(/id: (\d+)/g);
    const lastId = Math.max(...idMatches.map(m => parseInt(m.match(/\d+/)[0])));
    const nextId = lastId + 1;
    
    console.log('\n🍕 ADICIONAR NOVA RECEITA\n');
    console.log(`Próximo ID: ${nextId}\n`);
    
    // Solicitar dados da receita
    const name = await question('Nome da receita: ');
    
    console.log('\nIngredientes (digite "pronto" quando terminar):');
    const ingredients = [];
    let ingredientCount = 1;
    
    while (true) {
      const quantity = await question(`Ingrediente ${ingredientCount} - Quantidade (ex: 1x, 200gr, 1 pacote): `);
      
      if (quantity.toLowerCase() === 'pronto') {
        break;
      }
      
      const item = await question(`Ingrediente ${ingredientCount} - Nome: `);
      
      ingredients.push({ quantity, item });
      ingredientCount++;
    }
    
    if (ingredients.length === 0) {
      console.log('❌ Nenhum ingrediente foi adicionado!');
      rl.close();
      return;
    }
    
    // Criar objeto da receita
    const newRecipe = {
      id: nextId,
      name,
      ingredients
    };
    
    // Formatar a receita como string
    const recipeString = `  {
    id: ${newRecipe.id},
    name: "${newRecipe.name}",
    ingredients: [
${newRecipe.ingredients.map(ing => `      { quantity: "${ing.quantity}", item: "${ing.item}" }`).join(',\n')}
    ]
  }`;
    
    // Adicionar a nova receita antes do fechamento do array
    const updatedContent = content.replace(
      /\n\];$/,
      `,\n${recipeString}\n];`
    );
    
    // Salvar o arquivo
    fs.writeFileSync(recipesPath, updatedContent, 'utf8');
    
    console.log(`\n✅ Receita adicionada com sucesso!`);
    console.log(`📋 ID: ${nextId}`);
    console.log(`📝 Nome: ${name}`);
    console.log(`🥘 Ingredientes: ${ingredients.length}`);
    console.log('\n💾 Arquivo salvo! Agora execute:');
    console.log('   git add .');
    console.log('   git commit -m "Adicionar receita: ' + name + '"');
    console.log('   git push');
    
    rl.close();
  } catch (error) {
    console.error('❌ Erro:', error.message);
    rl.close();
    process.exit(1);
  }
}

main();
