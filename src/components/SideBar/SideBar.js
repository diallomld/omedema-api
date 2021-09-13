import React, { useState } from 'react';
import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';

import routes from '../../navigation/routes';
import Navigation from '../../navigation/Navigation';

const { Header, Content } = Layout;

function SideBar() {

  const [collapsed, setCollapsed] = useState(false)

  const toggle = () => {
    setCollapsed(!collapsed)
  };

  return (
    <Layout>
      <Navigation collapsed={collapsed} />
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0, width: 'auto' }}>
          <span icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} onClick={toggle} className="trigger"></span>

        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {routes}
        </Content>
      </Layout>
    </Layout>
  );
}

export default SideBar