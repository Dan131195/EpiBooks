const MyFooter = function () {
  return (
    <footer className="bg-dark d-flex justify-content-evenly py-2">
      <section>
        <h4 className="text-white">Contatti</h4>
        <article className="text-secondary d-flex flex-column">
          <a href="#">Domande frequenti</a>
          <a href="#">Tempi di spedizione</a>
          <a href="#">Metodi di pagamento</a>
        </article>
      </section>
      <section>
        <h4 className="text-white">Buoni Regalo</h4>
        <article className="text-secondary d-flex flex-column">
          <a href="#">Acquista un buono regalo</a>
          <a href="#">Codice Acquisto</a>
        </article>
      </section>
      <div>
        <section>
          <h4 className="text-white">Spedito da:</h4>
          <article id="spedition">
             <img src="../../public\assets\images\brt.png" alt="Logo Bartolini" />
             <img src="../../public\assets\images\dhl.jpg" alt="Logo Bartolini" className="mx-3"/>
             <img src="../../public\assets\images\ups.avif" alt="Logo Bartolini" />
          </article>
        </section>
      </div>
    </footer>
  );
};

export default MyFooter;
