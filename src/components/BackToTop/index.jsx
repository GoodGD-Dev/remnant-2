import React, { useEffect, useState, useCallback } from 'react';
import { Button } from 'react-bootstrap';
import { FaArrowUp } from 'react-icons/fa';
import './style.css';

const BackToTop = () => {
  const [show, setShow] = useState(false);

  const handleScroll = useCallback(() => {
    setShow(window.scrollY > 300);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  if (!show) return null;

  return (
    <Button
      onClick={scrollToTop}
      className="back-to-top d-block d-xs-none"
    >
      <FaArrowUp />
    </Button>
  );
};

export default BackToTop;