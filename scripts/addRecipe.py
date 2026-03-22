#!/usr/bin/env python3

"""
Script para adicionar novas receitas ao arquivo recipes.js

Uso: python3 scripts/addRecipe.py

O script irá:
1. Ler o arquivo recipes.js
2. Solicitar os dados da nova receita
3. Adicionar a receita com o próximo ID disponível
4. Salvar o arquivo atualizado
"""

import re
import os
import sys
from pathlib import Path

def find_last_id(content):
    """Encontra o último ID no arquivo"""
    ids = re.findall(r'id: (\d+)', content)
    return max(int(id) for id in ids) if ids else 0

def format_ingredient(quantity, item):
    """Formata um ingrediente"""
    return f'      {{ quantity: "{quantity}", item: "{item}" }}'

def format_recipe(recipe_id, name, ingredients):
    """Formata uma receita completa"""
    ingredients_str = ',\n'.join(
        format_ingredient(qty, item) for qty, item in ingredients
    )
    
    return f"""  {{
    id: {recipe_id},
    name: "{name}",
    ingredients: [
{ingredients_str}
    ]
  }}"""

def main():
    try:
        # Caminho do arquivo
        script_dir = Path(__file__).parent
        recipes_path = script_dir.parent / 'src' / 'data' / 'recipes.js'
        
        if not recipes_path.exists():
            print(f"❌ Arquivo não encontrado: {recipes_path}")
            sys.exit(1)
        
        # Ler o arquivo
        with open(recipes_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Encontrar o próximo ID
        last_id = find_last_id(content)
        next_id = last_id + 1
        
        print('\n🍕 ADICIONAR NOVA RECEITA\n')
        print(f'Próximo ID: {next_id}\n')
        
        # Solicitar dados
        name = input('Nome da receita: ').strip()
        
        if not name:
            print('❌ Nome não pode estar vazio!')
            sys.exit(1)
        
        print('\nIngredientes (digite "pronto" quando terminar):')
        ingredients = []
        ingredient_count = 1
        
        while True:
            quantity = input(f'Ingrediente {ingredient_count} - Quantidade (ex: 1x, 200gr, 1 pacote): ').strip()
            
            if quantity.lower() == 'pronto':
                break
            
            if not quantity:
                print('⚠️  Quantidade não pode estar vazia!')
                continue
            
            item = input(f'Ingrediente {ingredient_count} - Nome: ').strip()
            
            if not item:
                print('⚠️  Nome do ingrediente não pode estar vazio!')
                continue
            
            ingredients.append((quantity, item))
            ingredient_count += 1
        
        if not ingredients:
            print('❌ Nenhum ingrediente foi adicionado!')
            sys.exit(1)
        
        # Formatar a receita
        recipe_str = format_recipe(next_id, name, ingredients)
        
        # Adicionar ao arquivo
        updated_content = content.replace(
            '\n];',
            f',\n{recipe_str}\n];'
        )
        
        # Salvar o arquivo
        with open(recipes_path, 'w', encoding='utf-8') as f:
            f.write(updated_content)
        
        # Mostrar resultado
        print(f'\n✅ Receita adicionada com sucesso!')
        print(f'📋 ID: {next_id}')
        print(f'📝 Nome: {name}')
        print(f'🥘 Ingredientes: {len(ingredients)}')
        print('\n💾 Arquivo salvo! Agora execute:')
        print('   git add .')
        print(f'   git commit -m "Adicionar receita: {name}"')
        print('   git push')
        
    except Exception as e:
        print(f'❌ Erro: {str(e)}')
        sys.exit(1)

if __name__ == '__main__':
    main()
