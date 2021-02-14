import React from 'react';

export const Required = value =>{
    if (value === undefined) return "Field is required!";
    for (let i = 0; i < value.length; i++){
        if (value[i] !== '\n'){
            return undefined;
        }
    };
    return "Field is required!";
};

export const MaxLengthCreator = maxSimbols => value =>{
    if (value && value.length > maxSimbols) return `Max length is ${maxSimbols} symbols!`;
    return undefined
};

export const ValidPass = value =>{
    if (value && value.length < 8) return 'This password is too short!';
    return undefined;
};