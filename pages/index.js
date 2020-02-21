import Scramble from '../components/Scramble';
import FadeInGroup from '../components/FadeInGroup';

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

const okf = o => Object.keys(o).filter(k => o[k]);
const classNames = o => okf(o).join(' ');

const PRIMARY_COLOR = '#ED1C24';
const DEFAULT_BG = 'white';

const MUSIC_BGS = [
  '/first.mp3',
  '/flight1.mp3',
  '/20-05_bu_se_liang.mp3',
  '/19-04_abeepitidybeepbapboobee.mp3',
  '/20-07 PO-20 ARCADE.mp3',
];
const VISUAL_BGS = [
  '/000025.jpg',
  '/S398787-R3-E074.jpg',
  '/KYLIN-excerpt.mp4',
  '/Screen Shot 2019-11-19 at 6.13.48 PM.jpeg',
  '/scan.jpg',
  '/how to have friends and still feel alone for web-05.png',
  '/stand still excerpt.mp4',
  '/bw_6 excerpt.mp4',
];
const WEB_BGS = ['/oww2.mp4', '/oww3.mp4'];

const Background = props => {
  const curVisualBgSrc =
    props.viewing === 'visual' ? randPickNew(VISUAL_BGS) : null;
  const curWebBgSrc = props.viewing === 'web' ? randPickNew(WEB_BGS) : null;
  const curMusicBgSrc =
    props.viewing === 'music' ? randPickNew(MUSIC_BGS) : null;
  const curVisualBg = curVisualBgSrc ? (
    ['mp4'].includes(curVisualBgSrc.split('.').slice(-1)[0]) ? (
      <div>
        <video
          className="visualBg"
          src={curVisualBgSrc}
          type="video/mp4"
          preload="auto"
          loop
          playsInline
          autoPlay
        />
        <style jsx>{`
          div {
            position: fixed;
            top: 20vh;
            left: 20vw;
            width: 60vw;
            height: 60vh;
            overflow: visible;
          }
          .hidden {
            display: none;
          }
          .visualBg {
            object-fit: cover;
            width: 100%;
          }
        `}</style>
      </div>
    ) : (
      <div>
        <img src={curVisualBgSrc} className="visualBg" />
        <style jsx>{`
          div {
            position: fixed;
            top: 20vh;
            left: 20vw;
            width: 60vw;
            height: 60vh;
            overflow: visible;
          }
          .hidden {
            display: none;
          }
          .visualBg {
            object-fit: cover;
            width: 100%;
          }
        `}</style>
      </div>
    )
  ) : null;
  const curWebBg = curWebBgSrc ? (
    <div>
      <video
        src={curWebBgSrc}
        className="visualBg"
        type="video/mp4"
        preload="auto"
        loop
        playsInline
        muted
        autoPlay
      />
      <style jsx>{`
        div {
          position: fixed;
          top: 20vh;
          left: 20vw;
          width: 60vw;
          height: 60vh;
          overflow: visible;
        }
        .hidden {
          display: none;
        }
        .visualBg {
          object-fit: cover;
          width: 100%;
        }
      `}</style>
    </div>
  ) : null;
  const curMusicBg = curMusicBgSrc ? (
    <div>
      <span>now playing: {curMusicBgSrc}</span>
      <audio src={curMusicBgSrc} preload="auto" loop autoPlay />
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
        .hidden {
          display: none;
        }
      `}</style>
    </div>
  ) : null;

  return curVisualBg || curWebBg || curMusicBg;
};

export default class Index extends React.Component {
  state = {
    viewing: 'landing',
    clicked: false,
  };

  componentDidMount() {
    MUSIC_BGS.forEach(src => (new Audio().src = src));
    VISUAL_BGS.forEach(src => (new Image().src = src));
    WEB_BGS.forEach(src => (new Image().src = src));
  }

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
