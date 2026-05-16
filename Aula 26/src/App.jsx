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
    }
  ];

  const [busca, setBusca] = useState('');

  const usuariosFiltrados = usuarios.filter((usuario) =>
    usuario.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="container-tabela text-center d-block p-4">
      <h2 id='titulo'>Lista de Famosos</h2>
      
      {}
      <div className="mb-4 d-flex justify-content-center">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Pesquisar por nome..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>

      <div className="table-responsive text-center">
        <table className="table table-hover align-middle text-bg-success justify-content-center">
          <thead>
            <tr>
              <th scope="col">Foto</th>
              <th scope="col">Nome</th>
              <th scope="col">E-mail</th>
              <th scope="col">Telefone</th>
              <th scope="col">Endereço</th>
            </tr>
          </thead>
          <tbody>
            {usuariosFiltrados.length > 0 ? (
              usuariosFiltrados.map((u, index) => (
                <tr key={index}>
                  <td>
                    <img src={u.foto} alt={u.nome} className="img-usuario text-center" style={{ width: '100px', borderRadius: '90%' }} />
                  </td>
                  <td><strong>{u.nome}</strong></td>
                  <td>{u.email}</td>
                  <td>{u.telefone}</td>
                  <td>{u.endereco}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">Nenhum usuário encontrado, por favor tente novamente!</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
