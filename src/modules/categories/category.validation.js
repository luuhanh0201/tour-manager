import Joi from "joi";

export const categoryValid = Joi.object({
    name: Joi.string().trim().required().max(50).messages({
        "any.required": "Không được bỏ trống trường này",
        "string.empty": "Không được bỏ trống trường này",
        "string.max": "Không điền quá {#limit} ký tự",
    }),
    description: Joi.string().allow("", null).max(255).trim().messages({
        "string.max": "Không điền quá {#limit} ký tự",
    })
})
export const queryValid = Joi.object({
    page: Joi.number().integer().min(1).default(1).messages({
        "number.integer": "Page phải là số nguyên",
        "number.base": "Page phải là số nguyên",
        "number.min": "Page phải lớn hơn hoặc bằng 1"
    }),
    limit: Joi.number().integer().min(1).max(100).default(10).messages({
        "number.integer": "Page phải là số nguyên",
        "number.base": "Page phải là số nguyên",
        "number.min": "Page phải lớn hơn hoặc bằng 1"
    }),
    q: Joi.string().allow("").trim().default("")
})