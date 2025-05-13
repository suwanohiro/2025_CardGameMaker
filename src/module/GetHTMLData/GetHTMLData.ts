export default class getHTMLData {
    // HTMLファイルを読み込んで<title>タグを取得
    static async Title(filePath: string): Promise<string> {
        const htmlContent = await Deno.readTextFile(filePath.replace("file://", ""));
        const titleMatch = htmlContent.match(/<title>(.*?)<\/title>/i);
        return titleMatch ? titleMatch[1] : "Untitled";
    }
}
