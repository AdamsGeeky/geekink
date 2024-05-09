import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Mentors from '../components/Mentors';
import Partners from '../components/Partners';
import Testimonials from '../components/Testimonials';
import Services from '../components/Services';
import CustomDivider from '../components/CustomDivider';
import Heading from '@theme/Heading';
import styles from './index.module.css';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
        the premier learning platform empowering tech enthusiasts and future innovators across Northern Nigeria. Our mission is simple: to equip you with the knowledge, skills, and connections needed to thrive in the digital landscape.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            {'<'} Explore our courses {'/>'}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`home`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <CustomDivider
        label="Meet Our Exceptional Mentors" />
        <Mentors />
        <CustomDivider
        label="Testimonials from Our Students" />
        <Testimonials />
        <CustomDivider
        label="Our Partners" />
        <Partners />
      </main>
    </Layout>
  );
}
