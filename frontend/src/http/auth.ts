import { User } from "@/contexts/user";
import axiosInstance from "@/lib/axios";
import token from "@/lib/token";

interface JWTPayload {
  token: string;
  type: string;
  name: string | null;
  abilities: string[];
  lastUsedAt: string | null;
  expiresAt: string | null;
}

const login = async (email: string, password: string) => {
  const response = await axiosInstance.post<JWTPayload>("/auth/login", {
    email,
    password,
  });

  token.setToken(response.data.token);
  return response.data;
};

const register = async (email: string, password: string, fullName: string) => {
  const response = await axiosInstance.post<JWTPayload>("/auth/register", {
    email,
    password,
    fullName,

  });
  token.setToken(response.data.token);
  return response.data;
};

const logout = async () => {
  try {
    await axiosInstance.delete("/auth/logout");
    token.removeToken();
    return true;
  } catch (error) {
    token.removeToken();
    return false;
  }
};


const me = async (): Promise<User | null> => {
  try {
    const response = await axiosInstance.get<User>("/auth/me");
    return response.data;
  } catch (error) {
    return null;
  }
};


export default {
  login,
  register,
  logout,
  me,
};




