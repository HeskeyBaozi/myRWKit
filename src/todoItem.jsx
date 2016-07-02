/**
 * @description 一个代表一个事件的类
 * @param {string} title - 要做的事情标题
 * @param {string} description - 事情简要描述
 * @param {boolean} isCompleted - 事情是否完成
 * @param {number} importance - 事情的重要性
 */
class todoItem {
    constructor(title, description, isCompleted, importance) {
        this.title = title;
        this.description = description;
        this.isCompleted = isCompleted;
        this.importance = importance;
    }
}

export default todoItem;