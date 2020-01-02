import 'intersection-observer';

import Scramble from '../components/Scramble';
import FadeInGroup from '../components/FadeInGroup';

export default function Index() {
  return (
    <>
      <FadeInGroup>
        <Scramble s="Hello, my name is Kevin Lee." />
        <br />
        <Scramble s="I go by my Chinese name, MNGYUAN." />
      </FadeInGroup>
      <style jsx global>{`
        html {
          font-family: 'Space Mono', 'Noto Sans Mono CJK SC', monospace;
        }
      `}</style>
    </>
  );
}
