
export const required = value =>
(Array.isArray(value) && value.length < 1) || (!value && value !== 0) ? 'Field is required' : undefined;

export const minLength = min => value =>
    value && value.length < min ? `Format is not valid` : undefined;