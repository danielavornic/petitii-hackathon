import React from 'react'
import { Col, Row } from 'antd';
import { Button, Space } from 'antd';
import { Anchor } from 'antd';

const { Link } = Anchor;

export const Header = () => {
  return (
    <>
    <Row>
      <Col span={12}>
        <Space wrap>
          <Anchor>
            <Link href="https://presedinte.md/" title="Site-ul oficial al Preşedinţiei">
            </Link>
          </Anchor>
        </Space></Col>
    </Row>
    <Row>
      <Col span={12}>col-12</Col>
      <Col span={12}>col-12</Col>
    </Row>
  </>
  )
}
