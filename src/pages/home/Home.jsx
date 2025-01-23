import { Button, Modal, Select, Space, Table, } from "antd"
import { useEffect, useState } from "react"
import { Input } from "antd"
import { UserAddOutlined } from "@ant-design/icons"



const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [loading, setLoading] = useState(false)
  const fourtes = ['banana', 'mango', 'jakfoat']
  const handleClickButton = () => {
    setLoading(true)
    console.log('click hoica')

    setTimeout(() => {
      setLoading(false)
    }, 8000)
  }

const [dataSource, setDataSource] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(result =>{
setDataSource(result)
    })
  },[])

  const columns=[
    {
title:"userId",
userId:"id",

    },
  ]

  console.log(dataSource)
  return (
    <div className="m-10">
      <Button
        onClick={handleClickButton}
        loading={loading}
        htmlType="submit"
      >First Button</Button>

      {/* 
      1. type=""
      2. link--------> href=""
      3. block
      4. onClick
      5. loading={loading}
      6. htmlType="submit"
      */}

      <div className="mt-4">
        <Input placeholder="Name" type="text"
          maxLength={10}
          prefix={<UserAddOutlined />}
          allowClear
          style={{ maxWidth: '200px' }}
        ></Input>

        {/* 
  1. maxLength={}
  2. prefix={}
  3. prefixCls=""
  4. allowClear
  */}
      </div>

      <div>
        <Input.Search
          placeholder="Enter Your Search.."
        ></Input.Search>
      </div>


      <div>
        <p>Choose Your Fruites</p>
        <Select
          maxTagCount={2}
          mode="multiple"
          placeholder="Your Fabourite fruite" style={{ width: "50%" }}>
          {
            fourtes.map((fruite, index) => {
              return (
                <Select.Option key={index}
                  value={fruite}
                >{fruite}</Select.Option>
              )
            })
          }
        </Select>

        {/* 
  1. mode="multiple"
  2. value={....}
  3. maxTagCount={2}
  */}
      </div>

      <div>
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>

      <div>
        <Space size={20} direction="vertical">
          <Input prefix={<UserAddOutlined />} placeholder="Enter Your Name"></Input>
          <Input prefix={<UserAddOutlined />} placeholder="Enter Your Name"></Input>
        </Space>
        {/* 
        1. space
        2. size
        3. direction="vertical"
        4. .ant-input::placeholder{------}
        */}
      </div>


      <div>
       <Table columns={columns} dataSource={dataSource}/>

        {/* 
        1. dataSource="",
        2. columns="",
        3. scroll={{y:100}}
        */}
      </div>

    </div>
  )
}

export default Home