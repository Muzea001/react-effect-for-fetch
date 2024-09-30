function AdviceSlip ({advice, fetchAdvice, saveFavourites}) {
    return (

        <section className="advice-slip">
        <h3>Some Advice</h3>
        <p>{advice}</p>
        <button onClick={fetchAdvice}>Get More Advice</button>
        <button onClick={saveFavourites}>Save to Favourites</button>
      </section>

    );
}

export default AdviceSlip;