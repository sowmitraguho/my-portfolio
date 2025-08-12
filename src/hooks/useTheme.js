import { ThemeContext } from "@/Contexts/ThemeContexts/ThemeContext";
import { useContext } from "react";

export const useTheme = () => useContext(ThemeContext);