import '@root/global-fonts.css';
import '@root/global.css';

import styles from './page.module.scss';

import Accordion from '@components/Accordion';
import Card from '@components/Card';
import ComboBox from '@components/ComboBox';
import DefaultLayout from '@components/page/DefaultLayout';
import TreeView from '@components/TreeView';
import React from 'react';

export const dynamic = 'force-static';

type FavoriteEntry =
  | string
  | {
      title: string;
      link?: string;
      children?: FavoriteEntry[];
    };

const obsessions = [
  {
    title: 'Spikeball',
    body: 'I competed in the pro division of last years national championships'

  },
  {
    title: 'Running',
    body: 'I broke 15minutes in a track 5k',
  },
  {
    title: 'Chess',
    body: 'I was once a 1900 online',
  },
  {
    title: 'Ping Pong',
    body: 'I won a lot of camp tournaments but got schooled when I came to ucla',
  },
];

const link1 = {
  title: 'championship-highlights',
  link: 'https://www.youtube.com/watch?v=PfENCoTXc7U'
};

const link2 = {
  title: 'another-good-tourney',
  link: 'https://www.youtube.com/watch?v=iFf-mX_PHYU&pp=0gcJCTwKAYcqIYzv'
};

const link3 = {
  title: 'a-classic',
  link: 'https://www.youtube.com/watch?v=dU12WUYhKpQ&pp=ygUjbWF0dCBjb2xlIGtpbmdkb20gY29tZSBjaGFtcGlvbnNoaXA%3D'
};

const favorites: FavoriteEntry[] = [
  {
    title: 'Bay Area',
    children: ["playing:golden-gate-park", "running:strawberry-canyon-fire-trail", "eating:hotboys-fried-chicken"]
  },
  {
    title: 'UCLA',
    children: ["cs281-communication-complexity", "club-spikeball", "the-hare-krishna-food-truck"]
  },
  {
    title: 'New York',
    children: ["central-park", "sunny-gu", "chess-in-bryant-park"]
  },
  {
    title: 'Books',
    children: [{
        title: 'fantasy-scifi',
        children: ["the-name-of-the-wind", "the-way-of-kings", "enders-game", "six-of-crows"]
    }, {
        title: 'novels-literature',
        children: ["a-little-life", "empire-of-pain", "song-of-achilles"]
    }
  ]
  },
  {
    title: 'spikeball',
    children: [link1, link2, link3]
  },
];

const renderFavorites = (items: FavoriteEntry[]): React.ReactNode =>
  items.map((entry, index) => {
    if (typeof entry === 'string') {
      return <TreeView key={`${entry}-${index}`} title={entry} isFile />;
    }

    const hasChildren = Array.isArray(entry.children) && entry.children.length > 0;
    const titleNode = entry.link ? (
      <a href={entry.link} target="_blank" rel="noreferrer">
        {entry.title}
      </a>
    ) : (
      entry.title
    );

    return (
      <TreeView key={`${entry.title}-${index}`} title={titleNode} isFile={!hasChildren} defaultValue={hasChildren}>
        {hasChildren ? renderFavorites(entry.children) : null}
      </TreeView>
    );
  });

export async function generateMetadata() {
  const title = 'Jake Young';
  const description =
    'UCLA CS student and spikeball club lead with Bay Area roots, building a Polymarket trading bot and moving to New York after graduation.';
  const url = 'https://youngjake.com';

  return {
    title,
    description,
    metadataBase: new URL(url),
    icons: {
      icon: '/app_icon.png',
      shortcut: '/app_icon.png',
      apple: '/app_icon.png',
    },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: '/me.jpg', width: 1200, height: 630, alt: 'Jake Young portrait' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/me.jpg'],
    },
  };
}

export default function Page() {
  return (
    <DefaultLayout previewPixelSRC="/template-app-icon.png">
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1 className={styles.title}>Jake Young</h1>
            <p className={styles.lede}>
              I am a fourth year ucla student where I run the spikeball club and study computer science. I grew up near Berkeley, CA and have developed an
              incredible fondness for the Bay and San Francisco. Despite this, I am off to live in New York starting in August where I will be working after
              graduating. In my spare time (if I am not playing spikeball) I am probably working on my latest project, which is a bot trading on polymarket,
              reading, or thinking about math. Among other things, I love puzzles and my dog Theo.
            </p>
          </div>
          <div className={styles.portraitShell}>
            <div className={styles.portraitFrame}>
              <span className={styles.portraitGlow} />
              <img className={styles.portrait} src="/me.jpg" alt="Portrait of Jake Young" />
            </div>
          </div>
        </section>

        <section className={styles.columns}>
          <Card title="favorites">
            <div className={styles.cardBody}>
              <TreeView title="favorites" defaultValue isRoot>
                {renderFavorites(favorites)}
              </TreeView>
            </div>
          </Card>
          <Card title="Hobbies and Interests">
            <div className={styles.cardBody}>
              <ComboBox
                data={[
                  ['Hobby', 'Notes'],
                  ['Running', 'I broke 15minutes in a track 5k'],
                  ['Chess', 'I was once a 1900 online'],
                  ['Ping Pong', 'I won a lot of camp tournaments but got schooled when I came to ucla'],
                  ['Spikeball', 'I competed in the pro division of last years national championships'],
                ]}
              />
            </div>
          </Card>
        </section>

        <Card title="Let’s talk">
          <div className={styles.footer}>
            <p className={styles.microcopy}>
              - send me an email at youngjakecubes@g.ucla.edu or check me out on insta @jakemehome
            </p>
          </div>
        </Card>
      </main>
    </DefaultLayout>
  );
}
