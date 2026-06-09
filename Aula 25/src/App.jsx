import React from 'react';

function App() {
  // O array de usuários fica aqui dentro
  const usuarios = [
    { 
      foto: 'https://th.bing.com/th/id/OIP.E9IbHIQgIdX95p3LZQJKzQHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', 
      nome: 'Justin Bieber', 
      endereco: 'Rua das Techs, 101 - São Paulo/SP' 
    },
    { 
      foto: 'https://akamai.sscdn.co/uploadfile/letras/fotos/4/2/d/3/42d3bb83236ac003c3315484f5ce8d7b.jpg', 
      nome: 'Bruno Mars', 
      endereco: 'Av. Paulista, 1500 - São Paulo/SP' 
    },
    { 
      foto: 'https://th.bing.com/th/id/OIP.b1uVM1CN-U2_TV9AstwqngHaEK?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', 
      nome: 'Rihanna', 
      endereco: 'Rua Rio Branco, 45 - Rio de Janeiro/RJ' 
    },
    { 
      foto: 'https://portalpopline.com.br/wp-content/uploads/2024/11/leo-foguete-thumb.jpg', 
      nome: 'Léo Foguete', 
      endereco: 'Rua das Flores, 200 - Curitiba/PR' 
    }
  ];

  return (
    <div className="container-tabela">
      <h2>Lista de Usuários</h2>
      
      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead>
            <tr>
              <th scope="col">Foto</th>
              <th scope="col">Nome</th>
              <th scope="col">Endereço</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((u, index) => (
              <tr key={index}>
                <td>
                  <img src={u.foto} alt={u.nome} className="img-usuario" />
                </td>
                <td><strong>{u.nome}</strong></td>
                <td className="text-muted">{u.endereco}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
