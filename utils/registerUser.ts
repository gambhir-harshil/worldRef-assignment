import axios from "axios";
import { toast } from "sonner";

export default async function registerUser(username: string, password: string) {
  try {
    const response = await axios.post("/api/auth", {
      username,
      password,
      action: "register",
    });
    toast("User registered successfully!");
    return response.data.authToken;
  } catch (error: any) {
    if (error.response && error.response.status === 400) {
      toast("Username already exists");
    } else {
      toast("An error occured while registering the user");
    }
    console.error("Error registering user:", error.message);
    return null;
  }
}
