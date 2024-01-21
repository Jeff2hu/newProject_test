import { AxiosError } from "axios";
import { LoginRequest } from "../type/loginType";
import { ApiResponse } from "../type/response";
import { UserData } from "../type/userType";
import { API } from "./axiosSetup";

export const login = async (
  req: LoginRequest
): Promise<ApiResponse<UserData>> => {
  try {
    const loginRes = await API.post("/login", req);
    const { data } = loginRes.data;
    const userRes = await API.get(`/user/${data.id}`);
    return userRes.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    } else {
      throw error;
    }
  }
};
