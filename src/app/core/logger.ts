
export class Logger {
    public static instance: Logger = new Logger();
    public static storage: string = '';

    public log(message: string, data?: any, own: boolean = true): void {
        this.write('info', message, data, own);
    }

    public error(message: string, error: any): void {
        this.write('error', message, error);
    }

    public getContent(): string {
        return Logger.storage;
    }

    public clearContent(): string {
        return Logger.storage = '';
    }

    private write(level: string, message: string, data?: any, own: boolean = true): void {
        const at = new Date();
        let buf = '';
        buf += `[${at}] [${level}] ${message}`;
        if ((data !== undefined) && (data !== null)) {
            if (typeof data === 'object') {
                const json = JSON.stringify(data, own ? Object.getOwnPropertyNames(data) : null);
                const pretty = JSON.stringify(JSON.parse(json), null, 2);
                buf += '\r\n-------- json content -------\r\n';
                buf += pretty;
                buf += '\r\n------ end json content -----\r\n';
            } else {
                buf += ': ';
                buf += `'${data}' typeof ${typeof (data)}`;
            }
        }
        console.log(buf);
        Logger.storage += buf + '\r\n';
    }
}

export function writeLog(message: string, data?: any, own: boolean = true): void {
    Logger.instance.log(message, data, own);
}

export function writeError(message: string, error?: any): void {
    Logger.instance.error(message, error);
}
