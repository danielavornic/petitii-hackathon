import { Button, DatePicker, Layout, Space, version } from "antd";
import { Header } from "components";

export const App = () => {
  return (
    <Layout className="layout">
      <Header/>
      <h1>antd version: {version}</h1>
      <Space>
        <DatePicker />
        <Button type="primary">Primary Button</Button>
      </Space>
    </Layout>
  );
};
