import React from 'react';

export const Required = value =>{
    if (value) return undefined;
    return "Field is required!";
};

export const MaxLengthCreator = maxSimbols => value =>{
    if (value && value.length > maxSimbols) return `Max length is ${maxSimbols} symbols!`;
    return undefined
};