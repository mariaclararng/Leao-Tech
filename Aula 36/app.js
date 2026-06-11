const prompt = require('prompt-sync')()
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config()
const supabase = createClient(process.env.SUPABASE_URL,process.env.SUPABASE_KEY)
const bcrypt = require('bcrypt')
const express = require('express')

async function inserirAutor() {
    let nome = prompt('Digite o nome do autor: ')
    let nacionalidade = prompt('Digite a nacionalidade: ')
    let novoAutor = {
        nome: nome,
        nacionalidade: nacionalidade
    }
    const { data, error } = await supabase.from('biblioteca_autor').insert(novoAutor).select()
    if (error) {
        console.log('Erro ao inserir autor:', error)
    } else {
        console.log('Autor inserido com sucesso!')
        console.log(data)
    }
}
// inserirAutor()

async function listarLivros() {
    const { data, error } = await supabase.from('biblioteca_livro').select('titulo, genero, biblioteca_autor(nome, nacionalidade), quantidade')
    if (error) {
        console.log(error)
        return
    }
    data.forEach(livro => {
        console.log('====')
        console.log(`Título: ${livro.titulo}\nQuantidade: ${livro.quantidade}`)
    });
}

async function buscarLivro(titulo) {
    const { data, error } = await supabase.from('biblioteca_livro').select('titulo, genero, quantidade').eq('titulo', titulo)
    if (error) {
        console.log(error)
        return
    }
    console.log(data)
    data.forEach(livro => {
        console.log(`Título: ${livro.titulo} - ${livro.quantidade}, Gênero: ${livro.genero}`)
    });
}

async function atualizarAutor(id) {
    let nome = prompt('Digite o novo nome: ')
    let nacionalidade = prompt('Digite a nova nacionalidade: ')
    let atualizacao = {
        nome: nome,
        nacionalidade: nacionalidade
    }
    const { data, error } = await supabase.from('biblioteca_autor').update(atualizacao).eq('id', id).select()
    if (error) {
        console.log(error)
    } else {
        console.log('Autor atualizado com sucesso!')
    }
}

async function deletarAutor(id) {
    const { data, error } = await supabase.from('biblioteca_autor').delete().eq('id', id).select()
    if (error) {
        console.log(error)
    } else {
        console.log('Autor deletado com sucesso!')
        console.log(data)
    }
}


// Controle do Usuário

async function inserirUsuario() {
    let nome = prompt('Insira o nome: ')
    let cpf = prompt('Insira o cpf: ')
    let telefone = prompt('Insira o telefone: ')
    let endereco = prompt('Insira o endereco: ')
    let senha = prompt('Insira a senha: ')
    let tipo = prompt('Insira o tipo (cliente/funcionario): ')
    
    const saltRounds = 10
    const senhaCrip = await bcrypt.hash(senha, saltRounds)
    
    let novoUsuario = {
        nome: nome,
        cpf: cpf,
        telefone: telefone,
        endereco: endereco,
        senha: senhaCrip,
        tipo: tipo
    }
    const { data, error } = await supabase.from('biblioteca_usuarios').insert(novoUsuario).select()
    error ? console.log(error) : console.log('Dados Inseridos com sucesso')
}


// Menu 

async function menuFuncionario() {
    console.log('\n= MENU FUNCIONÁRIO ==')
    console.log('1 - Inserir Autor')
    console.log('2 - Atualizar Autor')
    console.log('3 - Deletar Autor')
    console.log('4 - Listar Livros')
    console.log('0 - Sair')
    
    let opcaoFuncionario = prompt('Escolha uma opção: ')

    while (opcaoFuncionario != '0') {
        switch (opcaoFuncionario) {
            case '1':
                await inserirAutor()
                break;
            case '2':
                let idAtualizar = prompt('Digite o ID do autor que deseja atualizar: ')
                await atualizarAutor(idAtualizar)
                break;
            case '3':
                let idDeletar = prompt('Digite o ID do autor que deseja deletar: ')
                await deletarAutor(idDeletar)
                break;
            case '4':
                await listarLivros()
                break;
            default:
                console.log('Opção inválida.')
                break;
        }

        console.log('\n=== MENU FUNCIONÁRIO =')
        console.log('1 - Inserir Autor')
        console.log('2 - Atualizar Autor')
        console.log('3 - Deletar Autor')
        console.log('4 - Listar Livros')
        console.log('0 - Sair')
        opcaoFuncionario = prompt('Escolha uma opção: ')
    }
}

// async function menu() {
//     console.log('====== MENU ======')
//     console.log('1 - Cadastrar Usuário')
//     console.log('2 - Logar no sistema')
//     console.log('0 - Sair')
//     let opcao = prompt('Escolha uma opção: ')

    while (opcao != '0') {
        switch (opcao) {
            case '1':
                await inserirUsuario()
                break;
            case '2':
                let usuario = await logarSistema()
                if (usuario) {
                    console.log('\nUsuário Logado')
                    console.log(`Seja bem-vindo ${usuario.nome}`)

                    switch (usuario.tipo) {
                        case 'cliente':
                            console.log('\n= MENU CLIENTE ===')
                            console.log('1 - Listar Livros')
                            console.log('0 - Sair')
                            let opcaoCliente = prompt('Escolha uma opção: ')
                            
                            while (opcaoCliente != '0') {
                                switch (opcaoCliente) {
                                    case '1':
                                        await listarLivros()
                                        break;
                                    default:
                                        console.log('Opção inválida.')
                                        break;
                                }
                                console.log('\n====== MENU CLIENTE ======')
                                console.log('1 - Listar Livros')
                                console.log('0 - Sair')
                                opcaoCliente = prompt('Escolha uma opção: ')
                            }
                            break;

                        case 'funcionario':
                            await menuFuncionario()
                            break;

                        default:
                            console.log('Tipo de usuário não possui menu definido.')
                            break;
                    }
                }
                break;
                
            default:
                console.log('Opção inválida.')
                break;
        }
        
        console.log('\n====== MENU ======')
        console.log('1 - Cadastrar Usuário')
        console.log('2 - Logar no sistema')
        console.log('0 - Sair')
        opcao = prompt('Escolha uma opção: ')
    }


// menu()



