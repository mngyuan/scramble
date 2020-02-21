import 'intersection-observer';
import Head from 'next/head';

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
  '/media/first.mp3',
  '/media/flight1.mp3',
  '/media/20-05_bu_se_liang.mp3',
  '/media/19-04_abeepitidybeepbapboobee.mp3',
  '/media/20-07 PO-20 ARCADE.mp3',
];
const VISUAL_BGS = [
  '/media/000025.jpg',
  '/media/S398787-R3-E074.jpg',
  '/media/KYLIN-excerpt.mp4',
  '/media/Screen Shot 2019-11-19 at 6.13.48 PM.jpeg',
  '/media/scan.jpg',
  '/media/how to have friends and still feel alone for web-05.png',
  '/media/stand still excerpt.mp4',
  '/media/bw_6 excerpt.mp4',
];
const WEB_BGS = ['/media/oww2.mp4', '/media/oww3.mp4'];

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
        <Head>
          <title>@mngyuan Kevin Lee</title>
          <meta
            property="og:description"
            content="Kevin @mngyuan Lee, graphic designer and developer"
          />
          <meta property="og:title" content="@mngyuan Kevin Lee" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          {VISUAL_BGS.map(src => (
            <link
              rel="preload"
              href={src}
              as={
                ['mp4'].includes(src.split('.').slice(-1)[0])
                  ? 'video'
                  : 'image'
              }
              type={
                ['mp4'].includes(src.split('.').slice(-1)[0])
                  ? 'video/mp4'
                  : 'image/jpeg'
              }
            />
          ))}
          {WEB_BGS.map(src => (
            <link rel="preload" href={src} as="video" type="video/mp4" />
          ))}
          {MUSIC_BGS.map(src => (
            <link rel="preload" href={src} as="audio" type="audio/mpeg" />
          ))}
        </Head>
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
