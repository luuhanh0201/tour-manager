import Joi from "joi";


export const signInValid = Joi.object({
    username: Joi.string().required().min(6).messages({
        "any.required": "Không bỏ trống trường này",
        "string.empty": "Không bỏ trống trường này",
        "string.min": "Vui lòng điền tối thiểu {#limit} ký tự",
    }),
    password: Joi.string().required().messages({
        "any.required": "Không bỏ trống trường này",
        "string.empty": "Không bỏ trống trường này",
    }),
})

export const signUpValid = Joi.object({
    fullName: Joi.string().required().messages({
        "any.required": "Không bỏ trống trường này",
        "string.empty": "Không bỏ trống trường này",
    }),
    username: Joi.string().required().min(6).messages({
        "any.required": "Không bỏ trống trường này",
        "string.empty": "Không bỏ trống trường này",
        "string.min": "Vui lòng điền tối thiểu {#limit} ký tự",
    }),
    password: Joi.string().required().messages({
        "any.required": "Không bỏ trống trường này",
        "string.empty": "Không bỏ trống trường này",
    }),
    confirmPassword: Joi.string().required().valid(Joi.ref("password"))
        .messages({
            "any.required": "Không bỏ trống trường này",
            "string.empty": "Không bỏ trống trường này",
            "any.only": "Mật khẩu xác nhận không khớp",
        }),
    email: Joi.string().required().email().messages({
        "any.required": "Không bỏ trống trường này",
        "string.empty": "Không bỏ trống trường này",
        "string.email": "Email không hợp lệ"
    })

})