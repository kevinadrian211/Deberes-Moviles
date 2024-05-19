import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, AppstoreOutlined } from '@ant-design/icons';
import StartPage from '../pages/start-page';
import ComponentPage from '../pages/component-page';

const { Sider, Content } = Layout;

const AppLayout: React.FC = () => {
    const [currentComponent, setCurrentComponent] = useState<React.ReactNode>(<StartPage />);

    const handleMenuClick = (component: React.ReactNode) => {
        setCurrentComponent(component);
    };

    return (
        <Layout style={{ minHeight: '100vh'}}>
            <Sider collapsible>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<UserOutlined />} onClick={() => handleMenuClick(<StartPage />)}>
                        Página de Inicio
                    </Menu.Item>
                    <Menu.Item key="2" icon={<AppstoreOutlined />} onClick={() => handleMenuClick(<ComponentPage />)}>
                        Página de Componentes
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Content style={{ margin: '16px' }}>
                        {currentComponent}
                </Content>
            </Layout>
        </Layout>
    );
};

export default AppLayout;