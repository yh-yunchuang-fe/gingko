import React from "react";

export default interface IndicatorProps {
    size?: 'sm' | 'md' | 'lg';
    color: 'blue' | 'white';
    style?: any;
    text?: string;
    textStyle?: any;
}