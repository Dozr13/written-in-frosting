import React, { useEffect } from 'react'

const MockCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const next = (current + 1) % slides.length;
    const id = setTimeout(() => setCurrent(next), time);
    return () => clearTimeout(id);
  }, [current]);

  const initialSliderState = {
    offset: 0,
    desired: 0,
    active: 0
  };

  return (
    <div>
      
    </div>
  )
}

export default MockCarousel
