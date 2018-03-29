'use strict';

const color = {
    yellow: '#FECD0D',
    post: '#114A9F',
    facebook: '#3B5998',
    black: '#000000',
    darkgray: '#333333',
    gray: '#666666',
    lightgray: '#999999',
    pearl: '#d4dacc',
    white: '#FFFFFF',
    lightblue: '#00CFFF',
    blue: '#046B99',
    darkblue: '#1c304a',
};

const font = {
    small: 16,
    normal: 18,
    large: 20
};

const cta = {
    title: { color: color.darkgray, fontWeight: 'bold', fontSize: 22 },
    text: { marginLeft: -47, textAlign: 'center', color: color.darkgray, fontWeight: 'bold', fontSize: 22 },
    icon: { fontSize: 30, color: color.post, width: 30 }
};

const menu = {
    icon: { fontSize: 24, color: color.post, width: 30 },
    text: { fontSize: 18, color: color.darkgray, fontWeight: 'bold' }
};

const list = {
    icon: { fontSize: 22, color: color.post },
    title: { fontSize: 16, color: color.darkgray },
    text: { fontSize: 14, color: color.darkgray, lineHeight: 35 },
    subtext: { fontSize: 14, color: color.gray }
};

const text = {
    normal: { fontSize: 16, color: color.darkgray, lineHeight: 30 },
    big: { fontSize: 20, color: color.darkgray, lineHeight: 25 }
};

const Theme = {
    color: color,
    font: font,
    cta: cta,
    menu: menu,
    list: list,
    text: text
};

export default Theme;