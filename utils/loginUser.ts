import axios from "axios";
import { toast } from "sonner";

export default async function loginUser(username: string, password: string) {
  try {
    const response = await axios.post("/api/auth", {
      username,
      password,
      action: "login",
    });
    toast("Logged in successfully!");
    return response.data.authToken;
  } catch (error: any) {
    if (error.response && error.response.status === 404) {
      toast("Username not found");
    } else if (error.response && error.response.status === 401) {
      toast("Password doesn't match!");
    } else {
      toast("An error occured while logging in!");
    }
    console.error("Error registering user:", error.message);
    return null;
  }
}
