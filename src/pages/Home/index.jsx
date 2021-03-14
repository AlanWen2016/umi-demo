/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Nav3 from './Nav3';
import Banner1 from './Banner1';
import Content5 from './Content5';
import Content1 from './Content1';
import Content3 from './Content3';
import Footer1 from './Footer1';


import {
  Nav30DataSource,
  Banner10DataSource,
  Content50DataSource,
  Content10DataSource,
  Content30DataSource,
  Footer10DataSource,
} from './data.source';
import './less/antMotionStyle.less';
import styles from './less/custom.less'
import Guidex from './Guidex';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
  }

  render() {
    const children = [
      <Nav3
        id="Nav3_0"
        key="Nav3_0"
        dataSource={Nav30DataSource}
        isMobile={this.state.isMobile}
      />,
      <Guidex
        id="Content1_0"
        key="Content1_0"
        dataSource={Content50DataSource}
        isMobile={this.state.isMobile}
      />,
      // <Footer1
      //   id="Footer1_0"
      //   key="Footer1_0"
      //   dataSource={Footer10DataSource}
      //   isMobile={this.state.isMobile}
      // />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {children}
      </div>
    );
  }
}
