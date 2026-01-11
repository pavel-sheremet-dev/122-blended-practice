export function sendDoneStatus(callback: (str: string) => void): void {
  callback("done");
}

sendDoneStatus((text) => {
  console.log(text);
});
