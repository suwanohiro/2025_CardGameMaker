export default class FileAction {
    /**
     * - 読み取り対象のファイルパス
     */
    private _filePath: string;

    constructor(path: string) {
        this._filePath = path;
    }

    /**
     * - ファイルから読み取った文字列データをそのまま返す（動的メンバーメソッド）
     * @returns ファイルから読み取った文字列データ
     */
    public async normalRead(): Promise<string> {
        return await FileAction.normalRead(this._filePath);
    }

    /**
     * - ファイルから読み取った文字列データをそのまま返す（静的メンバーメソッド）
     * @param filePath 読み取り対象のファイルパス
     * @returns ファイルから読み取った文字列データ
     */
    public static async normalRead(filePath: string): Promise<string> {
        return await Deno.readTextFile(filePath);
    }

    /**
     * - 1行ごとの配列にして返す（動的メンバーメソッド）
     * @returns 1行ごとの配列
     */
    public async arrayRead(): Promise<Array<string>> {
        return await FileAction.arrayRead(this._filePath);
    }

    /**
     * - 1行ごとの配列にして返す（静的メンバーメソッド）
     * @param filePath 読み取り対象のファイルパス
     * @returns 1行ごとの配列
     */
    public static async arrayRead(filePath: string): Promise<Array<string>> {
        const content = await FileAction.normalRead(filePath);
        return content.split(/\r\n|\n/);
    }

    /**
     * - csvファイルを2次元配列にして返す（動的メンバーメソッド）
     * @returns csvファイルデータの2次元配列
     */
    public async csvRead(): Promise<Array<Array<string>>> {
        return await FileAction.csvRead(this._filePath);
    }

    /**
     * - csvファイルを2次元配列にして返す（静的メンバーメソッド）
     * @param filePath 読み取り対象のファイルパス
     * @returns csvファイルデータの2次元配列
     */
    public static async csvRead(filePath: string): Promise<Array<Array<string>>> {
        const array: Array<string> = await FileAction.arrayRead(filePath);
        const result: Array<Array<string>> = [];

        for (let cnt = 0; cnt < array.length; cnt++) {
            if (array[cnt] === "") break;

            result.push(array[cnt].split(","));
        }
        return result;
    }

    /**
     * - JSONファイルをオブジェクトとして返す（動的メンバーメソッド）
     * @returns JSONデータをパースしたオブジェクト
     */
    public async jsonRead<T>(): Promise<T> {
        return await FileAction.jsonRead<T>(this._filePath);
    }

    /**
     * - JSONファイルをオブジェクトとして返す（静的メンバーメソッド）
     * @param filePath 読み取り対象のファイルパス
     * @returns JSONデータをパースしたオブジェクト
     */
    public static async jsonRead<T>(filePath: string): Promise<T> {
        const content = await FileAction.normalRead(filePath);
        return JSON.parse(content) as T;
    }
}