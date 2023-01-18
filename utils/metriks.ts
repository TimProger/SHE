const MetrikID = 92105532

export const sendMetrik = (type: string, value: string) => {
  // @ts-ignore
  window.ym(MetrikID, type, value);
}