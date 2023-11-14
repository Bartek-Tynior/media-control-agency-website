import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const buildInteractionObserverThreshold = (count = 100) => {
  const threshold = [];

  const parts = 1 / count;

  for (let i = 0; i <= count; i++) {
    threshold.push(parseFloat((parts * i).toFixed(2)));
  }

  return threshold;
};
