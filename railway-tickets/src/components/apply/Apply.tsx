import "./Apply.scss";

function Apply() {
  return (
    <div className="apply-box">
      <div className="apply-box__code-bag">
        <h2 className="apply-box__code-bag__title">Apple Code</h2>
        <input type="text" className="apply-box__code-bag__field" placeholder="Enter code"/>
      </div>
      <div className="apply-box__code-bag">
        <h2 className="apply-box__code-bag__title">Extra Baggage</h2>
        <button type="button" className="apply-box__code-bag__btn">
          Add to ticket
        </button>
      </div>
    </div>
  );
}

export default Apply;
