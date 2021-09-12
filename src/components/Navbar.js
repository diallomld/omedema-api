import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { Link, BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import ListTeams from './teams/ListTeams';
import DetailsTeam from './teams/DetailsTeam';

const { Header, Sider, Content } = Layout;

function SiderDemo (){

    const [collapsed, setCollapsed] = useState(false)

    const toggle = () => {
      setCollapsed(!collapsed)
    };

    return (
        <Layout>
          <BrowserRouter>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
                <Link to="/">
                    <span className="nav-text">Teams</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                <Link to="/teams:id">
                    <span className="nav-text">Users</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              Login
            </Menu.Item>
            <Menu.Item key="5" icon={<UploadOutlined />}>
              Register
            </Menu.Item>
          </Menu>
        </Sider>
              </BrowserRouter>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0, width:'auto' }}>
              <span icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>} onClick={toggle} className="trigger"></span>
            
          </Header>
          <Content
            className="site-layout-background"
            style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
            }}
            >
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <ListTeams/>
                </Route>
                <Route exact path="/teams/:id">
                    <DetailsTeam/>
                </Route>
            </Switch>
        </BrowserRouter>
          </Content>
        </Layout>
      </Layout>
    );
}

export default SiderDemo