/**
 * @description 一个代表一个事件的类
 */
export class todoItem {
    constructor(title, description, isCompleted, importance) {
        this.title = title;
        this.description = description;
        this.isCompleted = isCompleted;
        this.importance = importance;
    }
}

import React from 'react';
export let todoItemProtoTypesObj = {
    title: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    isCompleted: React.PropTypes.bool.isRequired,
    importance: React.PropTypes.number.isRequired
};