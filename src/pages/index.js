import 'intersection-observer';
import Head from 'next/head';

import Scramble from '../components/Scramble';
import FadeInGroup from '../components/FadeInGroup';
import Layout from '../components/Layout';

import {PRIMARY_COLOR, DEFAULT_BG} from '../const';

let randPickNew;
(() => {
  let last;
  randPickNew = (l) => {
    let i = Math.floor(Math.random() * l.length);
    while (i === last && l.length > 1) {
      i = Math.floor(Math.random() * l.length);
    }
    last = i;
    return l[i];
  };
})();

const okf = (o) => Object.keys(o).filter((k) => o[k]);
const classNames = (o) => okf(o).join(' ');

const ITEMS = {
  freelance: [],
  'graphic design': [
    'media/DREAMING excerpt.jpeg',
    '/media/scan.jpg',
    '/media/how to have friends and still feel alone for web-05.png',
  ],
  'creative tech': [
    '/media/KYLIN-excerpt.mp4',
    '/media/stand still excerpt.mp4',
    '/media/bw_6 excerpt.mp4',
    '/media/000025.jpg',
    '/media/S398787-R3-E074.jpg',
  ],
  software: ['/media/oww2.mp4', '/media/oww3.mp4'],
};
const MUSIC_BGS = [
  '/media/first.mp3',
  '/media/flight1.mp3',
  '/media/20-05_bu_se_liang.mp3',
  '/media/19-04_abeepitidybeepbapboobee.mp3',
  '/media/20-07 PO-20 ARCADE.mp3',
];

const Background = ({viewing}) => {
  const backgroundSrc =
    viewing !== 'landing' ? randPickNew(ITEMS[viewing]) : null;
  const bg = backgroundSrc ? (
    ['mp4'].includes(backgroundSrc.split('.').slice(-1)[0]) ? (
      <div>
        <video
          className="visualBg"
          src={backgroundSrc}
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
        <img src={backgroundSrc} className="visualBg" />
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

  return bg;
};

export default class Index extends React.Component {
  state = {
    viewing: 'landing',
  };

  componentDidMount() {
    Object.values(ITEMS)
      .flat()
      .map((src) => (new Image().src = src));
  }

  render() {
    return (
      <>
        <Head>
          {Object.values(ITEMS)
            .flat()
            .map((src) => (
              <link
                key={src}
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
          {MUSIC_BGS.map((src) => (
            <link
              key={src}
              rel="preload"
              href={src}
              as="audio"
              type="audio/mpeg"
            />
          ))}
        </Head>
        <Background viewing={this.state.viewing} />
        <Layout>
          <FadeInGroup>
            <div>
              <Scramble s="Hello, I'm Kevin Lee, a " />
              <span
                className="primary"
                onPointerDown={() => this.setState({viewing: 'freelance'})}
                onPointerOut={() => this.setState({viewing: 'landing'})}
              >
                freelance web developer
              </span>
              <Scramble s=" and " />
              <span
                className="primary"
                onPointerDown={() => this.setState({viewing: 'creative tech'})}
                onPointerOut={() => this.setState({viewing: 'landing'})}
              >
                creative technologist
              </span>
              <Scramble s="." />
            </div>
            <br />
            <Scramble s="I use my Chinese name, MNGYUAN, for my work. It means dream far." />
            <br />
            <div delayInit={1200}>
              <Scramble s="I'm passionate about creating expressive & empathetic digital experiences, and harnessing novel tech to do so. In my personal time I'm currently investigating ways to creative concious and thoughtful art at the intersection of " />
              <span
                className="primary"
                onPointerDown={() => this.setState({viewing: 'graphic design'})}
                onPointerOut={() => this.setState({viewing: 'landing'})}
              >
                graphic design
              </span>
              <Scramble s=" and " />
              <span
                className="primary"
                onPointerDown={() => this.setState({viewing: 'software'})}
                onPointerOut={() => this.setState({viewing: 'landing'})}
              >
                software
              </span>
              <Scramble s="." />
            </div>
            <br />
            <Scramble s="Let's talk!" />
            <br />
            <br />
            <br />
            <div>
              <a href="/Kevin Lee professional resume.pdf">Resume</a>
              <Scramble s=" " />
              <a href="mailto:me@mngyuan.com">me [at] mngyuan.com</a>
            </div>
          </FadeInGroup>
        </Layout>
        <style jsx>{`
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
        <style jsx global>
          {`
            html {
              background: ${this.state.viewing === 'landing'
                ? DEFAULT_BG
                : PRIMARY_COLOR};
            }
          `}
        </style>
      </>
    );
  }
}
