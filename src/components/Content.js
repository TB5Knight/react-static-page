import './Content.css';
import threelittlepigs from '../img/threelittlepigs.png';
import threepigs from '../img/threepigs.png';
import wolfthreepigs from '../img/wolfthreepigs.png';
import wolfchimney from '../img/wolfchimney.png';

function Content() {
  return (
    <div className="content">
      <p>
         The Three Little Pigs is a classic tale about three pigs who each build a house to protect themselves from a big bad wolf. 
         The first pig builds a house of straw, the second pig builds a house of sticks, and the third pig builds a house of bricks. 
         The wolf in the story tries to blow down each house. He succeeds with the first two pigs' houses. Unfortunately, he fails 
         with the brick house. The story teaches lessons about hard work, planning, and perseverance. The first pig's house of straw is 
         easily blown down by the wolf, symbolizing laziness and taking shortcuts. The second pig's house of sticks also falls, representing 
         a lack of effort and planning.
      </p>
      <p>
        However, the third pig's brick house stands strong against the wolf's huffing and puffing, demonstrating the value of hard work and careful preparation. 
        When the wolf tries to blow it down, he cannot because it is strong and well built. Frustrated, he attempts to trick the pigs and even tries to climb down the chimney. 
        The clever third pig outsmarts him, and the wolf is defeated. In the end, the three pigs stay safe inside the sturdy brick house, and the story teaches 
        that hard work and careful planning paid off.
      </p>
      <div className="image-tabs">
        <div className="image-tab">
          <img src={threelittlepigs} alt="Three Little Pigs" />
        </div>
        <div className="image-tab">
          <img src={threepigs} alt="Three Pigs" />
        </div>
        <div className="image-tab">
          <img src={wolfthreepigs} alt="Wolf with Three Pigs" />
        </div>
        <div className="image-tab">
          <img src={wolfchimney} alt="Wolf in Chimney" />
        </div>
      </div>
    </div>
  );
}

export default Content;
