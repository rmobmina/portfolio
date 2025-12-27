import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    // Check if device has a mouse (not touch device)
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
      return; // Don't show custom cursor on touch devices
    }

    const cursor = cursorRef.current;
    const dot = dotRef.current;

    if (!cursor || !dot) return;

    // Add class to body to hide default cursor
    document.body.classList.add('custom-cursor-active');

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let dotX = 0;
    let dotY = 0;

    // Update cursor position with direct DOM manipulation
    const updatePosition = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Smooth animation loop
    const animate = () => {
      // Smooth follow for outer ring
      const speed = 0.15;
      cursorX += (mouseX - cursorX) * speed;
      cursorY += (mouseY - cursorY) * speed;

      // Fast follow for inner dot
      const dotSpeed = 0.8;
      dotX += (mouseX - dotX) * dotSpeed;
      dotY += (mouseY - dotY) * dotSpeed;

      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;
      dot.style.left = `${dotX}px`;
      dot.style.top = `${dotY}px`;

      requestAnimationFrame(animate);
    };

    const handleHoverStart = () => {
      cursor.classList.add('hover');
    };

    const handleHoverEnd = () => {
      cursor.classList.remove('hover');
    };

    // Track mouse movement
    window.addEventListener('mousemove', updatePosition);

    // Start animation loop
    requestAnimationFrame(animate);

    // Use setTimeout to ensure DOM is loaded
    setTimeout(() => {
      // Track hoverable elements
      const hoverableElements = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, .hoverable'
      );

      hoverableElements.forEach((el) => {
        el.addEventListener('mouseenter', handleHoverStart);
        el.addEventListener('mouseleave', handleHoverEnd);
      });
    }, 100);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', updatePosition);

      const hoverableElements = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, .hoverable'
      );

      hoverableElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, []);

  // Check if device has a mouse
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (isTouchDevice) return null;

  return (
    <>
      {/* Outer ring */}
      <div
        ref={cursorRef}
        className="custom-cursor"
        style={{
          left: '-100px',
          top: '-100px',
        }}
      />
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="custom-cursor-dot"
        style={{
          left: '-100px',
          top: '-100px',
        }}
      />
    </>
  );
};

export default CustomCursor;
