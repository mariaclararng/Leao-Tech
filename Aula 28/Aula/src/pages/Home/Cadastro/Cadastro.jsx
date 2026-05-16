import React, { useState } from 'react';

const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [endereco, setEndereco] = useState('');
  const [endereco2, setEndereco2] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [cep, setCep] = useState('');
  const filtrarEmail = (valor) => {
    setEmail(valor);
  };

 
  const buscarCep = async (valorCep) => {
    const cepLimpo = valorCep.replace(/\D/g, '');
    setCep(cepLimpo);
  
    if (cepLimpo.length === 8) {
      try {
        const resposta = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
        const dados = await resposta.json();

        if (!dados.erro) {
          setEndereco(dados.logradouro); 
          setCidade(dados.localidade);   
          setEstado(dados.uf);           
        } else {
          alert('CEP não encontrado. Por favor, verifique os números.');
        }
      } catch (erro) {
        console.error('Erro ao buscar o CEP:', erro);
      }
    }
  };

  return (
    <>
      <div className='container' style={{ minHeight: '100vh' }}>
        <br />
        <h1 className='text-center' style={{ color: 'black' }}>Cadastro de Novo Usuário(a)</h1>
        <div className='row justify-content-center'>
          <div className='col-8'>
            <form className="row g-3" onSubmit={(e) => e.preventDefault()}>
              
              <div className="col-12">
                <label htmlFor="inputEmail4" className="form-label">Email:</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="inputEmail4"
                  value={email}
                  onChange={(e) => filtrarEmail(e.target.value)}
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">Password:</label>
                <input 
                  type="password" 
                  className="form-control" 
                  id="inputPassword4"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="inputZip" className="form-label">Zip (CEP):</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="inputZip"
                  placeholder="Apenas números"
                  maxLength="9"
                  value={cep}
                  onChange={(e) => buscarCep(e.target.value)}
                />
              </div>

              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">Address (Rua):</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="inputAddress" 
                  placeholder="1234 Main St"
                  value={endereco}
                  onChange={(e) => setEndereco(e.target.value)}
                />
              </div>

              <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">Address 2:</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="inputAddress2" 
                  placeholder="Apartment, studio, or floor"
                  value={endereco2}
                  onChange={(e) => setEndereco2(e.target.value)}
                />
              </div>

              <div className="col-md-5">
                <label htmlFor="inputCity" className="form-label">City:</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="inputCity"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                />
              </div>

              <div className="col-md-3">
                <label htmlFor="inputState" className="form-label">State:</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="inputState"
                  placeholder="Ex: CE"
                  value={estado}
                  onChange={(e) => setEstado(e.target.value)}
                />
              </div>

              <div className="col-12">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="gridCheck"/>
                  <label className="form-check-label" htmlFor="gridCheck">
                    Check me out
                  </label>
                </div>
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-primary">Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cadastro;