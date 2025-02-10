import React, { useReducer, useEffect } from 'react';
import './InfoCard.scss';

const initialState = {
  height: 200,
  isScrolled: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SHRINK':
      return { ...state, height: 100, isScrolled: true };
    case 'EXPAND':
      return { ...state, height: 200, isScrolled: false };
    default:
      return state;
  }
};

const InfoCard = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Shrink when scrolling exceeds 100px
        dispatch({ type: 'SHRINK' });
      } else {
        dispatch({ type: 'EXPAND' });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="infoCard" style={{ height: state.height }}>
      <div className="infoHeader">
        <h2>ADELANTE</h2>
        <p>
          <strong>Class No.</strong> 129369 / <strong>IMO</strong> 9597109
        </p>
        <p>Flag: BHS, Type: BULK CARRIER</p>
        <button className="removeButton">★ Remove from MyList</button>
      </div>
      {/* {state.isScrolled && (
        <div className="infoStatus">
          <p>
            <strong>Status</strong>
          </p>
          <p>Due Date</p>
          <p>History</p>
        </div>
      )} */}
    </div>
  );
};

export default InfoCard;
