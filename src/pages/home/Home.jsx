import { Button, Select, Table } from "antd"
import { useState } from "react"
import { Input } from "antd"
import { UserAddOutlined } from "@ant-design/icons"
import { key } from "localforage"


const Home = () => {
  const [loading, setLoading] = useState(false)
  const fourtes = ['banana', 'mango', 'jakfoat']
  const handleClickButton = () => {
    setLoading(true)
    console.log('click hoica')

    setTimeout(() => {
      setLoading(false)
    }, 8000)
  }

  const Data = [
    {
      name: "first",
      age: '23',
      key: '01',
    },
    {
      name: "first s",
      age: '13',
      key: '02',
    },
    {
      name: "first a",
      age: '23',
      key: '03',
    },
  ]

  const columData = [
    {
      title: "Name", //aita thakba Heading hisava
      dataIndex: "name",
      key: "key",
      render: name => {
        return <a >{name}</a>
      }
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "key",
      sorter: (a,b) => a.age -b.age
    },
    {
      title: "Gratuated",
      key: "key",
      render: payload => {
        return <p>{payload.age > 16 ? 'true' : 'false'}</p>
      }
    },
  ]

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

        <p>Table components</p>
        <Table
          dataSource={Data}
          columns={columData}
        ></Table>
        {/* 
  1. dataSource={
  name:------
  age:----------
  key:----------
  }

  2. columns={
  title: 
  dataIndex:
  key:
  }
  3. render:
  4. payload
  */}
      </div>


    </div>
  )
}

export default Home