import React from 'react';
import { Row, Col,  Divider, Button, Breadcrumb, Pagination, Card, Avatar, Image} from 'antd';
import { TweenOneGroup } from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender } from './utils';

import navStyle from './less/navItem.less'
import navData from './data.nav';
class Guidex extends React.PureComponent {
  getChildrenToRender = (data) =>
    data.map((item) => {
      return (
        <Col key={item.name} {...item}>
          <a {...item.children.wrapper}>
            <span {...item.children.img}>
              <img src={item.children.img.children} height="100%" alt="img" />
            </span>
            <p {...item.children.content}>{item.children.content.children}</p>
          </a>
        </Col>
      );
    });

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    const childrenToRender = this.getChildrenToRender(
      dataSource.block.children
    );

      return (
      <div {...dataSource.wrapper}>
        <div {...dataSource.page}>
          {
            navData.map((navItem, index) => {
              return (
                <div key={index}>
                <div key="title" {...dataSource.titleWrapper}>
                  {navItem.title}
                </div>
                <Row>
                  {
                    navItem.cols.map((col, i) => {
                      return (
                        <Col xs={{ span: 23 }} lg={{ span: 6 }} key={i}>
                          <Card hoverable className={navStyle.navItem}>
                            <a target="_blank" href={col.link}>
                              <div className="item">
                                <div className={navStyle.title}>
                                  <img className={navStyle.logo}
                                       src={col.avatar} />
                                  <span>{col.title}</span>
                                </div>
                                <div className={navStyle.desc}>
                                  {col.desc}
                                </div>
                              </div>
                            </a>
                          </Card>
                        </Col>
                      )
                    })
                  }
                </Row>
              </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default Guidex;
