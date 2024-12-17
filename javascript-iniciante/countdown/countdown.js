export class Countdown {
    constructor(futureDate) {
        this.futureDate = futureDate;
    }
    get _actualDate() {
        return new Date();
    }
    get _futureDate() {
        return new Date(this.futureDate);
    }
    get _timeStampDiff() {
        return this._futureDate.getTime() - this._actualDate.getTime();
    }
    get days(){
        return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000));
    }
    get hour(){
        return Math.floor(this._timeStampDiff / (60 * 60 * 1000));
    }
    get minute(){
        return Math.floor(this._timeStampDiff / (60 * 1000));
    }
    get second(){
        return Math.floor(this._timeStampDiff / 1000);
    }
    get total(){
        const days = this.days;
        const hour = this.hour % 24;
        const minute = this.minute % 60;
        const second = this.second % 60;
        return {
            days,
            hour,
            minute,
            second,
        }
    }
}

