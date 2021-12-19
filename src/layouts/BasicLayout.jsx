import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './styles.less';
function BasicLayout(props) {
  return (
    <>
      <Header />
      <div className={styles.body}>{props.children}</div>
      <Footer />
    </>
  );
}

export default BasicLayout;
