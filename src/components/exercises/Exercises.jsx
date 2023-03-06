import "./exercises.scss"

export default function Exercises() {
  return (
    <div className='exercise' id="exercise">
      <h1>Click To Start Your Exercise Activity</h1>
      <ul>
        <li>Running</li>
        <li>Bicycle</li>
        <li>Riding</li>
        <li>Swimming</li>
        <li>Walking</li>
        <li>Hiking</li>
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/running.jpg" alt="" />
          <h3>Running</h3>
        </div>
        <div className="item">
          <img src="assets/cycling.jpg" alt="" />
          <h3>Cycling</h3>
        </div>
        <div className="item">
          <img src="assets/ridding.jpg" alt="" />
          <h3>Riding</h3>
        </div>
        <div className="item">
          <img src="assets/swimming.jpg" alt="" />
          <h3>Swimming</h3>
        </div>
        <div className="item">
          <img src="assets/walk.jpg" alt="" />
          <h3>Walking</h3>
        </div>
        <div className="item">
          <img src="assets/Hiking.jpg" alt="" />
          <h3>Hiking</h3>
        </div>
      </div>
    </div>
  )
}
