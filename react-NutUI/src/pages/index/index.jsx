import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { Button, ConfigProvider, TextArea, Dialog, Cell } from '@nutui/nutui-react-taro'
import enUS from '@nutui/nutui-react-taro/dist/locales/en-US'
import zhCN from '@nutui/nutui-react-taro/dist/locales/zh-CN'
import './index.{{ cssExt }}'
function Index() {
  const [locale, setLocale] = useState(zhCN)
  const localeKey = locale === zhCN ? 'zhCN' : 'enUS'
  const [visible, setVisible] = useState(false)
  const [translated] = useState({
    zhCN: {
      welcome: '欢迎使用 NutUI React 开发 Taro 多端项目。',
      button: '使用英文',
      open: '点击打开',
    },
    enUS: {
      welcome: 'Welcome to use NutUI React to develop Taro multi-terminal projects.',
      button: 'Use Chinese',
      open: 'Click Me',
    },
  })
  // const context = useConfig()
  const handleSwitchLocale = () => {
    setLocale(locale === zhCN ? enUS : zhCN)
  }
  return (
    <ConfigProvider locale={locale}>
    <View className="nutui-react-demo">
      <Cell>
        <h3>{translated[localeKey].welcome}</h3>
      </Cell>
      <View>
        <Button type="primary" onClick={handleSwitchLocale}>
          {translated[localeKey].button}
        </Button>
        <Button type="success" onClick={() => setVisible(true)}>
          {translated[localeKey].open}
        </Button>
        <Dialog
          visible={visible}
          onConfirm={() => setVisible(false)}
          onCancel={() => setVisible(false)}
        >
          {translated[localeKey].welcome}
        </Dialog>
        <TextArea disabled showCount maxLength={20} />
      </View>
    </View>
  </ConfigProvider>
  )
}

export default Index
