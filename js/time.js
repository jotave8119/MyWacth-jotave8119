const whatTimeIsIt = () => {
    //capturando a minha div pelo nome da classe inserido no documento HTML
        const clock     = document.getElementsByClassName('watchBox')[0];
    
    //Pegando as medidas de tempo dentro do constructor Date
        const date      = new Date();
        const hours     = date.getHours();
        const minutes   = date.getMinutes();
        const seconds   = date.getSeconds();
    
    //pegando as variáveis relacionadas a hora, minuto e segundo para fazer verifições condicionais
        const hour      = hours < 10 ? `0${hours}` : hours;
        const minute    = minutes < 10 ? `0${minutes}` : minutes;
        const second    = seconds < 10 ? `0${seconds}` : seconds;
    
    //mostrando os dados instanciados nas variáveis para a tela do navegador
        clock.innerHTML = `${hour}:${minute}:${second}`;
      };
      
//Atualizando a função com o setInterval      
      setInterval(() => {
        whatTimeIsIt()
      }, 1000);