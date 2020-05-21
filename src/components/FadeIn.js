import 'intersection-observer';
import React, {useState, useEffect} from 'react';
import {InView} from 'react-intersection-observer';

const FadeIn = (props) => {
  const {delay = 0, children, timeLen = 600, disabled = false} = props;
  if (disabled) {
    return props.children;
  }
  const [delayPassed, setDelayPassed] = useState(delay === 0);
  if (delay !== 0) {
    useEffect(() => {
      setTimeout(() => setDelayPassed(true), delay);
    }, [delay]);
  }

  return (
    <InView>
      {({inView, ref, entry}) => (
        <div ref={ref} className="fade-in-on-load">
          {delayPassed ? children : null}
          <style jsx>{`
            .fade-in-on-load {
              opacity: ${inView && delayPassed ? 1 : 0};
              transition: opacity ${timeLen / 1000}s ease,
                top ${timeLen / 1000}s ease;
              position: relative;
              top: ${inView && delayPassed ? 0 : 12}px;
              will-change: opacity, top;
            }
          `}</style>
        </div>
      )}
    </InView>
  );
};

export default FadeIn;
