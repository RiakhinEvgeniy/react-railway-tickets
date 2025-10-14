import './Schedule.scss'

function Schedule() {
    const fontStyleH3 = {
        fontWeight: "500"
    }
  return (
    <div className="schedule">
        <div>
            <h3>Nov 16</h3>
            <h3 style={fontStyleH3}>11:25 pm</h3>
            <h3 style={fontStyleH3}>Berlin - NDLS</h3>
        </div>
        <span style={{color: "rgba(1, 4, 0, 0.5019607843)"}}>8 hours</span>
        <div>
            <h3>Nov 17</h3>
            <h3 style={fontStyleH3}>7:25 am</h3>
            <h3 style={fontStyleH3}>Bonn - LJN</h3>
        </div>
    </div>
  )
}

export default Schedule