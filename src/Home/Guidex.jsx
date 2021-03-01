import React from 'react';
import { Row, Col,  Divider, Button, Breadcrumb, Pagination} from 'antd';
import { TweenOneGroup } from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender } from './utils';

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
          <div key="title" {...dataSource.titleWrapper}>
            前端社区
          </div>
          <div>
            <Row>
              <Col span={6}>col-6</Col>
              <Col span={6}>col-6</Col>
              <Col span={6}>col-6</Col>
              <Col span={6}>col-6</Col>
            </Row>
          </div>
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Application Center</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Application List</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
          </Breadcrumb>
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
    );
  }
}

export default Guidex;
