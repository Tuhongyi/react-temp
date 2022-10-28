import { ConfigProvider, Layout, Menu } from 'antd';
import { Link } from 'umi'
import zhCN from 'antd/es/locale/zh_CN';
import { RecoilRoot } from 'recoil';
import routeConfig from '../routeConfig'
import './index.less';

export default function IndexPage({ children }) {
  function getItems(list, root) {
    return list.map(item => {
      if (item?.children?.length) {
        return {
          ...item,
          label: <Link to={root + item.key}>{item.label}</Link>,
          children: getItems(item.children ?? [], `${root}${item.key}/`),
        }
      } else {
        return {
          ...item,
          label: <Link to={root + item.key}>{item.label}</Link>,
        }
      }
    });
  }
  return (
    <ConfigProvider locale={zhCN}>
      <RecoilRoot>
        <Layout className='outter-content'>
          <Layout.Sider collapsed={false}>
            <div className='project-logo'>这只是个模板</div>
            <Menu
              mode='inline'
              defaultSelectedKeys={['home']}
              items={getItems(routeConfig, '/')}
            />
          </Layout.Sider>
          <Layout.Content>
            {children}
          </Layout.Content>
        </Layout>
      </RecoilRoot>
    </ConfigProvider>
  );
}
