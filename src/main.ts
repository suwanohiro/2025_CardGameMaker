import { SizeHint, Webview } from "https://deno.land/x/webview/mod.ts";

import getHTMLData from "./module/GetHTMLData/GetHTMLData.ts";

// HTMLファイルのパス
const HTMLPath: string = `file://${Deno.cwd()}/src/ui/index.html`;



const webview = new Webview(true, {
  width: 1280,
  height: 720,
  hint: SizeHint.FIXED
});

getHTMLData.Title(HTMLPath).then((title) => {
  webview.title = title;
  console.log("Webview Title:", title);

  // ローカルファイルを直接指定
  webview.navigate(HTMLPath);
  console.log(`Opening [ ${HTMLPath} ] ...`);
  webview.run();
});
