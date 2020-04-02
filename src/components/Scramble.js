import React, {useState, useEffect} from 'react';

const RAND_CHAR_POOL =
  '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
const randC = () =>
  RAND_CHAR_POOL.charAt(Math.floor(Math.random() * RAND_CHAR_POOL.length));
const randS = l =>
  Array(l)
    .fill(' ')
    .map(randC)
    .join('');

const INITIAL_TIMEOUT = 35;
const DECAY_FACTOR = 2.5;
const timeout = n =>
  INITIAL_TIMEOUT * n ** DECAY_FACTOR +
  Math.random() * INITIAL_TIMEOUT * n ** DECAY_FACTOR;

const timerFunction = (cb, cbFinal) => () => {
  cb();
  setTimeout(() => {
    cb();
    setTimeout(() => {
      cb();
      setTimeout(() => {
        cbFinal();
      }, timeout(3));
    }, timeout(2));
  }, timeout(1));
};

const ScrambleC = props => {
  const [c, setC] = useState(props.c);
  useEffect(() => {
    const timer = setTimeout(
      timerFunction(
        () => setC(randC),
        () => setC(props.c),
      ),
      INITIAL_TIMEOUT + Math.random() * INITIAL_TIMEOUT,
    );
    return () => clearTimeout(timer);
  }, [props.c]);
  return (
    <span>
      {c}
      <style jsx>
        {`
          span {
            opacity: ${c === props.c ? 1.0 : 0.5};
            word-break: ${' \n\t'.includes(props.c) ? 'break-all' : 'initial'};
          }
        `}
      </style>
    </span>
  );
};

const Scramble = props => {
  const cs = Array.from(props.s).map((c, i) => <ScrambleC c={c} key={i} />);
  return <span>{cs}</span>;
};

export default Scramble;
