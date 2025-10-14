import "./FooterInfo.scss";

interface InfoFooter {
  title: string;
  info1: string;
  info2: string;
  info3: string;
  info4: string;
}

interface InfoProps {
    info: InfoFooter
}

function FooterInfo({ info }: InfoProps) {

const {title, info1, info2, info3, info4} = info;

  return (
    <div className="container">
      

      <div className="container__footer-info">
        <h2 className="container__footer-info__info">{title}</h2>
        <span className="container__footer-info__info">{info1}</span>
        <span className="container__footer-info__info">{info2}</span>
        <span className="container__footer-info__info">{info3}</span>
        <span className="container__footer-info__info">{info4}</span>
      </div>
    </div>
  );
}

export default FooterInfo;
