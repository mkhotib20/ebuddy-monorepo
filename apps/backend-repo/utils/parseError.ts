const parseError = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }
  return "Oops, something went wrong. Please try again later";
};

export default parseError;
