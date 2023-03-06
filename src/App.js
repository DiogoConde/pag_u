import React, { useState } from 'react';
import logo from './images/logo_pag_u.png';
import pessoa from './images/pessoa.png';
import alterar_metodo from './images/alterar_metodo.png';
import historico from './images/historico.png';
import pix from './images/pix.png';
import cartao from './images/cartao.png';
import debito from './images/debito.png';
import boleto from './images/boleto.png';
import cartao_virtual from './images/cartao_virtual.png';
import verificacao from './images/verificacao.png';
import './App.css';

function App() {
  const [showFirstPage, setShowFirstPage] = useState(true);
  const [showSecondPage, setShowSecondPage] = useState(false);
  const [showThirdPage, setShowThirdPage] = useState(false);
  const [showFourthPage, setShowFourthPage] = useState(false);
  const [showFifthPage, setShowFifthPage] = useState(false);
  const [showSixthPage, setShowSixthPage] = useState(false);

  const handleFirstButtonClick = () => {
    setShowFirstPage(false);
    setShowSecondPage(true);
    setShowThirdPage(false);
  };

  const handleSecondButtonClick = () => {
    setShowFirstPage(false);
    setShowSecondPage(false);
    setShowThirdPage(true);
    setShowFourthPage(false);
    setShowSixthPage(false);
    

  };

  const handleThirdButtonClick = () => {
    setShowThirdPage(false);
    setShowSecondPage(false);
    setShowFirstPage(false);
    setShowFourthPage(true);
  };

  const handleFourthButtonClick = () => {
    setShowThirdPage(false);
    setShowSecondPage(false);
    setShowFirstPage(false);
    setShowFourthPage(true);
  };

  const handleFifthButtonClick = () => {
    setShowThirdPage(false);
    setShowSecondPage(false);
    setShowFirstPage(false);
    setShowFourthPage(false);
    setShowFifthPage(true);
    setShowSixthPage(false);
  };

  const handleSixthButtonClick = () => {
    setShowThirdPage(false);
    setShowSecondPage(false);
    setShowFirstPage(false);
    setShowFourthPage(false);
    setShowFifthPage(false);
    setShowSixthPage(true);
  };

  const [Numero, setNumero] = useState("");
  const [Nome, setNome] = useState("");
  const [Validade, setValidade] = useState("");
  const [CVV, setCVV] = useState("");
  const [Sobrenome, setSobrenome] = useState("");
  const [CPF, setCPF] = useState("");
  const [Banco, setBanco] = useState("");
  const [Agencia, setAgencia] = useState("");
  const [Conta, setConta] = useState("");

  const handleInputChange1 = (event) => {
    setNumero(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setNome(event.target.value);
  };

  const handleInputChange3 = (event) => {
    setValidade(event.target.value);
  };

  const handleInputChange4 = (event) => {
    setCVV(event.target.value);
  };

  const handleInputChange5 = (event) => {
    setSobrenome(event.target.value);
  };

  const handleInputChange6 = (event) => {
    setCPF(event.target.value);
  };

  const handleInputChange7 = (event) => {
    setBanco(event.target.value);
  };

  const handleInputChange8 = (event) => {
    setAgencia(event.target.value);
  };

  const handleInputChange9 = (event) => {
    setConta(event.target.value);
  };

  const handleFormSubmit1 = (event) => {
    event.preventDefault();
    console.log("Número do cartão: ", Numero);
  };

  const handleFormSubmit2 = (event) => {
    event.preventDefault();
    console.log("Nome: ", Nome);
  };

  const handleFormSubmit3 = (event) => {
    event.preventDefault();
    console.log("Data de validade: ", Validade);
  };

  const handleFormSubmit4 = (event) => {
    event.preventDefault();
    console.log("CVV: ", CVV);
  };

  const handleFormSubmit5 = (event) => {
    event.preventDefault();
    console.log("Sobrenome: ", Sobrenome);
  };

  const handleFormSubmit6 = (event) => {
    event.preventDefault();
    console.log("CPF: ", CPF);
  };

  const handleFormSubmit7 = (event) => {
    event.preventDefault();
    console.log("Banco: ", Banco);
  };

  const handleFormSubmit8 = (event) => {
    event.preventDefault();
    console.log("Agencia: ", Agencia);
  };

  const handleFormSubmit9 = (event) => {
    event.preventDefault();
    console.log("Conta: ", Conta);
  };

  return (
    <div className="App">
      {showFirstPage && ( /*------------------------------------Bem-vinda---------------------------------*/
        <header className="App-header">
            <img src= {logo} alt="Logo" />
            <h3 className="Title">Pagamento em poucos cliques</h3>
            <div className="Subtitle">
              <h3 className="Title">Bem-vinda, Amanda</h3>
            </div>
            <img src= {pessoa} alt="Pessoa" />
            <div className="ButtonContainer">
              <button className="Button1" onClick={handleFirstButtonClick}>Continuar</button>
            </div>
          </header>
      )}
      {showSecondPage && ( /*--------------------Métodos de pagamento ou histórico------------------------*/
        <header className="App-header">
            <img src= {logo} alt="Logo" />
            <img src= {alterar_metodo} alt="Alterar método"/>
            <div className="ButtonContainer">
            <button className="Button1" onClick={handleSecondButtonClick}>Alterar forma de pagamento</button>
            </div>
            <img src= {historico} alt="Histórico" />
            <div className="ButtonContainer">
            <button className="Button1" onClick={handleThirdButtonClick}>Histórico de Pagamentos</button>
            </div>
        </header>
      )}
      {showThirdPage &&( /*-------------------------Métodos de pagamento---------------------------------*/
        <header className="App-header">
          <div className="ButtonContainer">
          <button className="ReturnButton" onClick={handleFirstButtonClick}>Voltar</button>
          </div>
          <p className="Title">Selecione a forma de pagamento</p>
          <div>
          <button className="Button1" onClick={handleFourthButtonClick}>
        <img src={cartao} alt="Cartão de crédito" />
        Cartão de crédito
      </button>
      <button className="Button1">
        <img src={pix} alt="pix" />
        PIX
      </button>
      <button className="Button1" >
        <img src={boleto} alt="Boleto bancário" />
        Boleto bancário
      </button>
      <button className="Button1" onClick={handleSixthButtonClick}>
        <img src={debito} alt="Débito em conta" />
        Débito em conta
      </button>
          </div>
        </header>
      )}
      {showFourthPage &&(/*-----------------------Cartão de crédito-------------------------------------*/
         <header className="App-header">
          <div className="ButtonContainer">
            <button className="ReturnButton" onClick={handleSecondButtonClick}>Voltar</button>
          </div>
            <p className="Title">Informe os dados do cartão de crédito</p>
            <img src={cartao_virtual} alt="Cartão virtual" />
            <div>
              <form onSubmit={handleFormSubmit1}>
                <label>
                  <p>Número</p>
                  <input type="text" value={Numero} onChange={handleInputChange1} />
                </label>
              </form>
            </div>
            <div>
              <form onSubmit={handleFormSubmit2}>
                <label>
                  <p>Nome</p>
                  <input type="text" value={Nome} onChange={handleInputChange2} />
                </label>
              </form>
            </div>
            <div>
              <form onSubmit={handleFormSubmit3}>
                <label>
                  <p>Validade</p>
                  <input type="text" value={Validade} onChange={handleInputChange3} />
                </label>
              </form>
            </div>
            <div>
              <form onSubmit={handleFormSubmit4}>
                <label>
                  <p>CVV</p>
                  <input type="text" value={CVV} onChange={handleInputChange4} />
                </label>
              </form>
              </div>
              <div className="ButtonContainer">
              <button className="Button1" onClick={handleFifthButtonClick}>Confirmar</button>
              </div>
          </header>
        )}
        {showFifthPage &&(
          <header className="App-header">
            <header className="Title">
            <h3>Operação finalizada</h3>
            <img src={verificacao} alt="Marca de verificação" />
            <p className="Title">A confirmação do pagamento será enviada via WhatsApp</p>
            <p>Obrigado por escolher</p>
            <img src={logo} alt="Logo" />
            </header>
          </header>
        )}
        {showSixthPage &&(/*-----------------------Débito em Conta-------------------------------------*/
         <header className="App-header">
          <div className="ButtonContainer">
            <button className="ReturnButton" onClick={handleSecondButtonClick}>Voltar</button>
          </div>
            <p className="Title">Informe os dados da conta bancária</p>
            <div>
              <form onSubmit={handleFormSubmit2}>
                <label>
                  <p>Nome</p>
                  <input type="text" value={Nome} onChange={handleInputChange2} />
                </label>
              </form>
            </div>
            <div>
              <form onSubmit={handleFormSubmit5}>
                <label>
                  <p>Sobrenome</p>
                  <input type="text" value={Sobrenome} onChange={handleInputChange5} />
                </label>
              </form>
            </div>
            <div>
              <form onSubmit={handleFormSubmit6}>
                <label>
                  <p>CPF</p>
                  <input type="text" value={CPF} onChange={handleInputChange6} />
                </label>
              </form>
            </div>
            <div>
              <form onSubmit={handleFormSubmit7}>
                <label>
                  <p>Banco</p>
                  <input type="text" value={Banco} onChange={handleInputChange7} />
                </label>
              </form>
              </div>
            <div>
              <form onSubmit={handleFormSubmit8}>
                <label>
                  <p>Agência</p>
                  <input type="text" value={Agencia} onChange={handleInputChange8} />
                </label>
              </form>
              </div>
           <div>
              <form onSubmit={handleFormSubmit9}>
                <label>
                  <p>Conta</p>
                  <input type="text" value={Conta} onChange={handleInputChange9} />
                </label>
              </form>
              </div>
              <div className="ButtonContainer">
              <button className="Button1" onClick={handleFifthButtonClick}>Confirmar</button>
              </div>
          </header>
        )}
      </div>
    );
}

export default App;