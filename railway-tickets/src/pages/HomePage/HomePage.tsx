import './HomePage.scss';

function HomePage() {
  return (
    <div className="home-page">
      <div className="home-page__wrapper">
        <header className="home-page__header">
          <h1>Let’s Find That Ticket</h1>
          <p>before someone else does</p>
        </header>

        <form className="ticket-form">
          {/* здесь будет toggle, поля ввода, счётчик пассажиров */}
          <button type="submit" className="ticket-form__submit">
            Ticket, Please!
          </button>
        </form>
      </div>
    </div>
  );
}

export default HomePage;
