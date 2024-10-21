import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaArrowUp } from 'react-icons/fa';
import './style.css';

const BackToTop = () => {
  // useState para controlar quando o botão será exibido
  const [show, setShow] = useState(false);

  // Função que verifica se a página foi rolada mais de 300px
  const handleScroll = () => {
    setShow(window.scrollY > 300);
  };

  // useEffect para adicionar o evento de scroll quando o componente monta
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup: remove o evento de scroll ao desmontar o componente
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Array vazio para rodar o efeito apenas na montagem e desmontagem

  // Se o botão não deve aparecer, retorna null (não renderiza nada)
  if (!show) return null;

  // Função que rola a página para o topo
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // 'smooth' para uma rolagem suave
  };

  // Renderiza o botão somente quando `show` é true
  return (
    <Button onClick={scrollToTop} className="back-to-top d-block d-xs-none">
      <FaArrowUp />
    </Button>
  );
};

export default BackToTop;
