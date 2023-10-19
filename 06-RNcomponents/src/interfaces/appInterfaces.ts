export interface MenuItem {
    name: string
    icon: string
    component: 'Animation101Screen' | 'Animation102Screen' | 'SwitchScreen' | 'AlertScreen' | 'TextInputScreen' | 'PullToRefreshScreen'
}