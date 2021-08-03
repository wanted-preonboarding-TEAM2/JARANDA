import { useState, useEffect } from 'react';

export const useDetectOutsideClick = (targetRef, initialState) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const onClick = ({ target }) => {
      if (targetRef.current !== null && !targetRef.current.contains(target)) {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      window.addEventListener('click', onClick);
    }

    return () => {
      window.removeEventListener('click', onClick);
    };
  }, [isActive, targetRef]);

  return [isActive, setIsActive];
};
