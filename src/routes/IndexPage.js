import React from 'react';
import { connect } from 'dva';
// import styles from './IndexPage.css';
import Header from './../components/Header'

function IndexPage() {
  return (
    <div>
      <Header/>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
