import React, { useState, useRef } from 'react';
export const RelatedIntership = ({ intership = [] }) => {
  const scrollContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction) => {
    const scrollContainer = scrollContainerRef.current;
    const scrollAmount = 700; // Adjust this value based on your preference

    if (direction === 'left') {
      scrollContainer.scrollTo({
        left: scrollContainer.scrollLeft - scrollAmount,
        behavior: 'smooth',
      });} else if (direction === 'right') {
        scrollContainer.scrollTo({
          left: scrollContainer.scrollLeft + scrollAmount,
          behavior: 'smooth',
        });    }

    setScrollPosition(scrollContainer.scrollLeft);
  };

  // Dummy data for Interships
  const dummyInterships = [
    { id: 1, title: 'Intership 1', url: 'https://www.youtube.com/watch?v=v1arwXMvv1o&ab_channel=VjSiddhuVlogs',image:'#' },
    { id: 2, title: 'Intership 2', url: 'https://www.youtube.com/watch?v=oDeomjlXa94' ,image:'#'},
    { id: 3, title: 'Intership 3', url: 'https://www.youtube.com/watch?v=7HAS8or4__4',image:'#' },
    { id: 4, title: 'Intership 4', url: 'https://www.youtube.com/watch?v=v1arwXMvv1o&ab_channel=VjSiddhuVlogs',image:'#' },
    { id: 5, title: 'Intership 5', url: 'https://www.youtube.com/watch?v=oDeomjlXa94',image:'#' },
    { id: 6, title: 'Intership 6', url: 'https://www.youtube.com/watch?v=7HAS8or4__4',image:'#' },
    { id: 7, title: 'Intership 7', url: 'https://www.youtube.com/watch?v=v1arwXMvv1o&ab_channel=VjSiddhuVlogs',image:'#' },
    { id: 8, title: 'Intership 8', url: 'https://www.youtube.com/watch?v=oDeomjlXa94' ,image:'#'},
    { id: 9, title: 'Intershipo 9', url: 'https://www.youtube.com/watch?v=7HAS8or4__4',image:'#' },
    { id: 10, title: 'Intership 10', url: 'https://www.youtube.com/watch?v=v1arwXMvv1o&ab_channel=VjSiddhuVlogs',image:'#' },
    { id: 11, title: 'Intershipo 11', url: 'https://www.youtube.com/watch?v=oDeomjlXa94',image:'#' },
    { id: 12, title: 'Intership 12', url: 'https://www.youtube.com/watch?v=7HAS8or4__4',image:'#' },
    // Add more Intership objects as needed
  ];

  return (
    <div>
      <div className="related_intership_div">
        <h3 className="logo_color e_intern_des_title">Related Interships</h3>
        <div className="scroll_btn">
          <button className="fa-solid fa-chevron-left e_scroll_btn" onClick={() => handleScroll('left')} />
          <button className="fa-solid fa-chevron-right e_scroll_btn" onClick={() => handleScroll('right')} />
        </div>
      </div>

      <div className="scroll_div" ref={scrollContainerRef}>
        {dummyInterships && dummyInterships.length > 0 ? (
          dummyInterships.map((dummyIntership) => (
            <div key={dummyIntership.id} className="box">
              <a href={dummyIntership.url} />
            </div>
          ))
        ) : (
         <p>No Content Available</p>
        )}
      </div>
    </div>
  );
};