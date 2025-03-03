import { type FormRules, type TnFormInstance, type TnActionSheetInstance } from "@tuniao/tnui-vue3-uniapp";

export interface BaseFormItem {
    /**
     * @description 表单类型
     */
    type: string;
    /**
     * @description 表单项绑定字段
     */
    prop: string;
    /**
     * @description 是否禁用
     */
    disabled?: boolean;
    /**
     * @description 占位文本
     */
    placeholder?: string;
    /**
     * @description 表单项名称
     */
    label?: string;
    /**
     * @description 表单项名称位置
     */
    labelPosition?: "left" | "top" | "right";
    /**
     * @description 表单项名称宽度
     */
    labelWidth?: string | number;
    /**
     * @description 输入框是否显示边框
     */
    border?: boolean;
    /**
     * @description 文本对齐方式
     */
    textAlign?: "left" | "center" | "right";
    /**
     * @description 输入框是否变成下划线(仅部分type生效)
     */
    underline?: boolean;
    /**
     * @description 初始值,当传入select等选择器类型时必填
     */
  
}

export interface SelectFormItem extends BaseFormItem {
    /**
     * @description 选择器类型
     */
    type: 'select',
    /**
     * @description 默认值
     */
    default: Array<T>,
    /**
     * @description 选择器标题
     */
    title: string,
    /**
     * @description 取消按钮的文本
     */
    cancelText?:string,
    /**
     * @description 是否显示遮罩层
     */
    mask?:boolean
    /**
     * @description 点击遮罩层是否关闭选择器
     */
    maskClosable?:boolean,
    /**
     * @description 点击事件
     */
    click?: (value:T) => void,
}
export function isSelectFormItem(item: FormItem): item is SelectFormItem {
    return item.type === 'select';
}
export type FormItem = BaseFormItem | SelectFormItem;


export interface FormSettings {
    /**
     * @description 表单校验规则
     */
    rules: FormRules;
    /**
     * @description 表单项
     */
    items: Array<FormItem>;
}

export type TnFormInstance = TnFormInstance;

export type TnActionSheetInstance = TnActionSheetInstance;