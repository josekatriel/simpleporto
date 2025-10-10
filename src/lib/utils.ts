import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names with conditional logic and merges Tailwind classes correctly.
 * Example:
 * cn("px-2", isActive && "text-red-500")
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
