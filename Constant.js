import { Dimensions } from "react-native"

export const color = {
    white: '#ffffff',
    black: '#27272a',
    primary: '#0369a1',
    secondary: '#ca8a04',
    clouds: '#f9fafb',
    lightgray: '#e5e7eb',
    gray: '#9ca3af',
    success: '#047857',
    warning: '#fbbf24',
    danger: '#dc2626'
}

export const container = {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
}

export const fonts = {
    xsmall: (2.5/100) * container.width,
    small: (2.8/100) * container.width,
    regular: (3/100) * container.width,
    large: (4/100) * container.width,
    xlarge: (5/100) * container.width,
    page_title: (7/100) * container.width
}