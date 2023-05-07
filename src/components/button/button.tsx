import { Button, Space } from 'antd';
import style from "./button.module.css"


const Buttonn: React.FC = () => (
    <Space wrap>
      <Button className={style.button} type="primary" danger>
        Primary
      </Button>
      {/* <Button danger>Default</Button>
      <Button type="dashed" danger>
        Dashed
      </Button>
      <Button type="text" danger>
        Text
      </Button>
      <Button type="link" danger>
        Link
      </Button> */}
    </Space>
  );
  
  export default Buttonn;
