import 'intersection-observer';

import Scramble from '../components/Scramble';
import FadeInGroup from '../components/FadeInGroup';

const PRIMARY_COLOR = '#ED1C24';

export default function Index() {
  return (
    <>
      <div className="centered">
        <FadeInGroup>
          <Scramble s="Hello, my name is Kevin Lee." />
          <br />
          <Scramble s="When I'm freelancing or making art, I go by my Chinese name, MNGYUAN." />
          <Scramble s="It means dream far." />
          <br />
          <div delayInit={1200}>
            <Scramble s="I'm passionate about " />
            <span className="primary">visual storytelling</span>
            <Scramble s=", " />
            <span className="primary">next-gen frontend web tech</span>
            <Scramble s=", and " />
            <span className="primary">music production</span>
            <Scramble s=". I'm currently looking full-time and contract software or software/design hybrid roles." />
          </div>
          <br />
          <br />
          <br />
          <div>
            <a>Resume</a>
            <Scramble s=" " />
            <a href="mailto:me@mngyuan.com">me [at] mngyuan.com</a>
          </div>
        </FadeInGroup>
      </div>
      <style jsx>{`
        .centered {
          padding-top: 24vh;
          margin: 0 auto;
          width: 76vw;
        }
        .primary {
          color: ${PRIMARY_COLOR};
        }
        .primary:hover {
          background: ${PRIMARY_COLOR};
          color: white;
        }
        a {
          display: inline-block;
          color: blue;
          text-decoration: none;
          border-bottom: 2px solid blue;
        }
        a:hover {
          color: white;
          background: blue;
        }
      `}</style>
      <style jsx global>{`
        html {
          font-family: 'Space Mono', 'Noto Sans Mono CJK SC', monospace;
        }
        ::selection {
          background: ${PRIMARY_COLOR};
        }
      `}</style>
    </>
  );
}
