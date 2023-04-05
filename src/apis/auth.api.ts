import { AuthResponse } from 'src/types/auth.type'
import http from 'src/utils/http'

export const registerAccount = (body: { email: string; password: string }) => http.post<AuthResponse>('/Register', body)

export const login = (body: { email: string; password: string }) => http.post<AuthResponse>('/Login', body)
