import Cadastro from "./pages/Home/Cadastro/Cadastro"

import React, { useState } from 'react';
import './index.css';

const App = () => {
  const usuarios = [
    { 
      foto: 'https://th.bing.com/th/id/OIP.E9IbHIQgIdX95p3LZQJKzQHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', 
      nome: 'Justin Bieber', 
      email: 'justin@example.com',
      telefone: '(11) 98888-7777',
      endereco: 'Rua das Techs, 101 - São Paulo/SP' 
    },
    { 
      foto: 'https://akamai.sscdn.co/uploadfile/letras/fotos/4/2/d/3/42d3bb83236ac003c3315484f5ce8d7b.jpg', 
      nome: 'Bruno Mars', 
      email: 'bruno@example.com',
      telefone: '(11) 97777-6666',
      endereco: 'Av. Paulista, 1500 - São Paulo/SP' 
    },
    { 
      foto: 'https://asquinas.fr/wp-content/uploads/2023/09/portugal-training-session-fifa-world-cup-qatar-2022-scaled.jpg', 
      nome: 'Cristiano Ronaldo', 
      email: 'cr7@example.com',
      telefone: '(21) 96666-5555',
      endereco: 'Rua Rio Branco, 45 - Rio de Janeiro/RJ' 
    },
    { 
      foto: 'https://portalpopline.com.br/wp-content/uploads/2024/11/leo-foguete-thumb.jpg', 
      nome: 'Léo Foguete', 
      email: 'leo@example.com',
      telefone: '(41) 95555-4444',
      endereco: 'Rua das Flores, 200 - Curitiba/PR' 
    },
    { 
      foto: 'https://www.billboard.com/wp-content/uploads/2024/02/Taylor-Swift-_-The-Eras-Tour-Melbourne-Australia-feb-2024-billboard-pro-1260.jpg?w=1024', 
      nome: 'Taylor Swift', 
      email: 'taylor@example.com',
      telefone: '(11) 94444-3333',
      endereco: 'Av. das Estrelas, 89 - São Paulo/SP' 
    },
    { 
      foto: 'https://tse4.mm.bing.net/th/id/OIP.s4yjKSH4oVTHJB1I5J51sAHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3', 
      nome: 'Beyoncé', 
      email: 'beyonce@example.com',
      telefone: '(21) 93333-2222',
      endereco: 'Alameda do Pop, 404 - Rio de Janeiro/RJ' 
    },
    { 
      foto: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg', 
      nome: 'Lionel Messi', 
      email: 'messi@example.com',
      telefone: '(31) 92222-1111',
      endereco: 'Rua da Taça, 10 - Belo Horizonte/MG' 
    }
  ];

  const [busca, setBusca] = useState('');

  const usuariosFiltrados = usuarios.filter((usuario) =>
    usuario.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return ( <Cadastro/> 
    // <div className="container-tabela text-center d-block p-4">
    //   <h2 id='titulo'>Lista de Famosos</h2>
      
    //   <div className="mb-4 d-flex justify-content-center">
    //     <input
    //       type="text"
    //       className="form-control w-50"
    //       placeholder="Pesquisar por nome..."
    //       value={busca}
    //       onChange={(e) => setBusca(e.target.value)}
    //     />
    //   </div>

    //   {}
    //   <div className="mb-4 d-flex justify-content-center" id='container-bnt'>
    //     <a 
    //       href="https://www.google.com" 
    //       target="_blank" 
    //       rel="noopener noreferrer" 
    //       className="btn btn-light mx-2"
    //     >
    //       Pesquisar Notícias
    //     </a>
    //     <a 
    //       href="https://www.sympla.com.br/" 
    //       target="_blank" 
    //       rel="noopener noreferrer" 
    //       className="btn btn-light mx-2"
    //     >
    //       Shows 
    //     </a>
    //     <a 
    //       href="https://www.bing.com/search?q=jogos%20%20de%20futebol%20castelao&qs=n&form=QBRE&sp=-1&ghc=1&lq=0&pq=jogos%20%20de%20futebol%20castela&sc=12-25&sk=&cvid=84832CF96F7347E2BE8CF455B732938C" 
    //       target="_blank" 
    //       rel="noopener noreferrer" 
    //       className="btn btn-light mx-2"
    //     >
    //       Jogos de Futebol
    //     </a>
    //   </div>

    //   <div className="table-responsive text-center">
    //     <table className="table table-hover align-middle text-bg-success justify-content-center">
    //       <thead>
    //         <tr>
    //           <th scope="col">Foto</th>
    //           <th scope="col">Nome</th>
    //           <th scope="col">E-mail</th>
    //           <th scope="col">Telefone</th>
    //           <th scope="col">Endereço</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {usuariosFiltrados.length > 0 ? (
    //           usuariosFiltrados.map((u, index) => (
    //             <tr key={index}>
    //               <td>
    //                 <img src={u.foto} alt={u.nome} className="img-usuario text-center" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%' }} />
    //               </td>
    //               <td><strong>{u.nome}</strong></td>
    //               <td>{u.email}</td>
    //               <td>{u.telefone}</td>
    //               <td>{u.endereco}</td>
    //             </tr>
    //           ))
    //         ) : (
    //           <tr>
    //             <td colSpan="5" className="text-center">Nenhum usuário encontrado, por favor tente novamente!</td>
    //           </tr>
    //         )}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
  );
}

export default App;

