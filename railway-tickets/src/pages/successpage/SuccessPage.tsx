import TrainSuccess from "../../assets/train_success.png";
import QR from "../../assets/qrcode.png";
import Ticket from "../../components/ticket/Ticket";
import TravellerDetailsSuccess from "../../components/travellerdetails_success/TravellerDetailsSuccess";
import "./SuccessPage.scss";
import SimpleButton from "../../components/buttons/SimpleButton";
import Policy from "../../components/policy/Policy";
import Footer from "../../components/footer/Footer";

function SuccessPage() {
  return (
    <div className="successpage">
      <div className="successpage__wraper">
        <div className="successpage__wraper__congratulations">
          <img src={TrainSuccess} alt="tarin" />
          <span className="successpage__wraper__congratulations__title-text">
            Congratulations!
          </span>
          <span className="successpage__wraper__congratulations__title-text">
            You have successfully booked tickets
          </span>
        </div>
        <div className="successpage__wraper__full-ticket">
          <div className="successpage__wraper__full-ticket__title">
            <span className="successpage__wraper__full-ticket__title__info">
              PNR No: 1234567890
            </span>
            <span className="successpage__wraper__full-ticket__title__info">
              Transaction ID : 351511859256378
            </span>
          </div>
          <Ticket />
          <TravellerDetailsSuccess
            travellerInfo={{ name: "Evgeniy", email: "riakhin@gmail.com" }}
          />
        </div>
        <div className="successpage__wraper__qrcode">
          <img src={QR} alt="qrcode" />
          <div className="successpage__wraper__qrcode__btn">
            <SimpleButton className="blue" text="Book another ticket" />
            <SimpleButton className="blue" text="Download ticket" />
          </div>
        </div>
        <Policy />
      </div>
      <Footer />
    </div>
  );
}

export default SuccessPage;
