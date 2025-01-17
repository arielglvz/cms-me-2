import React from 'react'
import { useSelector } from 'react-redux'

// Library 
import { Tabs } from 'antd'

// Components
import Header from '../../components/Header'

// Pages
import AdminHero from './AdminHero'

const AdminPage = () => {
  const { portfolioData } = useSelector((state) => state.root);

  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: '1',
      label: 'Hero',
      children: <AdminHero />,
    },
    {
      key: '2',
      label: 'Tab 2',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: 'Tab 3',
      children: 'Content of Tab Pane 3',
    },
  ];

  return (
    <div>
      <Header />
      {portfolioData
      ? ( <Tabs defaultActiveKey="1" type="card" items={items} onChange={onChange} /> ) 
      : ( <div>Loading...</div> )}
    </div>
  )
}

export default AdminPage
