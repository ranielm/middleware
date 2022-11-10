export const setHost = (host: string) => {
  console.log("🚀 ~ file: index.ts ~ line 2 ~ setHost ~ host", host);
  const formatResponse = "Your hostname is " + host;
  console.log(
    "🚀 ~ file: index.ts ~ line 4 ~ setHost ~ formatResponse",
    formatResponse
  );

  return formatResponse;
};
