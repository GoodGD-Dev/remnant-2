import { useEffect, useState } from "react";
import DynamicChecklist from "../../../../components/DynamicChecklist";
import { Container, Alert, Spinner, Button } from "react-bootstrap";

const Relics = () => {
  const [relicsData, setRelicsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null); // Resetar o erro ao tentar carregar novamente
    try {
      const response = await fetch("http://localhost:3000/api/relics"); // Altere o URL se necessário
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setRelicsData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Chama a função fetchData ao montar o componente
  }, []);

  if (loading)
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" role="status" variant="dark">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <div className="mt-3">Loading...</div>
      </Container>
    );

  if (error)
    return (
      <Container className="mt-5">
        <Alert variant="danger">
          <Alert.Heading>Error</Alert.Heading>
          <p>{error.message}</p>
          <Button variant="dark" onClick={fetchData}>
            Try Again
          </Button>
        </Alert>
      </Container>
    );

  return (
    <div>
      <DynamicChecklist data={relicsData} />
    </div>
  );
};

export default Relics;
