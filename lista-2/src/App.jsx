import BotaoVerde from "./components/exercicio01";
import CabecalhoLoja from "./components/exercicio02";
import BotaoUniversal from "./components/exercicio03";
import CrachaVistitante from "./components/exercicio04";
import AvisoSistema from "./components/exercicio05";
import ContadorLikes from "./components/exercicio06";
import DisJuntor from "./components/exercicio07";
import CampoDigitacao from "./components/exercicio08";
import AcessoBancario from "./components/exercicio09";
import SenhaSecreta from "./components/exercicio10";

export default function App() {
  return (
    <div style={{padding: '20px'}}>
      <CabecalhoLoja />

      <hr />
      <BotaoVerde />

      <hr />
       <BotaoUniversal textoBotao="Comprar Agora"/>
       <BotaoUniversal textoBotao="Adicionar ao Carrino"/>

       <hr />
       <CrachaVistitante nome="Ana" acesso="Adimin" />


       <hr />
       <AvisoSistema mensagem="Sistema de Manutenção" corAlerta="red" />

       <hr />
       <ContadorLikes />

       <hr />
       <DisJuntor />

       <hr />
       <CampoDigitacao />

       <hr />
       <AcessoBancario />

       <hr />
       <SenhaSecreta />

       <hr />
       <CampoDigitacao />

       <hr />
       <AcessoBancario />

       <hr />
       <SenhaSecreta />

    </div>
  );
}

