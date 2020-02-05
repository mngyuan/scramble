import 'intersection-observer';

import Scramble from '../components/Scramble';
import FadeInGroup from '../components/FadeInGroup';

const PRIMARY_COLOR = '#ED1C24';
const DEFAULT_BG = 'white';

let randPickNew;
(() => {
  let last;
  randPickNew = l => {
    let i = Math.floor(Math.random() * l.length);
    while (i === last && l.length > 1) {
      i = Math.floor(Math.random() * l.length);
    }
    last = i;
    return l[i];
  };
})();

const AudioPlayer = props => (
  <>
    <span>now playing: {props.src}</span>
    <audio {...props} />
  </>
);

const Background = props => {
  const visualBgs = [
    <img className="visualBg" src="/000025.jpg" />,
    <img className="visualBg" src="/S398787-R3-E074.jpg" />,
    <video
      className="visualBg"
      src="/KYLIN-excerpt.mp4"
      type="video/mp4"
      preload="auto"
      loop
      playsInline
      autoPlay={props.viewing === 'visual'}
    />,
  ];
  const visualBg =
    props.viewing === 'visual' ? (
      <>
        <div>{randPickNew(visualBgs)}</div>
        <style jsx>{`
          div {
            position: fixed;
            top: 20vh;
            left: 20vw;
            width: 60vw;
            height: 60vh;
            overflow: visible;
          }
        `}</style>
        <style jsx global>{`
          .visualBg {
            object-fit: cover;
            width: 100%;
          }
        `}</style>
      </>
    ) : null;
  const webBgs = [
    <video
      className="visualBg"
      src="/oww2.mp4"
      type="video/mp4"
      preload="auto"
      loop
      playsInline
      autoPlay={props.viewing === 'web'}
    />,
    <video
      className="visualBg"
      src="/oww3.mp4"
      type="video/mp4"
      preload="auto"
      loop
      playsInline
      autoPlay={props.viewing === 'web'}
    />,
  ];
  const webBg =
    props.viewing === 'web' ? (
      <>
        <div>{randPickNew(webBgs)}</div>
        <style jsx>{`
          div {
            position: fixed;
            top: 20vh;
            left: 20vw;
            width: 60vw;
            height: 60vh;
            overflow: visible;
          }
        `}</style>
        <style jsx global>{`
          .visualBg {
            object-fit: cover;
            width: 100%;
          }
        `}</style>
      </>
    ) : null;
  const musicBgs = [
    <AudioPlayer src="/first.mp3" autoPlay={props.viewing === 'music'} />,
    <AudioPlayer src="/flight1.mp3" autoPlay={props.viewing === 'music'} />,
    <AudioPlayer
      src="/20-05_bu_se_liang.mp3"
      autoPlay={props.viewing === 'music'}
    />,
    <AudioPlayer
      src="/19-04_abeepitidybeepbapboobee.mp3"
      autoPlay={props.viewing === 'music'}
    />,
  ];
  const musicBg =
    props.viewing === 'music' ? (
      <>
        <div>{randPickNew(musicBgs)}</div>
        <style jsx>{`
          div {
            position: fixed;
            top: 20vh;
            left: 20vw;
            width: 60vw;
            height: 60vh;

            text-align: center;
            color: white;
          }
        `}</style>
        <style jsx global>{`
          .visualBg {
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
        `}</style>
      </>
    ) : null;

  const noBg = (
    <>
      <div className="hidden">{[...visualBgs, ...webBgs, ...musicBgs]}</div>
      <style jsx>{`
        .hidden {
          display: none;
        }
      `}</style>
    </>
  );

  return (
    <>
      {visualBg}
      {webBg}
      {musicBg}
      {noBg}
    </>
  );
};

export default class Index extends React.Component {
  state = {
    viewing: 'landing',
    clicked: false,
  };

  render() {
    return (
      <>
        <Background viewing={this.state.viewing} />
        <div
          className="centered"
          onPointerDown={() => this.setState({clicked: true})}
        >
          <FadeInGroup>
            <Scramble s="Hello, my name is Kevin Lee." />
            <br />
            <Scramble s="When I'm freelancing or making art, I go by my Chinese name, MNGYUAN." />
            <Scramble s="It means dream far." />
            <br />
            <div delayInit={1200}>
              <Scramble s="I'm passionate about " />
              <span
                className="primary"
                onPointerOver={() =>
                  this.state.clicked ? this.setState({viewing: 'visual'}) : null
                }
                onPointerDown={() =>
                  this.setState({viewing: 'visual', clicked: true})
                }
                onPointerOut={() => this.setState({viewing: 'landing'})}
              >
                visual storytelling
              </span>
              <Scramble s=", " />
              <span
                className="primary"
                onPointerOver={() =>
                  this.state.clicked ? this.setState({viewing: 'web'}) : null
                }
                onPointerDown={() =>
                  this.setState({viewing: 'web', clicked: true})
                }
                onPointerOut={() => this.setState({viewing: 'landing'})}
              >
                next-gen frontend web tech
              </span>
              <Scramble s=", and " />
              <span
                className="primary"
                onPointerOver={() =>
                  this.state.clicked ? this.setState({viewing: 'music'}) : null
                }
                onPointerDown={() =>
                  this.setState({viewing: 'music', clicked: true})
                }
                onPointerOut={() => this.setState({viewing: 'landing'})}
              >
                music production
              </span>
              <Scramble s=". I'm currently looking full-time and contract software or software/design hybrid roles." />
            </div>
            <br />
            <br />
            <br />
            <div>
              <a href="/Kevin Lee professional resume.pdf">Resume</a>
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
            cursor: pointer;
          }
          .primary:hover {
            background: ${PRIMARY_COLOR};
            color: white;
            user-select: none;
          }
          a {
            display: inline-block;
            color: ${this.state.viewing === 'landing' ? 'blue' : 'white'};
            text-decoration: none;
            border-bottom: 2px solid
              ${this.state.viewing === 'landing' ? 'blue' : 'white'};
          }
          a:hover {
            color: white;
            background: blue;
          }
        `}</style>
        <style jsx global>{`
          html {
            font-family: 'Space Mono', 'Noto Sans Mono CJK SC', monospace;
            background: ${this.state.viewing === 'landing'
              ? DEFAULT_BG
              : PRIMARY_COLOR};
          }

          ::selection {
            background: ${PRIMARY_COLOR};
            color: white;
          }
        `}</style>
      </>
    );
  }
}
