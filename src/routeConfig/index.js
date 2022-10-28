import { UserOutlined, SafetyCertificateFilled } from '@ant-design/icons'
export default [
    {
        key: 'home',
        label: '首页',
        icon: <UserOutlined />
    },
    {
        key: 'aboutUs',
        label: '关于我们',
        icon: <UserOutlined />,
        children: [
            {
                key: 'stronger',
                label: '能力',
                icon: <UserOutlined />
            },
            {
                key: 'structure',
                label: '组成',
                icon: <SafetyCertificateFilled />,
                children: [
                    {
                        key: 'market',
                        label: '市场部',
                        icon: <SafetyCertificateFilled />,
                    },
                    {
                        key: 'personnelDepartment',
                        label: '人事部',
                        icon: <SafetyCertificateFilled />,
                    }
                ]
            },
        ]
    },
]