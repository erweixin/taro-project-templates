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
    <Configprovider locale={locale}>
      <View className='nutui-react-demo'>
        <View>{translated.welcome}</View>
        <View>
          <Button type='primary' onClick={handleSwitchLocale}>
            {translated.button}
          </Button>
          <TextArea disabled showCount maxLength={20} />
        </View>
      </View>
    </Configprovider>
  )
}

export default Index
