
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaArrowUp } from 'react-icons/fa';
import './style.css';

const BackToTop = () => {
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {show && (
        <Button
          onClick={scrollToTop}
          className="back-to-top d-block d-xs-none"
        >
          <FaArrowUp />
        </Button>
      )}
    </>
  );
};

export default BackToTop;
