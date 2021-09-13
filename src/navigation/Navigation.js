import { BrowserRouter } from "react-router-dom"
import { Layout, Menu } from 'antd';
import {
    UserOutlined,
    VideoCameraOutlined,
    LoginOutlined,
    LogoutOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';


const { Sider } = Layout;

const Navigation = ({ collapsed }) => {
    return (
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
                        <Link to="">
                            <span className="nav-text">Users</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<LoginOutlined />}>
                        Login
                    </Menu.Item>
                    <Menu.Item key="5" icon={< LogoutOutlined />}>
                        Register
                    </Menu.Item>
                </Menu>
            </Sider>
        </BrowserRouter>
    )
}
export default Navigation