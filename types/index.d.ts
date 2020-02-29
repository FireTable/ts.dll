import { Coordinate, DmRet, ErrorDisplay, FindDir, FindRet, GetWindowFlag, KeyState, OcrRet, Size, WindowState } from './types';
declare type DisplayType = 'normal' | 'gdi' | 'gdi2' | 'dx' | 'dx2' | 'dx3';
declare type MouseType = 'normal' | 'windows' | 'windows2' | 'windows3' | 'dx' | 'dx2';
declare type KeypadType = 'normal' | 'windows' | 'dx';
declare type FindPicDir = FindDir.LeftToRightAndTopToBottom | FindDir.LeftToRightAndBottomToTop | FindDir.RightToLeftAndTopToBottom | FindDir.RightToLeftAndBottomToTop;
declare function setMouseRange(): void;
declare function setMouseRange(x1: number, y1: number, x2: number, y2: number): void;
declare const _default: {
    dll: any;
    getPath(): string;
    setPath(path: string): DmRet;
    setErrorDisplay(flag: ErrorDisplay): DmRet;
    getCursorPos(): Coordinate;
    getKeyState(keyCode: number): KeyState;
    setMouseRange: typeof setMouseRange;
    moveTo(x: number, y: number): DmRet;
    leftClick(): DmRet;
    leftDoubleClick(): DmRet;
    leftDown(): DmRet;
    leftUp(): DmRet;
    rightClick(): DmRet;
    rightDown(): DmRet;
    rightUp(): DmRet;
    wheelDown(): DmRet;
    wheelUp(): DmRet;
    keyPress(keyCode: number): DmRet;
    keyDown(keyCode: number): DmRet;
    keyUp(keyCode: number): DmRet;
    findWindow(className: string, title: string, parentHWnd?: number | undefined): number | undefined;
    enumWindow(className: string, title: string, filter: number, parentHWnd?: number): number[];
    getWindow(hWnd: number, flag: GetWindowFlag): number;
    getPointWindow(x: number, y: number): number;
    getClientSize(hWnd: number): Size | undefined;
    moveWindow(hWnd: number, x: number, y: number): DmRet;
    setWindowSize(hWnd: number, width: number, height: number): DmRet;
    setWindowState(hWnd: number, state: WindowState): DmRet;
    sendPaste(hWnd: number): DmRet;
    sendString(hWnd: number, content: string): DmRet;
    bindWindow(hWnd: number, display: DisplayType, mouse: MouseType, keypad: KeypadType, mode: 0 | 2 | 4): DmRet;
    unBindWindow(): DmRet;
    capture(x1: number, y1: number, x2: number, y2: number, fileName: string): any;
    findPic(x1: number, y1: number, x2: number, y2: number, picName: string, deltaColor: string, sim: number, dir: FindPicDir): FindRet | undefined;
    findPicEx(x1: number, y1: number, x2: number, y2: number, picName: string, deltaColor: string, sim: number, dir: FindPicDir): FindRet[];
    getColor(x: number, y: number): string;
    getColorNum(x1: number, y1: number, x2: number, y2: number, color: string, sim: number): number;
    getAveRGB(x1: number, y1: number, x2: number, y2: number): string;
    findColor(x1: number, y1: number, x2: number, y2: number, color: string, sim: number, dir: FindDir): Coordinate | undefined;
    getNowDict(): number;
    setDict(index: number, file: string): DmRet;
    findStr(x1: number, y1: number, x2: number, y2: number, str: string, colorFormat: string, sim: number): FindRet | undefined;
    ocr(x1: number, y1: number, x2: number, y2: number, colorFormat: string, sim: number): string;
    getWords(x1: number, y1: number, x2: number, y2: number, colorFormat: string, sim: number): OcrRet | undefined;
    getScreenSize(): Size;
};
export = _default;