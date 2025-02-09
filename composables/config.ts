export const useConfig = () => {
  const config = useRuntimeConfig()

  return {
    apiKey: config.apiKey,
    mongodbUri: config.mongodbUri,
    jwtSecret: config.jwtSecret
  }
}
