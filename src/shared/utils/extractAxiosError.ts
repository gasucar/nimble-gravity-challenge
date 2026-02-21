import axios from "axios";
import type { ApiErrorResponse } from "../constants/types";

export function extractAxiosError(error: unknown): string {
  if (!axios.isAxiosError<ApiErrorResponse>(error)) {
    return "Something went wrong";
  }

  const data = error.response?.data;

  if (!data) return "Something went wrong";

  if (data.error) {
    return data.error;
  }

  if (data.details?.fieldErrors) {
    const firstError = Object.values(
      data.details.fieldErrors
    )[0]?.[0];

    if (firstError) return firstError;
  }

  return "Something went wrong";
}