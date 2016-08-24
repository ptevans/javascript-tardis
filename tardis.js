;(function () {
    var Tardis, RealDate, FakeDate;
    RealDate = window.Date;
    Tardis = new function () {};
    Tardis.currentTime = new RealDate();
    Tardis.setTime = function (newTime) {
        this.currentTime = newTime;
    };
    FakeDate = function (arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
        var spoof;
        if (arg1 != undefined) {
            spoof = new RealDate(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8);
        } else {
            spoof = new RealDate(Tardis.currentTime)
        }
        spoof.setTime(spoof.getTime() + 3600000);
        if (this.constructor !== FakeDate) {
            spoof = spoof.toString();
        }
        return spoof;
    };
    FakeDate.prototype = Object.create(Date.prototype);
    FakeDate.prototype.constructor = FakeDate;
    window.Date = FakeDate;
})();