import Alert from "react-bootstrap/Alert";

const Welcome = function () {
  return (
    <>
      {["dark"].map((variant) => (
        <Alert key={variant} variant={variant}>
          BENVENUTO/A -- EpiBooks è una piattaforma dedicata agli amanti della lettura, dove è possibile acquistare, scaricare o leggere libri in formato digitale o cartaceo. Offre una vasta selezione di titoli, recensioni, consigli personalizzati e strumenti per esplorare generi, autori e novità editoriali, tutto a portata di clic.
        </Alert>
      ))}
    </>
  );
};

export default Welcome;
