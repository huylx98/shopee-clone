import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'
import * as yup from 'yup'

export const registerSchema = yup.object({
  email: yup
    .string()
    .required('Email là bắt buộc')
    .email('Email không đúng định dạng ')
    .min(5, 'Độ dài 5 - 160 ký tự')
    .max(160, 'Độ dài 5 - 160 ký tự'),
  password: yup
    .string()
    .required('Password là bắt buộc')
    .min(6, 'Độ dài 6 - 160 ký tự')
    .max(160, 'Độ dài 6 - 160 ký tự'),
  confirm_password: yup
    .string()
    .required('Nhập lại password là bắt buộc')
    .min(6, 'Độ dài 6 - 160 ký tự')
    .max(160, 'Độ dài 6 - 160 ký tự')
    .oneOf([yup.ref('password')], 'Nhập lại password không khớp')
})

export type RegisterSchema = yup.InferType<typeof registerSchema>

const loginSchema = registerSchema.omit(['confirm_password'])
export type LoginSchema = yup.InferType<typeof loginSchema>
