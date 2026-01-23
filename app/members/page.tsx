'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';

const members = [
  {
    name: '山名 雄貴',
    position: '最高AI責任者(CAIO)',
    profile: [
      'ノーコードツールを活用したAI Web制作やAIタレントマーケティングサービスの開発に注力しています。',
      'AIで新しい職種を生み出すことで非正規雇用者を救うことが目標です。',
    ],
    image: '/yuuki_yamana.jpg',
  },
  {
    name: '村瀬 元旗',
    position: '最高戦略責任者(CSO)',
    profile: [
      'ソフトテニス実業団 リブコネLYNXの設立をはじめ、eスポーツチームの運営経験を活かして、AIタレントを活用したマーケティング領域を主導しています。',
    ],
    image: '/genki_murase.jpg',
  },
  {
    name: '小原 峰輝',
    position: '最高インターン責任者(CIO)',
    profile: [
      '日本語・英語・中国語を自在に操るトリリンガルであり、その語学力と映像表現の専門性を活かして、AIタレントの企画・制作を担当しています。',
    ],
    image: '/takaaki_obara.jpg',
  },
];

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isProgrammaticScroll = useRef(false);
  const scrollRaf = useRef<number | null>(null);

  useEffect(() => {
    if (itemRefs.current[activeIndex]) {
      const container = containerRef.current;
      const activeItem = itemRefs.current[activeIndex];
      if (container && activeItem) {
        const containerWidth = container.offsetWidth;
        const itemWidth = activeItem.offsetWidth;
        const scrollLeft = activeItem.offsetLeft - (containerWidth - itemWidth) / 2;
        isProgrammaticScroll.current = true;
        container.scrollTo({
          left: scrollLeft,
          behavior: 'smooth',
        });
        window.setTimeout(() => {
          isProgrammaticScroll.current = false;
        }, 350);
      }
    }
  }, [activeIndex]);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % members.length);
    }, 4500);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const updateActiveFromScroll = () => {
      if (isProgrammaticScroll.current) {
        return;
      }
      if (!containerRef.current) {
        return;
      }
      const containerRect = containerRef.current.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;
      let closestIndex = activeIndex;
      let closestDistance = Number.POSITIVE_INFINITY;

      itemRefs.current.forEach((item, index) => {
        if (!item) {
          return;
        }
        const itemRect = item.getBoundingClientRect();
        const itemCenter = itemRect.left + itemRect.width / 2;
        const distance = Math.abs(containerCenter - itemCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      if (closestIndex !== activeIndex) {
        setActiveIndex(closestIndex);
      }
    };

    const onScroll = () => {
      if (scrollRaf.current !== null) {
        window.cancelAnimationFrame(scrollRaf.current);
      }
      scrollRaf.current = window.requestAnimationFrame(updateActiveFromScroll);
    };

    container.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      container.removeEventListener('scroll', onScroll);
      if (scrollRaf.current !== null) {
        window.cancelAnimationFrame(scrollRaf.current);
        scrollRaf.current = null;
      }
    };
  }, [activeIndex]);

  return (
    <div className={styles.container}>
      <div className={styles.slideshowWrapper}>
        <div className={styles.slideshowContainer} ref={containerRef}>
          {members.map((member, index) => (
            <div
              key={member.name}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className={`${styles.memberCard} ${index === activeIndex ? styles.activeCard : ''}`}
              onClick={() => goToSlide(index)}
            >
              <Image
                src={member.image}
                alt=""
                width={500}
                height={500}
                className={styles.memberImage}
              />
              <div className={styles.memberInfo}>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.position}>{member.position}</p>
                <div className={styles.profile}>
                  {member.profile.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.footer}>
        <h2 className={styles.message}>We are hiring</h2>
        <p>最先端の技術を取り入れたスタートアップで共に働きましょう。</p>
        <ButtonLink href="/contact">お問い合わせへ</ButtonLink>
      </div>
    </div>
  );
}
