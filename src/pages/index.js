import React from 'react';
import 'intersection-observer';
import Head from 'next/head';

import Scramble from '../components/Scramble';
import FadeInGroup from '../components/FadeInGroup';
import Layout from '../components/Layout';

import {PRIMARY_COLOR, DEFAULT_BG, LINK_COLOR, DARKMODE_BG} from '../const';

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
  freelance: [
    '/media/heredia-demo.mp4',
    '/media/oww2.mp4',
    '/media/ror2handbook demo.mov',
  ],
  'graphic design': [
    '/media/DREAMING excerpt.jpeg',
    '/media/scan.jpg',
    '/media/how to have friends and still feel alone for web-05.png',
    '/media/silverlake-01.png',
  ],
  'creative tech': [
    '/media/20-05 ocean pillars.mov',
    '/media/20-07 columns cuts.mov',
    '/media/stand still excerpt.mp4',
    '/media/bw_6 excerpt.mp4',
    '/media/a5.jpg',
    '/media/a8.jpg',
    '/media/a6.jpg',
    '/media/KYLIN-excerpt.mp4',
  ],
  software: [
    '/media/oww3.mp4',
    '/media/heredia-demo.mp4',
    '/media/oww2.mp4',
    '/media/ror2handbook demo.mov',
  ],
  photography: ['/media/000025.jpg', '/media/S398787-R3-E074.jpg'],
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
    viewing !== 'landing' ? randPickNew(ITEMS[viewing]) : '';
  const bg = ['mp4', 'mov'].includes(backgroundSrc.split('.').slice(-1)[0]) ? (
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
  );

  return backgroundSrc ? bg : null;
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
                  ['mp4', 'mov'].includes(src.split('.').slice(-1)[0])
                    ? 'video'
                    : 'image'
                }
                type={
                  ['mp4', 'mov'].includes(src.split('.').slice(-1)[0])
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
                freelance developer
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
            <Scramble s="I use my Chinese name, 李夢遠 MNGYUAN, for my work. It means DREAM FAR." />
            <br />
            <div delayInit={1200}>
              <Scramble s="I'm passionate about creating expressive & empathetic digital experiences, and harnessing novel tech to do so. I'm currently trying to create concious and thoughtful work combining " />
              <span
                className="primary"
                onPointerDown={() => this.setState({viewing: 'graphic design'})}
                onPointerOut={() => this.setState({viewing: 'landing'})}
              >
                striking visual design
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
            color: ${DEFAULT_BG};
            user-select: none;
          }
          a {
            display: inline-block;
            color: ${this.state.viewing === 'landing'
              ? LINK_COLOR
              : DEFAULT_BG};
            text-decoration: none;
            border-bottom: 2px solid
              ${this.state.viewing === 'landing' ? LINK_COLOR : DEFAULT_BG};
          }
          a:hover {
            color: ${DEFAULT_BG};
            background: ${LINK_COLOR};
          }

          /*
          @media (prefers-color-scheme: dark) {
            a {
              color: ${this.state.viewing === 'landing'
            ? LINK_COLOR
            : DARKMODE_BG};
              border-bottom: 2px solid
                ${this.state.viewing === 'landing' ? LINK_COLOR : DARKMODE_BG};
            }
          }
          */
        `}</style>
        <style jsx global>
          {`
            html {
              ${this.state.viewing !== 'landing'
                ? `background: ${PRIMARY_COLOR};`
                : ''}
            }
          `}
        </style>
      </>
    );
  }
}
