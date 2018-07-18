import * as leftpad from 'left-pad';

const Time = {
    Minute: 60,
    Hour: 60 * 60,
    Day: 60 * 60 * 24,
    Week: 60 * 60 * 24 * 7
}


export const formatTimestamp = (timeStamp:number) => {
    let toDay = new Date();
    let now = toDay.getTime();
    // for micro seconds * 1000
    let time = new Date(timeStamp * 1000)
    const interval = now - timeStamp;
    // 大于一周的
    if (interval > Time.Week){
        if(time.getFullYear() != toDay.getFullYear()){
            return `${time.getFullYear()}年${time.getMonth()+1}月${time.getDay()+1}日`;
        }
        return `${time.getMonth()+1}月${time.getDay()+1}日`;
    }
    // 大于一天的
    if (interval > Time.Day){
        return `${interval/Time.Day}天前`
    }
    // 大于一小时的
    if (interval > Time.Hour){
        return `${interval/Time.Hour}小时前`
    }
    // 大于一分钟的
    if (interval > Time.Minute){
        return `${interval/Time.Minute}分钟前`
    }
    return `${interval}秒前`
}