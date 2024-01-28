import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { apiResponseCheck } from "../../helperFn/apiResponseCheck";
import { LoginRequest, LoginResponse } from "../../type/account/loginType";
import { API } from "../axiosSetup";

export const useLoginMutation = (
  onSuccess: (data: LoginResponse) => void
): UseMutationResult<LoginResponse, Error, LoginRequest, unknown> => {
  const handleLogin = async (req: LoginRequest) => {
    const res = await API.post("/login", req);
    return apiResponseCheck<LoginResponse>(res.data);
  };

  return useMutation({
    mutationFn: handleLogin,
    onSuccess,
  });
};
