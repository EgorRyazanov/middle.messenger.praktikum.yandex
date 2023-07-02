import { Block } from "../../utils/block.ts";
import "./input.scss";

interface IInput {
    name: string;
    labelValue: string;
    inputErrorClasses?: string;
    error?: string;
    isAutofocus?: boolean;
    events?: Record<string, (args: any) => void>;
    inputClasses?: string;
    inputContainerClasses?: string;
    isDisabled?: boolean;
    value?: string;
    type?: string;
}

export class Input extends Block<IInput> {
    constructor({
        name,
        labelValue,
        inputErrorClasses = "",
        error = "",
        isAutofocus = false,
        events = {},
        inputClasses = "",
        inputContainerClasses = "",
        isDisabled = false,
        value = "",
        type = "text",
    }: IInput) {
        const props = {
            name,
            error,
            inputContainerClasses,
            inputErrorClasses,
            isAutofocus,
            labelValue,
            events,
            inputClasses,
            isDisabled,
            value,
            type,
        };
        super(props);
    }

    render() {
        return this.compile(
            `<div class="input__container {{inputContainerClasses}}">
                <label class="input__label" for={{name}}>{{labelValue}}</label>
                <input {{#if isAutofocus }} autofocus {{/if}} type='{{type}}' value='{{value}}' {{#if isDisabled }} disabled {{/if}} id={{name}} type="text" name={{name}} class="input {{inputClasses}}" >
                <p class="input__error {{inputErrorClasses}}">{{error}}</p>
            </div>`,
            this.props,
        );
    }
}