declare module latte {
    const strings: {
        justNow: string;
        oneMinuteAgo: string;
        SMinutesAgo: string;
        oneHourAgo: string;
        SHoursAgo: string;
        yesterday: string;
        SDaysAgo: string;
        oneWeekAgo: string;
        SWeeksAgo: string;
        oneYearAgo: string;
        SYearsAgo: string;
        sunday: string;
        monday: string;
        tuesday: string;
        wednesday: string;
        thursday: string;
        friday: string;
        saturday: string;
        sundayShort: string;
        mondayShort: string;
        tuesdayShort: string;
        wednesdayShort: string;
        thursdayShort: string;
        fridayShort: string;
        saturdayShort: string;
        sundayInitial: string;
        mondayInitial: string;
        tuesdayInitial: string;
        wednesdayInitial: string;
        thursdayInitial: string;
        fridayInitial: string;
        saturdayInitial: string;
        january: string;
        february: string;
        march: string;
        april: string;
        may: string;
        june: string;
        july: string;
        august: string;
        september: string;
        october: string;
        november: string;
        december: string;
        januaryShort: string;
        februaryShort: string;
        marchShort: string;
        aprilShort: string;
        mayShort: string;
        juneShort: string;
        julyShort: string;
        augustShort: string;
        septemberShort: string;
        octoberShort: string;
        novemberShort: string;
        decemberShort: string;
        januaryInitial: string;
        februaryInitial: string;
        marchInitial: string;
        aprilInitial: string;
        mayInitial: string;
        juneInitial: string;
        julyInitial: string;
        augustInitial: string;
        septemberInitial: string;
        octoberInitial: string;
        novemberInitial: string;
        decemberInitial: string;
        Smillis: string;
        oneSecond: string;
        Sseconds: string;
        oneMinute: string;
        Sminutes: string;
        oneHour: string;
        Shours: string;
        oneDay: string;
        Sdays: string;
        oneWeek: string;
        Sweeks: string;
        SmillisShort: string;
        oneSecondShort: string;
        SsecondsShort: string;
        oneMinuteShort: string;
        SminutesShort: string;
        oneHourShort: string;
        ShoursShort: string;
        oneDayShort: string;
        SdaysShort: string;
        oneWeekShort: string;
        SweeksShort: string;
        tomorrow: string;
        today: string;
        nextWeekDayS: string;
        SWeeksFromNow: string;
        SYearsFromNow: string;
        oneYearFromNow: string;
        DataLatte: string;
        info: string;
        edit: string;
        save: string;
        saveAndClose: string;
        saveAndNew: string;
        selectMonth: string;
        defaultBool: string;
        add: string;
        addNew: string;
        change: string;
        see: string;
        newKey: string;
        listof: string;
        ok: string;
        cancel: string;
        selectObject: string;
        listOfVar: string;
        pick: string;
        createNew: string;
        create: string;
        secretPassword: string;
        passphrase: string;
        managerDisabled: string;
        managerCheckingEnabled: string;
        managerCheckingReady: string;
        managerCheckingLoggedIn: string;
        enterPassphrase: string;
        managerNotEnabled: string;
        managerNotReady: string;
        invalidPassphrase: string;
        logout: string;
        connection: string;
        enterConnectionData: string;
        userName: string;
        password: string;
        host: string;
        dbName: string;
        parametersError: string;
        recordsUpdated: string;
        fieldNotValid: string;
        fieldNotNumber: string;
        minValueIsS: string;
        maxValueIsS: string;
        minLenValueIsS: string;
        maxLenValueIsS: string;
        valueNotInteger: string;
        fieldMustHaveValue: string;
        home: string;
        api: string;
        datalatte: string;
        dbConnection: string;
        updateRecords: string;
        settings: string;
        cantConnectToServer: string;
        cantSelectDbS: string;
        errorOnQueryS: string;
        greatScott: string;
        datalatteInitFailed: string;
        loading: string;
        saving: string;
        tableData: string;
        tableColumns: string;
        insertNow: string;
        columnName: string;
        type: string;
        length: string;
        flags: string;
        strNull: string;
        strDefault: string;
        extra: string;
        yes: string;
        no: string;
        commit: string;
        revert: string;
        apply: string;
        deleteRow: string;
        copy: string;
        paste: string;
        setAsNull: string;
        autoIncrement: string;
        primaryKey: string;
        createTable: string;
        tableName: string;
        dropTable: string;
        confirmDropTable: string;
        php: string;
        userAgent: string;
        database: string;
        app: string;
        query: string;
        execute: string;
        passphraseExplain: string;
        errorExecutingQuery: string;
        close: string;
        secret: string;
        writeComment: string;
        showMoreCommentsS: string;
        uploadingS: string;
        uploadingSSPercent: string;
        error: string;
        name: string;
        working: string;
        day: string;
        week: string;
        workWeek: string;
        month: string;
        fullWeek: string;
        pleaseSelect: string;
        askSaveChanges: string;
        unsavedChanges: string;
        yesSaveChanges: string;
        noIgnoreChanges: string;
        imageUrl: string;
        linkUrl: string;
        bold: string;
        italics: string;
        alignLeft: string;
        alignRight: string;
        alignCenter: string;
        alignJustify: string;
        indent: string;
        outdent: string;
        numberedList: string;
        bulletList: string;
        eraseFormat: string;
        insertImage: string;
        insertLink: string;
        nextPage: string;
        previousPage: string;
        underline: string;
        insertHTML: string;
        videoURL: string;
        urlNotYouTube: string;
        makeRelease: string;
        insertYouTube: string;
        clearText: string;
        developedBy: string;
        confirmDeleteS: string;
        cantBeUndone: string;
        yesDeleteS: string;
        goToPage: string;
        refresh: string;
        switchOn: string;
        switchOff: string;
        flagsNone: string;
        nothingToShow: string;
        jumpToYear: string;
        reconnecting: string;
        reconnectingInS: string;
    };
}
declare module latte {
    class Ajax {
        static get(url: string, success?: (string: any) => void, error?: (string: any) => void): void;
        static post(url: string, data: any, success?: (string: any) => void, error?: (string: any) => void): void;
    }
}
declare module latte {
    enum BindValueType {
        ANY = 0,
        NUMBER = 1,
        BOOLEAN = 2,
        STRING = 3,
        DATETIME = 4,
        TIMESPAN = 5
    }
}
declare module latte {
    class CancellableCallbackEvent {
        constructor();
        private _callback;
        callback: (handle: (cancel: boolean) => any) => any;
    }
}
declare module latte {
    interface CollectionEventHanler<T> {
        (item: T, e: CollectionEvent<T>): any;
    }
    class Collection<T> {
        private pointer;
        constructor(addCallback?: (e: T, index: number) => void, removeCallback?: (e: T, index: number) => void, context?: any);
        add(element: T, raiseEvent?: boolean): T;
        addArray(elements: T[], raiseEvent?: boolean): T[];
        addCollection(collection: Collection<T>, raiseEvent?: boolean): void;
        clear(): void;
        contains(element: T): boolean;
        correctItems(elements: T[]): void;
        each(handler: (item: T, index: number) => any): void;
        eachBut(exclude: T, handler: (item: T, index: number) => any): void;
        indexOf(item: T): number;
        item(index: number): T;
        next(): T;
        onAddItem(item: T, index: number): void;
        onRemoveItem(item: T, index: number): void;
        onRemovingItem(e: CollectionEvent<T>): void;
        remove(item: T, raiseEvent?: boolean): T;
        removeAt(index: number, raiseEvent?: boolean): void;
        resetPointer(): void;
        toArray(): T[];
        private _addingItem;
        readonly addingItem: LatteEvent;
        onAddingItem(e: CollectionEvent<T>): void;
        private _addItem;
        readonly addItem: LatteEvent;
        private _removeItem;
        readonly removeItem: LatteEvent;
        private _removingItem;
        readonly removingItem: LatteEvent;
        private _context;
        context: any;
        readonly count: number;
        readonly first: T;
        readonly last: T;
        private _length;
        readonly length: number;
    }
}
declare module latte {
    class CollectionEvent<T> {
        constructor(item: T, itemIndex?: number, cancellable?: boolean);
        private _cancel;
        cancel: boolean;
        private _cancellable;
        readonly cancellable: boolean;
        private _item;
        readonly item: T;
        private _itemIndex;
        readonly itemIndex: number;
    }
}
declare module latte {
    class Color {
        static fromHex(hexColor: string): Color;
        static cmykToRgb(c: number, m: number, y: number, k: number): number[];
        static hsvToRgb(h: any, s: any, v: any): number[];
        static rgbToCmyk(red: number, green: number, blue: number): number[];
        static rgbToHsv(red: number, green: number, blue: number): number[];
        private static _black;
        static readonly black: Color;
        private static _white;
        static readonly white: Color;
        private static _red;
        static readonly red: Color;
        private static _green;
        static readonly green: Color;
        private static _blue;
        static readonly blue: Color;
        private static _transparent;
        static readonly transparent: Color;
        constructor(r?: number, g?: number, b?: number, a?: number);
        toHexString(): string;
        toString(): string;
        private _a;
        a: number;
        private _b;
        b: number;
        c: number;
        private _g;
        g: number;
        readonly k: number;
        readonly m: number;
        readonly y: number;
        fade(alpha: number): Color;
        fadeFloat(alpha: number): Color;
        readonly isDark: boolean;
        readonly isLight: boolean;
        readonly isTransparent: boolean;
        readonly perceivedLuminosity: number;
        private _r;
        r: number;
    }
}
declare module latte {
    class Country {
        static codes: string[];
        static getCountrySelectOptions(): {
            [index: string]: string;
        };
        static getCountryPhoneSelectOptions(): {
            [index: string]: string;
        };
        static AF: ICountry;
        static AL: ICountry;
        static DZ: ICountry;
        static AS: ICountry;
        static AD: ICountry;
        static AO: ICountry;
        static AI: ICountry;
        static AQ: ICountry;
        static AG: ICountry;
        static AR: ICountry;
        static AM: ICountry;
        static AW: ICountry;
        static AU: ICountry;
        static AT: ICountry;
        static AZ: ICountry;
        static BS: ICountry;
        static BH: ICountry;
        static BD: ICountry;
        static BB: ICountry;
        static BY: ICountry;
        static BE: ICountry;
        static BZ: ICountry;
        static BJ: ICountry;
        static BM: ICountry;
        static BT: ICountry;
        static BO: ICountry;
        static BA: ICountry;
        static BW: ICountry;
        static BR: ICountry;
        static IO: ICountry;
        static VG: ICountry;
        static BN: ICountry;
        static BG: ICountry;
        static BF: ICountry;
        static BI: ICountry;
        static KH: ICountry;
        static CM: ICountry;
        static CA: ICountry;
        static CV: ICountry;
        static KY: ICountry;
        static CF: ICountry;
        static TD: ICountry;
        static CL: ICountry;
        static CN: ICountry;
        static CX: ICountry;
        static CC: ICountry;
        static CO: ICountry;
        static KM: ICountry;
        static CK: ICountry;
        static CR: ICountry;
        static HR: ICountry;
        static CU: ICountry;
        static CW: ICountry;
        static CY: ICountry;
        static CZ: ICountry;
        static CD: ICountry;
        static DK: ICountry;
        static DJ: ICountry;
        static DM: ICountry;
        static DO: ICountry;
        static TL: ICountry;
        static EC: ICountry;
        static EG: ICountry;
        static SV: ICountry;
        static GQ: ICountry;
        static ER: ICountry;
        static EE: ICountry;
        static ET: ICountry;
        static FK: ICountry;
        static FO: ICountry;
        static FJ: ICountry;
        static FI: ICountry;
        static FR: ICountry;
        static PF: ICountry;
        static GA: ICountry;
        static GM: ICountry;
        static GE: ICountry;
        static DE: ICountry;
        static GH: ICountry;
        static GI: ICountry;
        static GR: ICountry;
        static GL: ICountry;
        static GD: ICountry;
        static GU: ICountry;
        static GT: ICountry;
        static GG: ICountry;
        static GN: ICountry;
        static GW: ICountry;
        static GY: ICountry;
        static HT: ICountry;
        static HN: ICountry;
        static HK: ICountry;
        static HU: ICountry;
        static IS: ICountry;
        static IN: ICountry;
        static ID: ICountry;
        static IR: ICountry;
        static IQ: ICountry;
        static IE: ICountry;
        static IM: ICountry;
        static IL: ICountry;
        static IT: ICountry;
        static CI: ICountry;
        static JM: ICountry;
        static JP: ICountry;
        static JE: ICountry;
        static JO: ICountry;
        static KZ: ICountry;
        static KE: ICountry;
        static KI: ICountry;
        static XK: ICountry;
        static KW: ICountry;
        static KG: ICountry;
        static LA: ICountry;
        static LV: ICountry;
        static LB: ICountry;
        static LS: ICountry;
        static LR: ICountry;
        static LY: ICountry;
        static LI: ICountry;
        static LT: ICountry;
        static LU: ICountry;
        static MO: ICountry;
        static MK: ICountry;
        static MG: ICountry;
        static MW: ICountry;
        static MY: ICountry;
        static MV: ICountry;
        static ML: ICountry;
        static MT: ICountry;
        static MH: ICountry;
        static MR: ICountry;
        static MU: ICountry;
        static YT: ICountry;
        static MX: ICountry;
        static FM: ICountry;
        static MD: ICountry;
        static MC: ICountry;
        static MN: ICountry;
        static ME: ICountry;
        static MS: ICountry;
        static MA: ICountry;
        static MZ: ICountry;
        static MM: ICountry;
        static NA: ICountry;
        static NR: ICountry;
        static NP: ICountry;
        static NL: ICountry;
        static AN: ICountry;
        static NC: ICountry;
        static NZ: ICountry;
        static NI: ICountry;
        static NE: ICountry;
        static NG: ICountry;
        static NU: ICountry;
        static KP: ICountry;
        static MP: ICountry;
        static NO: ICountry;
        static OM: ICountry;
        static PK: ICountry;
        static PW: ICountry;
        static PS: ICountry;
        static PA: ICountry;
        static PG: ICountry;
        static PY: ICountry;
        static PE: ICountry;
        static PH: ICountry;
        static PN: ICountry;
        static PL: ICountry;
        static PT: ICountry;
        static PR: ICountry;
        static QA: ICountry;
        static CG: ICountry;
        static RE: ICountry;
        static RO: ICountry;
        static RU: ICountry;
        static RW: ICountry;
        static BL: ICountry;
        static SH: ICountry;
        static KN: ICountry;
        static LC: ICountry;
        static MF: ICountry;
        static PM: ICountry;
        static VC: ICountry;
        static WS: ICountry;
        static SM: ICountry;
        static ST: ICountry;
        static SA: ICountry;
        static SN: ICountry;
        static RS: ICountry;
        static SC: ICountry;
        static SL: ICountry;
        static SG: ICountry;
        static SX: ICountry;
        static SK: ICountry;
        static SI: ICountry;
        static SB: ICountry;
        static SO: ICountry;
        static ZA: ICountry;
        static KR: ICountry;
        static SS: ICountry;
        static ES: ICountry;
        static LK: ICountry;
        static SD: ICountry;
        static SR: ICountry;
        static SJ: ICountry;
        static SZ: ICountry;
        static SE: ICountry;
        static CH: ICountry;
        static SY: ICountry;
        static TW: ICountry;
        static TJ: ICountry;
        static TZ: ICountry;
        static TH: ICountry;
        static TG: ICountry;
        static TK: ICountry;
        static TO: ICountry;
        static TT: ICountry;
        static TN: ICountry;
        static TR: ICountry;
        static TM: ICountry;
        static TC: ICountry;
        static TV: ICountry;
        static VI: ICountry;
        static UG: ICountry;
        static UA: ICountry;
        static AE: ICountry;
        static GB: ICountry;
        static US: ICountry;
        static UY: ICountry;
        static UZ: ICountry;
        static VU: ICountry;
        static VA: ICountry;
        static VE: ICountry;
        static VN: ICountry;
        static WF: ICountry;
        static EH: ICountry;
        static YE: ICountry;
        static ZM: ICountry;
        static ZW: ICountry;
    }
}
declare module latte {
    class Culture {
        private static _current;
        static current: Culture;
        private static _esEs;
        static readonly esEs: Culture;
        private static _esMx;
        static readonly esMx: Culture;
        private static _enUs;
        static readonly enUs: Culture;
        static formatCurrency(n: number): string;
        static formatShortDate(d: DateTime): string;
        static formatLongDate(d: DateTime): string;
        static formatNumber(n: number, decimals?: number, symbol?: string): string;
        shortDateFormat: string;
        longDateFormat: string;
        currencyDecimals: number;
        numberDecimalsSeparator: string;
        numberThousandsSeparator: string;
        currencySymbol: string;
        floatValidator: RegExp;
        intValidator: RegExp;
        constructor();
        onFormatCurrency(n: number): string;
        onFormatNumber(n: number, decimals?: number, symbol?: string): string;
        onFormatLongDate(d: DateTime): string;
        onFormatShortDate(d: DateTime): string;
    }
}
declare module latte {
    class DateTime {
        static monthDays: Array<number>;
        static monthDaysLeapYear: Array<number>;
        static absoluteDays(year: number, month: number, day: number): number;
        static daysInMonth(year: number, month: number): number;
        static fromDateAndTime(date: DateTime, time: TimeSpan): DateTime;
        static fromMilliseconds(milliseconds: number): DateTime;
        static fromString(dateTimeString: string): DateTime;
        static isLeapYear(year: number): boolean;
        static readonly now: DateTime;
        static readonly today: DateTime;
        static readonly tomorrow: DateTime;
        static readonly epoch: DateTime;
        static readonly yesterday: DateTime;
        _span: TimeSpan;
        constructor(year?: number, month?: number, day?: number, hour?: number, minute?: number, second?: number, millisecond?: number);
        private _zeroPad;
        private fromTimeSpan;
        add(timespan: TimeSpan): DateTime;
        addDays(days: number): DateTime;
        addHours(hours: number): DateTime;
        addMilliseconds(milliseconds: number): DateTime;
        addMinutes(minutes: number): DateTime;
        addMonths(months: number): DateTime;
        addSeconds(seconds: number): DateTime;
        addYears(years: number): DateTime;
        compareTo(datetime: DateTime): number;
        equals(datetime: DateTime): boolean;
        onRange(start: DateTime, end: DateTime): boolean;
        subtractDate(datetime: DateTime): TimeSpan;
        subtractTime(timespan: TimeSpan): DateTime;
        toRelativeString(withTime?: boolean): string;
        toFormattedString(format?: string): string;
        toString(includeTime?: boolean): string;
        valueOf(): number;
        readonly day: number;
        readonly dayOfWeek: number;
        readonly dayOfWeekString: string;
        readonly dayOfWeekStringShort: string;
        readonly dayOfWeekStringInitial: string;
        readonly dayOfYear: number;
        readonly comparer: number;
        readonly date: DateTime;
        readonly hour: number;
        readonly millisecond: number;
        readonly minute: number;
        readonly month: number;
        readonly monthString: string;
        readonly monthStringShort: string;
        readonly monthStringInitial: string;
        readonly second: number;
        readonly timeOfDay: TimeSpan;
        readonly thisEpoch: boolean;
        readonly weekOfYear: number;
        readonly year: number;
    }
}
declare module latte {
    class EventHandler {
        handler: Function;
        context: any;
        constructor(handler: Function, context: any);
    }
    class LatteEvent {
        context: any;
        handlers: Array<EventHandler>;
        _handlerAdded: LatteEvent;
        constructor(context: any);
        readonly handlerAdded: LatteEvent;
        add(handler: Function, context?: any): void;
        onHandlerAdded(handler: Function): void;
        raise(...parameter: any[]): any;
        remove(handler: Function): void;
    }
}
declare module latte {
    class Ex {
        private description;
        constructor(description?: string);
        toString(): string;
    }
}
declare module latte {
    interface ICall {
        marshall(): IDataRemoteCall;
        respond(responseData: IRemoteResponse): any;
        send(success?: (data: any) => void, failure?: (errorDescription: string) => void): IMessage;
        withHandlers(success?: (data: any) => void, failure?: (errorDescription: string) => void): ICall;
        success: LatteEvent;
        failure: LatteEvent;
    }
}
declare module latte {
    interface ICountry {
        name: string;
        phone: string;
        code: string;
        shortCode: string;
    }
}
declare module latte {
    interface IDataRemoteCall {
        moduleName: string;
        className: string;
        method: string;
        id: number;
        params: any;
    }
}
declare module latte {
    interface IEntityMeta {
        name?: string;
        fields?: IInputList;
        onFormCreated?(form: any): any;
        onFormCreating?(form: any): any;
    }
}
declare module latte {
    interface IInputOptions {
        [index: string]: string;
    }
    interface IInputFlagOptions {
        [index: number]: string;
    }
    interface IInputList {
        [field: string]: IInput;
    }
    type InputResolvedBoolean = boolean | 'if-inserted' | 'if-not-inserted' | 'if-value' | 'if-readonly-and-value';
    type InputType = 'auto' | 'label' | 'md5-password' | 'string' | 'text' | 'html' | 'number' | 'integer' | 'float' | 'boolean' | 'switch' | 'password' | 'date' | 'time' | 'datetime' | 'enumeration' | 'combo' | 'radio' | 'flags' | 'file' | 'image' | 'record' | 'record-combo' | 'color' | 'custom';
    interface IInput {
        type?: InputType;
        options?: IInputOptions | IInputFlagOptions | String[];
        visible?: InputResolvedBoolean;
        loaderFunction?: (...any: any[]) => any;
        readOnly?: InputResolvedBoolean;
        recordType?: string;
        text?: string;
        defaultValue?: any;
        category?: string;
        hint?: string;
        separator?: InputResolvedBoolean;
        nullable?: InputResolvedBoolean;
        updatesForm?: InputResolvedBoolean;
        customFunction?: () => any;
    }
}
declare module latte {
    interface IMessage {
        responseArrived: LatteEvent;
    }
}
declare module latte {
    interface IRemoteResponse {
        success: boolean;
        data: any;
        errorCode: number;
        errorDescription: string;
    }
}
declare module latte {
    interface ISave {
        changesWhileSaving: boolean;
        changesWhileSavingChanged: LatteEvent;
        isSavingChanges: boolean;
        unsavedChanges: boolean;
        unsavedChangesChanged: LatteEvent;
        getSaveCalls(): ICall[];
    }
}
declare module latte {
    interface ISaveContainer {
        saveItems: Collection<ISave>;
    }
}
declare module latte {
    class InvalidArgumentEx extends Ex {
        argument: string;
        value: any;
        constructor(argument?: string, value?: any);
        toString(): string;
    }
}
declare module latte {
    class InvalidCallEx extends Ex {
        method: string;
        constructor(method?: string);
        toString(): string;
    }
}
declare module latte {
    enum Key {
        BACKSPACE = 8,
        TAB = 9,
        ENTER = 13,
        SHIFT = 16,
        CONTROL = 17,
        ALT = 18,
        PAUSE = 19,
        CAPS_LOCK = 20,
        ESCAPE = 27,
        PAGE_UP = 33,
        PAGE_DOWN = 34,
        END = 35,
        HOME = 36,
        ARROW_LEFT = 37,
        ARROW_UP = 38,
        ARROW_RIGHT = 39,
        ARROW_DOWN = 40,
        INSERT = 45,
        DELETE = 46,
        NUMBER_0 = 48,
        NUMBER_1 = 49,
        NUMBER_2 = 50,
        NUMBER_3 = 51,
        NUMBER_4 = 52,
        NUMBER_5 = 53,
        NUMBER_6 = 54,
        NUMBER_7 = 55,
        NUMBER_8 = 56,
        NUMBER_9 = 57,
        A = 65,
        B = 66,
        C = 67,
        D = 68,
        E = 69,
        F = 70,
        G = 71,
        H = 72,
        I = 73,
        J = 74,
        K = 75,
        L = 76,
        M = 77,
        N = 78,
        O = 79,
        P = 80,
        Q = 81,
        R = 82,
        S = 83,
        T = 84,
        U = 85,
        V = 86,
        W = 87,
        X = 88,
        Y = 89,
        Z = 90,
        LEFT_WINDOW = 91,
        RIGHT_WINDOW = 92,
        SELECT = 93,
        NUMPAD_0 = 96,
        NUMPAD_1 = 97,
        NUMPAD_2 = 98,
        NUMPAD_3 = 99,
        NUMPAD_4 = 100,
        NUMPAD_5 = 101,
        NUMPAD_6 = 102,
        NUMPAD_7 = 103,
        NUMPAD_8 = 104,
        NUMPAD_9 = 105,
        NUMPAD_MULTIPLY = 106,
        NUMPAD_ADD = 107,
        NUMPAD_SUBTRACT = 109,
        NUMPAD_DECIMAL_POINT = 110,
        NUMPAD_DIVIDE = 111,
        F1 = 112,
        F2 = 113,
        F3 = 114,
        F4 = 115,
        F5 = 116,
        F6 = 117,
        F7 = 118,
        F8 = 119,
        F9 = 120,
        F10 = 121,
        F11 = 122,
        F12 = 123,
        NUM_LOCK = 144,
        SCROLL_LOCK = 145,
        SEMI_COLON = 186,
        EQUAL_SIGN = 187,
        COMMA = 188,
        DASH = 189,
        PERIOD = 190,
        FORWARD_SLASH = 191,
        GRAVE_ACCENT = 192,
        OPEN_BRACKET = 219,
        BACK_SLASH = 220,
        CLOSE_BRACKET = 221,
        SINGLE_QUOTE = 222,
        SPACEBAR = 32
    }
}
declare module latte {
    class LoadInfo {
        private static _instance;
        static readonly instance: LoadInfo;
        constructor();
        end(): void;
        onLoadingStart(): void;
        onLoadingEnd(): void;
        onLoadingTextChanged(): void;
        start(text: string): void;
        private _loadingStart;
        readonly loadingStart: LatteEvent;
        private _loadingEnd;
        readonly loadingEnd: LatteEvent;
        private _loadingTextChanged;
        readonly loadingTextChanged: LatteEvent;
        private _loadingText;
        loadingText: string;
    }
}
declare module latte {
    class Point {
        static distance(a: Point, b: Point): number;
        static empty(): Point;
        static origin(): Point;
        constructor(x?: number, y?: number);
        distanceTo(p: Point): number;
        equals(p: Point): boolean;
        offset(x: number, y: number): Point;
        toString(): string;
        readonly isEmpty: boolean;
        private _x;
        x: number;
        private _y;
        y: number;
    }
}
declare module latte {
    class Rectangle {
        static fromLRTB(left: number, right: number, top: number, bottom: number): Rectangle;
        static fromObject(obj: any): Rectangle;
        static fromObjectLFTB(obj: any): Rectangle;
        static fromElement(e: HTMLElement): Rectangle;
        private _height;
        private _left;
        private _top;
        private _width;
        private _tag;
        constructor(left?: number, top?: number, width?: number, height?: number);
        absolute(): Rectangle;
        centerOn(container: Rectangle): Rectangle;
        contains(x: number, y: number): boolean;
        containsRectangle(rectangle: Rectangle): boolean;
        equals(r: Rectangle): boolean;
        inflate(horizontal: number, vertical: number): Rectangle;
        intersection(rectangle: Rectangle): Rectangle;
        intersects(rectangle: Rectangle): boolean;
        scaleToHeight(height: number): Rectangle;
        scaleToWidth(width: number): Rectangle;
        toString(): string;
        union(rectangle: Rectangle): Rectangle;
        readonly area: number;
        bottom: number;
        center: Point;
        height: number;
        readonly isEmpty: boolean;
        left: number;
        readonly location: Point;
        right: number;
        readonly size: Size;
        tag: any;
        top: number;
        width: number;
    }
}
declare module latte {
    class Size {
        static empty(): Size;
        static zero(): Size;
        constructor(width?: number, height?: number);
        contains(size: Size): boolean;
        inflate(width: number, height: number): Size;
        inflateUniform(wide: number): Size;
        scaleToFit(target: Size): Size;
        scaleToFill(target: Size): Size;
        toString(): string;
        readonly area: number;
        readonly isEmpty: boolean;
        readonly isHorizontal: boolean;
        readonly isSquare: boolean;
        readonly isVertical: boolean;
        private _height;
        readonly height: number;
        private _width;
        readonly width: number;
    }
}
declare module latte {
    class TimeSpan {
        millis: number;
        static fromDays(days: number): TimeSpan;
        static fromHours(hours: number): TimeSpan;
        static fromMilliseconds(milliseconds: number): TimeSpan;
        static fromMinutes(minutes: number): TimeSpan;
        static fromSeconds(seconds: number): TimeSpan;
        static fromString(timeString: string): TimeSpan;
        static timeSince(d: DateTime): TimeSpan;
        constructor(days?: number, hours?: number, minutes?: number, seconds?: number, milliseconds?: number);
        private _rounder;
        private _zeroPad;
        add(timespan: TimeSpan): TimeSpan;
        addHours(hours: number): TimeSpan;
        addMinutes(minutes: number): TimeSpan;
        addSeconds(seconds: number): TimeSpan;
        compareTo(timespan: TimeSpan): number;
        duration(): TimeSpan;
        equals(timespan: TimeSpan): boolean;
        negate(): void;
        subtract(timespan: TimeSpan): TimeSpan;
        toString(includeMilliseconds?: boolean): string;
        toShortString(shortNames?: boolean): string;
        valueOf(): number;
        readonly days: number;
        readonly hours: number;
        readonly isEmpty: boolean;
        readonly milliseconds: number;
        readonly minutes: number;
        readonly seconds: number;
        readonly totalDays: number;
        readonly totalHours: number;
        readonly totalMilliseconds: number;
        readonly totalMinutes: number;
        readonly totalSeconds: number;
    }
}
declare module latte {
    class Timer {
        private _callback;
        private _context;
        private _milliseconds;
        private _paused;
        constructor(callback: Function, milliseconds: number, context: any);
        callback: Function;
        context: any;
        milliseconds: number;
        pause(): void;
        start(): void;
        tick(): void;
    }
}
declare module latte {
    enum TriBool {
        UNKNOWN = 0,
        TRUE = 1,
        FALSE = 2
    }
}
declare module latte {
    class HEvent<T> {
    }
}
declare module latte {
    enum WeekDay {
        SUNDAY = 0,
        MONDAY = 1,
        TUESDAY = 2,
        WEDNESDAY = 3,
        THURSDAY = 4,
        FRIDAY = 5,
        SATURDAY = 6
    }
}
declare module latte {
    type GenericCallback = () => any;
    var includedPlugins: Object;
    function _equalObjects(a: any, b: any): boolean;
    function _isNumber(param: any): boolean;
    function _isBoolean(param: any): boolean;
    function _isString(param: any): boolean;
    function _isArray(param: any, minLength?: number): boolean;
    function _isFunction(param: any): boolean;
    function _isObject(param: any): boolean;
    function _isNumeric(param: any): boolean;
    function _latteUrl(value?: string): any;
    function _empty(object: any): boolean;
    function _undef(param: any): boolean;
    function log(...any: any[]): void;
    function _merge(a: any, b: any): any;
    function sprintf(...any: any[]): string;
    function warnDeprecated(code: string, alternateUse: string): void;
}
declare module latte {
    class DataBindActor {
        constructor(actor: any, propertyName: string, propertyType?: BindValueType, propertyChanged?: LatteEvent);
        private _actor;
        readonly actor: any;
        private _propertyChanged;
        readonly propertyChanged: LatteEvent;
        private _propertyName;
        readonly propertyName: string;
        private _propertyType;
        readonly propertyType: BindValueType;
    }
}
declare module latte {
    class DataBindCoercion {
        static coerce(value: any, sourceType: BindValueType, targetType: BindValueType): any;
        static ensureType(value: any, type: BindValueType): any;
        static parseType(typeAsString?: string): BindValueType;
    }
}
declare module latte {
    interface DataRecordArrayCallback {
        (records: Array<DataRecord>): void;
    }
    interface DataRecordCallback {
        (record: DataRecord): void;
    }
    interface VoidCallback {
        (): any;
    }
    class DataRecord {
        static _defaultRecordsNamespace: Object;
        static recordsNamespaceName: string;
        static scanAndConvert(obj: any): any;
        static setDefaultRecordsNamespace(namespace: Object): void;
        static fromName(name: string, id: number, callback: DataRecordCallback): Message;
        static fromServerObject(obj: any, classType?: Function): DataRecord;
        static fromServerObjects(array: Array<Object>, classType?: Function): Array<DataRecord>;
        static isPackedRecord(object: any): boolean;
        static serializeNativeValue(value: any, nativeType: string): string;
        static unserializeNativeValue(value: string, nativeType: string): any;
        private _binds;
        _recordType: string;
        private _tag;
        tags: any;
        metadata: IEntityMeta;
        constructor();
        addBind(property: string, target: any, targetProperty: string, type?: string | BindValueType): ValueDataBind;
        clearBinds(): void;
        copyFieldsDataFrom(r: DataRecord): void;
        getFields(): Object;
        getMetadata(): IEntityMeta;
        getSerializedFields(): Object;
        insert(callback: VoidCallback): latte.Message;
        insertCall(): RemoteCall<string>;
        inserted(): boolean;
        onFieldValueChanged(field: string, value: any): void;
        onFormCreating(dataRecordFormItem: any): void;
        onFormCreated(dataRecordFormItem: any): void;
        onGetFields(): any;
        onGetFieldTypes(): any;
        onGetRecordIdName(): string;
        onRecordIdChanged(): void;
        remove(callback?: () => any): Message;
        removeBindsOf(target: any): void;
        removeCall(): RemoteCall<boolean>;
        save(callback?: VoidCallback): latte.Message;
        saveCall(): RemoteCall<any>;
        toString(): string;
        update(callback: VoidCallback): Message;
        updateCall(): RemoteCall<string>;
        private _formCreating;
        readonly formCreating: LatteEvent;
        private _formCreated;
        readonly formCreated: LatteEvent;
        private _fieldValueChanged;
        readonly fieldValueChanged: LatteEvent;
        private _recordIdChanged;
        readonly recordIdChanged: LatteEvent;
        _moduleName: string;
        moduleName: string;
        private _recordId;
        recordId: number;
        recordType: string;
        tag: string;
    }
}
declare module latte {
    class UiElement implements ISaveContainer, ISave {
        private static reminderId;
        private static _contextItemsCollect;
        private static _dragStart;
        private static _staticInited;
        static disableTextSelection(element: JQuery): JQuery;
        static enableTextSelection(element: JQuery): JQuery;
        static oppositeSide(side: Side): Side;
        static staticInit(): void;
        private static _dragElement;
        static readonly dragElement: JQuery;
        private static _dragging;
        static readonly dragging: boolean;
        private static _draggingElement;
        static readonly draggingElement: UiElement;
        private static _dropTarget;
        static dropTarget: UiElement;
        protected localId: number;
        private _enabled;
        private _dragSource;
        private _dropped;
        private _focusable;
        private _hideWhileDragging;
        private _tag;
        private _tooltip;
        private _visible;
        private saveChangesQueue;
        contextItems: Collection<Item>;
        element: JQuery;
        enabledChanged: LatteEvent;
        layout: LatteEvent;
        contextItemsShow: LatteEvent;
        visibleChanged: LatteEvent;
        constructor();
        private _contextMenu;
        addEventListener(event: string, f: (...any: any[]) => any, useCapture?: boolean): void;
        addClass(classString: string): this;
        appendTo(element: any): UiElement;
        css(css: any, value?: any): UiElement;
        ensureClass(className: string, condition: boolean): void;
        finalize(): void;
        getSaveCalls(): ICall[];
        getUnsavedChanges(): boolean;
        onBeingDraggedChanged(): void;
        onBlur(): void;
        onChangesWhileSavingChanged(): void;
        onContextItemsShow(): void;
        onCreateDragElement(): JQuery;
        onDragOver(e: MouseEvent): boolean;
        onDropped(): void;
        onDropElement(): void;
        onEnabledChanged(): void;
        onFocusableChanged(): void;
        onFinalizing(): any;
        onFocused(): void;
        onHiddenChanged(): void;
        onIsSavingChangesChanged(): void;
        onLayout(): void;
        onVisibleChanged(): void;
        onSavedChanges(): void;
        onSavingChanges(): boolean;
        onUnsavedChangesChanged(): void;
        removeClass(classString: string): this;
        saveChanges(callback?: () => any): IMessage;
        setUnsavedChanges(value?: boolean, silent?: boolean): void;
        showContextMenu(pageX: number, pageY: number): MenuOverlay;
        updateSavedChanges(): void;
        private _beingDraggedChanged;
        readonly beingDraggedChanged: LatteEvent;
        private _blur;
        readonly blur: LatteEvent;
        private _dragOver;
        private _changesWhileSavingChanged;
        readonly changesWhileSavingChanged: LatteEvent;
        readonly dragOver: LatteEvent;
        private _dropElement;
        readonly dropElement: LatteEvent;
        private _finalizing;
        readonly finalizing: LatteEvent;
        private _focused;
        readonly focused: LatteEvent;
        private _hiddenChanged;
        readonly hiddenChanged: LatteEvent;
        private _isSavingChangesChanged;
        readonly isSavingChangesChanged: LatteEvent;
        private _savedChanges;
        readonly savedChanges: LatteEvent;
        private _savingChanges;
        readonly savingChanges: LatteEvent;
        private _unsavedChangesChanged;
        readonly unsavedChangesChanged: LatteEvent;
        private _beingDragged;
        beingDragged: boolean;
        private _changesWhileSaving;
        changesWhileSaving: boolean;
        dragSource: JQuery;
        readonly dropped: LatteEvent;
        enabled: boolean;
        private _finalized;
        readonly finalized: boolean;
        focusable: boolean;
        private _focusableChanged;
        readonly focusableChanged: LatteEvent;
        height: number;
        private _hidden;
        hidden: boolean;
        hideWhileDragging: boolean;
        private _isSavingChanges;
        isSavingChanges: boolean;
        readonly node: HTMLDivElement;
        readonly raw: HTMLElement;
        private _saveItems;
        readonly saveItems: Collection<ISave>;
        tag: any;
        tooltip: string;
        private _unsavedChanges;
        unsavedChanges: boolean;
        visible: boolean;
        width: number;
    }
}
declare module latte {
    class View extends UiElement {
        private static _smallScreen;
        private static _defaultButton;
        private static _initialized;
        private static _layer;
        private static _mainView;
        private static _mainViewHolder;
        private static _modalView;
        private static smallScreenChanged;
        static getMainView(): View;
        static initStatic(): void;
        static getModalView(): DialogView;
        static onSmallScreenChanged(): void;
        static setModalView(view?: DialogView, itemsArray?: Array<Item>): void;
        static setMainView(view: View, transition?: Transition, milliseconds?: number): void;
        static defaultButton: ButtonItem;
        static mainView: View;
        static modalView: DialogView;
        static smallScreen: boolean;
        private _infoItem;
        private _padding;
        private _parentIsModal;
        private _parentView;
        private _view;
        container: JQuery;
        constructor();
        focusInput(): void;
        getView(): View;
        onLayout(): void;
        onLoad(): void;
        onShown(): void;
        onUnload(): any;
        setView(view?: View, transition?: Transition, milliseconds?: number): boolean;
        private _load;
        readonly load: LatteEvent;
        private _shown;
        readonly shown: LatteEvent;
        private _unload;
        readonly unload: LatteEvent;
        infoItem: Item;
        padding: number;
        parentIsModal: boolean;
        readonly parentView: View;
        view: View;
    }
}
declare module latte {
    class AnchorView extends View {
        constructor(anchorTop?: Item);
        onLayout(): void;
        private _anchorTopChanged;
        readonly anchorTopChanged: LatteEvent;
        onAnchorTopChanged(): void;
        private _anchorRightChanged;
        readonly anchorRightChanged: LatteEvent;
        onAnchorRightChanged(): void;
        private _anchorBottomChanged;
        readonly anchorBottomChanged: LatteEvent;
        onAnchorBottomChanged(): void;
        private _anchorLeftChanged;
        readonly anchorLeftChanged: LatteEvent;
        onAnchorLeftChanged(): void;
        private _anchorTopVisibleChanged;
        readonly anchorTopVisibleChanged: LatteEvent;
        onAnchorTopVisibleChanged(): void;
        private _anchorRightVisibleChanged;
        readonly anchorRightVisibleChanged: LatteEvent;
        onAnchorRightVisibleChanged(): void;
        private _anchorBottomVisibleChanged;
        readonly anchorBottomVisibleChanged: LatteEvent;
        onAnchorBottomVisibleChanged(): void;
        private _anchorLeftVisibleChanged;
        readonly anchorLeftVisibleChanged: LatteEvent;
        onAnchorLeftVisibleChanged(): void;
        private _anchorTop;
        anchorTop: Item;
        private _anchorTopVisible;
        anchorTopVisible: boolean;
        private _anchorRight;
        anchorRight: Item;
        private _anchorRightVisible;
        anchorRightVisible: boolean;
        private _anchorBottom;
        anchorBottom: Item;
        private _anchorBottomVisible;
        anchorBottomVisible: boolean;
        private _anchorLeft;
        anchorLeft: Item;
        private _anchorLeftVisible;
        anchorLeftVisible: boolean;
    }
}
declare module latte {
    class ToolbarView extends AnchorView {
        toolbar: Toolbar;
        constructor();
        onAnchorTopChanged(): void;
        onAnchorRightChanged(): void;
        onAnchorBottomChanged(): void;
        onAnchorLeftChanged(): void;
    }
}
declare module latte {
    class DataRecordChildrenView extends ToolbarView {
        constructor(loadChildren?: () => any, childAdd?: () => any, childEdit?: () => any, childRemove?: () => any);
        onChildrenAdd(): void;
        onChildEdit(): void;
        onChildRemove(): void;
        onLoadChildren(): void;
        onRecordChanged(): void;
        reloadChildren(): void;
        private _childAdd;
        readonly childAdd: LatteEvent;
        private _childEdit;
        readonly childEdit: LatteEvent;
        private _childRemove;
        readonly childRemove: LatteEvent;
        private _loadChildren;
        readonly loadChildren: LatteEvent;
        private _recordChanged;
        readonly recordChanged: LatteEvent;
        private _btnAdd;
        readonly btnAdd: ButtonItem;
        private _btnEdit;
        readonly btnEdit: ButtonItem;
        private _btnRefresh;
        readonly btnRefresh: ButtonItem;
        private _btnRemove;
        readonly btnRemove: ButtonItem;
        private _listView;
        readonly listView: ListView;
        private _pagination;
        readonly pagination: PaginationItem;
        readonly children: Collection<ListViewItem>;
        private _record;
        record: DataRecord;
        readonly selectedChild: SelectableItem;
    }
}
declare module latte {
    class Item extends UiElement {
        static clickable(): JQuery;
        static selectable(): JQuery;
        private _tab;
        constructor();
        bringToFront(): void;
        readonly parentMenu: MenuOverlay;
        readonly parentIsMenu: boolean;
        tab: any;
    }
}
declare module latte {
    class WidgetItem extends Item {
        items: Collection<Item>;
        stack: ItemStack;
        titleLabel: LabelItem;
        toolbar: Toolbar;
        topToolbar: Toolbar;
        constructor();
        private _onAddItem;
        private _onRemoveItem;
        onAllowMinimizeChanged(): void;
        onLayout(): void;
        onMinimizedChanged(): void;
        private _allowMinimizeChanged;
        readonly allowMinimizeChanged: LatteEvent;
        private _minimizedChanged;
        readonly minimizedChanged: LatteEvent;
        private _allowMinimize;
        allowMinimize: boolean;
        private _minimized;
        minimized: boolean;
        title: string;
        private _minimizeButton;
        readonly minimizeButton: ButtonItem;
    }
}
declare module latte {
    class DataRecordChildrenWidget extends WidgetItem {
        constructor(loadChildren?: () => any, childAdd?: () => any, childEdit?: () => any, childRemove?: () => any);
        onChildrenAdd(): void;
        onChildEdit(): void;
        onChildRemove(): void;
        onLoadChildren(): void;
        onRecordChanged(): void;
        reloadChildren(): void;
        private _childAdd;
        readonly childAdd: LatteEvent;
        private _childEdit;
        readonly childEdit: LatteEvent;
        private _childRemove;
        readonly childRemove: LatteEvent;
        private _loadChildren;
        readonly loadChildren: LatteEvent;
        private _recordChanged;
        readonly recordChanged: LatteEvent;
        private _btnAdd;
        readonly btnAdd: ButtonItem;
        private _btnEdit;
        readonly btnEdit: ButtonItem;
        private _btnRefresh;
        readonly btnRefresh: ButtonItem;
        private _btnRemove;
        readonly btnRemove: ButtonItem;
        private _stackChildren;
        readonly stackChildren: SelectableStack;
        readonly children: Collection<SelectableItem>;
        private _record;
        record: DataRecord;
        readonly selectedChild: SelectableItem;
    }
}
declare module latte {
    class DataRecordCollection extends Collection<DataRecord> {
        constructor(addCallback?: (DataRecord: any, number: any) => any, removeCallback?: (DataRecord: any, number: any) => any, context?: any);
        byId(id: number): DataRecord;
    }
}
declare module latte {
    class DialogView extends View {
        private static initialized;
        private static _initialize;
        static alert(message: string, description?: string, items?: Array<Item>): DialogView;
        static ask(message: string, description?: string, items?: Array<Item>): DialogView;
        static confirmDelete(objectName: string, callback: () => any): void;
        static error(message: string, description?: string, items?: Array<Item>): DialogView;
        static inform(message: string, description?: string, items?: Array<Item>): DialogView;
        static input(title: string, inputs: IInputList, validate?: (values: {
            [index: string]: any;
        }, items: {
            [index: string]: InputItem;
        }) => any, save?: (values: {
            [index: string]: any;
        }) => any, cancel?: () => any): DialogView;
        static metaInput(title: string, inputs: IInputList, validate?: (values: {
            [index: string]: any;
        }, items: {
            [index: string]: InputItem;
        }) => any, save?: (values: {
            [index: string]: any;
        }) => any, cancel?: () => any): DialogView;
        static showMessage(message: MessageView, items?: Array<Item>): DialogView;
        subLayer: HTMLElement;
        containmentLayer: HTMLElement;
        private _cancelButton;
        private _closeable;
        private _defaultButton;
        private defaultButtonHandled;
        barElement: JQuery;
        closeButton: ButtonItem;
        items: Collection<Item>;
        itemsElement: JQuery;
        titleElement: JQuery;
        closing: LatteEvent;
        closed: LatteEvent;
        constructor(view?: View, items?: Array<Item>);
        private clickableItemsCount;
        private _onAddItem;
        private _onRemoveItem;
        addButton(text: string, handler?: GenericCallback): DialogView;
        addCancelButton(handler?: GenericCallback): DialogView;
        addNoButton(handler?: GenericCallback): DialogView;
        addOkButton(handler?: GenericCallback): DialogView;
        addSaveButton(handler?: GenericCallback): DialogView;
        addYesButton(handler?: GenericCallback): DialogView;
        close(): boolean;
        handler(): void;
        onClosed(): void;
        onClosing(): boolean;
        onEnabledChanged(): void;
        onLayout(): void;
        show(items?: Item[]): DialogView;
        cancelButton: ButtonItem;
        closeable: boolean;
        defaultButton: ButtonItem;
        private _isClosed;
        readonly isClosed: boolean;
        title: string;
    }
}
declare module latte {
    class DataRecordDialogView extends DialogView {
        static editRecord(r: DataRecord, onSaved?: () => any, title?: string): DataRecordDialogView;
        private _readOnly;
        cancelButton: ButtonItem;
        formView: DataRecordFormView;
        saveButton: ButtonItem;
        saving: LatteEvent;
        saved: LatteEvent;
        constructor(record?: DataRecord);
        onSaved(): void;
        onSaving(): void;
        readOnly: boolean;
        readonly record: DataRecord;
    }
}
declare module latte {
    class ItemStack extends Item {
        private _padding;
        container: JQuery;
        items: Collection<Item>;
        itemsChanged: LatteEvent;
        constructor(items?: Array<Item>);
        correctCollection(): void;
        onAddItem(item: Item): void;
        onRemoveItem(item: Item): void;
        add(item: Item): void;
        clear(): void;
        onItemsChanged(): void;
        onLayout(): void;
        remove(item: Item): void;
        readonly count: number;
        padding: number;
    }
}
declare module latte {
    class FormItem extends ItemStack implements ISave {
        constructor();
        byName(name: string): InputItem;
        getSaveCalls(): ICall[];
        getValues(): any;
        onDirectionChanged(): void;
        onInputAdded(input: InputItem): void;
        onInputRemoved(input: InputItem): void;
        onReadOnlyChanged(): void;
        onValueChanged(): void;
        setDirection(d: Direction): void;
        valueItemByName(name: string, baseClass?: Function): ValueItem<any>;
        setTextWidth(value: number): void;
        private _directionChanged;
        readonly directionChanged: LatteEvent;
        private _readOnlyChanged;
        readonly readOnlyChanged: LatteEvent;
        private _valueChanged;
        readonly valueChanged: LatteEvent;
        private _direction;
        direction: Direction;
        private _faceVisible;
        faceVisible: boolean;
        private _inputs;
        readonly inputs: Collection<InputItem>;
        readonly isValid: boolean;
        private _readOnly;
        readOnly: boolean;
        title: string;
        readonly valid: boolean;
        private _titleLabel;
        readonly titleLabel: LabelItem;
    }
}
declare module latte {
    class DataRecordFormItemOld extends FormItem implements ISave {
        constructor(record?: DataRecord);
        private loadRecord;
        private addInput;
        private handleRecordInput;
        private updateFieldVisibility;
        applyValues(record?: DataRecord): void;
        private _category;
        category: string;
        getSaveCalls(): ICall[];
        onCategoryChanged(): void;
        onLoadedRecordProperty(propertyName: string): void;
        onRecordChanged(): void;
        onRecordChangedOLD(): void;
        onRecordLoaded(): void;
        private _categoryChanged;
        readonly categoryChanged: LatteEvent;
        private _loadedRecordProperty;
        readonly loadedRecordProperty: LatteEvent;
        private _recordChanged;
        readonly recordChanged: LatteEvent;
        private _recordLoaded;
        readonly recordLoaded: LatteEvent;
        private _record;
        record: DataRecord;
    }
}
declare module latte {
    class MetaFormItem extends FormItem implements ISave {
        constructor(source?: any, metadata?: IEntityMeta, updater?: () => IEntityMeta);
        private loadMetadata;
        protected addInput(name: string, field: IInput): ICall;
        protected handleRecordInput(field: IInput, input: InputItem, value: any): ICall;
        protected updateFieldReadOnlyFindings(input: InputItem, name: string): void;
        protected updateFieldVisibility(field: IInput, input: InputItem, value: any): void;
        protected resolveBoolean(resolver: InputResolvedBoolean, field: IInput, input: InputItem, value: any): boolean;
        applyValues(record?: any): void;
        onCategoryChanged(): void;
        onFormUpdated(): void;
        onLoadedMetadata(): void;
        onLoadedRecordProperty(propertyName: string): void;
        onMetadataChanged(): void;
        onReadOnlyChanged(): void;
        onSourceChanged(): void;
        updateForm(): void;
        private _categoryChanged;
        readonly categoryChanged: LatteEvent;
        private _formUpdated;
        readonly formUpdated: LatteEvent;
        private _loadedMetadata;
        readonly loadedMetadata: LatteEvent;
        private _loadedRecordProperty;
        readonly loadedRecordProperty: LatteEvent;
        private _metadataChanged;
        readonly metadataChanged: LatteEvent;
        private _sourceChanged;
        readonly sourceChanged: LatteEvent;
        private _category;
        category: string;
        private _metadata;
        metadata: IEntityMeta;
        private _source;
        source: any;
        private _updater;
        updater: () => IEntityMeta;
    }
}
declare module latte {
    class DataRecordFormItem extends MetaFormItem {
        constructor(record?: DataRecord);
        protected loadRecord(): void;
        protected resolveBoolean(resolver: InputResolvedBoolean, field: IInput, input: InputItem, value: any): boolean;
        getSaveCalls(): ICall[];
        onCategoryChanged(): void;
        onInputAdded(input: InputItem): void;
        onLoadedMetadata(): void;
        onRecordChanged(): void;
        onRecordLoaded(): void;
        private _recordChanged;
        readonly recordChanged: LatteEvent;
        private _recordLoaded;
        readonly recordLoaded: LatteEvent;
        private _record;
        record: DataRecord;
    }
}
declare module latte {
    class ColumnView extends View {
        private _columnWeights;
        private _columns;
        private _paddingColumns;
        items: Collection<Item>;
        constructor(columns?: number);
        onAddItem(item: Item): void;
        onRemoveItem(item: Item): void;
        getColumnAt(index: number): JQuery;
        onLayout(): void;
        columnWeights: Array<number>;
        columns: number;
        columnPadding: number;
    }
}
declare module latte {
    class FormView extends ColumnView {
        constructor(inputs?: Array<InputItem>);
        valid(): boolean;
        getValues(): any;
        setTextWidth(value: number): void;
        private _valueChanged;
        readonly valueChanged: LatteEvent;
        onValueChanged(): void;
        private _form;
        readonly form: FormItem;
        faceVisible: boolean;
        readonly inputs: Collection<InputItem>;
        readonly isValid: boolean;
        readOnly: boolean;
        title: string;
        readonly titleLabel: LabelItem;
    }
}
declare module latte {
    class DataRecordFormView extends FormView {
        constructor(record?: DataRecord);
        applyValues(record?: DataRecord): void;
        getSaveCalls(): ICall[];
        printSaveStack(view: View): void;
        private _dataform;
        readonly form: DataRecordFormItem;
        record: DataRecord;
    }
}
declare module latte {
    class GridView extends View {
        private _actionCommit;
        private _actionCopyCellValue;
        private _actionPasteCellValue;
        _actionRemoveRow: Action;
        private _actionRollback;
        private _actionSetCellNull;
        private _allowChangeRows;
        private _allowDeleteRows;
        private _allowNewRows;
        private _editingTd;
        private _readOnly;
        private _tdAll;
        private _trColumns;
        columns: Collection<GridViewColumn>;
        rows: Collection<GridViewRow>;
        table: JQuery;
        committed: LatteEvent;
        valueChanged: LatteEvent;
        rowsAdded: LatteEvent;
        rowsChanged: LatteEvent;
        rowsRemoved: LatteEvent;
        constructor();
        private _addInsertRow;
        private _createCell;
        private _createRow;
        private _makeInsertRowCandidate;
        private _onAddColumn;
        private _onAddRow;
        private _onRemoveColumn;
        private _onRemoveRow;
        private _removeInsertRow;
        private _selectColumnHeader;
        private _selectRowHeader;
        private _transactionEnd;
        private _transactionStart;
        private _updateRowIndexes;
        canEditCellAt(columnIndex: number, rowIndex: number): boolean;
        clearSelection(): void;
        commit(): void;
        commitAddedRows(): void;
        commitChangedRows(): void;
        commitDeletedRows(): void;
        confirmRowsAdded(): void;
        confirmRowsChanged(): void;
        confirmRowsRemoved(): void;
        copySelectedCellValue(): void;
        deleteRowAt(rowIndex: number): void;
        editCellAt(columnIndex: number, rowIndex: number): void;
        editNextCell(): void;
        editPreviousCell(): void;
        endCellEdit(cancelled?: boolean): void;
        getCellElementAt(columnIndex: number, rowIndex: number): JQuery;
        getData(): DataSet;
        getRowElementAt(rowIndex: number): JQuery;
        getValueAt(columnIndex: number, rowIndex: number): any;
        hasCellAt(columnIndex: number, rowIndex: number): boolean;
        hasValueAt(columnIndex: number, rowIndex: number): boolean;
        onCommitted(): void;
        onContextItemsShow(): void;
        onRowsAdded(dataset: DataSet): void;
        onRowsChanged(dataset: DataSet, oldDataset?: DataSet): void;
        onRowsRemoved(dataset: DataSet): void;
        onValueChanged(columnIndex: number, rowIndex: number, value: any, oldValue: any): void;
        originalValue(columnIndex: number, rowIndex: number, value?: any): any;
        restoreValueAt(columnIndex: number, rowIndex: number): void;
        rollback(): void;
        selectCellAt(columnIndex: number, rowIndex: number): void;
        setData(value: DataSet): void;
        setValueAt(columnIndex: number, rowIndex: number, value: any, raiseEvent?: boolean): void;
        allowChangeRows: boolean;
        allowDeleteRows: boolean;
        allowNewRows: boolean;
        data: DataSet;
        readonly editing: boolean;
        readOnly: boolean;
        selectedCell: JQuery;
    }
}
declare module latte {
    class DataRecordGridView extends GridView {
        private _metadata;
        _recordType: string;
        records: Collection<DataRecord>;
        constructor();
        private _onAddRecord;
        private _onRemoveRecord;
        applyValues(row: DataSetRow, record: DataRecord): void;
        onContextItemsShow(): void;
        onRowsAdded(dataset: DataSet): void;
        onRowsChanged(dataset: DataSet): void;
        onRowsRemoved(dataset: DataSet): void;
        recordType: string;
    }
}
declare module latte {
    class ValueItem<T> extends Item {
        constructor();
        onGetValueString(): string;
        onValueChanged(): void;
        setValue(value: T, silently?: boolean): void;
        private _valueChanged;
        readonly valueChanged: LatteEvent;
        private _value;
        value: T;
        readonly valueString: string;
    }
}
declare module latte {
    interface DataRecordSuggestionLoader {
        (d: DataRecordValueItem, callback: (items: Item[]) => any): Message;
    }
    class DataRecordValueItem extends ValueItem<number> {
        private buttonGroup;
        constructor(loader?: DataRecordSuggestionLoader, textboxCreated?: (t: TextboxItem) => any, placeholder?: string);
        readonly valueString: string;
        onLayout(): void;
        onRecordChanged(): void;
        onTextboxCreated(): void;
        setValue(value: any): void;
        setRecordSilent(r: DataRecord): void;
        updateItem(): void;
        private _recordChanged;
        readonly recordChanged: LatteEvent;
        private _textboxCreated;
        readonly textboxCreated: LatteEvent;
        private _loaderFunction;
        loaderFunction: DataRecordSuggestionLoader;
        private _placeholder;
        placeholder: string;
        private _record;
        record: DataRecord;
        private _textbox;
        readonly textbox: TextboxItem;
        readonly text: string;
    }
}
declare module latte {
    class DataRecordWidget extends WidgetItem {
        constructor(record?: DataRecord);
        onRecordChanged(): void;
        onSaving(): void;
        onSaved(): void;
        private _recordChanged;
        readonly recordChanged: LatteEvent;
        private _saving;
        readonly saving: LatteEvent;
        private _saved;
        readonly saved: LatteEvent;
        private _form;
        readonly form: DataRecordFormItem;
        private _btnSave;
        readonly btnSave: ButtonItem;
        private _record;
        record: DataRecord;
    }
}
declare module latte {
    class DataSet {
        columns: Collection<DataSetColumn>;
        rows: Collection<DataSetRow>;
        constructor();
        static fromServerObject(dataset: any): DataSet;
        static fromServerType(type: string): string;
        getColumnIndex(columnName: string): number;
        getDataArray(): any[];
        getValue(columnName: string, rowIndex: number): any;
        getValueAt(columnIndex: number, rowIndex: number): any;
        setValue(columnName: string, rowIndex: number, value: any): DataSet;
        setValueAt(columnIndex: number, rowIndex: number, value: any): DataSet;
    }
}
declare module latte {
    class DataSetColumn {
        private _length;
        private _name;
        private _options;
        private _tag;
        private _type;
        optionsChanged: LatteEvent;
        constructor(name?: string, type?: string, length?: number);
        length: number;
        name: string;
        onOptionsChanged(): void;
        options: any;
        tag: any;
        type: string;
    }
}
declare module latte {
    class DataSetRow {
        data: Array<any>;
        private _dataSet;
        private _readOnly;
        private _tag;
        constructor(data?: Array<any>);
        getDataArray(columns: number): Array<any>;
        hasValueAt(index: number): boolean;
        readOnly: boolean;
        tag: any;
        getValueAt(index: number): any;
        setValueAt(index: number, value: any): void;
    }
}
declare module latte {
    class GridViewColumn extends DataSetColumn {
        private _header;
        private _readonly;
        constructor(name?: string, type?: string, length?: number);
        header: JQuery;
        readOnly: boolean;
    }
}
declare module latte {
    class GridViewRow extends DataSetRow {
        element: JQuery;
        constructor(data?: Array<any>);
    }
}
declare module latte {
    interface IDataRecordCustomForm {
        onFormCreated?(form: DataRecordFormItem): any;
        onFormCreating?(form: DataRecordFormItem): any;
    }
}
declare module latte {
    interface IDataRecordCustomView {
        onViewCreated?(view: View): any;
        onViewCreating?(view: View): any;
    }
}
declare module latte {
    interface IRecordMeta extends IEntityMeta {
    }
}
declare module latte {
    interface MessageSucceededCallback {
        (data: any): void;
        (): void;
    }
    class Message {
        static log: Message[];
        private static _retryCountdown;
        private static _retryLeader;
        private static _retryTime;
        private static _retryTimer;
        static readonly pathToRequest: string;
        static sendCalls(calls: ICall[], callback?: () => void): Message;
        static globalFailed: Function;
        private static _networkAvailable;
        static networkAvailable: boolean;
        private static _networkAvailableChanged;
        static readonly networkAvailableChanged: LatteEvent;
        static onNetworkAvailableChanged(): void;
        private _loaderText;
        private _working;
        private _calls;
        critical: boolean;
        response: string;
        _responseArrived: LatteEvent;
        _sent: LatteEvent;
        _failed: LatteEvent;
        _networkFailed: LatteEvent;
        constructor(moduleName?: string, className?: string, method?: string, methodArgs?: any, id?: number);
        addCalls(calls: ICall[]): void;
        dataArrived(data: string): void;
        onFailed(errorDescription: string): void;
        onNetworkFailed(): void;
        onResponseArrived(): void;
        onSent(): void;
        send(success?: (data: any) => any, failure?: (errorDesc: string) => any): Message;
        working(): boolean;
        readonly calls: ICall[];
        readonly failed: LatteEvent;
        readonly networkFailed: LatteEvent;
        readonly responseArrived: LatteEvent;
        readonly sent: LatteEvent;
    }
}
declare module latte {
    class RemoteCall<T> implements ICall {
        private _className;
        private _method;
        private _id;
        private _params;
        private _returns;
        private _beforeSuccess;
        private _success;
        private _failure;
        private _response;
        constructor(moduleName?: string, className?: string, method?: string, params?: any, id?: number, returns?: T);
        marshall(): IDataRemoteCall;
        onFailure(errorDescription: string, errorCode: string): void;
        onBeforeSuccess(data: T): void;
        onSuccess(data: T): void;
        respond(responseData: IRemoteResponse): void;
        send(success?: (data: T) => void, failure?: (errorDescription: string) => void): Message;
        sendWithLoader(loaderText: string, success?: (data: T) => void, failure?: () => void): Message;
        toString(): string;
        withHandlers(success?: (data: T) => void, failure?: (errorDescription: string) => void): RemoteCall<any>;
        className: string;
        method: string;
        readonly failure: LatteEvent;
        private _something;
        something: string;
        private _moduleName;
        moduleName: string;
        id: number;
        params: any;
        response: RemoteResponse<T>;
        returns: T;
        readonly success: LatteEvent;
        readonly beforeSuccess: LatteEvent;
    }
}
declare module latte {
    class RemoteResponse<T> {
        private _call;
        private _response;
        private _errorCode;
        private _errorDescription;
        private _success;
        private _data;
        constructor(call: RemoteCall<T>, response: IRemoteResponse);
        private unmarshall;
        readonly call: RemoteCall<T>;
        readonly errorCode: number;
        readonly errorDescription: string;
        private _logs;
        logs: Array<string>;
        readonly response: IRemoteResponse;
        readonly data: T;
        readonly success: boolean;
        private _warnings;
        warnings: Array<string>;
    }
}
declare module latte {
    class ValueDataBind {
        constructor(a: DataBindActor, b: DataBindActor);
        uninstall(): void;
        private _actorA;
        readonly actorA: DataBindActor;
        private _actorB;
        readonly actorB: DataBindActor;
        private _bindA;
        readonly bindA: ValueSingleDataBind;
        private _bindB;
        readonly bindB: ValueSingleDataBind;
    }
}
declare module latte {
    class ValueSingleDataBind {
        lastHandleApplied: () => void;
        constructor(sourceActor: DataBindActor, targetActor: DataBindActor);
        apply(): void;
        install(): void;
        onApplied(): void;
        onWillApply(): void;
        uninstall(): void;
        private _applied;
        readonly applied: LatteEvent;
        private _willApply;
        readonly willApply: LatteEvent;
        private _sourceActor;
        readonly sourceActor: DataBindActor;
        private _skipNextApply;
        skipNextApply: boolean;
        private _targetActor;
        readonly targetActor: DataBindActor;
    }
}
declare module latte {
    class ExplorerChildrenView extends View {
        constructor();
        onExplorerItemChanged(): void;
        onShowChildren(): void;
        private _explorerItemChanged;
        readonly explorerItemChanged: LatteEvent;
        private _showChildren;
        readonly showChildren: LatteEvent;
        private _explorerItem;
        explorerItem: ExplorerItem;
    }
}
declare module latte {
    class ExplorerItem {
        constructor();
        createTreeItem(): TreeItem;
        createListViewItem(): ListViewItem;
        getCanBeDeleted(): boolean;
        getColumnHeaders(): ColumnHeader[];
        getColumns(): string[];
        getChildrenLoader(): RemoteCall<any>;
        getChildrenView(): ExplorerChildrenView;
        getDetailView(): View;
        getDetailViewOptions(): Item[];
        getItems(): Item[];
        getChildrenItems(): Item[];
        getIcon(): IconItem;
        getIcon32(): IconItem;
        getName(): string;
        loadChildren(callback?: () => void): void;
        onChildAdded(item: ExplorerItem): void;
        onChildrenPagesChanged(): void;
        onChildRemoved(item: ExplorerItem): void;
        onChildrenChanged(): void;
        onChildrenLoadStarted(): void;
        onChildrenLoadEnd(): void;
        syncUI(): void;
        private _childAdded;
        readonly childAdded: LatteEvent;
        private _childRemoved;
        readonly childRemoved: LatteEvent;
        private _childrenChanged;
        readonly childrenChanged: LatteEvent;
        private _childrenLoadStarted;
        readonly childrenLoadStarted: LatteEvent;
        private _childrenLoadEnd;
        readonly childrenLoadEnd: LatteEvent;
        private _children;
        readonly children: Collection<ExplorerItem>;
        private _childrenLoaded;
        childrenLoaded: boolean;
        readonly childrenLoadNeeded: boolean;
        private _childrenPage;
        childrenPage: number;
        private _childrenPages;
        childrenPages: number;
        private _childrenPagesChanged;
        readonly childrenPagesChanged: LatteEvent;
        private _explorer;
        explorer: ExplorerView;
        private _childrenLoading;
        readonly childrenLoading: boolean;
        private _listViewItem;
        readonly listViewItem: ListViewItem;
        private _loadsChildren;
        loadsChildren: boolean;
        private _loadsChildrenFolders;
        loadsChildrenFolders: boolean;
        private _parent;
        readonly parent: ExplorerItem;
        private _treeItem;
        readonly treeItem: TreeItem;
    }
}
declare module latte {
    class ExplorerItemDataRecord<T extends DataRecord> extends ExplorerItem {
        constructor(r?: DataRecord);
        createListViewItem(): ListViewItem;
        getName(): string;
        getColumns(): string[];
        getColumnWithFor(name: string): number;
        getItemForColumn(name: string): Item;
        getDetailView(): View;
        syncUI(): void;
        private _record;
        record: T;
    }
}
declare module latte {
    class TreeItem extends Item {
        static globalExpandGlyph: (item: TreeItem) => IconItem;
        static globalCollapseGlyph: (item: TreeItem) => IconItem;
        private _expandOnSelect;
        private _expanded;
        private _glyph;
        private _icon;
        private _level;
        private _parent;
        private _selected;
        private _selectedIcon;
        private _willLoadItems;
        faceElement: JQuery;
        glyphElement: JQuery;
        iconElement: JQuery;
        levelElement: JQuery;
        textElement: JQuery;
        items: Collection<TreeItem>;
        itemsElement: JQuery;
        click: LatteEvent;
        loadItems: LatteEvent;
        selectedChanged: LatteEvent;
        constructor();
        private _onAddItem;
        private _onRemoveItem;
        _updateGlyph(): void;
        deleteFromParent(): void;
        onClick(): void;
        onLoadItems(): void;
        onSelectedChanged(): void;
        reportItemsLoaded(): void;
        topParent(): TreeItem;
        expandOnSelect: boolean;
        expanded: boolean;
        glyph: IconItem;
        readonly hasItems: boolean;
        icon: IconItem;
        level: number;
        readonly parent: TreeItem;
        readonly path: any;
        selected: boolean;
        selectedIcon: IconItem;
        text: string;
        readonly treeView: TreeView;
    }
}
declare module latte {
    class ExplorerTreeItem extends TreeItem {
        constructor();
        private _record;
        record: DataRecord;
    }
}
declare module latte {
    class SplitView extends View {
        private _draggingSplit;
        sideWrap: View;
        splitterElement: JQuery;
        constructor();
        private _onMouseDown;
        private _onMouseMove;
        private _onMouseUp;
        onLayout(): void;
        onSideVisibleChanged(): void;
        private _sideVisibleChanged;
        readonly sideVisibleChanged: LatteEvent;
        private _sensitivity;
        sensitivity: number;
        private _side;
        side: Side;
        private _sideSize;
        sideSize: number;
        sideView: View;
        private _sideVisible;
        sideVisible: boolean;
        private _splitterSize;
        splitterSize: number;
    }
}
declare module latte {
    class ExplorerView extends SplitView {
        private ignorePageChange;
        private detailViewItem;
        private loadTimes;
        private nextLoadTimePrediction;
        constructor(rootItem?: ExplorerItem);
        private addLoadingTime;
        private addTreeItemHandlers;
        private childrenViewOf;
        private listViewChildrenOf;
        private loadChildrenOf;
        private treeViewChildrenOf;
        private addListViewItemHandlers;
        private detailViewOf;
        addRootItem(item: ExplorerItem): void;
        refreshList(): void;
        setDetailView(view: View): void;
        private _btnDetailOptions;
        readonly btnDetailOptions: ButtonItem;
        private _btnHideDetailBar;
        readonly btnHideDetailBar: ButtonItem;
        private _btnSaveDetail;
        readonly btnSaveDetail: ButtonItem;
        private _btnRefresh;
        readonly btnRefresh: ButtonItem;
        private _btnRemoveDetail;
        readonly btnRemoveDetail: ButtonItem;
        private _childrenSide;
        readonly childrenSide: ToolbarView;
        private _detailSplitView;
        readonly detailSplitView: SplitView;
        private _detailViewToolbarView;
        readonly detailViewToolbarView: ToolbarView;
        readonly detailViewToolbar: Toolbar;
        private _treeViewToolbar;
        readonly treeViewToolbar: Toolbar;
        private _listSelectedItem;
        readonly listSelectedItem: ExplorerItem;
        private _listViewToolbar;
        readonly listViewToolbar: Toolbar;
        private _loadBar;
        readonly loadBar: HTMLDivElement;
        private _detailView;
        readonly detailView: View;
        private _listView;
        readonly listView: ListView;
        private _paginator;
        readonly paginator: PaginationItem;
        private _treeSelectedItem;
        readonly treeSelectedItem: ExplorerItem;
        private _treeView;
        readonly treeView: TreeView;
        detailVisible: boolean;
    }
}
declare module latte {
    class Action {
        private _buttons;
        private _checked;
        private _description;
        private _enabled;
        private _icon;
        private _text;
        actions: Collection<Action>;
        execute: LatteEvent;
        constructor(text?: string, icon?: IconItem, execute?: () => any, description?: string);
        checked: boolean;
        description: string;
        enabled: boolean;
        getButton(): ButtonItem;
        icon: IconItem;
        text: string;
    }
}
declare module latte {
    enum DateSelectionMode {
        DAY = 0,
        MANUAL = 1,
        MONTH = 2,
        WEEK = 3,
        WORKWEEK = 4
    }
}
declare module latte {
    enum Direction {
        HORIZONTAL = 0,
        VERTICAL = 1,
        NONE = 2
    }
}
declare module latte {
    class DragDropReorder {
        constructor(container: HTMLElement, items: Collection<Item>, sorted?: () => any);
        private handleBeingDragged;
        private handleDrop;
        private itemAt;
        correctCollection(): void;
        mouseMove(e: MouseEvent): void;
        onAddItem(item: Item): void;
        onSorted(): void;
        onSpacerCreated(): void;
        private _sorted;
        readonly sorted: LatteEvent;
        private _spacerCreated;
        readonly spacerCreated: LatteEvent;
        private _container;
        readonly container: HTMLElement;
        private _flowDirection;
        flowDirection: Direction;
        private _items;
        readonly items: Collection<Item>;
        private _spacer;
        readonly spacer: HTMLElement;
    }
}
declare module latte {
    class Navigation {
        private static _hash;
        private static _lock;
        static path: Array<string>;
        static hashChanged: LatteEvent;
        static staticConstructor(): void;
        static hash: string;
        static setHash(value: string, silent?: boolean): typeof Navigation;
        static onHashChanged(hash: string): void;
    }
}
declare module latte {
    enum Side {
        AUTO = 1,
        BOTTOM = 4,
        LEFT = 8,
        RIGHT = 16,
        TOP = 32
    }
}
declare module latte {
    enum Transition {
        FADE = 0,
        SWIPE_FORWARD = 1
    }
}
declare module latte {
    class ZIndex {
        static elements: Array<JQuery>;
        static bringToFront(element: JQuery): void;
        static removeElement(element: JQuery): void;
        static updateZIndexes(): void;
    }
}
declare module latte {
    class IconItem extends Item {
        static sidebar_left_getter: () => IconItem;
        static sidebar_right_getter: () => IconItem;
        static readonly defaultUrl: string;
        static empty(size?: number): IconItem;
        static standard(u: number, v: number, size?: number): IconItem;
        static fileIcon(): IconItem;
        static folderIcon(): IconItem;
        static homeIcon(): IconItem;
        static newIcon(): IconItem;
        static saveIcon(): IconItem;
        static refreshIcon(): IconItem;
        static sidebarLeft(): IconItem;
        static sidebarRight(): IconItem;
        static editIcon(): IconItem;
        static deleteIcon(): IconItem;
        constructor();
        clone(): IconItem;
        private _name;
        name: string;
        private _size;
        size: number;
        u: number;
        private _u;
        private _url;
        url: string;
        private _v;
        v: number;
        private _x;
        x: number;
        private _y;
        y: number;
    }
}
declare module latte {
    class ColorIconItem extends IconItem {
        constructor(color: Color, size?: number);
        private _color;
        color: Color;
    }
}
declare module latte {
    class Glyph extends IconItem {
        static readonly defaultUrl: string;
        private static _byLocation;
        static readonly add: Glyph;
        static readonly check: Glyph;
        static readonly checked: Glyph;
        static readonly checkedRadio: Glyph;
        static readonly chevron: Glyph;
        static readonly collapse: Glyph;
        static readonly collapseRibbon: Glyph;
        static readonly collapseWidget: Glyph;
        static readonly expandWidget: Glyph;
        static readonly dismiss: Glyph;
        static readonly down: Glyph;
        static readonly expand: Glyph;
        static readonly grip: Glyph;
        static readonly left: Glyph;
        static readonly maximize: Glyph;
        static readonly minimize: Glyph;
        static readonly note: Glyph;
        static readonly right: Glyph;
        static readonly unchecked: Glyph;
        static readonly uncheckedRadio: Glyph;
        static readonly up: Glyph;
        constructor();
    }
}
declare module latte {
    class ImageItem extends Item {
        private _autoSize;
        imageElement: JQuery;
        constructor();
        autoSize: boolean;
        src: string;
    }
}
declare module latte {
    class Linear {
        static readonly home2: LinearIcon;
        static readonly home: LinearIcon;
        static readonly home3: LinearIcon;
        static readonly home5: LinearIcon;
        static readonly home4: LinearIcon;
        static readonly home6: LinearIcon;
        static readonly toothbrush: LinearIcon;
        static readonly bathtub: LinearIcon;
        static readonly bed: LinearIcon;
        static readonly chair: LinearIcon;
        static readonly couch: LinearIcon;
        static readonly city: LinearIcon;
        static readonly pencil: LinearIcon;
        static readonly apartment: LinearIcon;
        static readonly pencil2: LinearIcon;
        static readonly pencil3: LinearIcon;
        static readonly pen: LinearIcon;
        static readonly eraser: LinearIcon;
        static readonly pencil5: LinearIcon;
        static readonly pencil4: LinearIcon;
        static readonly feather: LinearIcon;
        static readonly feather3: LinearIcon;
        static readonly feather2: LinearIcon;
        static readonly pen2: LinearIcon;
        static readonly pen_remove: LinearIcon;
        static readonly pen_add: LinearIcon;
        static readonly vector: LinearIcon;
        static readonly blog: LinearIcon;
        static readonly pen3: LinearIcon;
        static readonly brush: LinearIcon;
        static readonly spray: LinearIcon;
        static readonly brush2: LinearIcon;
        static readonly paint_roller: LinearIcon;
        static readonly tape: LinearIcon;
        static readonly stamp: LinearIcon;
        static readonly desk_tape: LinearIcon;
        static readonly eye_dropper: LinearIcon;
        static readonly texture: LinearIcon;
        static readonly palette: LinearIcon;
        static readonly bucket: LinearIcon;
        static readonly color_sampler: LinearIcon;
        static readonly gradient: LinearIcon;
        static readonly magic_wand: LinearIcon;
        static readonly gradient2: LinearIcon;
        static readonly magnet: LinearIcon;
        static readonly pencil_ruler2: LinearIcon;
        static readonly pencil_ruler: LinearIcon;
        static readonly compass: LinearIcon;
        static readonly gun: LinearIcon;
        static readonly aim: LinearIcon;
        static readonly bottle: LinearIcon;
        static readonly drop_crossed: LinearIcon;
        static readonly drop: LinearIcon;
        static readonly drop2: LinearIcon;
        static readonly snow2: LinearIcon;
        static readonly snow: LinearIcon;
        static readonly fire: LinearIcon;
        static readonly knife: LinearIcon;
        static readonly lighter: LinearIcon;
        static readonly dagger: LinearIcon;
        static readonly toilet_paper: LinearIcon;
        static readonly tissue: LinearIcon;
        static readonly poop: LinearIcon;
        static readonly umbrella: LinearIcon;
        static readonly umbrella2: LinearIcon;
        static readonly rain: LinearIcon;
        static readonly tornado: LinearIcon;
        static readonly wind: LinearIcon;
        static readonly fan: LinearIcon;
        static readonly contrast: LinearIcon;
        static readonly sun_small: LinearIcon;
        static readonly sun: LinearIcon;
        static readonly sun2: LinearIcon;
        static readonly moon: LinearIcon;
        static readonly cloud: LinearIcon;
        static readonly cloud_upload: LinearIcon;
        static readonly cloud_download: LinearIcon;
        static readonly cloud_rain: LinearIcon;
        static readonly cloud_hailstones: LinearIcon;
        static readonly cloud_snow: LinearIcon;
        static readonly cloud_windy: LinearIcon;
        static readonly sun_wind: LinearIcon;
        static readonly cloud_fog: LinearIcon;
        static readonly cloud_sun: LinearIcon;
        static readonly cloud_lightning: LinearIcon;
        static readonly cloud_sync: LinearIcon;
        static readonly cloud_lock: LinearIcon;
        static readonly cloud_gear: LinearIcon;
        static readonly cloud_alert: LinearIcon;
        static readonly cloud_check: LinearIcon;
        static readonly cloud_cross: LinearIcon;
        static readonly cloud_crossed: LinearIcon;
        static readonly cloud_database: LinearIcon;
        static readonly database: LinearIcon;
        static readonly database_add: LinearIcon;
        static readonly database_remove: LinearIcon;
        static readonly database_lock: LinearIcon;
        static readonly database_refresh: LinearIcon;
        static readonly database_check: LinearIcon;
        static readonly database_history: LinearIcon;
        static readonly database_upload: LinearIcon;
        static readonly database_download: LinearIcon;
        static readonly server: LinearIcon;
        static readonly shield: LinearIcon;
        static readonly shield_check: LinearIcon;
        static readonly shield_alert: LinearIcon;
        static readonly shield_cross: LinearIcon;
        static readonly lock: LinearIcon;
        static readonly rotation_lock: LinearIcon;
        static readonly unlock: LinearIcon;
        static readonly key: LinearIcon;
        static readonly key_hole: LinearIcon;
        static readonly toggle_off: LinearIcon;
        static readonly toggle_on: LinearIcon;
        static readonly cog: LinearIcon;
        static readonly cog2: LinearIcon;
        static readonly wrench: LinearIcon;
        static readonly screwdriver: LinearIcon;
        static readonly hammer_wrench: LinearIcon;
        static readonly hammer: LinearIcon;
        static readonly saw: LinearIcon;
        static readonly axe: LinearIcon;
        static readonly axe2: LinearIcon;
        static readonly shovel: LinearIcon;
        static readonly pickaxe: LinearIcon;
        static readonly factory: LinearIcon;
        static readonly factory2: LinearIcon;
        static readonly recycle: LinearIcon;
        static readonly trash: LinearIcon;
        static readonly trash2: LinearIcon;
        static readonly trash3: LinearIcon;
        static readonly broom: LinearIcon;
        static readonly game: LinearIcon;
        static readonly gamepad: LinearIcon;
        static readonly joystick: LinearIcon;
        static readonly dice: LinearIcon;
        static readonly spades: LinearIcon;
        static readonly diamonds: LinearIcon;
        static readonly clubs: LinearIcon;
        static readonly hearts: LinearIcon;
        static readonly heart: LinearIcon;
        static readonly star: LinearIcon;
        static readonly star_half: LinearIcon;
        static readonly star_empty: LinearIcon;
        static readonly flag: LinearIcon;
        static readonly flag2: LinearIcon;
        static readonly flag3: LinearIcon;
        static readonly mailbox_full: LinearIcon;
        static readonly mailbox_empty: LinearIcon;
        static readonly at_sign: LinearIcon;
        static readonly envelope: LinearIcon;
        static readonly envelope_open: LinearIcon;
        static readonly paperclip: LinearIcon;
        static readonly paper_plane: LinearIcon;
        static readonly reply: LinearIcon;
        static readonly reply_all: LinearIcon;
        static readonly inbox: LinearIcon;
        static readonly inbox2: LinearIcon;
        static readonly outbox: LinearIcon;
        static readonly box: LinearIcon;
        static readonly archive: LinearIcon;
        static readonly archive2: LinearIcon;
        static readonly drawers: LinearIcon;
        static readonly drawers2: LinearIcon;
        static readonly drawers3: LinearIcon;
        static readonly eye: LinearIcon;
        static readonly eye_crossed: LinearIcon;
        static readonly eye_plus: LinearIcon;
        static readonly eye_minus: LinearIcon;
        static readonly binoculars: LinearIcon;
        static readonly binoculars2: LinearIcon;
        static readonly hdd: LinearIcon;
        static readonly hdd_down: LinearIcon;
        static readonly hdd_up: LinearIcon;
        static readonly floppy_disk: LinearIcon;
        static readonly disc: LinearIcon;
        static readonly tape2: LinearIcon;
        static readonly printer: LinearIcon;
        static readonly shredder: LinearIcon;
        static readonly file_empty: LinearIcon;
        static readonly file_add: LinearIcon;
        static readonly file_check: LinearIcon;
        static readonly file_lock: LinearIcon;
        static readonly files: LinearIcon;
        static readonly copy: LinearIcon;
        static readonly compare: LinearIcon;
        static readonly folder: LinearIcon;
        static readonly folder_search: LinearIcon;
        static readonly folder_plus: LinearIcon;
        static readonly folder_minus: LinearIcon;
        static readonly folder_download: LinearIcon;
        static readonly folder_upload: LinearIcon;
        static readonly folder_star: LinearIcon;
        static readonly folder_heart: LinearIcon;
        static readonly folder_user: LinearIcon;
        static readonly folder_shared: LinearIcon;
        static readonly folder_music: LinearIcon;
        static readonly folder_picture: LinearIcon;
        static readonly folder_film: LinearIcon;
        static readonly scissors: LinearIcon;
        static readonly paste: LinearIcon;
        static readonly clipboard_empty: LinearIcon;
        static readonly clipboard_pencil: LinearIcon;
        static readonly clipboard_text: LinearIcon;
        static readonly clipboard_check: LinearIcon;
        static readonly clipboard_down: LinearIcon;
        static readonly clipboard_left: LinearIcon;
        static readonly clipboard_alert: LinearIcon;
        static readonly clipboard_user: LinearIcon;
        static readonly register: LinearIcon;
        static readonly enter: LinearIcon;
        static readonly exit: LinearIcon;
        static readonly papers: LinearIcon;
        static readonly news: LinearIcon;
        static readonly reading: LinearIcon;
        static readonly typewriter: LinearIcon;
        static readonly document: LinearIcon;
        static readonly document2: LinearIcon;
        static readonly graduation_hat: LinearIcon;
        static readonly license: LinearIcon;
        static readonly license2: LinearIcon;
        static readonly medal_empty: LinearIcon;
        static readonly medal_first: LinearIcon;
        static readonly medal_second: LinearIcon;
        static readonly medal_third: LinearIcon;
        static readonly podium: LinearIcon;
        static readonly trophy: LinearIcon;
        static readonly trophy2: LinearIcon;
        static readonly music_note: LinearIcon;
        static readonly music_note2: LinearIcon;
        static readonly music_note3: LinearIcon;
        static readonly playlist: LinearIcon;
        static readonly playlist_add: LinearIcon;
        static readonly guitar: LinearIcon;
        static readonly trumpet: LinearIcon;
        static readonly album: LinearIcon;
        static readonly shuffle: LinearIcon;
        static readonly repeat_one: LinearIcon;
        static readonly repeat: LinearIcon;
        static readonly headphones: LinearIcon;
        static readonly headset: LinearIcon;
        static readonly loudspeaker: LinearIcon;
        static readonly equalizer: LinearIcon;
        static readonly theater: LinearIcon;
        static readonly _3d_glasses: LinearIcon;
        static readonly ticket: LinearIcon;
        static readonly presentation: LinearIcon;
        static readonly play: LinearIcon;
        static readonly film_play: LinearIcon;
        static readonly clapboard_play: LinearIcon;
        static readonly media: LinearIcon;
        static readonly film: LinearIcon;
        static readonly film2: LinearIcon;
        static readonly surveillance: LinearIcon;
        static readonly surveillance2: LinearIcon;
        static readonly camera: LinearIcon;
        static readonly camera_crossed: LinearIcon;
        static readonly camera_play: LinearIcon;
        static readonly time_lapse: LinearIcon;
        static readonly record: LinearIcon;
        static readonly camera2: LinearIcon;
        static readonly camera_flip: LinearIcon;
        static readonly panorama: LinearIcon;
        static readonly time_lapse2: LinearIcon;
        static readonly shutter: LinearIcon;
        static readonly shutter2: LinearIcon;
        static readonly face_detection: LinearIcon;
        static readonly flare: LinearIcon;
        static readonly convex: LinearIcon;
        static readonly concave: LinearIcon;
        static readonly picture: LinearIcon;
        static readonly picture2: LinearIcon;
        static readonly picture3: LinearIcon;
        static readonly pictures: LinearIcon;
        static readonly book: LinearIcon;
        static readonly audio_book: LinearIcon;
        static readonly book2: LinearIcon;
        static readonly bookmark: LinearIcon;
        static readonly bookmark2: LinearIcon;
        static readonly label: LinearIcon;
        static readonly library: LinearIcon;
        static readonly library2: LinearIcon;
        static readonly contacts: LinearIcon;
        static readonly profile: LinearIcon;
        static readonly portrait: LinearIcon;
        static readonly portrait2: LinearIcon;
        static readonly user: LinearIcon;
        static readonly user_plus: LinearIcon;
        static readonly user_minus: LinearIcon;
        static readonly user_lock: LinearIcon;
        static readonly users: LinearIcon;
        static readonly users2: LinearIcon;
        static readonly users_plus: LinearIcon;
        static readonly users_minus: LinearIcon;
        static readonly group_work: LinearIcon;
        static readonly woman: LinearIcon;
        static readonly man: LinearIcon;
        static readonly baby: LinearIcon;
        static readonly baby2: LinearIcon;
        static readonly baby3: LinearIcon;
        static readonly baby_bottle: LinearIcon;
        static readonly walk: LinearIcon;
        static readonly hand_waving: LinearIcon;
        static readonly jump: LinearIcon;
        static readonly run: LinearIcon;
        static readonly woman2: LinearIcon;
        static readonly man2: LinearIcon;
        static readonly man_woman: LinearIcon;
        static readonly height: LinearIcon;
        static readonly weight: LinearIcon;
        static readonly scale: LinearIcon;
        static readonly button: LinearIcon;
        static readonly bow_tie: LinearIcon;
        static readonly tie: LinearIcon;
        static readonly socks: LinearIcon;
        static readonly shoe: LinearIcon;
        static readonly shoes: LinearIcon;
        static readonly hat: LinearIcon;
        static readonly pants: LinearIcon;
        static readonly shorts: LinearIcon;
        static readonly flip_flops: LinearIcon;
        static readonly shirt: LinearIcon;
        static readonly hanger: LinearIcon;
        static readonly laundry: LinearIcon;
        static readonly store: LinearIcon;
        static readonly haircut: LinearIcon;
        static readonly store_24: LinearIcon;
        static readonly barcode: LinearIcon;
        static readonly barcode2: LinearIcon;
        static readonly barcode3: LinearIcon;
        static readonly cashier: LinearIcon;
        static readonly bag: LinearIcon;
        static readonly bag2: LinearIcon;
        static readonly cart: LinearIcon;
        static readonly cart_empty: LinearIcon;
        static readonly cart_full: LinearIcon;
        static readonly cart_plus: LinearIcon;
        static readonly cart_plus2: LinearIcon;
        static readonly cart_add: LinearIcon;
        static readonly cart_remove: LinearIcon;
        static readonly cart_exchange: LinearIcon;
        static readonly tag: LinearIcon;
        static readonly tags: LinearIcon;
        static readonly receipt: LinearIcon;
        static readonly wallet: LinearIcon;
        static readonly credit_card: LinearIcon;
        static readonly cash_dollar: LinearIcon;
        static readonly cash_euro: LinearIcon;
        static readonly cash_pound: LinearIcon;
        static readonly cash_yen: LinearIcon;
        static readonly bag_dollar: LinearIcon;
        static readonly bag_euro: LinearIcon;
        static readonly bag_pound: LinearIcon;
        static readonly bag_yen: LinearIcon;
        static readonly coin_dollar: LinearIcon;
        static readonly coin_euro: LinearIcon;
        static readonly coin_pound: LinearIcon;
        static readonly coin_yen: LinearIcon;
        static readonly calculator: LinearIcon;
        static readonly calculator2: LinearIcon;
        static readonly abacus: LinearIcon;
        static readonly vault: LinearIcon;
        static readonly telephone: LinearIcon;
        static readonly phone_lock: LinearIcon;
        static readonly phone_wave: LinearIcon;
        static readonly phone_pause: LinearIcon;
        static readonly phone_outgoing: LinearIcon;
        static readonly phone_incoming: LinearIcon;
        static readonly phone_in_out: LinearIcon;
        static readonly phone_error: LinearIcon;
        static readonly phone_sip: LinearIcon;
        static readonly phone_plus: LinearIcon;
        static readonly phone_minus: LinearIcon;
        static readonly voicemail: LinearIcon;
        static readonly dial: LinearIcon;
        static readonly telephone2: LinearIcon;
        static readonly pushpin: LinearIcon;
        static readonly pushpin2: LinearIcon;
        static readonly map_marker: LinearIcon;
        static readonly map_marker_user: LinearIcon;
        static readonly map_marker_down: LinearIcon;
        static readonly map_marker_check: LinearIcon;
        static readonly map_marker_crossed: LinearIcon;
        static readonly radar: LinearIcon;
        static readonly compass2: LinearIcon;
        static readonly map: LinearIcon;
        static readonly map2: LinearIcon;
        static readonly location: LinearIcon;
        static readonly road_sign: LinearIcon;
        static readonly calendar_empty: LinearIcon;
        static readonly calendar_check: LinearIcon;
        static readonly calendar_cross: LinearIcon;
        static readonly calendar_31: LinearIcon;
        static readonly calendar_full: LinearIcon;
        static readonly calendar_insert: LinearIcon;
        static readonly calendar_text: LinearIcon;
        static readonly calendar_user: LinearIcon;
        static readonly mouse: LinearIcon;
        static readonly mouse_left: LinearIcon;
        static readonly mouse_right: LinearIcon;
        static readonly mouse_both: LinearIcon;
        static readonly keyboard: LinearIcon;
        static readonly keyboard_up: LinearIcon;
        static readonly keyboard_down: LinearIcon;
        static readonly delete: LinearIcon;
        static readonly spell_check: LinearIcon;
        static readonly escape: LinearIcon;
        static readonly enter2: LinearIcon;
        static readonly screen: LinearIcon;
        static readonly aspect_ratio: LinearIcon;
        static readonly signal: LinearIcon;
        static readonly signal_lock: LinearIcon;
        static readonly signal_80: LinearIcon;
        static readonly signal_60: LinearIcon;
        static readonly signal_40: LinearIcon;
        static readonly signal_20: LinearIcon;
        static readonly signal_0: LinearIcon;
        static readonly signal_blocked: LinearIcon;
        static readonly sim: LinearIcon;
        static readonly flash_memory: LinearIcon;
        static readonly usb_drive: LinearIcon;
        static readonly phone: LinearIcon;
        static readonly smartphone: LinearIcon;
        static readonly smartphone_notification: LinearIcon;
        static readonly smartphone_vibration: LinearIcon;
        static readonly smartphone_embed: LinearIcon;
        static readonly smartphone_waves: LinearIcon;
        static readonly tablet: LinearIcon;
        static readonly tablet2: LinearIcon;
        static readonly laptop: LinearIcon;
        static readonly laptop_phone: LinearIcon;
        static readonly desktop: LinearIcon;
        static readonly launch: LinearIcon;
        static readonly new_tab: LinearIcon;
        static readonly window: LinearIcon;
        static readonly cable: LinearIcon;
        static readonly cable2: LinearIcon;
        static readonly tv: LinearIcon;
        static readonly radio: LinearIcon;
        static readonly remote_control: LinearIcon;
        static readonly power_switch: LinearIcon;
        static readonly power: LinearIcon;
        static readonly power_crossed: LinearIcon;
        static readonly flash_auto: LinearIcon;
        static readonly lamp: LinearIcon;
        static readonly flashlight: LinearIcon;
        static readonly lampshade: LinearIcon;
        static readonly cord: LinearIcon;
        static readonly outlet: LinearIcon;
        static readonly battery_power: LinearIcon;
        static readonly battery_empty: LinearIcon;
        static readonly battery_alert: LinearIcon;
        static readonly battery_error: LinearIcon;
        static readonly battery_low1: LinearIcon;
        static readonly battery_low2: LinearIcon;
        static readonly battery_low3: LinearIcon;
        static readonly battery_mid1: LinearIcon;
        static readonly battery_mid2: LinearIcon;
        static readonly battery_mid3: LinearIcon;
        static readonly battery_full: LinearIcon;
        static readonly battery_charging: LinearIcon;
        static readonly battery_charging2: LinearIcon;
        static readonly battery_charging3: LinearIcon;
        static readonly battery_charging4: LinearIcon;
        static readonly battery_charging5: LinearIcon;
        static readonly battery_charging6: LinearIcon;
        static readonly battery_charging7: LinearIcon;
        static readonly chip: LinearIcon;
        static readonly chip_x64: LinearIcon;
        static readonly chip_x86: LinearIcon;
        static readonly bubble: LinearIcon;
        static readonly bubbles: LinearIcon;
        static readonly bubble_dots: LinearIcon;
        static readonly bubble_alert: LinearIcon;
        static readonly bubble_question: LinearIcon;
        static readonly bubble_text: LinearIcon;
        static readonly bubble_pencil: LinearIcon;
        static readonly bubble_picture: LinearIcon;
        static readonly bubble_video: LinearIcon;
        static readonly bubble_user: LinearIcon;
        static readonly bubble_quote: LinearIcon;
        static readonly bubble_heart: LinearIcon;
        static readonly bubble_emoticon: LinearIcon;
        static readonly bubble_attachment: LinearIcon;
        static readonly phone_bubble: LinearIcon;
        static readonly quote_open: LinearIcon;
        static readonly quote_close: LinearIcon;
        static readonly dna: LinearIcon;
        static readonly heart_pulse: LinearIcon;
        static readonly pulse: LinearIcon;
        static readonly syringe: LinearIcon;
        static readonly pills: LinearIcon;
        static readonly first_aid: LinearIcon;
        static readonly lifebuoy: LinearIcon;
        static readonly bandage: LinearIcon;
        static readonly bandages: LinearIcon;
        static readonly thermometer: LinearIcon;
        static readonly microscope: LinearIcon;
        static readonly brain: LinearIcon;
        static readonly beaker: LinearIcon;
        static readonly skull: LinearIcon;
        static readonly bone: LinearIcon;
        static readonly construction: LinearIcon;
        static readonly construction_cone: LinearIcon;
        static readonly pie_chart: LinearIcon;
        static readonly pie_chart2: LinearIcon;
        static readonly graph: LinearIcon;
        static readonly chart_growth: LinearIcon;
        static readonly chart_bars: LinearIcon;
        static readonly chart_settings: LinearIcon;
        static readonly cake: LinearIcon;
        static readonly gift: LinearIcon;
        static readonly balloon: LinearIcon;
        static readonly rank: LinearIcon;
        static readonly rank2: LinearIcon;
        static readonly rank3: LinearIcon;
        static readonly crown: LinearIcon;
        static readonly lotus: LinearIcon;
        static readonly diamond: LinearIcon;
        static readonly diamond2: LinearIcon;
        static readonly diamond3: LinearIcon;
        static readonly diamond4: LinearIcon;
        static readonly linearicons: LinearIcon;
        static readonly teacup: LinearIcon;
        static readonly teapot: LinearIcon;
        static readonly glass: LinearIcon;
        static readonly bottle2: LinearIcon;
        static readonly glass_cocktail: LinearIcon;
        static readonly glass2: LinearIcon;
        static readonly dinner: LinearIcon;
        static readonly dinner2: LinearIcon;
        static readonly chef: LinearIcon;
        static readonly scale2: LinearIcon;
        static readonly egg: LinearIcon;
        static readonly egg2: LinearIcon;
        static readonly eggs: LinearIcon;
        static readonly platter: LinearIcon;
        static readonly steak: LinearIcon;
        static readonly hamburger: LinearIcon;
        static readonly hotdog: LinearIcon;
        static readonly pizza: LinearIcon;
        static readonly sausage: LinearIcon;
        static readonly chicken: LinearIcon;
        static readonly fish: LinearIcon;
        static readonly carrot: LinearIcon;
        static readonly cheese: LinearIcon;
        static readonly bread: LinearIcon;
        static readonly ice_cream: LinearIcon;
        static readonly ice_cream2: LinearIcon;
        static readonly candy: LinearIcon;
        static readonly lollipop: LinearIcon;
        static readonly coffee_bean: LinearIcon;
        static readonly coffee_cup: LinearIcon;
        static readonly cherry: LinearIcon;
        static readonly grapes: LinearIcon;
        static readonly citrus: LinearIcon;
        static readonly apple: LinearIcon;
        static readonly leaf: LinearIcon;
        static readonly landscape: LinearIcon;
        static readonly pine_tree: LinearIcon;
        static readonly tree: LinearIcon;
        static readonly cactus: LinearIcon;
        static readonly paw: LinearIcon;
        static readonly footprint: LinearIcon;
        static readonly speed_slow: LinearIcon;
        static readonly speed_medium: LinearIcon;
        static readonly speed_fast: LinearIcon;
        static readonly rocket: LinearIcon;
        static readonly hammer2: LinearIcon;
        static readonly balance: LinearIcon;
        static readonly briefcase: LinearIcon;
        static readonly luggage_weight: LinearIcon;
        static readonly dolly: LinearIcon;
        static readonly plane: LinearIcon;
        static readonly plane_crossed: LinearIcon;
        static readonly helicopter: LinearIcon;
        static readonly traffic_lights: LinearIcon;
        static readonly siren: LinearIcon;
        static readonly road: LinearIcon;
        static readonly engine: LinearIcon;
        static readonly oil_pressure: LinearIcon;
        static readonly coolant_temperature: LinearIcon;
        static readonly car_battery: LinearIcon;
        static readonly gas: LinearIcon;
        static readonly gallon: LinearIcon;
        static readonly transmission: LinearIcon;
        static readonly car: LinearIcon;
        static readonly car_wash: LinearIcon;
        static readonly car_wash2: LinearIcon;
        static readonly bus: LinearIcon;
        static readonly bus2: LinearIcon;
        static readonly car2: LinearIcon;
        static readonly parking: LinearIcon;
        static readonly car_lock: LinearIcon;
        static readonly taxi: LinearIcon;
        static readonly car_siren: LinearIcon;
        static readonly car_wash3: LinearIcon;
        static readonly car_wash4: LinearIcon;
        static readonly ambulance: LinearIcon;
        static readonly truck: LinearIcon;
        static readonly trailer: LinearIcon;
        static readonly scale_truck: LinearIcon;
        static readonly train: LinearIcon;
        static readonly ship: LinearIcon;
        static readonly ship2: LinearIcon;
        static readonly anchor: LinearIcon;
        static readonly boat: LinearIcon;
        static readonly bicycle: LinearIcon;
        static readonly bicycle2: LinearIcon;
        static readonly dumbbell: LinearIcon;
        static readonly bench_press: LinearIcon;
        static readonly swim: LinearIcon;
        static readonly football: LinearIcon;
        static readonly baseball_bat: LinearIcon;
        static readonly baseball: LinearIcon;
        static readonly tennis: LinearIcon;
        static readonly tennis2: LinearIcon;
        static readonly ping_pong: LinearIcon;
        static readonly hockey: LinearIcon;
        static readonly _8ball: LinearIcon;
        static readonly bowling: LinearIcon;
        static readonly bowling_pins: LinearIcon;
        static readonly golf: LinearIcon;
        static readonly golf2: LinearIcon;
        static readonly archery: LinearIcon;
        static readonly slingshot: LinearIcon;
        static readonly soccer: LinearIcon;
        static readonly basketball: LinearIcon;
        static readonly cube: LinearIcon;
        static readonly _3d_rotate: LinearIcon;
        static readonly puzzle: LinearIcon;
        static readonly glasses: LinearIcon;
        static readonly glasses2: LinearIcon;
        static readonly accessibility: LinearIcon;
        static readonly wheelchair: LinearIcon;
        static readonly wall: LinearIcon;
        static readonly fence: LinearIcon;
        static readonly wall2: LinearIcon;
        static readonly icons: LinearIcon;
        static readonly resize_handle: LinearIcon;
        static readonly icons2: LinearIcon;
        static readonly select: LinearIcon;
        static readonly select2: LinearIcon;
        static readonly site_map: LinearIcon;
        static readonly earth: LinearIcon;
        static readonly earth_lock: LinearIcon;
        static readonly network: LinearIcon;
        static readonly network_lock: LinearIcon;
        static readonly planet: LinearIcon;
        static readonly happy: LinearIcon;
        static readonly smile: LinearIcon;
        static readonly grin: LinearIcon;
        static readonly tongue: LinearIcon;
        static readonly sad: LinearIcon;
        static readonly wink: LinearIcon;
        static readonly dream: LinearIcon;
        static readonly shocked: LinearIcon;
        static readonly shocked2: LinearIcon;
        static readonly tongue2: LinearIcon;
        static readonly neutral: LinearIcon;
        static readonly happy_grin: LinearIcon;
        static readonly cool: LinearIcon;
        static readonly mad: LinearIcon;
        static readonly grin_evil: LinearIcon;
        static readonly evil: LinearIcon;
        static readonly wow: LinearIcon;
        static readonly annoyed: LinearIcon;
        static readonly wondering: LinearIcon;
        static readonly confused: LinearIcon;
        static readonly zipped: LinearIcon;
        static readonly grumpy: LinearIcon;
        static readonly mustache: LinearIcon;
        static readonly tombstone_hipster: LinearIcon;
        static readonly tombstone: LinearIcon;
        static readonly ghost: LinearIcon;
        static readonly ghost_hipster: LinearIcon;
        static readonly halloween: LinearIcon;
        static readonly christmas: LinearIcon;
        static readonly easter_egg: LinearIcon;
        static readonly mustache2: LinearIcon;
        static readonly mustache_glasses: LinearIcon;
        static readonly pipe: LinearIcon;
        static readonly alarm: LinearIcon;
        static readonly alarm_add: LinearIcon;
        static readonly alarm_snooze: LinearIcon;
        static readonly alarm_ringing: LinearIcon;
        static readonly bullhorn: LinearIcon;
        static readonly hearing: LinearIcon;
        static readonly volume_high: LinearIcon;
        static readonly volume_medium: LinearIcon;
        static readonly volume_low: LinearIcon;
        static readonly volume: LinearIcon;
        static readonly mute: LinearIcon;
        static readonly lan: LinearIcon;
        static readonly lan2: LinearIcon;
        static readonly wifi: LinearIcon;
        static readonly wifi_lock: LinearIcon;
        static readonly wifi_blocked: LinearIcon;
        static readonly wifi_mid: LinearIcon;
        static readonly wifi_low: LinearIcon;
        static readonly wifi_low2: LinearIcon;
        static readonly wifi_alert: LinearIcon;
        static readonly wifi_alert_mid: LinearIcon;
        static readonly wifi_alert_low: LinearIcon;
        static readonly wifi_alert_low2: LinearIcon;
        static readonly stream: LinearIcon;
        static readonly stream_check: LinearIcon;
        static readonly stream_error: LinearIcon;
        static readonly stream_alert: LinearIcon;
        static readonly communication: LinearIcon;
        static readonly communication_crossed: LinearIcon;
        static readonly broadcast: LinearIcon;
        static readonly antenna: LinearIcon;
        static readonly satellite: LinearIcon;
        static readonly satellite2: LinearIcon;
        static readonly mic: LinearIcon;
        static readonly mic_mute: LinearIcon;
        static readonly mic2: LinearIcon;
        static readonly spotlights: LinearIcon;
        static readonly hourglass: LinearIcon;
        static readonly loading: LinearIcon;
        static readonly loading2: LinearIcon;
        static readonly loading3: LinearIcon;
        static readonly refresh: LinearIcon;
        static readonly refresh2: LinearIcon;
        static readonly undo: LinearIcon;
        static readonly redo: LinearIcon;
        static readonly jump2: LinearIcon;
        static readonly undo2: LinearIcon;
        static readonly redo2: LinearIcon;
        static readonly sync: LinearIcon;
        static readonly repeat_one2: LinearIcon;
        static readonly sync_crossed: LinearIcon;
        static readonly sync2: LinearIcon;
        static readonly repeat_one3: LinearIcon;
        static readonly sync_crossed2: LinearIcon;
        static readonly return: LinearIcon;
        static readonly return2: LinearIcon;
        static readonly refund: LinearIcon;
        static readonly history: LinearIcon;
        static readonly history2: LinearIcon;
        static readonly self_timer: LinearIcon;
        static readonly clock: LinearIcon;
        static readonly clock2: LinearIcon;
        static readonly clock3: LinearIcon;
        static readonly watch: LinearIcon;
        static readonly alarm2: LinearIcon;
        static readonly alarm_add2: LinearIcon;
        static readonly alarm_remove: LinearIcon;
        static readonly alarm_check: LinearIcon;
        static readonly alarm_error: LinearIcon;
        static readonly timer: LinearIcon;
        static readonly timer_crossed: LinearIcon;
        static readonly timer2: LinearIcon;
        static readonly timer_crossed2: LinearIcon;
        static readonly download: LinearIcon;
        static readonly upload: LinearIcon;
        static readonly download2: LinearIcon;
        static readonly upload2: LinearIcon;
        static readonly enter_up: LinearIcon;
        static readonly enter_down: LinearIcon;
        static readonly enter_left: LinearIcon;
        static readonly enter_right: LinearIcon;
        static readonly exit_up: LinearIcon;
        static readonly exit_down: LinearIcon;
        static readonly exit_left: LinearIcon;
        static readonly exit_right: LinearIcon;
        static readonly enter_up2: LinearIcon;
        static readonly enter_down2: LinearIcon;
        static readonly enter_vertical: LinearIcon;
        static readonly enter_left2: LinearIcon;
        static readonly enter_right2: LinearIcon;
        static readonly enter_horizontal: LinearIcon;
        static readonly exit_up2: LinearIcon;
        static readonly exit_down2: LinearIcon;
        static readonly exit_left2: LinearIcon;
        static readonly exit_right2: LinearIcon;
        static readonly cli: LinearIcon;
        static readonly bug: LinearIcon;
        static readonly code: LinearIcon;
        static readonly file_code: LinearIcon;
        static readonly file_image: LinearIcon;
        static readonly file_zip: LinearIcon;
        static readonly file_audio: LinearIcon;
        static readonly file_video: LinearIcon;
        static readonly file_preview: LinearIcon;
        static readonly file_charts: LinearIcon;
        static readonly file_stats: LinearIcon;
        static readonly file_spreadsheet: LinearIcon;
        static readonly link: LinearIcon;
        static readonly unlink: LinearIcon;
        static readonly link2: LinearIcon;
        static readonly unlink2: LinearIcon;
        static readonly thumbs_up: LinearIcon;
        static readonly thumbs_down: LinearIcon;
        static readonly thumbs_up2: LinearIcon;
        static readonly thumbs_down2: LinearIcon;
        static readonly thumbs_up3: LinearIcon;
        static readonly thumbs_down3: LinearIcon;
        static readonly share: LinearIcon;
        static readonly share2: LinearIcon;
        static readonly share3: LinearIcon;
        static readonly magnifier: LinearIcon;
        static readonly file_search: LinearIcon;
        static readonly find_replace: LinearIcon;
        static readonly zoom_in: LinearIcon;
        static readonly zoom_out: LinearIcon;
        static readonly loupe: LinearIcon;
        static readonly loupe_zoom_in: LinearIcon;
        static readonly loupe_zoom_out: LinearIcon;
        static readonly cross: LinearIcon;
        static readonly menu: LinearIcon;
        static readonly list: LinearIcon;
        static readonly list2: LinearIcon;
        static readonly list3: LinearIcon;
        static readonly menu2: LinearIcon;
        static readonly list4: LinearIcon;
        static readonly menu3: LinearIcon;
        static readonly exclamation: LinearIcon;
        static readonly question: LinearIcon;
        static readonly check: LinearIcon;
        static readonly cross2: LinearIcon;
        static readonly plus: LinearIcon;
        static readonly minus: LinearIcon;
        static readonly percent: LinearIcon;
        static readonly chevron_up: LinearIcon;
        static readonly chevron_down: LinearIcon;
        static readonly chevron_left: LinearIcon;
        static readonly chevron_right: LinearIcon;
        static readonly chevrons_expand_vertical: LinearIcon;
        static readonly chevrons_expand_horizontal: LinearIcon;
        static readonly chevrons_contract_vertical: LinearIcon;
        static readonly chevrons_contract_horizontal: LinearIcon;
        static readonly arrow_up: LinearIcon;
        static readonly arrow_down: LinearIcon;
        static readonly arrow_left: LinearIcon;
        static readonly arrow_right: LinearIcon;
        static readonly arrow_up_right: LinearIcon;
        static readonly arrows_merge: LinearIcon;
        static readonly arrows_split: LinearIcon;
        static readonly arrow_divert: LinearIcon;
        static readonly arrow_return: LinearIcon;
        static readonly expand: LinearIcon;
        static readonly contract: LinearIcon;
        static readonly expand2: LinearIcon;
        static readonly contract2: LinearIcon;
        static readonly move: LinearIcon;
        static readonly tab: LinearIcon;
        static readonly arrow_wave: LinearIcon;
        static readonly expand3: LinearIcon;
        static readonly expand4: LinearIcon;
        static readonly contract3: LinearIcon;
        static readonly notification: LinearIcon;
        static readonly warning: LinearIcon;
        static readonly notification_circle: LinearIcon;
        static readonly question_circle: LinearIcon;
        static readonly menu_circle: LinearIcon;
        static readonly checkmark_circle: LinearIcon;
        static readonly cross_circle: LinearIcon;
        static readonly plus_circle: LinearIcon;
        static readonly circle_minus: LinearIcon;
        static readonly percent_circle: LinearIcon;
        static readonly arrow_up_circle: LinearIcon;
        static readonly arrow_down_circle: LinearIcon;
        static readonly arrow_left_circle: LinearIcon;
        static readonly arrow_right_circle: LinearIcon;
        static readonly chevron_up_circle: LinearIcon;
        static readonly chevron_down_circle: LinearIcon;
        static readonly chevron_left_circle: LinearIcon;
        static readonly chevron_right_circle: LinearIcon;
        static readonly backward_circle: LinearIcon;
        static readonly first_circle: LinearIcon;
        static readonly previous_circle: LinearIcon;
        static readonly stop_circle: LinearIcon;
        static readonly play_circle: LinearIcon;
        static readonly pause_circle: LinearIcon;
        static readonly next_circle: LinearIcon;
        static readonly last_circle: LinearIcon;
        static readonly forward_circle: LinearIcon;
        static readonly eject_circle: LinearIcon;
        static readonly crop: LinearIcon;
        static readonly frame_expand: LinearIcon;
        static readonly frame_contract: LinearIcon;
        static readonly focus: LinearIcon;
        static readonly transform: LinearIcon;
        static readonly grid: LinearIcon;
        static readonly grid_crossed: LinearIcon;
        static readonly layers: LinearIcon;
        static readonly layers_crossed: LinearIcon;
        static readonly toggle: LinearIcon;
        static readonly rulers: LinearIcon;
        static readonly ruler: LinearIcon;
        static readonly funnel: LinearIcon;
        static readonly flip_horizontal: LinearIcon;
        static readonly flip_vertical: LinearIcon;
        static readonly flip_horizontal2: LinearIcon;
        static readonly flip_vertical2: LinearIcon;
        static readonly angle: LinearIcon;
        static readonly angle2: LinearIcon;
        static readonly subtract: LinearIcon;
        static readonly combine: LinearIcon;
        static readonly intersect: LinearIcon;
        static readonly exclude: LinearIcon;
        static readonly align_center_vertical: LinearIcon;
        static readonly align_right: LinearIcon;
        static readonly align_bottom: LinearIcon;
        static readonly align_left: LinearIcon;
        static readonly align_center_horizontal: LinearIcon;
        static readonly align_top: LinearIcon;
        static readonly square: LinearIcon;
        static readonly plus_square: LinearIcon;
        static readonly minus_square: LinearIcon;
        static readonly percent_square: LinearIcon;
        static readonly arrow_up_square: LinearIcon;
        static readonly arrow_down_square: LinearIcon;
        static readonly arrow_left_square: LinearIcon;
        static readonly arrow_right_square: LinearIcon;
        static readonly chevron_up_square: LinearIcon;
        static readonly chevron_down_square: LinearIcon;
        static readonly chevron_left_square: LinearIcon;
        static readonly chevron_right_square: LinearIcon;
        static readonly check_square: LinearIcon;
        static readonly cross_square: LinearIcon;
        static readonly menu_square: LinearIcon;
        static readonly prohibited: LinearIcon;
        static readonly circle: LinearIcon;
        static readonly radio_button: LinearIcon;
        static readonly ligature: LinearIcon;
        static readonly text_format: LinearIcon;
        static readonly text_format_remove: LinearIcon;
        static readonly text_size: LinearIcon;
        static readonly bold: LinearIcon;
        static readonly italic: LinearIcon;
        static readonly underline: LinearIcon;
        static readonly strikethrough: LinearIcon;
        static readonly highlight: LinearIcon;
        static readonly text_align_left: LinearIcon;
        static readonly text_align_center: LinearIcon;
        static readonly text_align_right: LinearIcon;
        static readonly text_align_justify: LinearIcon;
        static readonly line_spacing: LinearIcon;
        static readonly indent_increase: LinearIcon;
        static readonly indent_decrease: LinearIcon;
        static readonly text_wrap: LinearIcon;
        static readonly pilcrow: LinearIcon;
        static readonly direction_ltr: LinearIcon;
        static readonly direction_rtl: LinearIcon;
        static readonly page_break: LinearIcon;
        static readonly page_break2: LinearIcon;
        static readonly sort_alpha_asc: LinearIcon;
        static readonly sort_alpha_desc: LinearIcon;
        static readonly sort_numeric_asc: LinearIcon;
        static readonly sort_numeric_desc: LinearIcon;
        static readonly sort_amount_asc: LinearIcon;
        static readonly sort_amount_desc: LinearIcon;
        static readonly sort_time_asc: LinearIcon;
        static readonly sort_time_desc: LinearIcon;
        static readonly sigma: LinearIcon;
        static readonly pencil_line: LinearIcon;
        static readonly hand: LinearIcon;
        static readonly pointer_up: LinearIcon;
        static readonly pointer_right: LinearIcon;
        static readonly pointer_down: LinearIcon;
        static readonly pointer_left: LinearIcon;
        static readonly finger_tap: LinearIcon;
        static readonly fingers_tap: LinearIcon;
        static readonly reminder: LinearIcon;
        static readonly fingers_crossed: LinearIcon;
        static readonly fingers_victory: LinearIcon;
        static readonly gesture_zoom: LinearIcon;
        static readonly gesture_pinch: LinearIcon;
        static readonly fingers_scroll_horizontal: LinearIcon;
        static readonly fingers_scroll_vertical: LinearIcon;
        static readonly fingers_scroll_left: LinearIcon;
        static readonly fingers_scroll_right: LinearIcon;
        static readonly hand2: LinearIcon;
        static readonly pointer_up2: LinearIcon;
        static readonly pointer_right2: LinearIcon;
        static readonly pointer_down2: LinearIcon;
        static readonly pointer_left2: LinearIcon;
        static readonly finger_tap2: LinearIcon;
        static readonly fingers_tap2: LinearIcon;
        static readonly reminder2: LinearIcon;
        static readonly gesture_zoom2: LinearIcon;
        static readonly gesture_pinch2: LinearIcon;
        static readonly fingers_scroll_horizontal2: LinearIcon;
        static readonly fingers_scroll_vertical2: LinearIcon;
        static readonly fingers_scroll_left2: LinearIcon;
        static readonly fingers_scroll_right2: LinearIcon;
        static readonly fingers_scroll_vertical3: LinearIcon;
        static readonly border_style: LinearIcon;
        static readonly border_all: LinearIcon;
        static readonly border_outer: LinearIcon;
        static readonly border_inner: LinearIcon;
        static readonly border_top: LinearIcon;
        static readonly border_horizontal: LinearIcon;
        static readonly border_bottom: LinearIcon;
        static readonly border_left: LinearIcon;
        static readonly border_vertical: LinearIcon;
        static readonly border_right: LinearIcon;
        static readonly border_none: LinearIcon;
        static readonly ellipsis: LinearIcon;
        static readonly uni21: LinearIcon;
        static readonly uni22: LinearIcon;
        static readonly uni23: LinearIcon;
        static readonly uni24: LinearIcon;
        static readonly uni25: LinearIcon;
        static readonly uni26: LinearIcon;
        static readonly uni27: LinearIcon;
        static readonly uni28: LinearIcon;
        static readonly uni29: LinearIcon;
        static readonly uni2a: LinearIcon;
        static readonly uni2b: LinearIcon;
        static readonly uni2c: LinearIcon;
        static readonly uni2d: LinearIcon;
        static readonly uni2e: LinearIcon;
        static readonly uni2f: LinearIcon;
        static readonly uni30: LinearIcon;
        static readonly uni31: LinearIcon;
        static readonly uni32: LinearIcon;
        static readonly uni33: LinearIcon;
        static readonly uni34: LinearIcon;
        static readonly uni35: LinearIcon;
        static readonly uni37: LinearIcon;
        static readonly uni38: LinearIcon;
        static readonly uni39: LinearIcon;
        static readonly uni3a: LinearIcon;
        static readonly uni3b: LinearIcon;
        static readonly uni3c: LinearIcon;
        static readonly uni3d: LinearIcon;
        static readonly uni3e: LinearIcon;
        static readonly uni3f: LinearIcon;
        static readonly uni40: LinearIcon;
        static readonly uni41: LinearIcon;
        static readonly uni42: LinearIcon;
        static readonly uni43: LinearIcon;
        static readonly uni44: LinearIcon;
        static readonly uni45: LinearIcon;
        static readonly uni46: LinearIcon;
        static readonly uni47: LinearIcon;
        static readonly uni48: LinearIcon;
        static readonly uni49: LinearIcon;
        static readonly uni4a: LinearIcon;
        static readonly uni4b: LinearIcon;
        static readonly uni4c: LinearIcon;
        static readonly uni4d: LinearIcon;
        static readonly uni4e: LinearIcon;
        static readonly uni4f: LinearIcon;
        static readonly uni50: LinearIcon;
        static readonly uni51: LinearIcon;
        static readonly uni52: LinearIcon;
        static readonly uni53: LinearIcon;
        static readonly uni54: LinearIcon;
        static readonly uni55: LinearIcon;
        static readonly uni56: LinearIcon;
        static readonly uni57: LinearIcon;
        static readonly uni58: LinearIcon;
        static readonly uni59: LinearIcon;
        static readonly uni5a: LinearIcon;
        static readonly uni5b: LinearIcon;
        static readonly uni5c: LinearIcon;
        static readonly uni5d: LinearIcon;
        static readonly uni5e: LinearIcon;
        static readonly uni5f: LinearIcon;
        static readonly uni60: LinearIcon;
        static readonly uni61: LinearIcon;
        static readonly uni62: LinearIcon;
        static readonly uni63: LinearIcon;
        static readonly uni64: LinearIcon;
        static readonly uni65: LinearIcon;
        static readonly uni66: LinearIcon;
        static readonly uni67: LinearIcon;
        static readonly uni68: LinearIcon;
        static readonly uni69: LinearIcon;
        static readonly uni6a: LinearIcon;
        static readonly uni6b: LinearIcon;
        static readonly uni6c: LinearIcon;
        static readonly uni6d: LinearIcon;
        static readonly uni6e: LinearIcon;
        static readonly uni6f: LinearIcon;
        static readonly uni70: LinearIcon;
        static readonly uni71: LinearIcon;
        static readonly uni72: LinearIcon;
        static readonly uni73: LinearIcon;
        static readonly uni74: LinearIcon;
        static readonly uni75: LinearIcon;
        static readonly uni76: LinearIcon;
        static readonly uni77: LinearIcon;
        static readonly uni78: LinearIcon;
        static readonly uni79: LinearIcon;
        static readonly uni7a: LinearIcon;
        static readonly uni7b: LinearIcon;
        static readonly uni7c: LinearIcon;
        static readonly uni7d: LinearIcon;
        static readonly uni7e: LinearIcon;
        static readonly copyright: LinearIcon;
    }
}
declare module latte {
    class LinearIcon extends IconItem {
        static catalog: {
            home: string;
            home2: string;
            home3: string;
            home4: string;
            home5: string;
            home6: string;
            bathtub: string;
            toothbrush: string;
            bed: string;
            couch: string;
            chair: string;
            city: string;
            apartment: string;
            pencil: string;
            pencil2: string;
            pen: string;
            pencil3: string;
            eraser: string;
            pencil4: string;
            pencil5: string;
            feather: string;
            feather2: string;
            feather3: string;
            pen2: string;
            pen_add: string;
            pen_remove: string;
            vector: string;
            pen3: string;
            blog: string;
            brush: string;
            brush2: string;
            spray: string;
            paint_roller: string;
            stamp: string;
            tape: string;
            desk_tape: string;
            texture: string;
            eye_dropper: string;
            palette: string;
            color_sampler: string;
            bucket: string;
            gradient: string;
            gradient2: string;
            magic_wand: string;
            magnet: string;
            pencil_ruler: string;
            pencil_ruler2: string;
            compass: string;
            aim: string;
            gun: string;
            bottle: string;
            drop: string;
            drop_crossed: string;
            drop2: string;
            snow: string;
            snow2: string;
            fire: string;
            lighter: string;
            knife: string;
            dagger: string;
            tissue: string;
            toilet_paper: string;
            poop: string;
            umbrella: string;
            umbrella2: string;
            rain: string;
            tornado: string;
            wind: string;
            fan: string;
            contrast: string;
            sun_small: string;
            sun: string;
            sun2: string;
            moon: string;
            cloud: string;
            cloud_upload: string;
            cloud_download: string;
            cloud_rain: string;
            cloud_hailstones: string;
            cloud_snow: string;
            cloud_windy: string;
            sun_wind: string;
            cloud_fog: string;
            cloud_sun: string;
            cloud_lightning: string;
            cloud_sync: string;
            cloud_lock: string;
            cloud_gear: string;
            cloud_alert: string;
            cloud_check: string;
            cloud_cross: string;
            cloud_crossed: string;
            cloud_database: string;
            database: string;
            database_add: string;
            database_remove: string;
            database_lock: string;
            database_refresh: string;
            database_check: string;
            database_history: string;
            database_upload: string;
            database_download: string;
            server: string;
            shield: string;
            shield_check: string;
            shield_alert: string;
            shield_cross: string;
            lock: string;
            rotation_lock: string;
            unlock: string;
            key: string;
            key_hole: string;
            toggle_off: string;
            toggle_on: string;
            cog: string;
            cog2: string;
            wrench: string;
            screwdriver: string;
            hammer_wrench: string;
            hammer: string;
            saw: string;
            axe: string;
            axe2: string;
            shovel: string;
            pickaxe: string;
            factory: string;
            factory2: string;
            recycle: string;
            trash: string;
            trash2: string;
            trash3: string;
            broom: string;
            game: string;
            gamepad: string;
            joystick: string;
            dice: string;
            spades: string;
            diamonds: string;
            clubs: string;
            hearts: string;
            heart: string;
            star: string;
            star_half: string;
            star_empty: string;
            flag: string;
            flag2: string;
            flag3: string;
            mailbox_full: string;
            mailbox_empty: string;
            at_sign: string;
            envelope: string;
            envelope_open: string;
            paperclip: string;
            paper_plane: string;
            reply: string;
            reply_all: string;
            inbox: string;
            inbox2: string;
            outbox: string;
            box: string;
            archive: string;
            archive2: string;
            drawers: string;
            drawers2: string;
            drawers3: string;
            eye: string;
            eye_crossed: string;
            eye_plus: string;
            eye_minus: string;
            binoculars: string;
            binoculars2: string;
            hdd: string;
            hdd_down: string;
            hdd_up: string;
            floppy_disk: string;
            disc: string;
            tape2: string;
            printer: string;
            shredder: string;
            file_empty: string;
            file_add: string;
            file_check: string;
            file_lock: string;
            files: string;
            copy: string;
            compare: string;
            folder: string;
            folder_search: string;
            folder_plus: string;
            folder_minus: string;
            folder_download: string;
            folder_upload: string;
            folder_star: string;
            folder_heart: string;
            folder_user: string;
            folder_shared: string;
            folder_music: string;
            folder_picture: string;
            folder_film: string;
            scissors: string;
            paste: string;
            clipboard_empty: string;
            clipboard_pencil: string;
            clipboard_text: string;
            clipboard_check: string;
            clipboard_down: string;
            clipboard_left: string;
            clipboard_alert: string;
            clipboard_user: string;
            register: string;
            enter: string;
            exit: string;
            papers: string;
            news: string;
            reading: string;
            typewriter: string;
            document: string;
            document2: string;
            graduation_hat: string;
            license: string;
            license2: string;
            medal_empty: string;
            medal_first: string;
            medal_second: string;
            medal_third: string;
            podium: string;
            trophy: string;
            trophy2: string;
            music_note: string;
            music_note2: string;
            music_note3: string;
            playlist: string;
            playlist_add: string;
            guitar: string;
            trumpet: string;
            album: string;
            shuffle: string;
            repeat_one: string;
            repeat: string;
            headphones: string;
            headset: string;
            loudspeaker: string;
            equalizer: string;
            theater: string;
            _3d_glasses: string;
            ticket: string;
            presentation: string;
            play: string;
            film_play: string;
            clapboard_play: string;
            media: string;
            film: string;
            film2: string;
            surveillance: string;
            surveillance2: string;
            camera: string;
            camera_crossed: string;
            camera_play: string;
            time_lapse: string;
            record: string;
            camera2: string;
            camera_flip: string;
            panorama: string;
            time_lapse2: string;
            shutter: string;
            shutter2: string;
            face_detection: string;
            flare: string;
            convex: string;
            concave: string;
            picture: string;
            picture2: string;
            picture3: string;
            pictures: string;
            book: string;
            audio_book: string;
            book2: string;
            bookmark: string;
            bookmark2: string;
            label: string;
            library: string;
            library2: string;
            contacts: string;
            profile: string;
            portrait: string;
            portrait2: string;
            user: string;
            user_plus: string;
            user_minus: string;
            user_lock: string;
            users: string;
            users2: string;
            users_plus: string;
            users_minus: string;
            group_work: string;
            woman: string;
            man: string;
            baby: string;
            baby2: string;
            baby3: string;
            baby_bottle: string;
            walk: string;
            hand_waving: string;
            jump: string;
            run: string;
            woman2: string;
            man2: string;
            man_woman: string;
            height: string;
            weight: string;
            scale: string;
            button: string;
            bow_tie: string;
            tie: string;
            socks: string;
            shoe: string;
            shoes: string;
            hat: string;
            pants: string;
            shorts: string;
            flip_flops: string;
            shirt: string;
            hanger: string;
            laundry: string;
            store: string;
            haircut: string;
            store_24: string;
            barcode: string;
            barcode2: string;
            barcode3: string;
            cashier: string;
            bag: string;
            bag2: string;
            cart: string;
            cart_empty: string;
            cart_full: string;
            cart_plus: string;
            cart_plus2: string;
            cart_add: string;
            cart_remove: string;
            cart_exchange: string;
            tag: string;
            tags: string;
            receipt: string;
            wallet: string;
            credit_card: string;
            cash_dollar: string;
            cash_euro: string;
            cash_pound: string;
            cash_yen: string;
            bag_dollar: string;
            bag_euro: string;
            bag_pound: string;
            bag_yen: string;
            coin_dollar: string;
            coin_euro: string;
            coin_pound: string;
            coin_yen: string;
            calculator: string;
            calculator2: string;
            abacus: string;
            vault: string;
            telephone: string;
            phone_lock: string;
            phone_wave: string;
            phone_pause: string;
            phone_outgoing: string;
            phone_incoming: string;
            phone_in_out: string;
            phone_error: string;
            phone_sip: string;
            phone_plus: string;
            phone_minus: string;
            voicemail: string;
            dial: string;
            telephone2: string;
            pushpin: string;
            pushpin2: string;
            map_marker: string;
            map_marker_user: string;
            map_marker_down: string;
            map_marker_check: string;
            map_marker_crossed: string;
            radar: string;
            compass2: string;
            map: string;
            map2: string;
            location: string;
            road_sign: string;
            calendar_empty: string;
            calendar_check: string;
            calendar_cross: string;
            calendar_31: string;
            calendar_full: string;
            calendar_insert: string;
            calendar_text: string;
            calendar_user: string;
            mouse: string;
            mouse_left: string;
            mouse_right: string;
            mouse_both: string;
            keyboard: string;
            keyboard_up: string;
            keyboard_down: string;
            _delete: string;
            spell_check: string;
            escape: string;
            enter2: string;
            screen: string;
            aspect_ratio: string;
            signal: string;
            signal_lock: string;
            signal_80: string;
            signal_60: string;
            signal_40: string;
            signal_20: string;
            signal_0: string;
            signal_blocked: string;
            sim: string;
            flash_memory: string;
            usb_drive: string;
            phone: string;
            smartphone: string;
            smartphone_notification: string;
            smartphone_vibration: string;
            smartphone_embed: string;
            smartphone_waves: string;
            tablet: string;
            tablet2: string;
            laptop: string;
            laptop_phone: string;
            desktop: string;
            launch: string;
            new_tab: string;
            window: string;
            cable: string;
            cable2: string;
            tv: string;
            radio: string;
            remote_control: string;
            power_switch: string;
            power: string;
            power_crossed: string;
            flash_auto: string;
            lamp: string;
            flashlight: string;
            lampshade: string;
            cord: string;
            outlet: string;
            battery_power: string;
            battery_empty: string;
            battery_alert: string;
            battery_error: string;
            battery_low1: string;
            battery_low2: string;
            battery_low3: string;
            battery_mid1: string;
            battery_mid2: string;
            battery_mid3: string;
            battery_full: string;
            battery_charging: string;
            battery_charging2: string;
            battery_charging3: string;
            battery_charging4: string;
            battery_charging5: string;
            battery_charging6: string;
            battery_charging7: string;
            chip: string;
            chip_x64: string;
            chip_x86: string;
            bubble: string;
            bubbles: string;
            bubble_dots: string;
            bubble_alert: string;
            bubble_question: string;
            bubble_text: string;
            bubble_pencil: string;
            bubble_picture: string;
            bubble_video: string;
            bubble_user: string;
            bubble_quote: string;
            bubble_heart: string;
            bubble_emoticon: string;
            bubble_attachment: string;
            phone_bubble: string;
            quote_open: string;
            quote_close: string;
            dna: string;
            heart_pulse: string;
            pulse: string;
            syringe: string;
            pills: string;
            first_aid: string;
            lifebuoy: string;
            bandage: string;
            bandages: string;
            thermometer: string;
            microscope: string;
            brain: string;
            beaker: string;
            skull: string;
            bone: string;
            construction: string;
            construction_cone: string;
            pie_chart: string;
            pie_chart2: string;
            graph: string;
            chart_growth: string;
            chart_bars: string;
            chart_settings: string;
            cake: string;
            gift: string;
            balloon: string;
            rank: string;
            rank2: string;
            rank3: string;
            crown: string;
            lotus: string;
            diamond: string;
            diamond2: string;
            diamond3: string;
            diamond4: string;
            linearicons: string;
            teacup: string;
            teapot: string;
            glass: string;
            bottle2: string;
            glass_cocktail: string;
            glass2: string;
            dinner: string;
            dinner2: string;
            chef: string;
            scale2: string;
            egg: string;
            egg2: string;
            eggs: string;
            platter: string;
            steak: string;
            hamburger: string;
            hotdog: string;
            pizza: string;
            sausage: string;
            chicken: string;
            fish: string;
            carrot: string;
            cheese: string;
            bread: string;
            ice_cream: string;
            ice_cream2: string;
            candy: string;
            lollipop: string;
            coffee_bean: string;
            coffee_cup: string;
            cherry: string;
            grapes: string;
            citrus: string;
            apple: string;
            leaf: string;
            landscape: string;
            pine_tree: string;
            tree: string;
            cactus: string;
            paw: string;
            footprint: string;
            speed_slow: string;
            speed_medium: string;
            speed_fast: string;
            rocket: string;
            hammer2: string;
            balance: string;
            briefcase: string;
            luggage_weight: string;
            dolly: string;
            plane: string;
            plane_crossed: string;
            helicopter: string;
            traffic_lights: string;
            siren: string;
            road: string;
            engine: string;
            oil_pressure: string;
            coolant_temperature: string;
            car_battery: string;
            gas: string;
            gallon: string;
            transmission: string;
            car: string;
            car_wash: string;
            car_wash2: string;
            bus: string;
            bus2: string;
            car2: string;
            parking: string;
            car_lock: string;
            taxi: string;
            car_siren: string;
            car_wash3: string;
            car_wash4: string;
            ambulance: string;
            truck: string;
            trailer: string;
            scale_truck: string;
            train: string;
            ship: string;
            ship2: string;
            anchor: string;
            boat: string;
            bicycle: string;
            bicycle2: string;
            dumbbell: string;
            bench_press: string;
            swim: string;
            football: string;
            baseball_bat: string;
            baseball: string;
            tennis: string;
            tennis2: string;
            ping_pong: string;
            hockey: string;
            _8ball: string;
            bowling: string;
            bowling_pins: string;
            golf: string;
            golf2: string;
            archery: string;
            slingshot: string;
            soccer: string;
            basketball: string;
            cube: string;
            _3d_rotate: string;
            puzzle: string;
            glasses: string;
            glasses2: string;
            accessibility: string;
            wheelchair: string;
            wall: string;
            fence: string;
            wall2: string;
            icons: string;
            resize_handle: string;
            icons2: string;
            select: string;
            select2: string;
            site_map: string;
            earth: string;
            earth_lock: string;
            network: string;
            network_lock: string;
            planet: string;
            happy: string;
            smile: string;
            grin: string;
            tongue: string;
            sad: string;
            wink: string;
            dream: string;
            shocked: string;
            shocked2: string;
            tongue2: string;
            neutral: string;
            happy_grin: string;
            cool: string;
            mad: string;
            grin_evil: string;
            evil: string;
            wow: string;
            annoyed: string;
            wondering: string;
            confused: string;
            zipped: string;
            grumpy: string;
            mustache: string;
            tombstone_hipster: string;
            tombstone: string;
            ghost: string;
            ghost_hipster: string;
            halloween: string;
            christmas: string;
            easter_egg: string;
            mustache2: string;
            mustache_glasses: string;
            pipe: string;
            alarm: string;
            alarm_add: string;
            alarm_snooze: string;
            alarm_ringing: string;
            bullhorn: string;
            hearing: string;
            volume_high: string;
            volume_medium: string;
            volume_low: string;
            volume: string;
            mute: string;
            lan: string;
            lan2: string;
            wifi: string;
            wifi_lock: string;
            wifi_blocked: string;
            wifi_mid: string;
            wifi_low: string;
            wifi_low2: string;
            wifi_alert: string;
            wifi_alert_mid: string;
            wifi_alert_low: string;
            wifi_alert_low2: string;
            stream: string;
            stream_check: string;
            stream_error: string;
            stream_alert: string;
            communication: string;
            communication_crossed: string;
            broadcast: string;
            antenna: string;
            satellite: string;
            satellite2: string;
            mic: string;
            mic_mute: string;
            mic2: string;
            spotlights: string;
            hourglass: string;
            loading: string;
            loading2: string;
            loading3: string;
            refresh: string;
            refresh2: string;
            undo: string;
            redo: string;
            jump2: string;
            undo2: string;
            redo2: string;
            sync: string;
            repeat_one2: string;
            sync_crossed: string;
            sync2: string;
            repeat_one3: string;
            sync_crossed2: string;
            return: string;
            return2: string;
            refund: string;
            history: string;
            history2: string;
            self_timer: string;
            clock: string;
            clock2: string;
            clock3: string;
            watch: string;
            alarm2: string;
            alarm_add2: string;
            alarm_remove: string;
            alarm_check: string;
            alarm_error: string;
            timer: string;
            timer_crossed: string;
            timer2: string;
            timer_crossed2: string;
            download: string;
            upload: string;
            download2: string;
            upload2: string;
            enter_up: string;
            enter_down: string;
            enter_left: string;
            enter_right: string;
            exit_up: string;
            exit_down: string;
            exit_left: string;
            exit_right: string;
            enter_up2: string;
            enter_down2: string;
            enter_vertical: string;
            enter_left2: string;
            enter_right2: string;
            enter_horizontal: string;
            exit_up2: string;
            exit_down2: string;
            exit_left2: string;
            exit_right2: string;
            cli: string;
            bug: string;
            code: string;
            file_code: string;
            file_image: string;
            file_zip: string;
            file_audio: string;
            file_video: string;
            file_preview: string;
            file_charts: string;
            file_stats: string;
            file_spreadsheet: string;
            link: string;
            unlink: string;
            link2: string;
            unlink2: string;
            thumbs_up: string;
            thumbs_down: string;
            thumbs_up2: string;
            thumbs_down2: string;
            thumbs_up3: string;
            thumbs_down3: string;
            share: string;
            share2: string;
            share3: string;
            magnifier: string;
            file_search: string;
            find_replace: string;
            zoom_in: string;
            zoom_out: string;
            loupe: string;
            loupe_zoom_in: string;
            loupe_zoom_out: string;
            cross: string;
            menu: string;
            list: string;
            list2: string;
            list3: string;
            menu2: string;
            list4: string;
            menu3: string;
            exclamation: string;
            question: string;
            check: string;
            cross2: string;
            plus: string;
            minus: string;
            percent: string;
            chevron_up: string;
            chevron_down: string;
            chevron_left: string;
            chevron_right: string;
            chevrons_expand_vertical: string;
            chevrons_expand_horizontal: string;
            chevrons_contract_vertical: string;
            chevrons_contract_horizontal: string;
            arrow_up: string;
            arrow_down: string;
            arrow_left: string;
            arrow_right: string;
            arrow_up_right: string;
            arrows_merge: string;
            arrows_split: string;
            arrow_divert: string;
            arrow_return: string;
            expand: string;
            contract: string;
            expand2: string;
            contract2: string;
            move: string;
            tab: string;
            arrow_wave: string;
            expand3: string;
            expand4: string;
            contract3: string;
            notification: string;
            warning: string;
            notification_circle: string;
            question_circle: string;
            menu_circle: string;
            checkmark_circle: string;
            cross_circle: string;
            plus_circle: string;
            circle_minus: string;
            percent_circle: string;
            arrow_up_circle: string;
            arrow_down_circle: string;
            arrow_left_circle: string;
            arrow_right_circle: string;
            chevron_up_circle: string;
            chevron_down_circle: string;
            chevron_left_circle: string;
            chevron_right_circle: string;
            backward_circle: string;
            first_circle: string;
            previous_circle: string;
            stop_circle: string;
            play_circle: string;
            pause_circle: string;
            next_circle: string;
            last_circle: string;
            forward_circle: string;
            eject_circle: string;
            crop: string;
            frame_expand: string;
            frame_contract: string;
            focus: string;
            transform: string;
            grid: string;
            grid_crossed: string;
            layers: string;
            layers_crossed: string;
            toggle: string;
            rulers: string;
            ruler: string;
            funnel: string;
            flip_horizontal: string;
            flip_vertical: string;
            flip_horizontal2: string;
            flip_vertical2: string;
            angle: string;
            angle2: string;
            subtract: string;
            combine: string;
            intersect: string;
            exclude: string;
            align_center_vertical: string;
            align_right: string;
            align_bottom: string;
            align_left: string;
            align_center_horizontal: string;
            align_top: string;
            square: string;
            plus_square: string;
            minus_square: string;
            percent_square: string;
            arrow_up_square: string;
            arrow_down_square: string;
            arrow_left_square: string;
            arrow_right_square: string;
            chevron_up_square: string;
            chevron_down_square: string;
            chevron_left_square: string;
            chevron_right_square: string;
            check_square: string;
            cross_square: string;
            menu_square: string;
            prohibited: string;
            circle: string;
            radio_button: string;
            ligature: string;
            text_format: string;
            text_format_remove: string;
            text_size: string;
            bold: string;
            italic: string;
            underline: string;
            strikethrough: string;
            highlight: string;
            text_align_left: string;
            text_align_center: string;
            text_align_right: string;
            text_align_justify: string;
            line_spacing: string;
            indent_increase: string;
            indent_decrease: string;
            text_wrap: string;
            pilcrow: string;
            direction_ltr: string;
            direction_rtl: string;
            page_break: string;
            page_break2: string;
            sort_alpha_asc: string;
            sort_alpha_desc: string;
            sort_numeric_asc: string;
            sort_numeric_desc: string;
            sort_amount_asc: string;
            sort_amount_desc: string;
            sort_time_asc: string;
            sort_time_desc: string;
            sigma: string;
            pencil_line: string;
            hand: string;
            pointer_up: string;
            pointer_right: string;
            pointer_down: string;
            pointer_left: string;
            finger_tap: string;
            fingers_tap: string;
            reminder: string;
            fingers_crossed: string;
            fingers_victory: string;
            gesture_zoom: string;
            gesture_pinch: string;
            fingers_scroll_horizontal: string;
            fingers_scroll_vertical: string;
            fingers_scroll_left: string;
            fingers_scroll_right: string;
            hand2: string;
            pointer_up2: string;
            pointer_right2: string;
            pointer_down2: string;
            pointer_left2: string;
            finger_tap2: string;
            fingers_tap2: string;
            reminder2: string;
            gesture_zoom2: string;
            gesture_pinch2: string;
            fingers_scroll_horizontal2: string;
            fingers_scroll_vertical2: string;
            fingers_scroll_left2: string;
            fingers_scroll_right2: string;
            fingers_scroll_vertical3: string;
            border_style: string;
            border_all: string;
            border_outer: string;
            border_inner: string;
            border_top: string;
            border_horizontal: string;
            border_bottom: string;
            border_left: string;
            border_vertical: string;
            border_right: string;
            border_none: string;
            ellipsis: string;
        };
        static readonly home: LinearIcon;
        static readonly apartment: LinearIcon;
        static readonly pencil: LinearIcon;
        static readonly magic_wand: LinearIcon;
        static readonly drop: LinearIcon;
        static readonly lighter: LinearIcon;
        static readonly poop: LinearIcon;
        static readonly sun: LinearIcon;
        static readonly moon: LinearIcon;
        static readonly cloud: LinearIcon;
        static readonly cloud_upload: LinearIcon;
        static readonly cloud_download: LinearIcon;
        static readonly cloud_sync: LinearIcon;
        static readonly cloud_check: LinearIcon;
        static readonly database: LinearIcon;
        static readonly lock: LinearIcon;
        static readonly cog: LinearIcon;
        static readonly trash: LinearIcon;
        static readonly dice: LinearIcon;
        static readonly heart: LinearIcon;
        static readonly star: LinearIcon;
        static readonly star_half: LinearIcon;
        static readonly star_empty: LinearIcon;
        static readonly flag: LinearIcon;
        static readonly envelope: LinearIcon;
        static readonly paperclip: LinearIcon;
        static readonly inbox: LinearIcon;
        static readonly eye: LinearIcon;
        static readonly printer: LinearIcon;
        static readonly file_empty: LinearIcon;
        static readonly file_add: LinearIcon;
        static readonly enter: LinearIcon;
        static readonly exit: LinearIcon;
        static readonly graduation_hat: LinearIcon;
        static readonly license: LinearIcon;
        static readonly music_note: LinearIcon;
        static readonly film_play: LinearIcon;
        static readonly camera_video: LinearIcon;
        static readonly camera: LinearIcon;
        static readonly picture: LinearIcon;
        static readonly book: LinearIcon;
        static readonly bookmark: LinearIcon;
        static readonly user: LinearIcon;
        static readonly users: LinearIcon;
        static readonly shirt: LinearIcon;
        static readonly store: LinearIcon;
        static readonly cart: LinearIcon;
        static readonly tag: LinearIcon;
        static readonly phone_handset: LinearIcon;
        static readonly phone: LinearIcon;
        static readonly pushpin: LinearIcon;
        static readonly map_marker: LinearIcon;
        static readonly map: LinearIcon;
        static readonly location: LinearIcon;
        static readonly calendar_full: LinearIcon;
        static readonly keyboard: LinearIcon;
        static readonly spell_check: LinearIcon;
        static readonly screen: LinearIcon;
        static readonly smartphone: LinearIcon;
        static readonly tablet: LinearIcon;
        static readonly laptop: LinearIcon;
        static readonly laptop_phone: LinearIcon;
        static readonly power_switch: LinearIcon;
        static readonly bubble: LinearIcon;
        static readonly heart_pulse: LinearIcon;
        static readonly construction: LinearIcon;
        static readonly pie_chart: LinearIcon;
        static readonly chart_bars: LinearIcon;
        static readonly gift: LinearIcon;
        static readonly diamond: LinearIcon;
        static readonly linearicons: LinearIcon;
        static readonly dinner: LinearIcon;
        static readonly coffee_cup: LinearIcon;
        static readonly leaf: LinearIcon;
        static readonly paw: LinearIcon;
        static readonly rocket: LinearIcon;
        static readonly briefcase: LinearIcon;
        static readonly bus: LinearIcon;
        static readonly car: LinearIcon;
        static readonly train: LinearIcon;
        static readonly bicycle: LinearIcon;
        static readonly wheelchair: LinearIcon;
        static readonly select: LinearIcon;
        static readonly earth: LinearIcon;
        static readonly smile: LinearIcon;
        static readonly sad: LinearIcon;
        static readonly neutral: LinearIcon;
        static readonly mustache: LinearIcon;
        static readonly alarm: LinearIcon;
        static readonly bullhorn: LinearIcon;
        static readonly volume_high: LinearIcon;
        static readonly volume_medium: LinearIcon;
        static readonly volume_low: LinearIcon;
        static readonly volume: LinearIcon;
        static readonly mic: LinearIcon;
        static readonly hourglass: LinearIcon;
        static readonly undo: LinearIcon;
        static readonly redo: LinearIcon;
        static readonly sync: LinearIcon;
        static readonly history: LinearIcon;
        static readonly clock: LinearIcon;
        static readonly download: LinearIcon;
        static readonly upload: LinearIcon;
        static readonly enter_down: LinearIcon;
        static readonly exit_up: LinearIcon;
        static readonly bug: LinearIcon;
        static readonly code: LinearIcon;
        static readonly link: LinearIcon;
        static readonly unlink: LinearIcon;
        static readonly thumbs_up: LinearIcon;
        static readonly thumbs_down: LinearIcon;
        static readonly magnifier: LinearIcon;
        static readonly cross: LinearIcon;
        static readonly menu: LinearIcon;
        static readonly list: LinearIcon;
        static readonly chevron_up: LinearIcon;
        static readonly chevron_down: LinearIcon;
        static readonly chevron_left: LinearIcon;
        static readonly chevron_right: LinearIcon;
        static readonly arrow_up: LinearIcon;
        static readonly arrow_down: LinearIcon;
        static readonly arrow_left: LinearIcon;
        static readonly arrow_right: LinearIcon;
        static readonly move: LinearIcon;
        static readonly warning: LinearIcon;
        static readonly question_circle: LinearIcon;
        static readonly menu_circle: LinearIcon;
        static readonly checkmark_circle: LinearIcon;
        static readonly cross_circle: LinearIcon;
        static readonly plus_circle: LinearIcon;
        static readonly circle_minus: LinearIcon;
        static readonly arrow_up_circle: LinearIcon;
        static readonly arrow_down_circle: LinearIcon;
        static readonly arrow_left_circle: LinearIcon;
        static readonly arrow_right_circle: LinearIcon;
        static readonly chevron_up_circle: LinearIcon;
        static readonly chevron_down_circle: LinearIcon;
        static readonly chevron_left_circle: LinearIcon;
        static readonly chevron_right_circle: LinearIcon;
        static readonly crop: LinearIcon;
        static readonly frame_expand: LinearIcon;
        static readonly frame_contract: LinearIcon;
        static readonly layers: LinearIcon;
        static readonly funnel: LinearIcon;
        static readonly text_format: LinearIcon;
        static readonly text_format_remove: LinearIcon;
        static readonly text_size: LinearIcon;
        static readonly bold: LinearIcon;
        static readonly italic: LinearIcon;
        static readonly underline: LinearIcon;
        static readonly strikethrough: LinearIcon;
        static readonly highlight: LinearIcon;
        static readonly text_align_left: LinearIcon;
        static readonly text_align_center: LinearIcon;
        static readonly text_align_right: LinearIcon;
        static readonly text_align_justify: LinearIcon;
        static readonly line_spacing: LinearIcon;
        static readonly indent_increase: LinearIcon;
        static readonly indent_decrease: LinearIcon;
        static readonly pilcrow: LinearIcon;
        static readonly direction_ltr: LinearIcon;
        static readonly direction_rtl: LinearIcon;
        static readonly page_break: LinearIcon;
        static readonly sort_alpha_asc: LinearIcon;
        static readonly sort_amount_asc: LinearIcon;
        static readonly hand: LinearIcon;
        static readonly pointer_up: LinearIcon;
        static readonly pointer_right: LinearIcon;
        static readonly pointer_down: LinearIcon;
        static readonly pointer_left: LinearIcon;
        static byCatalog_standby(name: string): LinearIcon;
        static byCatalog(name: string): LinearIcon;
        static byStyleName(name: string): LinearIcon;
        constructor();
        clone(): IconItem;
        colorize(color: Color): LinearIcon;
        go32(): LinearIcon;
        goSmall(): LinearIcon;
        private _linearIconName;
        linearIconName: string;
    }
}
declare module latte {
    class SeparatorItem extends Item {
        static withTab(tab: TabItem): SeparatorItem;
        private _text;
        constructor();
        text: string;
    }
}
declare module latte {
    class ButtonGroupItem extends Item {
        private _checkedButton;
        private _direction;
        private _faceVisible;
        private _multiCheck;
        buttons: Collection<ButtonItem>;
        checkedChanged: LatteEvent;
        constructor(buttons?: Array<ButtonItem>);
        private _checkCheck;
        private _onAddButton;
        private _onRemoveButton;
        private _update;
        onCheckedChanged(): void;
        onEnabledChanged(): void;
        onLayout(): void;
        checkedButton: ButtonItem;
        direction: Direction;
        faceVisible: boolean;
        multiCheck: boolean;
    }
}
declare module latte {
    class ClickableItem extends Item {
        private _checkable;
        private _checked;
        private _clickPropagation;
        private _contextAt;
        private _faceVisible;
        private _flatSide;
        private _openSide;
        private _pressed;
        private _selectable;
        private _selected;
        private _withContext;
        click: LatteEvent;
        checkedChanged: LatteEvent;
        faceVisibleChanged: LatteEvent;
        pressedChanged: LatteEvent;
        selectedChanged: LatteEvent;
        withContextChanged: LatteEvent;
        constructor();
        getChecked(): boolean;
        getContextAt(): Side;
        getSelected(): boolean;
        onBlur(): void;
        onCheckedChanged(): void;
        onClick(e?: MouseEvent): void;
        onDefaultedChanged(): void;
        onEnabledChanged(): void;
        onFaceVisibleChanged(): void;
        onFocused(): void;
        onPressedChanged(): void;
        onSelectedChanged(): void;
        onWithContextChanged(): void;
        setChecked(value: boolean, silent?: boolean): void;
        setContextAt(value: Side): void;
        setSelected(value: boolean, silent?: boolean): void;
        private _defaultedChanged;
        readonly defaultedChanged: LatteEvent;
        private _defaulted;
        defaulted: boolean;
        checkable: boolean;
        checked: boolean;
        clickPropagation: boolean;
        contextAt: Side;
        faceVisible: boolean;
        getFaceVisible(): boolean;
        setFaceVisible(value?: boolean, silent?: boolean): void;
        flatSide: Side;
        openSide: Side;
        pressed: boolean;
        selectable: boolean;
        selected: boolean;
        withContext: boolean;
    }
}
declare module latte {
    class ButtonItem extends ClickableItem {
        static defaultGlyph: string;
        private _dropdownVisible;
        private _glyph;
        private _itemsEdge;
        private _itemsMenu;
        private _itemsSide;
        private _split;
        private _willLoadItems;
        private _dropdown;
        items: Collection<Item>;
        label: LabelItem;
        loadItems: LatteEvent;
        itemsShown: LatteEvent;
        constructor(text?: string, icon?: IconItem, click?: Function, tab?: any);
        private _dropdownClick;
        private _dropdownPressedChanged;
        private _dropdownSelectedChanged;
        private _onAddItem;
        private _onRemoveItem;
        private _showOrHideItems;
        private _updateDropdownProperties;
        private _updateLabelFlag;
        private createDropdownButton;
        getContextAt(): Side;
        readonly hasItems: boolean;
        hideItems(): void;
        onClick(e?: MouseEvent): void;
        onEnabledChanged(): void;
        onFaceVisibleChanged(): void;
        onItemsShown(menuItem: MenuOverlay): void;
        onPressedChanged(): void;
        onSelectedChanged(): void;
        onWithContextChanged(): void;
        setContextAt(value: Side): void;
        showItems(side?: Side, edge?: Side): void;
        description: string;
        direction: Direction;
        readonly dropdown: ClickableItem;
        dropdownVisible: boolean;
        glyph: IconItem;
        icon: IconItem;
        itemsEdge: Side;
        itemsMenu: MenuOverlay;
        itemsSide: Side;
        readonly showingItems: any;
        split: boolean;
        text: string;
        readonly willLoadItems: boolean;
    }
}
declare module latte {
    class PaginationItem extends ButtonGroupItem {
        private _page;
        private _pages;
        btnCurrent: ButtonItem;
        btnNext: ButtonItem;
        btnPrevious: ButtonItem;
        pageChanged: LatteEvent;
        constructor();
        nextPage(): void;
        onPageChanged(): void;
        previousPage(): void;
        txtPage_enterPressed(): void;
        page: number;
        getPage(): number;
        setPage(value: number, silent?: boolean): void;
        pages: number;
        private _txtPage;
        readonly txtPage: TextboxItem;
        private _lblPages;
        readonly lblPages: LabelItem;
        private _btnGo;
        readonly btnGo: ButtonItem;
        private _btnOverlay;
        readonly btnOverlay: ButtonItem;
    }
}
declare module latte {
    class TabItem extends ButtonItem {
        private _active;
        private _contentSide;
        activeChanged: LatteEvent;
        contentSideChanged: LatteEvent;
        constructor(text?: string, icon?: IconItem, click?: Function, tab?: any);
        private _applyActiveProperties;
        onActiveChanged(): void;
        active: boolean;
        contentSide: Side;
    }
}
declare module latte {
    interface ColorPickerSwatch {
        bounds: Rectangle;
        color: Color;
    }
    class ColorPicker extends ItemStack {
        constructor();
        canvasMouseMove(screenX: number, screenY: number): void;
        canvasMouseDown(screenX: number, screenY: number): void;
        drawPalette(): void;
        onColorChanged(): void;
        onLayout(): void;
        swatchAt(screenX: number, screenY: number): ColorPickerSwatch;
        private _colorChanged;
        readonly colorChanged: LatteEvent;
        private _canvas;
        readonly canvas: JQuery;
        private _lblIndicator;
        readonly lblIndicator: LabelItem;
        private _toolbar;
        readonly toolbar: Toolbar;
        private _txtHex;
        readonly txtHex: TextboxItem;
        private _color;
        color: Color;
        private _context;
        readonly context: CanvasRenderingContext2D;
        private _swatches;
        readonly swatches: ColorPickerSwatch[];
    }
}
declare module latte {
    class ConversationItem extends Item {
        private _allowNewComments;
        private _invisible;
        private _pendentPages;
        comments: Collection<CommentItem>;
        commentsElement: JQuery;
        newCommentElement: JQuery;
        pendentPagesElement: JQuery;
        textbox: TextboxItem;
        commentAdded: LatteEvent;
        commentsChanged: LatteEvent;
        pendentPagesSolicited: LatteEvent;
        constructor();
        setTextbox(t: TextboxItem): void;
        _onAddComment(comment: CommentItem): void;
        private _onRemoveComment;
        onCommentAdded(text: string): boolean;
        onCommentsChanged(): void;
        onHiddenCommentsRequested(): void;
        onLayout(): void;
        onPendentPagesSolicited(): void;
        prependComment(comment: CommentItem): void;
        allowNewComments: boolean;
        private _ignoreEnter;
        ignoreEnter: boolean;
        pendentPages: number;
    }
}
declare module latte {
    class DateItem extends Item {
        private _columns;
        private _draggingSelection;
        private _rows;
        private _selectionEnd;
        private _selectionMode;
        private _selectionStart;
        nextButton: ButtonItem;
        previousButton: ButtonItem;
        table: JQuery;
        selectionChanged: LatteEvent;
        selectionEndChanged: LatteEvent;
        selectionStartChanged: LatteEvent;
        selectionModeChanged: LatteEvent;
        constructor();
        private _createMonth;
        private _dayMouseDown;
        private _dayMouseMove;
        private _dayMouseUp;
        private _selectDay;
        getSelectionStart(): DateTime;
        isOnDisplay(date: DateTime): boolean;
        onSelectionChanged(): void;
        onSelectionEndChanged(): void;
        onSelectionModeChanged(): void;
        onSelectionStartChanged(): void;
        getSelectionEnd(): DateTime;
        setSelectionEnd(value?: DateTime, raiseEvent?: boolean): void;
        setSelectionRange(start: DateTime, end: DateTime, rebuild?: boolean, raiseEvents?: boolean): void;
        setSelectionStart(value?: DateTime, raiseEvent?: boolean): void;
        setViewStart(date: DateTime): void;
        unselectAll(): void;
        viewNext(): void;
        viewPrevious(): void;
        columns: number;
        readonly monthSize: any;
        rows: number;
        selectionEnd: DateTime;
        selectionMode: DateSelectionMode;
        selectionStart: DateTime;
        readonly viewEnd: DateTime;
        readonly viewStart: DateTime;
    }
}
declare module latte {
    class Ribbon extends Item {
        private _lastWrapper;
        private _selectedTab;
        collapseButton: ButtonItem;
        face: JQuery;
        items: Collection<Item>;
        itemsContainer: JQuery;
        startButton: ButtonItem;
        tabs: Collection<TabItem>;
        tabsElement: JQuery;
        collapsedChanged: LatteEvent;
        selectedTabChanged: LatteEvent;
        constructor();
        private _addToFace;
        private _cutLastWrapper;
        private _addWrappedItem;
        private _clearTabsMarks;
        private _getItemTab;
        private _goesWrapped;
        private _onAddItem;
        private _onAddTab;
        private _onRemoveItem;
        private _onRemoveTab;
        addTab(text: string): TabItem;
        addSeparator(tab: TabItem): void;
        onCollapsedChanged(): void;
        onLayout(): void;
        onSelectedTabChanged(): void;
        collapsed: boolean;
        faceVisible: boolean;
        private _itemsInGroup;
        itemsInGroup: number;
        selectedTab: TabItem;
    }
}
declare module latte {
    class SelectableStack extends ItemStack {
        constructor();
        clearSelection(): void;
        onAddItem(item: Item): void;
        onSelectedItemChanged(): void;
        selectNextItem(): void;
        selectPreviousItem(): void;
        private _selectedItemChanged;
        readonly selectedItemChanged: LatteEvent;
        private _selectedItem;
        selectedItem: SelectableItem;
        readonly selectedItemIndex: number;
    }
}
declare module latte {
    class TabContainer extends ItemStack {
        tabToolbar: TabToolbar;
        tabs: Collection<TabItem>;
        content: Collection<Item>;
        selectedTabChanged: LatteEvent;
        constructor();
        private updateVisibility;
        onTabAdded(tab: TabItem): void;
        onTabRemoved(tab: TabItem): void;
        onContentAdded(item: Item): void;
        onContentRemoved(item: Item): void;
        onSelectedTabChanged(): void;
        selectedTab: TabItem;
        contentSide: Side;
    }
}
declare module latte {
    class Toolbar extends Item {
        private _direction;
        private _faceVisible;
        private _holderWide;
        private _padding;
        faceElement: JQuery;
        holderElement: JQuery;
        items: Collection<Item>;
        itemsElement: JQuery;
        sideItems: Collection<Item>;
        sideItemsElement: JQuery;
        itemsChanged: LatteEvent;
        sideItemsChanged: LatteEvent;
        constructor();
        private _onAddItem;
        private _onAddSideItem;
        private _onRemoveItem;
        private _onRemoveSideItem;
        onItemsChanged(): void;
        onSideItemsChanged(): void;
        direction: Direction;
        faceVisible: boolean;
        holderWide: number;
        padding: number;
    }
}
declare module latte {
    class TabToolbar extends Toolbar {
        private _selectedTab;
        private _contentSide;
        tabs: Collection<TabItem>;
        selectedTabChanged: LatteEvent;
        constructor();
        onSelectedTabChanged(): void;
        onTabAdded(tab: TabItem): void;
        onTabRemoved(tab: TabItem): void;
        contentSide: Side;
        selectedTab: TabItem;
    }
}
declare module latte {
    class ViewItem extends Item {
        private _autoHeight;
        private _view;
        constructor(view?: View);
        autoHeight: boolean;
        height: number;
        view: View;
    }
}
declare module latte {
    class LabelItem extends Item {
        private _iconAndTextPadding;
        private _direction;
        private _icon;
        private _linkStyle;
        private _preformatted;
        private _textWrap;
        private _title;
        contentElement: JQuery;
        descriptionElement: JQuery;
        iconElement: JQuery;
        textElement: JQuery;
        navigate: LatteEvent;
        descriptionChanged: LatteEvent;
        iconChanged: LatteEvent;
        constructor(text?: string, description?: string, icon?: IconItem, title?: number);
        private _updateWhitespace;
        updateIconAndTextFlag(): void;
        onDescriptionChanged(): void;
        onIconChanged(): void;
        onNavigate(): void;
        onTextChanged(): void;
        private _textChanged;
        readonly textChanged: LatteEvent;
        description: string;
        direction: Direction;
        icon: IconItem;
        iconAndTextPadding: number;
        linkStyle: boolean;
        preformatted: boolean;
        private _text;
        text: string;
        textWrap: boolean;
        title: number;
    }
}
declare module latte {
    class ColumnHeader extends LabelItem {
        mouseDownRect: ClientRect;
        mouseDownPoint: Point;
        bodyMouseMoveHandler: (e: MouseEvent) => any;
        bodyMouseUpHandler: (e: MouseEvent) => any;
        constructor(text?: string, width?: number);
        private resizer_MouseDown;
        private body_MouseUp;
        private body_MouseMove;
        onAutoResize(): any;
        onAutoResizeAll(): void;
        onSortableChanged(): any;
        onWidthChanged(): void;
        private _autoResize;
        readonly autoResize: LatteEvent;
        private _autoResizeAll;
        readonly autoResizeAll: LatteEvent;
        private _sortableChanged;
        readonly sortableChanged: LatteEvent;
        private _sortRequested;
        readonly sortRequested: LatteEvent;
        onSortRequested(): any;
        private _widthChanged;
        readonly widthChanged: LatteEvent;
        private _sortable;
        sortable: boolean;
        private _width;
        width: number;
        private _resizer;
        readonly resizer: HTMLDivElement;
    }
}
declare module latte {
    class CommentItem extends Item {
        private blinkerElement;
        private container;
        private _date;
        private _icon;
        private _relativeDate;
        private _text;
        private _user;
        commentSideElement: JQuery;
        dateElement: JQuery;
        iconSideElement: JQuery;
        textElement: JQuery;
        userElement: JQuery;
        userDetail: LatteEvent;
        constructor();
        blink(milliseconds?: number): void;
        onUserDetail(): void;
        date: DateTime;
        icon: IconItem;
        relativeDate: boolean;
        text: string;
        user: string;
    }
}
declare module latte {
    class DateTimeLabel extends LabelItem {
        private _relative;
        private _value;
        constructor(value?: any);
        private _updateText;
        relative: boolean;
        value: any;
    }
}
declare module latte {
    class NothingToShowLabelItem extends LabelItem {
        constructor(message?: string);
    }
}
declare module latte {
    class UiText extends UiElement {
        static ellipsis(text: string, length?: number): string;
        constructor(text?: string);
        text: string;
    }
}
declare module latte {
    class SelectableItem extends Item {
        static fromInnerItem(innerItem: Item, tag?: any): SelectableItem;
        private lastItem;
        constructor();
        private _thisClick;
        private _thisMouseDown;
        private _thisMouseOut;
        private _thisMouseOver;
        onInnerItemChanged(): void;
        onSelectedChanged(): void;
        setSelected(value?: boolean, raiseEvent?: boolean): void;
        private _innerItemChanged;
        readonly innerItemChanged: LatteEvent;
        private _selectedChanged;
        readonly selectedChanged: LatteEvent;
        private _innerItem;
        innerItem: Item;
        private _selected;
        selected: boolean;
    }
}
declare module latte {
    class SelectableLabel extends SelectableItem {
        label: LabelItem;
        constructor(text?: string, description?: string, icon?: IconItem, title?: number);
        toString(): string;
        description: string;
        icon: IconItem;
        text: string;
    }
}
declare module latte {
    class CalendarItem extends SelectableLabel {
        private _dateEnd;
        private _dateStart;
        _matrixDepth: number;
        matrixAttributes: any;
        rectangles: Collection<Rectangle>;
        constructor();
        private _onAddRectangle;
        private _onRemoveRectangle;
        clone(): CalendarItem;
        onSelectedChanged(): void;
        readonly allDay: boolean;
        dateEnd: DateTime;
        dateStart: DateTime;
        text: string;
    }
}
declare module latte {
    class ListViewItem extends SelectableItem {
        private _icon;
        private _iconPadding;
        private _text;
        private _columns;
        private _items;
        columnsElement: JQuery;
        iconElement: JQuery;
        activated: LatteEvent;
        constructor(listView?: ListView);
        addColumn(width?: number): ListViewItem;
        getColumn(index: number): JQuery;
        getColumnCount(): number;
        item(index: number, value?: Item): Item;
        onActivated(): void;
        onLayout(): void;
        onSelectedChanged(): void;
        setColumnWidth(index: number, width: number): void;
        getItem(index: number): Item;
        getText(index: number): string;
        setText(index: number, text: string): void;
        setItem(index: number, item: Item): void;
        text(index: number, value?: string): string;
        readonly columns: JQuery[];
        icon: IconItem;
        private _listView;
        listView: ListView;
    }
}
declare module latte {
    class CheckboxItem extends ValueItem<boolean> {
        static globalCheckedIconGetter: () => IconItem;
        static globalUncheckedIconGetter: () => IconItem;
        checkedIconGetter: () => IconItem;
        uncheckedIconGetter: () => IconItem;
        constructor();
        getIconForValue(value: boolean): IconItem;
        onValueChanged(): void;
        serialize(): string;
        unserialize(value: string): void;
        text: string;
        private _label;
        readonly label: LabelItem;
    }
}
declare module latte {
    class ColorValueItem extends ValueItem<string> {
        constructor(color?: Color);
        setValue(value: string): void;
        readonly value: string;
        onLayout(): void;
        private _colorPicker;
        readonly colorPicker: ColorPicker;
        private _button;
        readonly button: ButtonItem;
        private _color;
        color: Color;
        private _icon;
        readonly icon: ColorIconItem;
    }
}
declare module latte {
    class ComboItem extends ValueItem<any> {
        private _options;
        button: ButtonItem;
        constructor();
        onGetValueString(): string;
        onValueChanged(): void;
        options: any;
    }
}
declare module latte {
    class DatePickerItem extends ValueItem<DateTime> {
        private _dateButton;
        private lastDate;
        constructor();
        private zeroPad;
        onDateVisibleChanged(): void;
        onIsNullChanged(): void;
        onNullableChanged(): void;
        onTimeVisibleChanged(): void;
        onValueChanged(): void;
        private _dateVisibleChanged;
        readonly dateVisibleChanged: LatteEvent;
        private _isNullChanged;
        readonly isNullChanged: LatteEvent;
        private _nullableChanged;
        readonly nullableChanged: LatteEvent;
        private _timeVisibleChanged;
        readonly timeVisibleChanged: LatteEvent;
        private _dateVisible;
        dateVisible: boolean;
        readonly dateButton: ButtonItem;
        private _isNull;
        isNull: boolean;
        private _nullable;
        nullable: boolean;
        private _timeVisible;
        timeVisible: boolean;
        private _dateItem;
        readonly dateItem: DateItem;
        private _checkbox;
        readonly checkbox: CheckboxItem;
        private _hourCombo;
        readonly hourCombo: ComboItem;
        private _minuteCombo;
        readonly minuteCombo: ComboItem;
    }
}
declare module latte {
    class FileValueItem extends ValueItem<string> {
        fileInput: JQuery;
        constructor();
        getValue(): Array<File>;
        resetInput(): void;
        setValue(value: string, silently?: boolean): void;
    }
}
declare module latte {
    interface IFlags {
        [index: number]: string;
    }
    class FlagsValueItem extends ValueItem<number> {
        private ignoreUpdateChecks;
        private ignoreUpdateValue;
        constructor();
        private updateChecks;
        private updateValue;
        onGetValueString(): string;
        onOptionsChanged(): void;
        onValueChanged(): void;
        private _optionsChanged;
        readonly optionsChanged: LatteEvent;
        private _checks;
        readonly checks: Collection<CheckboxItem>;
        private _options;
        options: IFlags;
        private _stack;
        readonly stack: ItemStack;
    }
}
declare module latte {
    class HtmlEditorCommands {
        static BOLD: string;
        static CODE: string;
        static CLEAR_FORMAT: string;
        static FORMAT_BLOCK: string;
        static ITALIC: string;
        static SUPER_SCRIPT: string;
        static SUB_SCRIPT: string;
        static JUSTIFY_LEFT: string;
        static JUSTIFY_CENTER: string;
        static JUSTIFY_RIGHT: string;
        static JUSTIFY_FULL: string;
        static OUTDENT: string;
        static INDENT: string;
        static INSERT_HTML: string;
        static INSERT_IMAGE: string;
        static INSERT_LINK: string;
        static INSERT_ORDERED_LIST: string;
        static INSERT_UNORDERED_LIST: string;
        static INSERT_YOUTUBE: string;
        static UNDERLINE: string;
    }
}
declare module latte {
    class HtmlEditorItem extends ValueItem<string> {
        static clearFormattingOf(e: HTMLElement): void;
        static readonly rangyPath: string;
        static rangyLoaded: boolean;
        private _ready;
        private _valueHtml;
        iframe: JQuery;
        toolbar: Toolbar;
        constructor();
        private _addToolbarButtons;
        private _assignElementHandlers;
        private _canInit;
        _clearFormatting(): void;
        private _ensureNode;
        private _ensureReady;
        private _initEditor;
        private _insertHTML;
        private _insertImage;
        private _insertLink;
        private _insertYouTube;
        private _mustInit;
        body(): JQuery;
        document(): Document;
        execCommand(command: string, value?: any): void;
        getValue(): string;
        insertElement(element: any): JQuery;
        onImageSelected(image: JQuery): any;
        onLayout(): void;
        onSelectionChanged(): void;
        onValueChanged(): void;
        ready(): boolean;
        selectElement(element: any): JQuery;
        selectElementContents(element: any): JQuery;
        selectionEnd(): JQuery;
        selectionParents(selector?: string): JQuery;
        selectionStart(): JQuery;
        setValue(value: string): void;
        surroundSelectionWith(element: any): JQuery;
        private _selectionChanged;
        readonly selectionChanged: LatteEvent;
        private _imageSelected;
        readonly imageSelected: LatteEvent;
        readonly selection: RangySelection;
        readonly selectionRange: RangyRange;
        value: string;
        readonly window: any;
    }
}
declare module latte {
    class InputItem extends ValueItem<any> {
        static format(value: any, type: string, options?: any): string;
        static fromItem(text: string, item: ValueItem<any>): InputItem;
        static fromIInput(input: IInput, name?: string, value?: any): InputItem;
        static isEmptyValue(value: any): boolean;
        private _textWidth;
        private _lastValueItem;
        private _lastHintItem;
        label: LabelItem;
        readOnlyLabel: LabelValueItem;
        separatorElement: JQuery;
        textElement: JQuery;
        valueElement: JQuery;
        constructor(text?: string, type?: InputType, value?: any, readOnly?: boolean, name?: string);
        private updateReadonlyLabel;
        private valueItemFromType;
        getValueString(): string;
        isValid(): boolean;
        onLayout(): void;
        onMetaChanged(): void;
        onValueChanged(): void;
        onGetValueString(): string;
        onHintItemChanged(): void;
        onOptionsChanged(): void;
        onReadOnlyChanged(): void;
        onReadOnlyValueChanged(): void;
        onSeparatorChanged(): void;
        onTextChanged(): void;
        onTypeChanged(): void;
        onValidChanged(): void;
        onValueItemChanged(): void;
        setHint(hint: string): void;
        private _hintItemChanged;
        readonly hintItemChanged: LatteEvent;
        private _metaChanged;
        readonly metaChanged: LatteEvent;
        private _optionsChanged;
        readonly optionsChanged: LatteEvent;
        private _readOnlyChanged;
        readonly readOnlyChanged: LatteEvent;
        private _readOnlyValueChanged;
        readonly readOnlyValueChanged: LatteEvent;
        private _separatorChanged;
        readonly separatorChanged: LatteEvent;
        private _textChanged;
        readonly textChanged: LatteEvent;
        private _typeChanged;
        readonly typeChanged: LatteEvent;
        private _validChanged;
        readonly validChanged: LatteEvent;
        private _valueItemChanged;
        readonly valueItemChanged: LatteEvent;
        private _direction;
        direction: Direction;
        private _hintItem;
        hintItem: Item;
        private _meta;
        meta: IInput;
        private _name;
        name: string;
        private _options;
        options: any;
        private _readOnly;
        readOnly: boolean;
        private _readOnlyValue;
        readOnlyValue: string;
        private _separator;
        separator: boolean;
        private _text;
        text: string;
        textVisible: boolean;
        textWidth: number;
        private _type;
        type: InputType;
        value: any;
        private _valueItem;
        valueItem: ValueItem<any>;
        private _valid;
        valid: boolean;
    }
}
declare module latte {
    class LabelValueItem extends ValueItem<string> {
        label: LabelItem;
        constructor();
        onValueChanged(): void;
    }
}
declare module latte {
    class ProgressItem extends ValueItem<number> {
        private _maxValue;
        private _minValue;
        bar: JQuery;
        container: JQuery;
        constructor();
        getPercentage(): number;
        onLayout(animate?: boolean): void;
        onValueChanged(): void;
        private _animated;
        animated: boolean;
        maxValue: number;
        minValue: number;
    }
}
declare module latte {
    class RadioGroup extends ValueItem<string> {
        private _options;
        private _radios;
        private stack;
        constructor(options?: any);
        onGetValueString(): any;
        onValueChanged(): void;
        options: any;
        readonly radios: Collection<RadioItem>;
    }
}
declare module latte {
    class RadioItem extends ValueItem<boolean> {
        label: LabelItem;
        constructor(text?: string, value?: boolean);
        onValueChanged(): void;
        text: string;
    }
}
declare module latte {
    class SwitchItem extends ValueItem<boolean> {
        constructor();
        onGetValueString(): string;
        onValueChanged(): void;
        serialize(): string;
        unserialize(value: string): void;
        private _orb;
        readonly orb: HTMLElement;
    }
}
declare module latte {
    enum TextboxFilter {
        NONE = 0,
        NUMBER = 1,
        INTEGER = 2
    }
    class TextboxItem extends ValueItem<string> {
        private _inputContainer;
        private _invisible;
        private _minLenToSuggest;
        private selectedIndex;
        private _selectedSuggestion;
        private _loadingSuggestions;
        input: JQuery;
        ignorePassToTextbox: boolean;
        constructor();
        private _updateInput;
        hideSuggestions(): void;
        onAddSuggestion(item: Item): void;
        onEnterPressed(): void;
        onFilterSuggestions(): void;
        onKeyDown(e: JQueryEventObject): any;
        onKeyUp(e: JQueryEventObject): any;
        onKeyPress(e: any): any;
        onLayout(): void;
        onReadOnlyChanged(): void;
        onRemoveSuggestion(item: Item): void;
        onValidChanged(): any;
        onValueChanged(): void;
        selectFirstSuggestion(): void;
        selectNextSuggestion(): void;
        selectPreviousSuggestion(): void;
        selectSuggestion(index: number): void;
        setRelativeWidth(width: string): void;
        setSideAsCleaner(icon?: IconItem): void;
        setValueSilently(value: string): void;
        private _enterPressed;
        readonly enterPressed: LatteEvent;
        private _filterSuggestions;
        readonly filterSuggestions: LatteEvent;
        private _keyPress;
        readonly keyPress: LatteEvent;
        private _keyDown;
        readonly keyDown: LatteEvent;
        private _keyUp;
        readonly keyUp: LatteEvent;
        private _readOnlyChanged;
        readonly readOnlyChanged: LatteEvent;
        private _validChanged;
        readonly validChanged: LatteEvent;
        private _allowedKeys;
        allowedKeys: Key[];
        private _autoGrow;
        autoGrow: boolean;
        private _filter;
        filter: TextboxFilter;
        maxLength: number;
        private _maxLength;
        minHeight: number;
        minLengthToActivateSuggestions: number;
        private _minHeight;
        private _multiline;
        multiline: boolean;
        private _password;
        password: boolean;
        placeholder: string;
        private _readOnly;
        readOnly: boolean;
        private _suggestions;
        readonly suggestions: Collection<Item>;
        readonly suggestionsVisible: boolean;
        private _valid;
        valid: boolean;
        private _validationRegex;
        validationRegex: RegExp;
        width: number;
        private _placeholderLabel;
        readonly placeholderLabel: LabelItem;
        private _sideLabel;
        readonly sideLabel: LabelItem;
        private _suggestionOverlay;
        readonly suggestionOverlay: SuggestionOverlay;
    }
}
declare module latte {
    class TimePickerItem extends ValueItem<TimeSpan> {
        private ignorePassToCombos;
        constructor();
        private zeroPad;
        onValueChanged(): void;
        onGetValueString(): string;
        setHourSilently(hours: number): void;
        setMinuteSilently(minutes: number): void;
        setSecondSilently(seconds: number): void;
        setValueSilently(value: TimeSpan): void;
        private _hourCombo;
        readonly hourCombo: ComboItem;
        private _minuteCombo;
        readonly minuteCombo: ComboItem;
        private _secondCombo;
        readonly secondCombo: ComboItem;
    }
}
declare module latte {
    class Overlay extends UiElement {
        private _top;
        private _left;
        private _parent;
        constructor();
        private ensureOnTree;
        private onDismisserAdded;
        private onDismisserRemoved;
        protected setIsClosed(value: boolean): void;
        protected setIsShown(value: boolean): void;
        close(): void;
        setFirstInParent(parent: UiElement): void;
        onResultChanged(): void;
        onShown(): void;
        show(): void;
        showAt(left: number, top: number): void;
        showAtSide(side: Side, uielement: UiElement): void;
        showAtVieportCenter(): void;
        private _shown;
        readonly shown: LatteEvent;
        private _dismissers;
        readonly dismissers: Collection<OverlayDismisser>;
        private _isClosed;
        readonly isClosed: boolean;
        private _isShown;
        readonly isShown: boolean;
        left: number;
        parent: UiElement;
        private _resultChanged;
        readonly resultChanged: LatteEvent;
        private _result;
        result: any;
        top: number;
    }
}
declare module latte {
    class ItemOverlay extends Overlay {
        constructor(item: Item);
        private _item;
        item: Item;
        private _itemChanged;
        readonly itemChanged: LatteEvent;
        onItemChanged(): void;
    }
}
declare module latte {
    class Loader extends Overlay {
        private static _active;
        static separation: number;
        private static add;
        private static remove;
        private static update;
        private static updateLayout;
        private static updateModalVisibility;
        private static readonly maxWidth;
        private static readonly modalShouldBeVisible;
        private static modalVisible;
        private _cancellable;
        private _description;
        private _modal;
        cancelElement: JQuery;
        labelElement: JQuery;
        progress: ProgressItem;
        cancelled: LatteEvent;
        constructor(text?: string, modal?: boolean);
        onCancelled(): void;
        start(): void;
        stop(): void;
        cancellable: boolean;
        description: string;
        modal: boolean;
        text: string;
    }
}
declare module latte {
    class MenuOverlay extends Overlay {
        static closingAll: LatteEvent;
        static initialized: boolean;
        static _initialize(): void;
        static closeAll(): void;
        static mark(elem: JQuery, side?: Side): void;
        static onClosingAll(): void;
        private _domElement;
        private _edge;
        private _item;
        private _parentButton;
        private _side;
        items: Collection<Item>;
        closed: LatteEvent;
        willShowAtX: LatteEvent;
        willShowAtY: LatteEvent;
        constructor();
        private _onAddItem;
        private _onRemoveItem;
        close(): this;
        closeChildrenMenus(): this;
        onClosed(): void;
        onLayout(): void;
        onWillShowAtX(x: number): any;
        onWillShowAtY(y: number): any;
        setParentButton(b: ButtonItem): void;
        showByItem(item: Item, side: Side, edge: Side): MenuOverlay;
        showAt(x: number, y: number): void;
        readonly domElement: JQuery;
        readonly edge: Side;
        readonly item: Item;
        readonly side: Side;
    }
}
declare module latte {
    class OverlayDismisser {
        private lastOverlay;
        constructor();
        execute(): void;
        install(): void;
        onOverlayChanged(): void;
        uninstall(): void;
        private _overlayChanged;
        readonly overlayChanged: LatteEvent;
        private _overlay;
        overlay: Overlay;
    }
}
declare module latte {
    class OverlayClickDismisser extends OverlayDismisser {
        handler: any;
        constructor();
        install(): void;
        uninstall(): void;
    }
}
declare module latte {
    class OverlayEscDismisser extends OverlayDismisser {
        handler: any;
        constructor();
        install(): void;
        uninstall(): void;
    }
}
declare module latte {
    class SidebarOverlay extends Overlay {
        static DEFAULT_SIZE: number;
        static sideString(side: Side): string;
        lastSide: string;
        constructor(side?: Side, size?: number);
        onSideChanged(): void;
        onSizeChanged(): void;
        show(): void;
        close(): void;
        private _sideChanged;
        readonly sideChanged: LatteEvent;
        private _sizeChanged;
        readonly sizeChanged: LatteEvent;
        private _side;
        side: Side;
        private _size;
        size: number;
        private _btnClose;
        readonly btnClose: ButtonItem;
    }
}
declare module latte {
    class StackOverlay extends Overlay {
        stack: ItemStack;
        constructor();
        readonly items: Collection<Item>;
    }
}
declare module latte {
    class SuggestionOverlay extends StackOverlay {
        constructor();
    }
}
declare module latte {
    class RibbonView extends AnchorView {
        ribbon: Ribbon;
        constructor();
        onLayoutHIDDEN(): void;
    }
}
declare module latte {
    class TabView extends AnchorView {
        tabToolbar: TabToolbar;
        tabs: Collection<TabItem>;
        views: Collection<View>;
        selectedTabChanged: LatteEvent;
        constructor();
        onTabAdded(tab: TabItem): void;
        onTabRemoved(tab: TabItem): void;
        onSelectedTabChanged(): void;
        onAnchorTopChanged(): void;
        onAnchorRightChanged(): void;
        onAnchorBottomChanged(): void;
        onAnchorLeftChanged(): void;
        selectedTab: TabItem;
        private _tabsSide;
        tabsSide: Side;
    }
}
declare module latte {
    class CalendarDayView extends View {
        private _allDayOffset;
        private _allowItemCreate;
        private _columns;
        private _columnsGrid;
        private _columnsItems;
        private _content;
        private _daysGrid;
        private _daysItems;
        private _draggingHeaderSelection;
        private _draggingSelection;
        private _itemPadding;
        private _minuteSpan;
        private _scrollStart;
        private _selectionEnd;
        private _selectionStart;
        private _separator;
        private _timeIndicator;
        private _timeSpans;
        private _timeline;
        private _viewEnd;
        private _viewStart;
        private _workDayEnd;
        private _workDayStart;
        private _firstScroll;
        items: Collection<CalendarItem>;
        viewRangeChanged: LatteEvent;
        userAddItem: LatteEvent;
        userRemoveItem: LatteEvent;
        constructor();
        private _columnsMouseDown;
        private _columnsMouseLeave;
        private _columnsMouseMove;
        private _columnsMouseUp;
        private _createMatrix;
        private _createTopMatrix;
        private _dayColumn;
        private _daysGridMouseDown;
        private _daysGridMouseMove;
        private _daysGridMouseUp;
        private _keyDown;
        private _onAddItem;
        private _onHeadersZone;
        private _onRemoveItem;
        private _rectanglesFor;
        private _timeSpanHitTest;
        private _updateBoard;
        clearSelection(): void;
        createItemAtSelection(text?: string): CalendarItem;
        onLayout(): void;
        onLayoutItems(): void;
        onUserAddItem(item: CalendarItem): void;
        onUserRemoveItem(item: CalendarItem): void;
        onViewRangeChanged(): void;
        selectionOnHeader(): boolean;
        setSelectionRange(start: DateTime, end: DateTime): void;
        setViewRange(start: DateTime, end: DateTime): void;
        private _heightOf;
        private _timeSpanIndexOf;
        private _timeSpanOf;
        allowItemCreate: boolean;
        readonly viewEnd: DateTime;
        readonly viewStart: DateTime;
    }
}
declare module latte {
    class CalendarMonthView extends View {
        private _content;
        private _draggingSelection;
        private _itemItemHeight;
        private _itemItemTopStart;
        private _itemPadding;
        private _monthOnView;
        private _selectionEnd;
        private _selectionStart;
        private _viewEnd;
        private _viewStart;
        items: Collection<CalendarItem>;
        viewRangeChanged: LatteEvent;
        userAddItem: LatteEvent;
        userRemoveItem: LatteEvent;
        constructor();
        private _createBoard;
        private _createMatrix;
        private _dayElement;
        private _dayMouseDown;
        private _dayMouseMove;
        private _dayMouseUp;
        private _keyDown;
        private _onAddItem;
        private _onRemoveItem;
        private _rectanglesFor;
        private _weekRectangle;
        clearSelection(): void;
        createItemAtSelection(text?: string): CalendarItem;
        onLayout(): void;
        onLayoutItems(): void;
        onUserAddItem(item: CalendarItem): void;
        onUserRemoveItem(item: CalendarItem): void;
        onViewRangeChanged(): void;
        setSelectionRange(start: DateTime, end: DateTime): void;
        setViewRange(date: DateTime): void;
        monthOnView: DateTime;
        readonly viewEnd: DateTime;
        readonly viewStart: DateTime;
    }
}
declare module latte {
    class CalendarView extends SplitView {
        _controls: JQuery;
        buttonGroup: ButtonGroupItem;
        buttonNext: ButtonItem;
        buttonPrevious: ButtonItem;
        buttonToday: ButtonItem;
        dateView: DateView;
        dayView: CalendarDayView;
        monthView: CalendarMonthView;
        titleItem: LabelItem;
        selectionChanged: LatteEvent;
        userAddItem: LatteEvent;
        userRemoveItem: LatteEvent;
        viewRangeChanged: LatteEvent;
        constructor();
        goNext(): void;
        goPrevious(): void;
        goToday(): void;
        onLayout(): void;
        onSelectionChanged(): void;
        onUserAddItem(item: CalendarItem): void;
        onUserRemoveItem(item: CalendarItem): void;
        onViewRangeChanged(): void;
        workDayEnd(day: WeekDay, value?: TimeSpan): TimeSpan;
        workDayStart(day: WeekDay, value?: TimeSpan): TimeSpan;
        allowItemCreate: boolean;
        allowItemDrag: boolean;
        allowItemEdit: boolean;
        allowItemRemove: boolean;
        allowItemResize: boolean;
        dayEnd: TimeSpan;
        dayStart: TimeSpan;
        editMode: any;
        editModeItem: any;
        firstDayOfWeek: WeekDay;
        navigatorVisible: boolean;
        selectionEnd: DateTime;
        selectionMode: DateSelectionMode;
        selectionStart: DateTime;
        readonly viewEnd: DateTime;
        readonly viewStart: DateTime;
        workWeekEnd: WeekDay;
        workWeekStart: WeekDay;
    }
}
declare module latte {
    class DateView extends View {
        private _useWorkWeek;
        dateItem: DateItem;
        dayButton: ButtonItem;
        monthButton: ButtonItem;
        weekButton: ButtonItem;
        workWeekButton: ButtonItem;
        constructor();
        hideButtons(): void;
        onLayout(): void;
        onLayoutButtons(): void;
        showButtons(): void;
        updateSelectionMode(): void;
    }
}
declare module latte {
    class HtmlView extends View {
        constructor(html: any);
        append(element: JQuery): void;
        html: string;
    }
}
declare module latte {
    class ItemView extends View {
        private _item;
        constructor(item?: Item);
        onLayout(): void;
        item: Item;
    }
}
declare module latte {
    class MessageView extends View {
        private _icon;
        descriptionElement: JQuery;
        iconElement: JQuery;
        messageElement: JQuery;
        constructor();
        iconAlert(): MessageView;
        iconError(): MessageView;
        iconInfo(): MessageView;
        iconQuestion(): MessageView;
        description: string;
        icon: IconItem;
        message: string;
    }
}
declare module latte {
    class TextView extends View {
        textElement: JQuery;
        constructor();
        text: string;
    }
}
declare module latte {
    class ProgressDialogView extends DialogView {
        constructor();
        updateProgress(value: number, status?: string, max?: number, min?: number): void;
        private _columnView;
        readonly columnView: ColumnView;
        private _label;
        readonly label: LabelItem;
        private _progress;
        readonly progress: ProgressItem;
    }
}
declare module latte {
    class ListView extends View {
        private _selectedItem;
        columnHeaders: Collection<ColumnHeader>;
        columnHeadersElement: JQuery;
        items: Collection<ListViewItem>;
        constructor();
        selectNextItem(): void;
        selectPreviousItem(): void;
        informSelectedItem(item: ListViewItem): void;
        private _itemSelected;
        private _onAddColumn;
        private _onAddItem;
        private _onRemoveColumn;
        private _onRemoveItem;
        autoSizeAllColumns(): void;
        autoSizeColumn(index: number): void;
        private updateWidthOfColumn;
        onLayout(): void;
        sortByColumn(index: number): void;
        columnHeadersVisible: boolean;
        private _columnHeadersWidth;
        readonly columnHeadersWidth: number;
        selectedItem: ListViewItem;
        private _selectedItemChanged;
        readonly selectedItemChanged: LatteEvent;
        onSelectedItemChanged(): void;
    }
}
declare module latte {
    class NavigationView extends SplitView {
        tree: TreeView;
        treeToolbar: Toolbar;
        constructor();
    }
}
declare module latte {
    class NavigationListView extends NavigationView {
        list: ListView;
        toolbar: Toolbar;
        constructor();
    }
}
declare module latte {
    class TreeView extends View {
        private _defaultGlyphCollapse;
        private _defaultGlyphCollapseSelected;
        private _defaultGlyphExpand;
        private _defaultGlyphExpandSelected;
        private _navigating;
        private _navigatingCurrent;
        private _navigatingPath;
        private _selectedItem;
        private _addItem;
        private _removeItem;
        items: Collection<TreeItem>;
        itemSelected: LatteEvent;
        itemItemsLoaded: LatteEvent;
        constructor();
        informSelectedItem(item: TreeItem): void;
        private _navigateToSection;
        private onAddItem;
        private onRemoveItem;
        navigateToPath(path: Array<string>): void;
        onItemItemsLoaded(item: TreeItem): void;
        onItemSelected(item: TreeItem): void;
        readonly addItem: LatteEvent;
        defaultGlyphCollapse: Glyph;
        defaultGlyphCollapseSelected: Glyph;
        defaultGlyphExpand: Glyph;
        defaultGlyphExpandSelected: Glyph;
        readonly navigating: boolean;
        readonly path: any;
        selectedItem: TreeItem;
        readonly removeItem: LatteEvent;
    }
}
