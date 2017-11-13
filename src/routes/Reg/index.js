import React,{Component} from "react"
import { NavBar, Icon,Button,WingBlank,List,InputItem } from 'antd-mobile';


class RegPage extends Component {

  render (){
    return (
      <div id="reg-page">
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon key="1" type="ellipsis" />,
          ]}
        >
        注册
        </NavBar>
        <WingBlank>
          <List>
          <InputItem
          
            placeholder="请输入手机号"
            clear
            moneyKeyboardAlign="left"
          ></InputItem>
          <InputItem
          
            placeholder="请输入密码"
            clear
            moneyKeyboardAlign="left"
          ></InputItem>
          <InputItem
          
            placeholder="手机验证码"
            clear
            moneyKeyboardAlign="left"
          ></InputItem>
          <Button type="primary">注册</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}

export default RegPage