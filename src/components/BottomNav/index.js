import React, { Component } from 'react'
import styles from './index.module.scss'

const menu = [
    {
        title: '首页',
        icon: 'shouye',
        link: '/'
    },
    {
        title: '购物车',
        icon: 'icon-',
        link: '/cart'
    },
    {
        title: '订单',
        icon: 'dingdan',
        link: '/order'
    },
    {
        title: '我的',
        icon: 'wode',
        link: '/my'
    }
]

export default class BottomNav extends Component {
    render() {
        const {activeNum, setActiveNum} = this.props 
        return (
            <div>
                {menu.map((item, index) => <MenuItem key={item.link} {...item}  active={activeNum === index} onClick={() => setActiveNum(index)} />)}
            </div>
        )
    }
}


function MenuItem({title, icon, active, onClick}) {
    return (
        <div onClick={onClick} className={active ? styles.selected : ''}>
            <span className={`iconfont icon-${icon}`}></span>
            <span>{title}</span>
        </div>
    );
}