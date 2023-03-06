import React from "react";
export const Mars = () => {
  return (
    <div>
      <h2>MARS</h2>
      <p>
        Don’t forget to pack your hiking boots. You’ll need them to tackle
        Olympus Mons, the tallest planetary mountain in our solar system. It’s
        two and a half times the size of Everest!
      </p>
      <div className="avg-est">
        <div>
          <small className="sub-heading-2">AVG. DISTANCE</small>
          <p className="sub-heading-1">225 MIL. km</p>
        </div>

        <div>
          <small className="sub-heading-2">Est. travel time</small>
          <p className="sub-heading-1">9 MONTHS</p>
        </div>
      </div>
    </div>
  );
};
