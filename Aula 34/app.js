const prompt = require('prompt-sync')()
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config()
const supabase = createClient(process.env.SUPABASE_URL,process.env.SUPABASE_KEY)
const bcrypt = require('bcrypt')



// async function inserirAutor(){
//     let nome = prompt('Digite o nome do autor: ')
//     let nacionalidade = prompt('Digite a nacionalidade: ')
//     let novoAutor = {
//         nome:nome,
//         nacionalidade:nacionalidade
//     }
//     const {data, error} = await supabase.from('biblioteca_autor').insert(novoAutor).select()
//     console.log(data)
//     console.log(error)
// }
// // inserirAutor()

// async function listarLivros() {
//     const {data, error} = await supabase.from('biblioteca_livro').select('titulo,genero, biblioteca_autor(nome,nacionalidade)')
//     if (error){
//         console.log(error)
//     }
//     console.log(data)
//     data.forEach(livro => {
//         console.log(`Título: ${livro.titulo} - ${livro.biblioteca_autor.nome}, Gênero: ${livro.genero}`)
//     });
// }
// // listarLivros()

// async function buscarLivro(titulo) {
//     const {data, error} = await supabase.from('biblioteca_livro').select('titulo,genero,quantidade').eq('titulo',titulo)
//     if (error){
//         console.log(error)
//     }
//     console.log(data)
//     data.forEach(livro => {
//         console.log(`Título: ${livro.titulo} - ${livro.quantidade}, Gênero: ${livro.genero}`)
//     });
// }
// /*
// eq() -> igual
// neq() -> diferente
// gt() -> maior que
// lt() -> menor que
// lte() -> menor ou igual
// gte() -> maior ou igual
// like() -> parecido
// ilike() -> parecido (não case sentive)
// order() -> ordenar()
// limit() -> limitar resultado
// */


// // buscarLivro('A cabana')

// async function atualizarAutor(id) {
//     let nome = prompt('Digite o novo nome: ')
//     let nacionalidade = prompt('Digite a nova nacionalidade')
//     let atualizacao = {
//         nome:nome,
//         nacionalidade:nacionalidade
//     }
//     const {data, error} = await supabase.from('biblioteca_autor').update(atualizacao).eq('id',id).select()
//     if (error){
//         console.log(error)
//     }
//     console.log(data)
// }


// async function deletarAutor(id) {
//     const {data, error} = await supabase.from('biblioteca_autor').delete().eq('id',id).select()
//     if (error){
//         console.log(error)
//     }
//     console.log(data)
// }

async function inserirUsuario() {
    let nome = prompt('Insira o nome:')
    let cpf = prompt('Insira o cpf:')
    let telefone = prompt('Insira o telefone:')
    let endereco = prompt('Insira o endereco:')
    let senha = prompt('Insira a senha:')
    let tipo = prompt('Insira o tipo:')


    const saltRounds = 10 

    const senhaCrip = await bcrypt.hash(senha, saltRounds)

    let novoUsuario = {
        nome:nome, 
        cpf:cpf,
        telefone:telefone,
        endereco:endereco,
        senha:senhaCrip,
        tipo:tipo
    }

    const { data, error} = await supabase.from('biblioteca_usuarios').insert(novoUsuario).select()
    error ? console.log(error):console.log('Dados inseridos com sucesso!')
}

async function menu() {
 console.log('===== MENU =====')
 console.log('1 - Cadastrar Usuário')
 console.log('2 - Cadastrar Logar no Sistema')

 const opcao = prompt('Escolha uma opção:')
 switch (opcao) { 
        case '1':
            inserirUsuario
            break;
        default:
            break;    
 }
}

menu()