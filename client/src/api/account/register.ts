import { RegisterRequest, RegisterResponse } from "@/type/account/registerType";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { apiResponseCheck } from "../../helperFn/apiResponseCheck";
import { API } from "../axiosSetup";

export const useRegisterMutation = (
  onSuccess: () => void
): UseMutationResult<RegisterResponse, Error, RegisterRequest, unknown> => {
  const handleLogin = async (req: RegisterRequest) => {
    const res = await API.post("/register", req);
    return apiResponseCheck<RegisterResponse>(res.data);
  };

  return useMutation({
    mutationFn: handleLogin,
    onSuccess,
  });
};
